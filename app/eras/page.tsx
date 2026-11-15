import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { eras } from "@/lib/data";

export const metadata: Metadata = { title: "Eras" };

export default function Eras() {
  return (
    <>
      <PageTitle eyebrow="Lore" title="Eras" sub="Each record came with a look, a story and a world." />
      <div className="grid gap-4 sm:grid-cols-2">
        {eras.map((e) => (
          <Card key={e.slug} href={`/eras/${e.slug}`} eyebrow={e.years} title={e.name}>
            {e.summary}
          </Card>
        ))}
      </div>
    </>
  );
}
