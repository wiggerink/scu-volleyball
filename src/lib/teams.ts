export type TeamEntry = {
  slug: string;
  name: string;
  short: string;
  league: string;
  tier: number;
  gender: "Damen" | "Herren" | "Jugend" | "Mixed";
  description: string;
  accent: "red" | "black" | "gold";
  image?: string;
  trainingTimes?: string[];
  trainerName?: string;
  highlights?: string[];
};

/**
 * Mannschaften der Saison 2026/27.
 * Struktur und Ligen nach der Vereinsübersicht vom 16.09.2026: die Nummerierung
 * läuft durch bis in den Jugendbereich, die 8. bis 11. sind Jugendmannschaften.
 * Teams ohne `image` warten noch auf ihr Mannschaftsfoto – die Karten zeigen
 * so lange die Initialen.
 */
export const teams: TeamEntry[] = [
  {
    slug: "1-mannschaft",
    name: "1. Damen",
    short: "SCU I",
    league: "Sparda 2. Liga Pro",
    tier: 1,
    gender: "Damen",
    description:
      "Unser Aushängeschild – talentierte, in der eigenen Jugend ausgebildete Spielerinnen auf höchstem nationalen Niveau.",
    accent: "red",
    image: "/team/1-damen-2026-27.jpg",
  },
  {
    slug: "2-mannschaft",
    name: "2. Damen",
    short: "SCU II",
    league: "3. Liga West",
    tier: 2,
    gender: "Damen",
    description:
      "Der Unterbau der Ersten – durchlässig nach oben und Sprungbrett für Talente aus der eigenen Jugend.",
    accent: "black",
    image: "/team/groups/2-mannschaft.jpg",
  },
  {
    slug: "3-mannschaft",
    name: "3. Damen",
    short: "SCU III",
    league: "Oberliga",
    tier: 3,
    gender: "Damen",
    description: "Erfahrung trifft Nachwuchs – Oberliga-Volleyball auf hohem Niveau und enges Bindeglied zur 2. Mannschaft.",
    accent: "gold",
    trainingTimes: ["Dienstag 20:00 – 22:00 Uhr", "Donnerstag 20:00 – 22:00 Uhr"],
  },
  {
    slug: "4-mannschaft",
    name: "4. Damen",
    short: "SCU IV",
    league: "Landesliga",
    tier: 4,
    gender: "Damen",
    description: "Ambitionierter Volleyball mit Spaß am Wettkampf – Landesliga-Niveau mit jungem Kader.",
    accent: "black",
    image: "/team/groups/4-mannschaft.jpg",
    trainingTimes: ["Montag 19:30 – 21:30 Uhr", "Mittwoch 20:00 – 22:00 Uhr"],
  },
  {
    slug: "5-mannschaft",
    name: "5. Damen",
    short: "SCU V",
    league: "Bezirksklasse",
    tier: 5,
    gender: "Damen",
    description: "Volleyball für alle Leistungsstufen – von Einsteigerinnen bis Erfahrenen, mit großer Trainingsbeteiligung.",
    accent: "black",
    trainingTimes: ["Dienstag 19:30 – 21:30 Uhr"],
  },
  {
    slug: "6-mannschaft",
    name: "6. Damen",
    short: "SCU VI",
    league: "Bezirksklasse",
    tier: 6,
    gender: "Damen",
    description: "Teamgeist und Spaß am Sport stehen im Vordergrund – Bezirksklasse mit familiärer Atmosphäre.",
    accent: "black",
    image: "/team/groups/6-mannschaft.jpg",
    trainingTimes: ["Mittwoch 19:00 – 21:00 Uhr"],
  },
  {
    slug: "7-mannschaft",
    name: "7. Damen",
    short: "SCU VII",
    league: "Kreisklasse B",
    tier: 7,
    gender: "Damen",
    description: "Breitensport-Team mit großer Leidenschaft – ideal für ambitionierte Hobbyspielerinnen.",
    accent: "black",
    image: "/team/groups/7-mannschaft.jpg",
    trainingTimes: ["Donnerstag 19:00 – 21:00 Uhr"],
  },
  {
    slug: "8-mannschaft",
    name: "8. Mannschaft",
    short: "SCU VIII",
    league: "U14 Kreisliga",
    tier: 8,
    gender: "Jugend",
    description: "Unser Bundesliga-Unterbau von morgen – strukturierte Talentförderung mit professionellem Trainerteam.",
    accent: "red",
    trainingTimes: ["Dienstag 17:30 – 19:30 Uhr", "Freitag 17:00 – 19:00 Uhr"],
  },
  {
    slug: "9-mannschaft",
    name: "9. Mannschaft",
    short: "SCU IX",
    league: "U13 Kreisliga",
    tier: 9,
    gender: "Jugend",
    description: "Talente auf ihrem Weg in die großen Mannschaften – mit Spielfreude und ersten Wettkampferfahrungen.",
    accent: "red",
    trainingTimes: ["Montag 17:00 – 18:30 Uhr", "Donnerstag 17:00 – 18:30 Uhr"],
  },
  {
    slug: "10-mannschaft",
    name: "10. Mannschaft",
    short: "SCU X",
    league: "U13 Kreisliga",
    tier: 10,
    gender: "Jugend",
    description: "Talente auf ihrem Weg in die großen Mannschaften – mit Spielfreude und ersten Wettkampferfahrungen.",
    accent: "red",
    // Gemeinsames Mannschaftsfoto der 10. und 11.
    image: "/team/groups/10-11-mannschaft.jpg",
  },
  {
    slug: "11-mannschaft",
    name: "11. Mannschaft",
    short: "SCU XI",
    league: "U13 Kreisliga",
    tier: 11,
    gender: "Jugend",
    description: "Talente auf ihrem Weg in die großen Mannschaften – mit Spielfreude und ersten Wettkampferfahrungen.",
    accent: "red",
    // Gemeinsames Mannschaftsfoto der 10. und 11.
    image: "/team/groups/10-11-mannschaft.jpg",
  },
  {
    slug: "minis",
    name: "Minis",
    short: "Minis",
    league: "Mini-Volleyball",
    tier: 12,
    gender: "Jugend",
    description: "Erste Ballkontakte, erste Erfolge, erster Vereinssport – spielerischer Einstieg ins Volleyball.",
    accent: "gold",
    image: "/team/groups/minis.jpg",
    trainingTimes: ["Mittwoch 16:30 – 17:45 Uhr"],
  },
  // Stehen nicht in der Ligaübersicht des Vereins – Rückmeldung dazu steht aus.
  {
    slug: "mini-minis",
    name: "Mini-Minis",
    short: "Mini-Minis",
    league: "Ball-Schule",
    tier: 13,
    gender: "Jugend",
    description: "Koordination & Spielfreude für unsere Jüngsten – die ersten Schritte mit dem Ball.",
    accent: "gold",
    image: "/team/groups/minis.jpg",
    trainingTimes: ["Freitag 16:00 – 17:00 Uhr"],
  },
  {
    slug: "hobbyliga",
    name: "Hobbyliga",
    short: "Hobbyliga",
    league: "Hobbyliga Grafschaft",
    tier: 14,
    gender: "Mixed",
    description: "Gemischtes Team für ambitionierte Hobbyspieler:innen – regelmäßiger Spielbetrieb in der Hobbyliga Grafschaft.",
    accent: "black",
    image: "/team/groups/hobbyliga.jpg",
  },
  {
    slug: "hobby",
    name: "Hobby",
    short: "Hobby",
    league: "Freizeit-Volleyball",
    tier: 15,
    gender: "Mixed",
    description: "Freizeit-Volleyball im gemischten Team – Spaß am Sport, ohne Liga-Druck, mit festen Trainingszeiten.",
    accent: "gold",
    image: "/team/groups/hobby.jpg",
  },
];
