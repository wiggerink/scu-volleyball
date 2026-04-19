export type TeamEntry = {
  slug: string;
  name: string;
  short: string;
  league: string;
  tier: number;
  gender: "Damen" | "Herren" | "Jugend" | "Mixed";
  description: string;
  accent: "red" | "black" | "gold";
};

export const teams: TeamEntry[] = [
  {
    slug: "1-mannschaft",
    name: "1. Damen",
    short: "SCU I",
    league: "2. Bundesliga Pro",
    tier: 1,
    gender: "Damen",
    description:
      "Unser Aushängeschild – talentierte, in der eigenen Jugend ausgebildete Spielerinnen auf höchstem nationalen Niveau.",
    accent: "red",
  },
  {
    slug: "2-mannschaft",
    name: "2. Damen",
    short: "SCU II",
    league: "3. Liga",
    tier: 2,
    gender: "Damen",
    description:
      "Sprungbrett zur Bundesliga – regelmäßig Titelkandidat in einer der stärksten Drittligen Deutschlands.",
    accent: "black",
  },
  { slug: "3-mannschaft", name: "3. Damen", short: "SCU III", league: "Oberliga",       tier: 3, gender: "Damen", description: "Erfahrung trifft Nachwuchs – Oberliga-Volleyball auf hohem Niveau.", accent: "gold" },
  { slug: "4-mannschaft", name: "4. Damen", short: "SCU IV",  league: "Bezirksliga",   tier: 4, gender: "Damen", description: "Ambitionierter Volleyball mit Spaß am Wettkampf.", accent: "black" },
  { slug: "5-mannschaft", name: "5. Damen", short: "SCU V",   league: "Bezirksklasse", tier: 5, gender: "Damen", description: "Volleyball für alle Leistungsstufen – von Einsteigerinnen bis Erfahrenen.", accent: "black" },
  { slug: "6-mannschaft", name: "6. Damen", short: "SCU VI",  league: "Kreisliga",     tier: 6, gender: "Damen", description: "Teamgeist und Spaß am Sport stehen im Vordergrund.", accent: "black" },
  { slug: "7-mannschaft", name: "7. Damen", short: "SCU VII", league: "Kreisklasse A", tier: 7, gender: "Damen", description: "Breitensport-Team mit großer Leidenschaft.", accent: "black" },
  { slug: "8-mannschaft", name: "8. Damen", short: "SCU VIII",league: "Kreisklasse",   tier: 8, gender: "Damen", description: "Für neue Spielerinnen – Einstieg in unseren Verein.", accent: "black" },

  { slug: "u14",          name: "U14",      short: "U14",  league: "Jugendliga",       tier: 9,  gender: "Jugend", description: "Unser Bundesliga-Unterbau von morgen.", accent: "red" },
  { slug: "u13",          name: "U13",      short: "U13",  league: "Jugendkreisliga",  tier: 10, gender: "Jugend", description: "Talente auf ihrem Weg in die großen Mannschaften.", accent: "red" },
  { slug: "minis",        name: "Minis",    short: "Minis",league: "Mini-Volleyball",  tier: 11, gender: "Jugend", description: "Erste Ballkontakte, erste Erfolge, erster Vereinssport.", accent: "gold" },
  { slug: "mini-minis",   name: "Mini-Minis", short: "Mini-Minis", league: "Ball-Schule", tier: 12, gender: "Jugend", description: "Koordination & Spielfreude für unsere Jüngsten.", accent: "gold" },
];
