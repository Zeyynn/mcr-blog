export type Album = {
  slug: string;
  title: string;
  year: number;
  label: string;
  era: string;
  blurb: string;
  tracks: string[];
  partialTracks?: boolean;
  notes: string[];
};

export type Member = {
  slug: string;
  name: string;
  role: string;
  years: string;
  bio: string;
};

export type Era = {
  slug: string;
  name: string;
  years: string;
  albumSlug: string;
  summary: string;
  lore: string[];
};

export const albums: Album[] = [
  {
    slug: "i-brought-you-my-bullets",
    title: "I Brought You My Bullets, You Brought Me Your Love",
    year: 2002,
    label: "Eyeball Records",
    era: "bullets",
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
    title: "Three Cheers for Sweet Revenge",
    year: 2004,
    label: "Reprise Records",
    era: "revenge",
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
    title: "The Black Parade",
    year: 2006,
    label: "Reprise Records",
    era: "black-parade",
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
    title: "Danger Days: The True Lives of the Fabulous Killjoys",
    year: 2010,
    label: "Reprise Records",
    era: "killjoys",
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
    name: "Gerard Way",
    role: "Lead vocals",
    years: "2001–2013, 2019–present",
    bio: "Frontman and principal lyricist, a comic book writer and artist who formed the band in New Jersey in 2001. Created The Umbrella Academy comic series, and drove the visual and conceptual side of every era.",
  },
  {
    slug: "ray-toro",
    name: "Ray Toro",
    role: "Lead guitar, backing vocals",
    years: "2001–2013, 2019–present",
    bio: "Lead guitarist known for big, melodic solos and orchestral arrangements. His guitar work shapes songs like 'Welcome to the Black Parade' and 'Famous Last Words'.",
  },
  {
    slug: "mikey-way",
    name: "Mikey Way",
    role: "Bass",
    years: "2001–2013, 2019–present",
    bio: "Bassist and Gerard's younger brother. Part of the original lineup, anchoring the low end across every album.",
  },
  {
    slug: "frank-iero",
    name: "Frank Iero",
    role: "Rhythm guitar, backing vocals",
    years: "2002–2013, 2019–present",
    bio: "Joined in 2002 around the release of the debut, adding a punk edge on rhythm guitar. Has since released music with his own projects including frnkiero andthe cellabration and leathermouth.",
  },
  {
    slug: "matt-pelissier",
    name: "Matt Pelissier",
    role: "Drums",
    years: "2001–2004",
    bio: "Original drummer who played on I Brought You My Bullets, You Brought Me Your Love and left shortly before Three Cheers for Sweet Revenge sessions.",
  },
  {
    slug: "bob-bryar",
    name: "Bob Bryar",
    role: "Drums",
    years: "2004–2010",
    bio: "Drummer on Three Cheers for Sweet Revenge, The Black Parade and Danger Days era touring before leaving the band in 2010.",
  },
];

export const eras: Era[] = [
  {
    slug: "bullets",
    name: "Bullets",
    years: "2001–2003",
    albumSlug: "i-brought-you-my-bullets",
    summary:
      "Basement shows, hardcore energy and a band finding its voice in New Jersey.",
    lore: [
      "Gerard Way formed the band shortly after September 11, 2001, saying the events changed his priorities.",
      "Early songs mix horror imagery, love stories and post-hardcore urgency.",
    ],
  },
  {
    slug: "revenge",
    name: "Revenge",
    years: "2004–2005",
    albumSlug: "three-cheers-for-sweet-revenge",
    summary:
      "Red, black and bandages. The gothic theatre era that turned the band into a mainstream force.",
    lore: [
      "Concept: a man is sentenced to death, and his lover is left grieving. A story told partially through the record and videos.",
      "The Helena and I'm Not Okay videos built the visual language fans still associate with the band.",
    ],
  },
  {
    slug: "black-parade",
    name: "The Black Parade",
    years: "2006–2008",
    albumSlug: "the-black-parade",
    summary:
      "Marching band uniforms, skull imagery and a rock-opera about death, memory and the afterlife.",
    lore: [
      "The Patient is dying of cancer, and as he fades, a parade appears in the shape of his most vivid memory.",
      "The band performed in character on stage, with a theatrical tour that became legendary.",
    ],
  },
  {
    slug: "killjoys",
    name: "Danger Days / Killjoys",
    years: "2010–2012",
    albumSlug: "danger-days",
    summary:
      "A hard pivot to bright colour, sci-fi and desert outlaw rebellion.",
    lore: [
      "Set in Battery City, controlled by Better Living Industries, with the Killjoys resisting in the desert.",
      "Characters were presented as costumed alter-egos in videos, comics and live shows.",
    ],
  },
  {
    slug: "hiatus-reunion",
    name: "Breakup & Reunion",
    years: "2013–present",
    albumSlug: "danger-days",
    summary:
      "The band split in March 2013, then reunited with shows in December 2019 and returned to touring.",
    lore: [
      "Members pursued solo projects, comics and other music during the break.",
      "The reunion led to the Long Live The Black Parade tour dates and a new wave of fans.",
    ],
  },
];

export const getAlbum = (s: string) => albums.find((a) => a.slug === s);
export const getMember = (s: string) => members.find((m) => m.slug === s);
export const getEra = (s: string) => eras.find((e) => e.slug === s);
