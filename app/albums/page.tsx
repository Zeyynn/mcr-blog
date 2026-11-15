import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { albums } from "@/lib/data";

export const metadata: Metadata = { title: "Albums" };

export default function Albums() {
  return (
    <>
      <PageTitle eyebrow="Discography" title="Albums" sub="Four studio records, four worlds." />
      <div className="grid gap-4 sm:grid-cols-2">
        {albums.map((a) => (
          <Card key={a.slug} href={`/albums/${a.slug}`} eyebrow={`${a.year} · ${a.label}`} title={a.title} image={{ src: a.cover, alt: `${a.title} cover` }}>
            {a.blurb}
          </Card>
        ))}
      </div>
    </>
  );
}
