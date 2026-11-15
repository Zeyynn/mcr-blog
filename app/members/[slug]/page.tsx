import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Monogram from "@/components/Monogram";
import PageTitle from "@/components/PageTitle";
import { getMember, members } from "@/lib/data";

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
          <div className="relative aspect-[3/4] overflow-hidden border border-line shadow-[0_20px_60px_-15px_rgba(179,18,28,.5)]">
            <Image src={m.photo} alt={m.name} fill priority sizes="260px" className="object-cover object-top" />
          </div>
        ) : (
          <Monogram name={m.name} index={members.indexOf(m)} size="h-40 w-40" />
        )}
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-parade">{m.role} · {m.years}</p>
          <h1 className="font-display text-5xl md:text-6xl">{m.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#d6d2cb]">{m.bio}</p>
        </div>
      </div>
    </article>
  );
}
