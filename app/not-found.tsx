import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-10 py-10 text-center md:flex-row md:justify-center md:gap-16 md:text-left">
      <Image
        src="/mascot404.png"
        alt=""
        width={419}
        height={687}
        priority
        className="h-auto w-44 drop-shadow-[0_0_2px_rgba(255,255,255,.7)] md:w-56"
      />
      <div>
        <p className="mb-2 text-xs uppercase tracking-widest text-parade">Error 404</p>
        <h1 className="font-display text-6xl leading-none md:text-8xl">Page not found</h1>
        <p className="mt-6 max-w-md text-muted">That page doesn&apos;t exist, or it moved. Head back and try again.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <Link href="/" className="bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-black hover:bg-white">Home</Link>
          <Link href="/search" className="border border-line px-6 py-3 text-sm uppercase tracking-widest hover:border-parade">Search</Link>
        </div>
      </div>
    </div>
  );
}
