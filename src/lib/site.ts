import { teams } from "./teams";

type NavChild = { label: string; href: string; external?: boolean };

type MegaItem = { label: string; href: string; note?: string; external?: boolean };
type MegaColumn = { title: string; items: readonly MegaItem[] };
type MegaData = {
  columns: readonly MegaColumn[];
  feature: {
    /** Kleine Pille ueber der Ueberschrift, z. B. "14 Teams". */
    badge?: string;
    title: string;
    text: string;
    cta: { label: string; href: string };
  };
};

export type NavEntry = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: readonly NavChild[];
  mega?: MegaData;
};

export const ticketsUrl = "https://scu-tickets.reservix.de/events";

const nav: readonly NavEntry[] = [
  { label: "Start", href: "/", description: "Aktuelles, Highlights & Stories aus Emlichheim" },
  {
    label: "1. Mannschaft",
    href: "/teams/1-mannschaft",
    description: "Sparda 2. Liga Pro \u00b7 Saison 2026/27",
    children: [
      { label: "Team & Kader", href: "/teams/1-mannschaft" },
      { label: "Spielplan", href: "/teams/1-mannschaft#spielplan" },
      { label: "Tickets", href: "https://scu-tickets.reservix.de/events", external: true },
      { label: "Live-\u00dcbertragung", href: "/teams/1-mannschaft#live" },
    ],
  },
  {
    label: "2. Mannschaft",
    href: "/teams/2-mannschaft",
    description: "3. Liga West \u00b7 Saison 2026/27",
  },
  {
    label: "Mannschaften",
    href: "/teams",
    description: `Alle ${teams.length} Teams \u2013 Damen, Hobby & Jugend`,
    mega: {
      columns: [
        {
          title: "Damenteams",
          items: [
            { label: "3. Damen", href: "/teams/3-mannschaft", note: "Oberliga" },
            { label: "4. Damen", href: "/teams/4-mannschaft", note: "Bezirksliga" },
            { label: "5. Damen", href: "/teams/5-mannschaft", note: "Bezirksklasse" },
            { label: "6. Damen", href: "/teams/6-mannschaft", note: "Kreisliga" },
            { label: "7. Damen", href: "/teams/7-mannschaft", note: "Kreisklasse A" },
            { label: "8. Damen", href: "/teams/8-mannschaft", note: "Kreisklasse" },
          ],
        },
        {
          title: "Jugend & Hobby",
          items: [
            { label: "U14", href: "/teams/u14", note: "Jugendliga" },
            { label: "U13", href: "/teams/u13", note: "Jugendkreisliga" },
            { label: "Minis", href: "/teams/minis", note: "Mini-Volleyball" },
            { label: "Mini-Minis", href: "/teams/mini-minis", note: "Ball-Schule" },
            { label: "Hobbyliga", href: "/teams/hobbyliga", note: "Hobbyliga Grafschaft" },
            { label: "Hobby", href: "/teams/hobby", note: "Freizeit-Volleyball" },
          ],
        },
      ],
      feature: {
        badge: `${teams.length} Teams`,
        title: "Alle Mannschaften auf einen Blick",
        text: "\u00dcbersicht, Trainingszeiten und Kontakt je Team.",
        cta: { label: "Alle Teams", href: "/teams" },
      },
    },
  },
  {
    label: "Verein",
    href: "/verein",
    description: "Geschichte, Jugendabteilung, F\u00f6rderring & Halle",
    mega: {
      columns: [
        {
          title: "\u00dcber uns",
          items: [
            { label: "Der Verein", href: "/verein", note: "Werte & Struktur" },
            { label: "Unsere Geschichte", href: "/verein#geschichte", note: "Seit 1989/90 Bundesliga" },
            { label: "SC Union Emlichheim", href: "https://www.scu-emlichheim.de/", note: "Hauptverein", external: true },
            { label: "Kontakt", href: "/kontakt", note: "Schreib uns" },
          ],
        },
        {
          // Bewusst nicht "Jugend": die Jugendmannschaften stehen unter
          // "Mannschaften", hier geht es um Mitmachen und Foerdern.
          title: "Mitmachen",
          items: [
            { label: "Jugendabteilung", href: "/jugend", note: "120+ Kinder im Training" },
            { label: "Altersgruppen", href: "/jugend#altersgruppen", note: "Von 4 bis 18 Jahren" },
            { label: "F\u00f6rderring", href: "/foerderring", note: "Nachwuchs f\u00f6rdern" },
          ],
        },
        {
          title: "Rund ums Spiel",
          items: [
            { label: "Vechtetalhalle", href: "/vechtetalhalle", note: "Unsere Spielst\u00e4tte" },
            { label: "Galerie", href: "/galerie", note: "Bilder der Saison" },
            { label: "Tickets", href: ticketsUrl, note: "Reservix", external: true },
          ],
        },
      ],
      feature: {
        badge: "F\u00f6rderring e.V.",
        title: "Mach den Nachwuchs stark",
        text: "Der F\u00f6rderring finanziert Trainer, Material und Fahrten f\u00fcr \u00fcber 120 Kinder.",
        cta: { label: "F\u00f6rderring entdecken", href: "/foerderring" },
      },
    },
  },
  { label: "News", href: "/news", description: "Spielberichte & Vereinsnews" },
  { label: "Sponsoren", href: "/sponsoren", description: "Unsere Partner & F\u00f6rderer" },
];

export const site = {
  name: "SCU Emlichheim Volleyball",
  shortName: "SCU Volleyball",
  tagline: "Nachhaltig erfolgreiche Jugendarbeit und Bundesliga-Spitzen-Volleyball",
  claim: "Volleyball. Heimat. Leidenschaft.",
  ticketsUrl,
  description:
    "Der SC Union Emlichheim ist einer der traditionsreichsten Volleyballvereine Deutschlands. Unsere 1. Damenmannschaft spielt in der Sparda 2. Liga Pro – getragen von einer der stärksten Jugendabteilungen der Region.",
  url: "https://scuvolleyball.de",
  locale: "de_DE",
  league: "Sparda 2. Liga Pro (Damen)",
  season: "2026/27",
  venue: {
    name: "Vechtetalhalle",
    city: "Emlichheim",
    region: "Niedersachsen",
  },
  address: {
    street: "Lägen Diek 12",
    postalCode: "49824",
    city: "Emlichheim",
    country: "Deutschland",
  },
  contact: {
    email: "news@scuvolleyball.de",
    phone: "",
  },
  social: {
    facebook: "https://www.facebook.com/scuvolleyball.emlichheim",
    instagram: "https://www.instagram.com/scu.volleyball/",
    youtube: "https://www.youtube.com/channel/UChNRe-7g8dTibAkk4f1AcKw",
  },
  nav,
} as const;
