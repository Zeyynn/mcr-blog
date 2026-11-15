export type Album = {
  slug: string;
  cover: string;
  title: string;
  year: number;
  yearLabel?: string;
  group: "studio" | "other";
  kind: string;
  released: string;
  producer?: string;
  genres?: string;
  singles: string[];
  discs?: { title: string; tracks: string[] }[];
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
    group: "studio",
    kind: "Studio album",
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
    group: "studio",
    kind: "Studio album",
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
    group: "studio",
    kind: "Studio album",
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
    group: "studio",
    kind: "Studio album",
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
  {
    slug: "life-on-the-murder-scene",
    cover: "/albums/life-on-the-murder-scene.webp",
    group: "other",
    kind: "Live album and compilation",
    title: "Life on the Murder Scene",
    year: 2006,
    released: "March 21, 2006",
    label: "Reprise Records",
    singles: [],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero", "matt-pelissier"],
    tag: "murder-scene",
    blurb: "A three-disc release with a CD of live tracks, demos and unreleased songs, plus two DVDs.",
    tracks: ["Thank You for the Venom", "Cemetery Drive", "Give 'Em Hell, Kid", "Headfirst for Halos", "Helena", "You Know What They Do to Guys Like Us in Prison", "The Ghost of You", "I'm Not Okay (I Promise)", "I Never Told You What I Do for a Living (demo)", "Bury Me in Black (demo)", "Desert Song"],
    notes: ["The CD collects live recordings from MTV2 $2 Bill, the Starland Ballroom and Sessions@AOL, plus demos and unreleased tracks.", "'Desert Song' and the demos of 'I Never Told You What I Do for a Living' and 'Bury Me in Black' are on the CD.", "The two DVDs include a video diary, live performances, TV appearances and music videos.", "Released on vinyl for Record Store Day on April 17, 2020."],
  },
  {
    slug: "the-black-parade-is-dead",
    cover: "/albums/the-black-parade-is-dead.webp",
    group: "other",
    kind: "Live album",
    title: "The Black Parade Is Dead!",
    year: 2008,
    released: "June 27, 2008",
    label: "Reprise Records",
    singles: [],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero", "bob-bryar", "james-dewees"],
    tag: "black-parade-is-dead",
    blurb: "A live recording of The Black Parade, released as a CD and a DVD.",
    tracks: ["The End.", "Dead!", "This Is How I Disappear", "The Sharpest Lives", "Welcome to the Black Parade", "I Don't Love You", "House of Wolves", "Interlude", "Cancer", "Mama", "Sleep", "Teenagers", "The Black Parade Is Dead!", "Disenchanted", "Famous Last Words", "Blood (studio recording)"],
    notes: ["The CD was recorded at the Palacio de los Deportes in Mexico City on October 7, 2007.", "The DVD adds a second show recorded at Maxwell's in Hoboken, New Jersey on October 24, 2007.", "James Dewees plays keyboards.", "The vinyl edition from Record Store Day 2019 adds three studio bonus tracks: 'Kill All Your Friends', 'My Way Home Is Through You' and 'Heaven Help Us'."],
  },
  {
    slug: "conventional-weapons",
    cover: "/albums/conventional-weapons.webp",
    group: "other",
    kind: "Singles collection",
    title: "Conventional Weapons",
    year: 2012,
    yearLabel: "2012–2013",
    released: "October 30, 2012 to February 5, 2013",
    producer: "Brendan O'Brien",
    label: "Reprise Records",
    singles: [],
    lineup: ["gerard-way", "ray-toro", "mikey-way", "frank-iero", "bob-bryar"],
    tag: "conventional-weapons",
    blurb: "Ten songs recorded in 2009, released as five double A-side singles.",
    tracks: ["Boy Division", "Tomorrow's Money", "Ambulance", "Gun.", "The World Is Ugly", "The Light Behind Your Eyes", "Kiss the Ring", "Make Room!!!!", "Surrender the Night", "Burn Bright"],
    notes: ["Number One (October 30, 2012): 'Boy Division' and 'Tomorrow's Money'.", "Number Two (November 23, 2012): 'Ambulance' and 'Gun.'", "Number Three (December 18, 2012): 'The World Is Ugly' and 'The Light Behind Your Eyes'.", "Number Four (January 8, 2013): 'Kiss the Ring' and 'Make Room!!!!'", "Number Five (February 5, 2013): 'Surrender the Night' and 'Burn Bright'. All five were also released together as a box set on that date.", "Recorded in 2009 at A&M Studios and mixed by Rich Costey."],
  },
  {
    slug: "may-death-never-stop-you",
    cover: "/albums/may-death-never-stop-you.webp",
    group: "other",
    kind: "Greatest hits",
    title: "May Death Never Stop You",
    year: 2014,
    released: "March 25, 2014",
    producer: "Rob Cavallo, Doug McKean, My Chemical Romance, Geoff Rickly, Alex Saavedra and Howard Benson",
    label: "Reprise Records",
    singles: ["Fake Your Death"],
    lineup: [],
    tag: "may-death",
    blurb: "A greatest hits collection covering 2001 to 2013, with four previously unreleased tracks.",
    tracks: ["Fake Your Death", "Honey, This Mirror Isn't Big Enough for the Two of Us", "Vampires Will Never Hurt You", "Helena", "You Know What They Do to Guys Like Us in Prison", "I'm Not Okay (I Promise)", "The Ghost of You", "Welcome to the Black Parade", "Cancer", "Mama", "Teenagers", "Famous Last Words", "Na Na Na (Na Na Na Na Na Na Na Na Na)", "Sing", "Planetary (Go!)", "The Kids from Yesterday", "Skylines and Turnstiles (demo version)", "Knives/Sorrow (demo version)", "Cubicles (demo version)"],
    notes: ["'Fake Your Death' is new. It was recorded for a scrapped fifth album and released as a single on February 17, 2014.", "The last three tracks are demo versions from the 'Attic Demo' sessions: 'Skylines and Turnstiles', 'Knives/Sorrow' and 'Cubicles'."],
  },
  {
    slug: "living-with-ghosts",
    cover: "/albums/living-with-ghosts.webp",
    group: "other",
    kind: "Reissue",
    title: "The Black Parade / Living with Ghosts",
    year: 2016,
    released: "September 23, 2016",
    producer: "Rob Cavallo and My Chemical Romance",
    label: "Reprise Records",
    singles: [],
    discs: [{"title": "The Black Parade", "tracks": ["The End.", "Dead!", "This Is How I Disappear", "The Sharpest Lives", "Welcome to the Black Parade", "I Don't Love You", "House of Wolves", "Cancer", "Mama", "Sleep", "Teenagers", "Disenchanted", "Famous Last Words", "Blood"]}, {"title": "Living with Ghosts", "tracks": ["The Five of Us Are Dying (rough mix)", "Kill All Your Friends (live demo)", "Party at the End of the World (live demo)", "Mama (live demo)", "My Way Home Is Through You (live demo)", "Not That Kind of Girl (live demo)", "House of Wolves, version 1 (live demo)", "House of Wolves, version 2 (live demo)", "Emily (rough mix)", "Disenchanted (live demo)", "All the Angels (live demo)"]}],
    lineup: [],
    tag: "living-with-ghosts",
    blurb: "The 10th anniversary edition of The Black Parade, with a second disc of demos and rough mixes.",
    tracks: ["The End.", "Dead!", "This Is How I Disappear", "The Sharpest Lives", "Welcome to the Black Parade", "I Don't Love You", "House of Wolves", "Cancer", "Mama", "Sleep", "Teenagers", "Disenchanted", "Famous Last Words", "Blood", "The Five of Us Are Dying (rough mix)", "Kill All Your Friends (live demo)", "Party at the End of the World (live demo)", "Mama (live demo)", "My Way Home Is Through You (live demo)", "Not That Kind of Girl (live demo)", "House of Wolves, version 1 (live demo)", "House of Wolves, version 2 (live demo)", "Emily (rough mix)", "Disenchanted (live demo)", "All the Angels (live demo)"],
    notes: ["Disc 1 is a remastered version of The Black Parade. 'Blood' is a hidden track.", "Disc 2, Living with Ghosts, has 11 demos and rough mixes, including songs cut from the album such as 'Emily' and 'All the Angels'.", "'The Five of Us Are Dying' was released as a single on July 29, 2016."],
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

export const yearOf = (a: Album) => a.yearLabel ?? String(a.year);
export const studioAlbums = () => albums.filter((a) => a.group === "studio");
export const otherAlbums = () => albums.filter((a) => a.group === "other");
export const albumsFor = (memberSlug: string) => albums.filter((a) => a.lineup.includes(memberSlug));
export const getAlbum = (s: string) => albums.find((a) => a.slug === s);
export const getMember = (s: string) => members.find((m) => m.slug === s);
