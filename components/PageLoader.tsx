"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 500; // minimum time the loader stays up, so the fill is visible
const INITIAL_MIN_MS = 800;
const HOLD_MS = 220; // pause at 100% before fading out

const now = () => Date.now();

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // true on first paint = initial load screen
  const [progress, setProgress] = useState(0);

  const p = useRef(0);
  const phase = useRef<"idle" | "loading" | "finishing">("loading");
  const startedAt = useRef(0);
  const raf = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const first = useRef(true);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  };
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const tick = () => {
    if (phase.current === "loading") {
      p.current += (90 - p.current) * 0.05; // ease toward 90%, never reaching it
    } else if (phase.current === "finishing") {
      p.current += (100 - p.current) * 0.28;
      if (p.current > 99.5) {
        p.current = 100;
        setProgress(100);
        phase.current = "idle";
        later(() => setVisible(false), HOLD_MS);
        return;
      }
    }
    setProgress(p.current);
    if (phase.current !== "idle") raf.current = requestAnimationFrame(tick);
  };

  const start = () => {
    clearTimers();
    cancelAnimationFrame(raf.current);
    p.current = 0;
    startedAt.current = now();
    phase.current = "loading";
    setProgress(0);
    setVisible(true);
    raf.current = requestAnimationFrame(tick);
    later(finish, 8000); // safety net if a navigation never completes
  };

  const finish = (min = MIN_MS) => {
    if (phase.current !== "loading") return;
    const wait = Math.max(0, min - (now() - startedAt.current));
    later(() => {
      if (phase.current !== "loading") return;
      phase.current = "finishing";
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(tick);
    }, wait);
  };

  // Initial page load: finish once the page has loaded (and the minimum time has passed)
  useEffect(() => {
    startedAt.current = now();
    raf.current = requestAnimationFrame(tick);
    if (document.readyState === "complete") finish(INITIAL_MIN_MS);
    else window.addEventListener("load", () => finish(INITIAL_MIN_MS), { once: true });
    later(() => finish(0), 8000);
    return () => {
      cancelAnimationFrame(raf.current);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Route changed: complete the fill
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Link clicked: start a new load
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      start();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pct = Math.round(progress);
  return (
    <div
      className={`page-loader fixed inset-0 z-[80] flex flex-col items-center justify-center gap-5 bg-black transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!visible}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label="Loading"
    >
      <div className="relative h-24 w-[5.2rem]">
        {/* dim spider underneath */}
        <Image src="/spider.png" alt="" width={88} height={102} priority className="absolute inset-0 h-full w-full object-contain opacity-20" />
        {/* white spider revealed from the bottom up */}
        <Image
          src="/spider.png"
          alt=""
          width={88}
          height={102}
          priority
          className="absolute inset-0 h-full w-full object-contain"
          style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
        />
      </div>
      <span className="font-mono text-xs tabular-nums tracking-widest text-muted">{pct}%</span>
    </div>
  );
}
