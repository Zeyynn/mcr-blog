export type Album = {
  slug: string;
  cover: string;
  title: string;
  year: number;
  label: string;
  tag: string;
  blurb: string;
  tracks: string[];
  partialTracks?: boolean;
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
    label: "Eyeball Records",
    tag: "bullets",
    blurb:
      "The raw, post-hardcore debut recorded in a short burst, full of horror-movie romance and Jersey grit.",
    tracks: [
      "Skylines and Turnstiles",
      "Honey, This Mirror Isn't Big Enough for the Two of Us",
      "Vampires Will Never Hurt You",
      "Drowning Lessons",
      "Our Lady of Sorrows",
      "Headfirst for Halos",
      "Early Sunsets Over Monroeville",
      "This Is the Best Day Ever",
      "Cubicles",
      "Demolition Lovers",
    ],
    notes: [
      "Debut studio album, released on indie label Eyeball Records.",
      "Opening track 'Skylines and Turnstiles' was written about the September 11 attacks, the event that pushed Gerard Way to form the band.",
    ],
  },
  {
    slug: "three-cheers-for-sweet-revenge",
    cover: "/albums/three-cheers-for-sweet-revenge.webp",
    title: "Three Cheers for Sweet Revenge",
    year: 2004,
    label: "Reprise Records",
    tag: "revenge",
    blurb:
      "The major-label breakthrough: a gothic concept record about a dying man and his lover, drenched in blood and theatre.",
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
      "It's Not a Fashion Statement, It's a Deathwish",
      "Cemetery Drive",
      "I Never Told You What I Do for a Living",
    ],
    notes: [
      "Major-label debut on Reprise Records.",
      "'I'm Not Okay (I Promise)' and 'Helena' became signature singles and defined the band's early-2000s visual style.",
      "First album with drummer Bob Bryar.",
    ],
  },
  {
    slug: "the-black-parade",
    cover: "/albums/the-black-parade.jpeg",
    title: "The Black Parade",
    year: 2006,
    label: "Reprise Records",
    tag: "black-parade",
    blurb:
      "A rock-opera concept album about a dying man called The Patient and the parade that comes to carry him away.",
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
      "Produced by Rob Cavallo. Heavily influenced by Queen, Pink Floyd and classic rock opera.",
      "'Welcome to the Black Parade' is the band's biggest single.",
      "The band performed in black-and-white marching band uniforms during the touring cycle.",
    ],
  },
  {
    slug: "danger-days",
    cover: "/albums/danger-days.webp",
    title: "Danger Days: The True Lives of the Fabulous Killjoys",
    year: 2010,
    label: "Reprise Records",
    tag: "killjoys",
    blurb:
      "A neon, desert-set sci-fi record about outlaw Killjoys fighting the megacorp Better Living Industries.",
    tracks: [
      "Na Na Na (Na Na Na Na Na Na Na Na Na)",
      "Bulletproof Heart",
      "SING",
      "Planetary (GO!)",
      "The Only Hope for Me Is You",
      "Party Poison",
      "Summertime",
      "DESTROYA",
      "The Kids from Yesterday",
      "Vampire Money",
    ],
    partialTracks: true,
    notes: [
      "Last studio album before the 2013 breakup.",
      "Framed by the radio broadcasts of pirate DJ Dr. Death Defying.",
      "Accompanied by the Killjoys characters: Party Poison, Fun Ghoul, Jet Star, Kobra Kid and The Girl.",
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
    bio: "Frontman and principal lyricist, a comic book writer and artist who formed the band in New Jersey in 2001. Created The Umbrella Academy comic series, and drove the visual and conceptual side of every era.",
  },
  {
    slug: "ray-toro",
    photo: "/members/ray-toro.jpg",
    name: "Ray Toro",
    role: "Lead guitar, backing vocals",
    years: "2001–2013, 2019–present",
    bio: "Lead guitarist known for big, melodic solos and orchestral arrangements. His guitar work shapes songs like 'Welcome to the Black Parade' and 'Famous Last Words'.",
  },
  {
    slug: "mikey-way",
    photo: "/members/mikey-way.jpg",
    name: "Mikey Way",
    role: "Bass",
    years: "2001–2013, 2019–present",
    bio: "Bassist and Gerard's younger brother. Part of the original lineup, anchoring the low end across every album.",
  },
  {
    slug: "frank-iero",
    photo: "/members/frank-iero.jpg",
    name: "Frank Iero",
    role: "Rhythm guitar, backing vocals",
    years: "2002–2013, 2019–present",
    bio: "Joined in 2002 around the release of the debut, adding a punk edge on rhythm guitar. Has since released music with his own projects including frnkiero andthe cellabration and leathermouth.",
  },
  {
    slug: "matt-pelissier",
    photo: "/members/matt-pelissier.png",
    name: "Matt Pelissier",
    role: "Drums",
    years: "2001–2004",
    bio: "Original drummer who played on I Brought You My Bullets, You Brought Me Your Love and left shortly before Three Cheers for Sweet Revenge sessions.",
  },
  {
    slug: "bob-bryar",
    photo: "/members/bob-bryar.jpg",
    name: "Bob Bryar",
    role: "Drums",
    years: "2004–2010",
    bio: "Drummer on Three Cheers for Sweet Revenge, The Black Parade and Danger Days era touring before leaving the band in 2010.",
  },
  {
    slug: "james-dewees",
    photo: "/members/james-dewees.jpg",
    name: "James Dewees",
    role: "Keyboards (touring)",
    years: "2007–2010",
    bio: "Touring keyboardist who joined the live lineup during The Black Parade era. Also the creative force behind the band Reggie and the Full Effect.",
  },
];

export const getAlbum = (s: string) => albums.find((a) => a.slug === s);
export const getMember = (s: string) => members.find((m) => m.slug === s);
