import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <PageTitle eyebrow={`${m.role} · ${m.years}`} title={m.name} />
      <p className="max-w-2xl text-lg leading-relaxed text-[#d6d2cb]">{m.bio}</p>
    </article>
  );
}
