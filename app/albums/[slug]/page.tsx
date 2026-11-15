import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import { albums, getAlbum } from "@/lib/data";

export const generateStaticParams = () => albums.map((a) => ({ slug: a.slug }));

export async function generateMetadata(props: PageProps<"/albums/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: getAlbum(slug)?.title };
}

export default async function AlbumPage(props: PageProps<"/albums/[slug]">) {
  const { slug } = await props.params;
  const album = getAlbum(slug);
  if (!album) notFound();
  return (
    <article>
      <div className="mb-12 grid items-center gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-square overflow-hidden border border-line shadow-[0_20px_60px_-15px_rgba(179,18,28,.5)]">
          <Image src={album.cover} alt={`${album.title} cover`} fill priority sizes="280px" className="object-cover" />
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-parade">{album.year} · {album.label}</p>
          <h1 className="font-display text-5xl leading-tight md:text-6xl">{album.title}</h1>
          <p className="mt-4 max-w-xl text-muted">{album.blurb}</p>
        </div>
      </div>
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
        </section>
      </div>
    </article>
  );
}
