import Link from "next/link";
import Card from "@/components/Card";
import { albums, eras } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <div className="space-y-20">
      <section className="py-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-parade">Fan-made wiki &amp; blog</p>
        <h1 className="font-display text-6xl leading-none md:text-8xl">
          Welcome to the <span className="text-parade">Parade</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-muted">
          Everything My Chemical Romance: records, members, eras and the stories behind them.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/albums" className="bg-parade px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-red-700">
            Explore albums
          </Link>
          <Link href="/blog" className="border border-line px-6 py-3 text-sm uppercase tracking-widest hover:border-parade">
            Read the blog
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-display text-3xl">Discography</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {albums.map((a) => (
            <Card key={a.slug} href={`/albums/${a.slug}`} eyebrow={String(a.year)} title={a.title}>
              {a.blurb}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-display text-3xl">Eras</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {eras.slice(0, 3).map((e) => (
            <Card key={e.slug} href={`/eras/${e.slug}`} eyebrow={e.years} title={e.name}>
              {e.summary}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-display text-3xl">Latest from the blog</h2>
        <div className="grid gap-4">
          {posts.map((p) => (
            <Card key={p.slug} href={`/blog/${p.slug}`} eyebrow={p.date} title={p.title}>
              {p.excerpt}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
