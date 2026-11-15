import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative -mx-6 -mt-12 mb-16 h-[26rem] overflow-hidden border-b border-line md:h-[36rem]">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_65%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-x-0 top-0 flex flex-col items-center px-6 pt-10 text-center md:pt-14">
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-parade">Fan-made wiki &amp; blog</p>
        <h1 className="font-display text-5xl leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,.9)] md:text-8xl">
          <span className="text-white/85">Welcome to the</span> <span className="text-white">Parade</span>
        </h1>
      </div>
    </div>
  );
}
