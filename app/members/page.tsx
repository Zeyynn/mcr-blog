import type { Metadata } from "next";
import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import { members } from "@/lib/data";

export const metadata: Metadata = { title: "Members" };

export default function Members() {
  return (
    <>
      <PageTitle eyebrow="The band" title="Members" sub="Everyone who has marched in the parade." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <Card key={m.slug} href={`/members/${m.slug}`} eyebrow={m.role} title={m.name}>
            {m.years}
          </Card>
        ))}
      </div>
    </>
  );
}
