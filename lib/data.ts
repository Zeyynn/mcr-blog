export type Album = {
  slug: string;
  cover: string;
  title: string;
  year: number;
  released: string;
  producer: string;
  genres: string;
  singles: string[];
  videos?: { title: string; id: string }[]; // YouTube video IDs
  lineup: string[];
  label: string;
  tag: string;
  blurb: string;
  tracks: string[];
  notes: string[];
};

export type Member = {
  slug: string;
  photo?: string;
  name: string;
  role: string;
  years: string;
  bio: string;
};

export const albums: Album[] = [
  {
    slug: "i-brought-you-my-bullets",
    cover: "/albums/i-brought-you-my-bullets.webp",
    title: "I Brought You My Bullets, You Brought Me Your Love",
    year: 2002,
    released: "July 23, 2002",
    producer: "Geoff Rickly",
    genres: "Post-hardcore, emo, punk rock",
    singles: ["Honey, This Mirror Isn't Big Enough for the Two of Us", "Headfirst for Halos"],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "matt-pelissier", "frank-iero"],
    label: "Eyeball Records",
    tag: "bullets",
    blurb:
      "The band's debut album, released on Eyeball Records.",
    tracks: [
      "Romance",
      "Honey, This Mirror Isn't Big Enough for the Two of Us",
      "Vampires Will Never Hurt You",
      "Drowning Lessons",
      "Our Lady of Sorrows",
      "Headfirst for Halos",
      "Skylines and Turnstiles",
      "Early Sunsets Over Monroeville",
      "This Is the Best Day Ever",
      "Cubicles",
      "Demolition Lovers",
    ],
    notes: [
      "'Skylines and Turnstiles' is about the September 11 attacks, which led Gerard Way to start the band.",
      "'Vampires Will Never Hurt You' was a promotional single.",
      "Frank Iero is credited on guitar for two tracks. He joined days before recording.",
    ],
  },
  {
    slug: "three-cheers-for-sweet-revenge",
    cover: "/albums/three-cheers-for-sweet-revenge.webp",
    title: "Three Cheers for Sweet Revenge",
    year: 2004,
    released: "June 8, 2004",
    producer: "Howard Benson",
    genres: "Alternative rock, post-hardcore, emo",
    singles: ["Helena", "I'm Not Okay (I Promise)", "The Ghost of You"],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero", "matt-pelissier"],
    label: "Reprise Records",
    tag: "revenge",
    blurb:
      "The major-label debut, and the album that broke the band into the mainstream.",
    tracks: [
      "Helena",
      "Give 'Em Hell, Kid",
      "To the End",
      "You Know What They Do to Guys Like Us in Prison",
      "I'm Not Okay (I Promise)",
      "The Ghost of You",
      "The Jetset Life Is Gonna Kill You",
      "Interlude",
      "Thank You for the Venom",
      "Hang 'Em High",
      "It's Not a Fashion Statement, It's a F***ing Deathwish",
      "Cemetery Drive",
      "I Never Told You What I Do for a Living",
    ],
    notes: [
      "Matt Pelissier played drums on the album. Bob Bryar joined shortly after its release and appears only on the deluxe edition bonus tracks.",
      "A loose concept album that continues the story of 'Demolition Lovers' from the debut.",
    ],
  },
  {
    slug: "the-black-parade",
    cover: "/albums/the-black-parade.jpeg",
    title: "The Black Parade",
    year: 2006,
    released: "October 24, 2006 (October 23 in Europe)",
    producer: "Rob Cavallo and My Chemical Romance",
    genres: "Alternative rock, emo, hard rock",
    singles: ["Welcome to the Black Parade", "Famous Last Words", "I Don't Love You", "Teenagers"],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero", "bob-bryar"],
    label: "Reprise Records",
    tag: "black-parade",
    blurb:
      "A concept album about a dying man known as The Patient.",
    tracks: [
      "The End.",
      "Dead!",
      "This Is How I Disappear",
      "The Sharpest Lives",
      "Welcome to the Black Parade",
      "I Don't Love You",
      "House of Wolves",
      "Cancer",
      "Mama",
      "Sleep",
      "Teenagers",
      "Disenchanted",
      "Famous Last Words",
    ],
    notes: [
      "Some editions include a hidden track, 'Blood'.",
      "'Mama' features Liza Minnelli.",
      "'Welcome to the Black Parade' was the lead single.",
      "The band wore marching band uniforms on the tour.",
    ],
  },
  {
    slug: "danger-days",
    cover: "/albums/danger-days.webp",
    title: "Danger Days: The True Lives of the Fabulous Killjoys",
    year: 2010,
    released: "November 22, 2010",
    producer: "Rob Cavallo and My Chemical Romance",
    genres: "Alternative rock, power pop, pop-punk",
    singles: [
      "Na Na Na (Na Na Na Na Na Na Na Na Na)",
      "Sing",
      "Planetary (Go!)",
      "Bulletproof Heart",
      "The Only Hope for Me Is You",
      "The Kids from Yesterday",
    ],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero"],
    label: "Reprise Records",
    tag: "killjoys",
    blurb:
      "A concept album set in post-apocalyptic California, with the Killjoys fighting the Better Living Industries corporation.",
    tracks: [
      "Look Alive, Sunshine",
      "Na Na Na (Na Na Na Na Na Na Na Na Na)",
      "Bulletproof Heart",
      "Sing",
      "Planetary (Go!)",
      "The Only Hope for Me Is You",
      "Jet-Star and the Kobra Kid/Traffic Report",
      "Party Poison",
      "Save Yourself, I'll Hold Them Back",
      "S/C/A/R/E/C/R/O/W",
      "Summertime",
      "Destroya",
      "The Kids from Yesterday",
      "Goodnite, Dr. Death",
      "Vampire Money",
    ],
    notes: [
      "The last studio album before the 2013 breakup.",
      "Framed by the radio broadcasts of pirate DJ Dr. Death Defying.",
      "The band appeared as the Killjoys: Party Poison (Gerard), Jet-Star (Ray), Fun Ghoul (Frank) and Kobra Kid (Mikey).",
      "Bob Bryar left in early 2010 and is credited on the album for songwriting only.",
    ],
  },
];

