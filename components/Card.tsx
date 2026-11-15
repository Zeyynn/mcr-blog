import Link from "next/link";

export default function Card({
  href, eyebrow, title, children,
}: { href: string; eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group block border border-line bg-panel p-6 transition-colors hover:border-parade"
    >
      {eyebrow && <p className="mb-2 text-xs uppercase tracking-widest text-parade">{eyebrow}</p>}
      <h3 className="font-display text-2xl leading-tight group-hover:text-parade">{title}</h3>
      {children && <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>}
    </Link>
  );
}
