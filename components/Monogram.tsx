import Image from "next/image";

const tones = ["#b3121c", "#ece8e1", "#7a0d14", "#ff2e93", "#8d8a85", "#00b8a9"];
export default function Monogram({
  name, index = 0, size = "h-20 w-20", photo,
}: { name: string; index?: number; size?: string; photo?: string }) {
  const initials = name.split(" ").map((w) => w[0]).join("");
  const c = tones[index % tones.length];
  const dark = c === "#ece8e1" || c === "#00b8a9";
  return (
    <div className={`${size} relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2`} style={{ borderColor: "#b3121c", background: `radial-gradient(circle at 30% 30%, ${c}33, #0a0a0a 70%)` }}>
      {photo ? (
        <Image src={photo} alt={name} fill sizes="120px" className="object-cover object-top" />
      ) : (
        <span className="font-display text-3xl" style={{ color: dark ? "#fff" : c }}>{initials}</span>
      )}
    </div>
  );
}
