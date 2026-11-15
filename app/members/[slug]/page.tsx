import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Monogram from "@/components/Monogram";
import { albumsFor, getMember, members } from "@/lib/data";

export const generateStaticParams = () => members.map((m) => ({ slug: m.slug }));

export async function generateMetadata(props: PageProps<"/members/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: getMember(slug)?.name };
}

export default async function MemberPage(props: PageProps<"/members/[slug]">) {
  const { slug } = await props.params;
  const m = getMember(slug);
  if (!m) notFound();
  return (
    <article>
      <div className="grid items-end gap-8 md:grid-cols-[260px_1fr]">
        {m.photo ? (
          <div className="relative aspect-[3/4] overflow-hidden border border-line shadow-[0_20px_60px_-15px_rgba(255,255,255,.18)]">
            <Image src={m.photo} alt={m.name} fill priority sizes="260px" className="object-cover object-top" />
          </div>
        ) : (
          <Monogram name={m.name} index={members.indexOf(m)} size="h-40 w-40" />
        )}
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-parade">{m.role} · {m.years}</p>
          <h1 className="font-display text-5xl md:text-6xl">{m.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{m.bio}</p>
        </div>
      </div>
      {albumsFor(m.slug).length > 0 && (
        <section className="mt-16">
          <h2 className="mb-4 font-display text-3xl">Appears on</h2>
          <div className="flex flex-wrap gap-4">
            {albumsFor(m.slug).map((a) => (
              <Link key={a.slug} href={`/albums/${a.slug}`} className="group w-36">
                <div className="relative aspect-square overflow-hidden border border-line transition-colors group-hover:border-parade">
                  <Image src={a.cover} alt={`${a.title} cover`} fill sizes="144px" className="object-cover" />
                </div>
                <p className="mt-2 text-xs text-muted group-hover:text-parade group-hover:underline underline-offset-4">{a.year}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
