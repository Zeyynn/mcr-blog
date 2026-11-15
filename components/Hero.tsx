"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const img = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = Math.min(window.scrollY, 900);
      if (img.current) img.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y / 4000})`;
      if (title.current) {
        title.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
        title.current.style.opacity = String(Math.max(0, 1 - y / 450));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative -mx-6 -mt-12 mb-16 h-[26rem] overflow-hidden border-b border-line md:h-[36rem]">
      <div ref={img} className="absolute inset-0 will-change-transform">
        <Image src="/hero.jpg" alt="" fill priority sizes="100vw" className="no-filter object-cover object-[50%_65%]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div ref={title} className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-10 text-center will-change-transform md:pt-14">
        <p className="hero-in mb-3 text-xs uppercase tracking-[0.4em] text-parade" style={{ animationDelay: "100ms" }}>Fan-made wiki &amp; blog</p>
        <h1 className="hero-in font-display text-5xl leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,.9)] md:text-8xl" style={{ animationDelay: "250ms" }}>
          <span className="text-white">Welcome to the</span> <span className="text-white">Parade</span>
        </h1>
      </div>
    </div>
  );
}
