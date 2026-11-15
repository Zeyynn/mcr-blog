import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export const metadata: Metadata = { title: "Timeline" };

const events: { when: string; title: string; text: string; href?: string }[] = [
  { when: "2001", title: "The band forms", text: "Gerard Way forms the band in New Jersey in September 2001, after the September 11 attacks. The first lineup is Gerard, Mikey Way, Ray Toro and Matt Pelissier." },
  { when: "2002", title: "I Brought You My Bullets, You Brought Me Your Love", text: "Frank Iero joins days before the debut album is recorded. The album is released in July.", href: "/albums/i-brought-you-my-bullets" },
  { when: "2004", title: "Three Cheers for Sweet Revenge", text: "Major-label debut on Reprise. Bob Bryar replaces Matt Pelissier on drums shortly after release.", href: "/albums/three-cheers-for-sweet-revenge" },
  { when: "March 2006", title: "Life on the Murder Scene", text: "A CD and two DVDs of live tracks, demos and video.", href: "/albums/life-on-the-murder-scene" },
  { when: "2006", title: "The Black Parade", text: "Concept album about The Patient, followed by a world tour.", href: "/albums/the-black-parade" },
  { when: "June 2008", title: "The Black Parade Is Dead!", text: "Live album and DVD recorded on the Black Parade tour.", href: "/albums/the-black-parade-is-dead" },
  { when: "2010", title: "Danger Days", text: "Concept album featuring the Killjoys. Bob Bryar leaves earlier in the year.", href: "/albums/danger-days" },
  { when: "October 2012 to February 2013", title: "Conventional Weapons", text: "Ten songs from 2009 released as five double A-side singles, then as a box set.", href: "/albums/conventional-weapons" },
  { when: "March 22, 2013", title: "Breakup", text: "The band announces it has split up on its website." },
  { when: "March 2014", title: "May Death Never Stop You", text: "Greatest hits collection with the new song 'Fake Your Death'.", href: "/albums/may-death-never-stop-you" },
  { when: "September 2016", title: "The Black Parade / Living with Ghosts", text: "10th anniversary reissue with a disc of demos.", href: "/albums/living-with-ghosts" },
  { when: "October 2019", title: "Reunion announced", text: "The band announces a reunion on October 31. The first show is in Los Angeles on December 20." },
  { when: "May 2022", title: "Reunion tour", text: "The reunion tour begins at the Eden Project in Cornwall and runs until March 2023." },
];

export default function Timeline() {
  return (
    <>
      <PageTitle eyebrow="History" title="Timeline" sub="Key dates, 2001 to now." />
      <ol className="relative space-y-10 border-l border-line pl-8">
        {events.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-parade ring-4 ring-background" />
            <p className="text-xs uppercase tracking-widest text-parade">{e.when}</p>
            <h2 className="font-display text-2xl">
              {e.href ? <Link href={e.href} className="hover:text-parade hover:underline underline-offset-4">{e.title}</Link> : e.title}
            </h2>
            <p className="mt-1 max-w-2xl text-muted">{e.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
