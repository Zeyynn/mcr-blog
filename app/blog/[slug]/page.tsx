import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <PageTitle eyebrow={`${post.date} · ${post.tags.join(", ")}`} title={post.title} />
      <div className="prose-parade">
        <Markdown>{post.body}</Markdown>
      </div>
    </article>
  );
}
