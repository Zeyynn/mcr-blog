"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_MS = 450; // keep the spider on screen long enough to register
const INITIAL_MS = 700;

export default function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true); // true on first paint = initial load screen
  const started = useRef(0);
  const first = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const hideAfter = (ms: number) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), ms);
  };

  // Initial load
  useEffect(() => {
    started.current = Date.now();
    hideAfter(INITIAL_MS);
    return () => clearTimeout(timer.current);
  }, []);

  // Route changed: finish the loading screen
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    hideAfter(Math.max(0, MIN_MS - (Date.now() - started.current)));
  }, [pathname]);

  // Link clicked: start the loading screen
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;
      started.current = Date.now();
      clearTimeout(timer.current);
      setVisible(true);
      // safety net in case the navigation never completes
      timer.current = setTimeout(() => setVisible(false), 8000);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <div
      className={`page-loader fixed inset-0 z-[80] flex items-center justify-center bg-black transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!visible}
      role="status"
    >
      <Image src="/spider.png" alt="Loading" width={88} height={102} priority className="spider-pulse h-auto w-20" />
    </div>
  );
}
