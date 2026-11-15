import Link from "next/link";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { albums } from "@/lib/data";
import { getPosts, postImage } from "@/lib/posts";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  return (
    <>
    <Hero />
    <div className="space-y-20">
      <div className="-mt-6 flex justify-center gap-4">
        <Link href="/albums" className="bg-foreground px-6 py-3 text-sm uppercase tracking-widest text-black hover:bg-white">Explore albums</Link>
        <Link href="/blog" className="border border-line px-6 py-3 text-sm uppercase tracking-widest hover:border-parade">Read the blog</Link>
      </div>
      <section>
        <h2 className="mb-6 font-display text-3xl">Discography</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {albums.map((a) => (
            <Card key={a.slug} href={`/albums/${a.slug}`} eyebrow={String(a.year)} title={a.title} image={{ src: a.cover, alt: `${a.title} cover` }}>
              {a.blurb}
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-display text-3xl">Latest from the blog</h2>
        <div className="grid gap-4">
          {posts.map((p) => (
            <Card key={p.slug} href={`/blog/${p.slug}`} eyebrow={`${p.date} · ${p.minutes} min read`} title={p.title} image={postImage(p.tags)}>
              {p.excerpt}
            </Card>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
