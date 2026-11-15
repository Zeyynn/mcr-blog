import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import SearchBox, { type Entry } from "@/components/SearchBox";
import { albums, members } from "@/lib/data";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Search" };

export default function Search() {
  const entries: Entry[] = [
    ...albums.map((a) => ({ title: a.title, type: "Album", href: `/albums/${a.slug}`, extra: String(a.year) })),
    ...members.map((m) => ({ title: m.name, type: "Member", href: `/members/${m.slug}`, extra: m.role })),
    ...albums.flatMap((a) => a.tracks.map((t) => ({ title: t, type: "Track", href: `/albums/${a.slug}`, extra: a.title }))),
    ...getPosts().map((p) => ({ title: p.title, type: "Post", href: `/blog/${p.slug}`, extra: p.tags.join(" ") })),
  ];
  return (
    <>
      <PageTitle eyebrow="Find" title="Search" />
      <SearchBox entries={entries} />
    </>
  );
}
