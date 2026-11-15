"use client";
import { useState } from "react";

// Click-to-load facade: nothing is requested from YouTube until the viewer clicks.
export default function YouTube({ id, title = "Video" }: { id: string; title?: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative my-8 aspect-video w-full overflow-hidden border border-line bg-black">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setOn(true)} className="group absolute inset-0 flex flex-col items-center justify-center gap-3" aria-label={`Play ${title}`}>
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white transition-colors group-hover:bg-white group-hover:text-black">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="text-xs uppercase tracking-widest text-muted">{title}</span>
        </button>
      )}
    </div>
  );
}
