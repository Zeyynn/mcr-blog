import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import { albums, getAlbum, getEra } from "@/lib/data";

export const generateStaticParams = () => albums.map((a) => ({ slug: a.slug }));

export async function generateMetadata(props: PageProps<"/albums/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: getAlbum(slug)?.title };
}

export default async function AlbumPage(props: PageProps<"/albums/[slug]">) {
  const { slug } = await props.params;
  const album = getAlbum(slug);
  if (!album) notFound();
  const era = getEra(album.era);
  return (
    <article>
      <PageTitle eyebrow={`${album.year} · ${album.label}`} title={album.title} sub={album.blurb} />
      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="mb-4 font-display text-3xl">{album.partialTracks ? "Key tracks" : "Tracklist"}</h2>
          <ol className="list-decimal space-y-2 pl-6 marker:text-parade">
            {album.tracks.map((t) => <li key={t}>{t}</li>)}
          </ol>
        </section>
        <section>
          <h2 className="mb-4 font-display text-3xl">Notes</h2>
          <ul className="list-square space-y-3 pl-5 text-muted marker:text-parade" style={{ listStyleType: "square" }}>
            {album.notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
          {era && (
            <p className="mt-8 text-sm">
              Era: <Link className="text-parade underline" href={`/eras/${era.slug}`}>{era.name}</Link>
            </p>
          )}
        </section>
      </div>
    </article>
  );
}
