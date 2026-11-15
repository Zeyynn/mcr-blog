import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import PageTitle from "@/components/PageTitle";
import { getPost, getPosts } from "@/lib/posts";

export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getPost(slug);
  return { title: p?.title, description: p?.excerpt };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-2xl">
      <PageTitle eyebrow={`${post.date} · ${post.minutes} min read`} title={post.title} />
      <div className="prose-parade">
        <Markdown>{post.body}</Markdown>
      </div>
      <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
        {post.tags.map((t) => (
          <Link key={t} href={`/blog/tag/${t}`} className="border border-line px-3 py-1 text-xs uppercase tracking-widest text-muted hover:border-parade hover:text-parade hover:underline underline-offset-4">#{t}</Link>
        ))}
      </div>
    </article>
  );
}
