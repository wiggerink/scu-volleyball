export type Player = {
  name: string;
  number: number;
  position: string;
  heightCm: number;
  birthYear: number;
  nationality: string;
  image: string;
};

export type Staff = {
  name: string;
  role: string;
  image: string;
};

/**
 * Kader der 1. Damen, Saison 2026/27.
 * Quelle: offizieller VBL-Mannschaftskader (Rückennummer, Position, Größe,
 * Geburtsdatum, Nationalität), abgerufen am 13.09.2026.
 * Die Porträts stammen aus dem Shooting Vechtetalhalle 26/27; die Zuordnung
 * Foto -> Spielerin läuft über die Rückennummer auf dem Trikot.
 */
export const roster: Player[] = [
  { name: "Leonie Klassen",       number: 1,  position: "Libera",          heightCm: 168, birthYear: 2002, nationality: "DE", image: "/team/2026-27/01-leonie-klassen.jpg" },
  { name: "Nina Herrmann",        number: 2,  position: "Außenangriff",    heightCm: 174, birthYear: 2005, nationality: "DE", image: "/team/2026-27/02-nina-herrmann.jpg" },
  { name: "Hannah Tranel",        number: 3,  position: "Mittelblock",     heightCm: 183, birthYear: 2005, nationality: "DE", image: "/team/2026-27/03-hannah-tranel.jpg" },
  { name: "Lina Hanstede",        number: 4,  position: "Diagonalangriff", heightCm: 180, birthYear: 2004, nationality: "NL", image: "/team/2026-27/04-lina-hanstede.jpg" },
  { name: "Christin große Brüna", number: 5,  position: "Libera",          heightCm: 170, birthYear: 2007, nationality: "DE", image: "/team/2026-27/05-christin-grosse-bruena.jpg" },
  { name: "Jana Brüning",         number: 7,  position: "Zuspiel",         heightCm: 182, birthYear: 2002, nationality: "DE", image: "/team/2026-27/07-jana-bruening.jpg" },
  { name: "Emily Tranel",         number: 8,  position: "Mittelblock",     heightCm: 185, birthYear: 2005, nationality: "DE", image: "/team/2026-27/08-emily-tranel.jpg" },
  { name: "Michelle Fenske",      number: 9,  position: "Außenangriff",    heightCm: 181, birthYear: 2006, nationality: "DE", image: "/team/2026-27/09-michelle-fenske.jpg" },
  { name: "Marie Maathuis",       number: 10, position: "Mittelblock",     heightCm: 183, birthYear: 2002, nationality: "DE", image: "/team/2026-27/10-marie-maathuis.jpg" },
  { name: "Noek Hofhuis",         number: 11, position: "Zuspiel",         heightCm: 180, birthYear: 2006, nationality: "NL", image: "/team/2026-27/11-noek-hofhuis.jpg" },
  { name: "Lona Volkers",         number: 15, position: "Außenangriff",    heightCm: 178, birthYear: 2000, nationality: "DE", image: "/team/2026-27/15-lona-volkers.jpg" },
];

export const staff: Staff[] = [
  { name: "Axel Büring",            role: "Cheftrainer",       image: "/team/Axel-Buering.jpg" },
  { name: "Konstantin von Ditfurth",role: "Co-Trainer",        image: "/team/Konstantin-von-Ditfurth.jpg" },
  { name: "Erik Heerkes",           role: "Co-Trainer",        image: "/team/Erik-Heerkes.jpg" },
  { name: "Heike Schiphouwer",      role: "Physiotherapie",    image: "/team/Heike-Schiphower.jpg" },
  { name: "Ilka Thesing",           role: "Physiotherapie",    image: "/team/Ilka-Thesing.jpg" },
];
