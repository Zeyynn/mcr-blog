"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

export type Entry = { title: string; type: string; href: string; extra?: string };

export default function SearchBox({ entries }: { entries: Entry[] }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return entries.filter((e) => `${e.title} ${e.extra ?? ""}`.toLowerCase().includes(t)).slice(0, 40);
  }, [q, entries]);
  return (
    <div>
      <input
        autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tracks, albums, members, posts…"
        className="w-full border border-line bg-panel px-5 py-4 text-lg outline-none focus:border-parade"
      />
      <ul className="mt-6 divide-y divide-line border border-line">
        {results.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="flex items-baseline justify-between gap-4 px-5 py-3 hover:bg-panel">
              <span>{r.title}</span>
              <span className="text-xs uppercase tracking-widest text-parade">{r.type}</span>
            </Link>
          </li>
        ))}
        {q && results.length === 0 && <li className="px-5 py-3 text-muted">Nothing found.</li>}
      </ul>
    </div>
  );
}
