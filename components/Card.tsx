import Link from "next/link";
import Image from "next/image";
import Monogram from "./Monogram";

export default function Card({
  href, eyebrow, title, children, image, monogram,
}: {
  href: string; eyebrow?: string; title: string; children?: React.ReactNode;
  image?: { src: string; alt: string; ratio?: string; top?: boolean };
  monogram?: { name: string; index: number; photo?: string };
}) {
  return (
    <Link href={href} className="group block overflow-hidden border border-line bg-panel transition-all hover:-translate-y-1 hover:border-parade hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,.18)]">
      {image && (
        <div className={`relative ${image.ratio ?? "aspect-square"} overflow-hidden border-b border-line`}>
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className={`object-cover ${image.top ? "object-top" : ""} transition-transform duration-500 group-hover:scale-105`} />
        </div>
      )}
      <div className="flex items-start gap-4 p-6">
        {monogram && <Monogram name={monogram.name} index={monogram.index} photo={monogram.photo} />}
        <div>
          {eyebrow && <p className="mb-2 text-xs uppercase tracking-widest text-parade">{eyebrow}</p>}
          <h3 className="font-display text-2xl leading-tight group-hover:text-parade group-hover:underline underline-offset-4">{title}</h3>
          {children && <p className="mt-3 text-sm leading-relaxed text-muted">{children}</p>}
        </div>
      </div>
    </Link>
  );
}
