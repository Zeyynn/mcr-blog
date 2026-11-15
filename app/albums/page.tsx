import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { otherAlbums, studioAlbums, yearOf } from "@/lib/data";

export const metadata: Metadata = { title: "Albums" };

export default function Albums() {
  return (
    <>
      <PageTitle eyebrow="Discography" title="Albums" sub="Studio albums and other releases." />
      {[
        ["Studio albums", studioAlbums()],
        ["Other releases", otherAlbums()],
      ].map(([heading, list]) => (
        <section key={heading as string} className="mb-14">
          <h2 className="mb-6 font-display text-3xl">{heading as string}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(list as ReturnType<typeof studioAlbums>).map((a) => (
              <Card key={a.slug} href={`/albums/${a.slug}`} eyebrow={`${yearOf(a)} · ${a.kind}`} title={a.title} image={{ src: a.cover, alt: `${a.title} cover` }}>
                {a.blurb}
              </Card>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
