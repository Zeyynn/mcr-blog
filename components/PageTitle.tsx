export default function PageTitle({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 border-b border-line pb-8">
      {eyebrow && <p className="mb-2 text-xs uppercase tracking-widest text-parade">{eyebrow}</p>}
      <h1 className="font-display text-5xl leading-tight md:text-6xl">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-muted">{sub}</p>}
    </div>
  );
}
