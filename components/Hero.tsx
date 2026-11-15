export default function Hero() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: (i * 137.5) % 1200,
    y: (i * 61.8) % 380,
    r: (i % 3) * 0.6 + 0.6,
    o: 0.25 + ((i * 7) % 10) / 15,
  }));
  return (
    <div className="relative -mx-6 -mt-12 mb-16 overflow-hidden border-b border-line">
      <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMax slice" className="block h-[34rem] w-full" aria-hidden>
        <defs>
          <linearGradient id="h-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#050505" /><stop offset=".7" stopColor="#2a070b" /><stop offset="1" stopColor="#5c0d14" /></linearGradient>
          <radialGradient id="h-moon" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#ece8e1" /><stop offset=".6" stopColor="#ece8e1" stopOpacity=".15" /><stop offset="1" stopColor="#ece8e1" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="1200" height="560" fill="url(#h-sky)" />
        {stars.map((s, i) => <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ece8e1" opacity={s.o} />)}
        <circle cx="600" cy="250" r="190" fill="url(#h-moon)" />
        <circle cx="600" cy="250" r="82" fill="#ece8e1" />
        <circle cx="630" cy="235" r="74" fill="#2a070b" opacity=".18" />
        {/* skyline */}
        <path d="M0 560 V420 h60 v-50 h40 v70 h50 v-110 h30 v-20 h20 v20 h30 v140 h60 v-90 h50 v60 h70 v-130 h28 v-30 h14 v30 h28 v150 h80 v-70 h60 v40 h60 v-100 h40 v-26 h20 v26 h40 v140 h70 v-80 h60 v50 h60 v-120 h30 v-40 h12 v40 h30 v160 h50 V560Z" fill="#0a0a0a" />
        {/* marching figures */}
        <g fill="#000">
          {Array.from({ length: 22 }, (_, i) => {
            const x = 40 + i * 52;
            const h = 70 + ((i * 13) % 4) * 6;
            return (
              <g key={i} transform={`translate(${x} ${560 - h})`}>
                <circle cx="0" cy="8" r="8" />
                <rect x="-9" y="16" width="18" height={h - 16} rx="3" />
                {i % 3 === 0 && <rect x="-1.5" y="-40" width="3" height="50" />}
              </g>
            );
          })}
        </g>
        <rect y="556" width="1200" height="4" fill="#b3121c" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-parade">Fan-made wiki &amp; blog</p>
        <h1 className="font-display text-6xl leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,.9)] md:text-8xl">
          Welcome to the <span className="text-parade">Parade</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[#d6d2cb]">
          Everything My Chemical Romance: records, members and the stories behind them.
        </p>
      </div>
    </div>
  );
}
