export const site = {
  name: "SCU Emlichheim Volleyball",
  shortName: "SCU Volleyball",
  tagline: "Nachhaltig erfolgreiche Jugendarbeit und Bundesliga-Spitzen-Volleyball",
  claim: "Volleyball. Heimat. Leidenschaft.",
  description:
    "Der SC Union Emlichheim ist einer der traditionsreichsten Volleyballvereine Deutschlands. Unsere 1. Damenmannschaft spielt in der 2. Bundesliga Pro – getragen von einer der stärksten Jugendabteilungen der Region.",
  url: "https://scuvolleyball.de",
  locale: "de_DE",
  league: "2. Bundesliga Pro (Damen)",
  season: "2025/26",
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
  nav: [
    { label: "Home", href: "/", description: "Aktuelles, Highlights & Stories aus Emlichheim" },
    {
      label: "1. Mannschaft",
      href: "/teams/1-mannschaft",
      description: "2. Bundesliga Pro · Saison 2025/26",
      children: [
        { label: "Team & Kader", href: "/teams/1-mannschaft" },
        { label: "Spielplan", href: "/teams/1-mannschaft#spielplan" },
        { label: "Tickets", href: "/teams/1-mannschaft#tickets" },
        { label: "Live-Übertragung", href: "/teams/1-mannschaft#live" },
      ],
    },
    {
      label: "2. Mannschaft",
      href: "/teams/2-mannschaft",
      description: "Aufsteiger 2. Bundesliga · Saison 2026/27",
    },
    { label: "Mannschaften", href: "/teams", description: "Alle 13 Teams – Damen & Jugend" },
    { label: "Jugend", href: "/jugend", description: "120+ Kinder im Training" },
    { label: "News", href: "/news", description: "Spielberichte & Vereinsnews" },
    { label: "Verein", href: "/verein", description: "Geschichte, Vorstand, Halle" },
    { label: "Sponsoren", href: "/sponsoren", description: "Unsere Partner & Förderer" },
  ],
} as const;
