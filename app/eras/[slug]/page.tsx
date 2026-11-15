import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import { eras, getAlbum, getEra } from "@/lib/data";

export const generateStaticParams = () => eras.map((e) => ({ slug: e.slug }));

export async function generateMetadata(props: PageProps<"/eras/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: getEra(slug)?.name };
}

export default async function EraPage(props: PageProps<"/eras/[slug]">) {
  const { slug } = await props.params;
  const era = getEra(slug);
  if (!era) notFound();
  const album = getAlbum(era.albumSlug);
  return (
    <article>
      <PageTitle eyebrow={era.years} title={era.name} sub={era.summary} />
      <ul className="max-w-2xl space-y-4 pl-5 leading-relaxed text-[#d6d2cb] marker:text-parade" style={{ listStyleType: "square" }}>
        {era.lore.map((l) => <li key={l}>{l}</li>)}
      </ul>
      {album && (
        <p className="mt-10 text-sm">
          Related album: <Link className="text-parade underline" href={`/albums/${album.slug}`}>{album.title}</Link>
        </p>
      )}
    </article>
  );
}
