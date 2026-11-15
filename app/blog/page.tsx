import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { getPosts, postImage } from "@/lib/posts";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <>
      <PageTitle eyebrow="Journal" title="Blog" sub="Longer thoughts on the band, the records and the fandom." />
      <div className="grid gap-4">
        {getPosts().map((p) => (
          <Card key={p.slug} href={`/blog/${p.slug}`} eyebrow={`${p.date} · ${p.tags.join(", ")}`} title={p.title} image={postImage(p.tags)}>
            {p.excerpt}
          </Card>
        ))}
      </div>
    </>
  );
}