export const members: Member[] = [
  {
    slug: "gerard-way",
    photo: "/members/gerard-way.jpg",
    name: "Gerard Way",
    role: "Lead vocals",
    years: "2001–2013, 2019–present",
    bio: "Lead vocalist and main lyricist. Formed the band in New Jersey in 2001. Also writes comics, including The Umbrella Academy.",
  },
  {
    slug: "ray-toro",
    photo: "/members/ray-toro.jpg",
    name: "Ray Toro",
    role: "Lead guitar, backing vocals",
    years: "2001–2013, 2019–present",
    bio: "Lead guitarist and backing vocalist. Part of the original lineup.",
  },
  {
    slug: "mikey-way",
    photo: "/members/mikey-way.jpg",
    name: "Mikey Way",
    role: "Bass",
    years: "2001–2013, 2019–present",
    bio: "Bassist and Gerard's younger brother. Part of the original lineup.",
  },
  {
    slug: "frank-iero",
    photo: "/members/frank-iero.jpg",
    name: "Frank Iero",
    role: "Rhythm guitar, backing vocals",
    years: "2002–2013, 2019–present",
    bio: "Rhythm guitarist who joined in 2002. Has released music with other projects, including leathermouth and frnkiero andthe cellabration.",
  },
  {
    slug: "matt-pelissier",
    photo: "/members/matt-pelissier.png",
    name: "Matt Pelissier",
    role: "Drums",
    years: "2001–2004",
    bio: "Original drummer. Played on the first two albums and left in 2004.",
  },
  {
    slug: "bob-bryar",
    photo: "/members/bob-bryar.jpg",
    name: "Bob Bryar",
    role: "Drums",
    years: "2004–2010",
    bio: "Drummer from 2004 to 2010, including The Black Parade. He died in November 2024.",
  },
  {
    slug: "james-dewees",
    photo: "/members/james-dewees.jpg",
    name: "James Dewees",
    role: "Keyboards",
    years: "2007–2013",
    bio: "Touring keyboardist from 2007, and an official member in 2012–2013. Also leads the band Reggie and the Full Effect.",
  },
];

export const albumsFor = (memberSlug: string) => albums.filter((a) => a.lineup.includes(memberSlug));
export const getAlbum = (s: string) => albums.find((a) => a.slug === s);
export const getMember = (s: string) => members.find((m) => m.slug === s);
