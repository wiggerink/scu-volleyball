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
    { label: "Start", href: "/" },
    {
      label: "1. Mannschaft",
      href: "/teams/1-mannschaft",
      children: [
        { label: "Team & Kader", href: "/teams/1-mannschaft" },
        { label: "Spielplan", href: "/teams/1-mannschaft#spielplan" },
        { label: "Tickets", href: "/teams/1-mannschaft#tickets" },
        { label: "Live-Übertragung", href: "/teams/1-mannschaft#live" },
      ],
    },
    { label: "Mannschaften", href: "/teams" },
    { label: "Jugend", href: "/jugend" },
    { label: "News", href: "/news" },
    { label: "Verein", href: "/verein" },
    { label: "Sponsoren", href: "/sponsoren" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;
