"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Albums", "/albums"],
  ["Members", "/members"],
  ["Timeline", "/timeline"],
  ["Blog", "/blog"],
  ["Search", "/search"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="hidden gap-5 text-sm uppercase tracking-widest md:flex">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className="text-muted transition-colors hover:text-parade hover:underline underline-offset-4">{label}</Link>
        ))}
      </nav>
      <button
        className="border border-line px-3 py-2 text-xs uppercase tracking-widest md:hidden"
        aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav className="absolute left-0 right-0 top-full z-40 flex flex-col border-b border-line bg-background px-6 py-4 md:hidden">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="py-3 text-sm uppercase tracking-widest text-muted hover:text-parade hover:underline underline-offset-4">{label}</Link>
          ))}
        </nav>
      )}
    </>
  );
}
