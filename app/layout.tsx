import type { Metadata } from "next";
import { Geist, Pirata_One } from "next/font/google";
import Link from "next/link";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const pirata = Pirata_One({ variable: "--font-pirata", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: { default: "The Black Parade Wiki", template: "%s · The Black Parade Wiki" },
  description: "A fan-made My Chemical Romance wiki and blog: albums, members and more.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${pirata.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="relative border-b border-line">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-display text-2xl tracking-wide">
              The Black Parade <span className="text-parade">Wiki</span>
            </Link>
            <Nav />
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
        <footer className="border-t border-line py-8 text-center text-xs text-muted">
          Fan-made, unofficial. Not affiliated with My Chemical Romance. Long live the Black Parade.
        </footer>
      </body>
    </html>
  );
}
