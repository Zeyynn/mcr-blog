import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { albums } from "./data";

const dir = path.join(process.cwd(), "content/posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
};

export function getPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: String(data.title),
        date: new Date(data.date).toISOString().slice(0, 10),
        excerpt: String(data.excerpt ?? ""),
        tags: (data.tags as string[]) ?? [],
        body: content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export function postImage(tags: string[]) {
  const a = albums.find((x) => tags.includes(x.tag));
  return a ? { src: a.cover, alt: `${a.title} cover`, ratio: "aspect-[16/9]" } : undefined;
}
