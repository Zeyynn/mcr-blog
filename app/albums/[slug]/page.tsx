import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import YouTube from "@/components/YouTube";
import Monogram from "@/components/Monogram";
import { albums, getAlbum, getMember, members } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export const generateStaticParams = () => albums.map((a) => ({ slug: a.slug }));

export async function generateMetadata(props: PageProps<"/albums/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: getAlbum(slug)?.title };
}

export default async function AlbumPage(props: PageProps<"/albums/[slug]">) {
  const { slug } = await props.params;
  const album = getAlbum(slug);
  if (!album) notFound();
  const i = albums.indexOf(album);
  const prev = albums[i - 1];
  const next = albums[i + 1];
  const posts = getPosts().filter((p) => p.tags.includes(album.tag));
  const facts: [string, string][] = [
    ["Released", album.released],
    ["Label", album.label],
    ["Producer", album.producer],
    ["Genre", album.genres],
    ["Tracks", `${album.tracks.length}${album.partialTracks ? "+" : ""}`],
  ];
  return (
    <article className="space-y-16">
      <div className="grid items-center gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-square overflow-hidden border border-line shadow-[0_20px_60px_-15px_rgba(255,255,255,.18)]">
          <Image src={album.cover} alt={`${album.title} cover`} fill priority sizes="280px" className="object-cover" />
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-widest text-parade">{album.year} · {album.label}</p>
          <h1 className="font-display text-5xl leading-tight md:text-6xl">{album.title}</h1>
          <p className="mt-4 max-w-xl text-muted">{album.blurb}</p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-5">
        {facts.map(([k, v]) => (
          <div key={k} className="bg-panel p-4">
            <dt className="text-xs uppercase tracking-widest text-parade">{k}</dt>
            <dd className="mt-1 text-sm">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <h2 className="mb-4 font-display text-3xl">{album.partialTracks ? "Key tracks" : "Tracklist"}</h2>
          <ol className="list-decimal space-y-2 pl-6 marker:text-parade">
            {album.tracks.map((t) => (
              <li key={t} className={album.singles.includes(t) ? "text-foreground" : "text-white/85"}>
                {t}
                {album.singles.includes(t) && <span className="ml-2 border border-parade px-1.5 py-0.5 align-middle text-[10px] uppercase tracking-widest text-parade">Single</span>}
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="mb-4 font-display text-3xl">Notes</h2>
          <ul className="space-y-3 pl-5 text-muted marker:text-parade" style={{ listStyleType: "square" }}>
            {album.notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </section>
      </div>

      <section>
        <h2 className="mb-4 font-display text-3xl">Lineup</h2>
        <div className="flex flex-wrap gap-6">
          {album.lineup.map((ms, idx) => {
            const m = getMember(ms)!;
            return (
              <Link key={ms} href={`/members/${ms}`} className="group flex items-center gap-3">
                <Monogram name={m.name} index={members.indexOf(m)} photo={m.photo} size="h-14 w-14" />
                <span>
                  <span className="block group-hover:text-parade group-hover:underline underline-offset-4">{m.name}</span>
                  <span className="block text-xs text-muted">{m.role}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {album.videos && album.videos.length > 0 && (
        <section>
          <h2 className="mb-2 font-display text-3xl">Videos</h2>
          <div className="grid gap-x-8 md:grid-cols-2">
            {album.videos.map((v) => <YouTube key={v.id} id={v.id} title={v.title} />)}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section>
          <h2 className="mb-4 font-display text-3xl">From the blog</h2>
          <ul className="space-y-2">
            {posts.map((p) => (
              <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-parade underline">{p.title}</Link></li>
            ))}
          </ul>
        </section>
      )}

      <nav className="flex justify-between border-t border-line pt-6 text-sm">
        {prev ? <Link href={`/albums/${prev.slug}`} className="hover:text-parade hover:underline underline-offset-4">← {prev.title}</Link> : <span />}
        {next ? <Link href={`/albums/${next.slug}`} className="text-right hover:text-parade hover:underline underline-offset-4">{next.title} →</Link> : <span />}
      </nav>
    </article>
  );
}
