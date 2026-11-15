import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { getPosts, postImage } from "@/lib/posts";

const allTags = () => [...new Set(getPosts().flatMap((p) => p.tags))];

export const generateStaticParams = () => allTags().map((tag) => ({ tag }));

export async function generateMetadata(props: PageProps<"/blog/tag/[tag]">): Promise<Metadata> {
  const { tag } = await props.params;
  return { title: `#${tag}` };
}

export default async function TagPage(props: PageProps<"/blog/tag/[tag]">) {
  const { tag } = await props.params;
  const posts = getPosts().filter((p) => p.tags.includes(tag));
  if (!posts.length) notFound();
  return (
    <>
      <PageTitle eyebrow="Tag" title={`#${tag}`} />
      <div className="grid gap-4">
        {posts.map((p) => (
          <Card key={p.slug} href={`/blog/${p.slug}`} eyebrow={`${p.date} · ${p.minutes} min read`} title={p.title} image={postImage(p.tags)}>
            {p.excerpt}
          </Card>
        ))}
      </div>
      <p className="mt-8 text-sm"><Link href="/blog" className="text-parade underline">← All posts</Link></p>
    </>
  );
}
