import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { members } from "@/lib/data";

export const metadata: Metadata = { title: "Members" };

export default function Members() {
  return (
    <>
      <PageTitle eyebrow="The band" title="Members" sub="Current and former members." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m, i) => (
          <Card key={m.slug} href={`/members/${m.slug}`} eyebrow={m.role} title={m.name} image={m.photo ? { src: m.photo, alt: m.name, ratio: "aspect-[3/4]", top: true, sizes: "(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" } : undefined} monogram={m.photo ? undefined : { name: m.name, index: i }}>
            {m.years}
          </Card>
        ))}
      </div>
    </>
  );
}
