export type PlayerLite = {
  name: string;
  /** Fehlt bei Spielerinnen, die der DVV ohne Position führt. */
  position?: string;
  /** Fehlt bei Spielerinnen ohne gemeldete Rückennummer. */
  number?: number;
  image?: string;
};

export type StaffLite = {
  name: string;
  role: string;
  image?: string;
};

/**
 * Kader der 2. Damen, Saison 2026/27 – 3. Liga West.
 * Porträts aus dem Media Day, Zuordnung über die am Trikot abgelesene Nummer.
 * Quelle: dvv-ligen.de, Mannschaftsseite SC Union Emlichheim II
 * (Wettbewerb 116009519, Team 116009552), abgerufen am 14.09.2026.
 * Positionsbezeichnungen an die der 1. Mannschaft angeglichen
 * (Libero -> Libera, Diagonal -> Diagonalangriff).
 */
export const roster2: PlayerLite[] = [
  { name: "Mareen van Münster",   number: 1,  position: "Außenangriff" , image: "/team/2026-27/zweite/01-mareen-van-muenster.jpg" },
  { name: "Caja Peters",          number: 2,  position: "Diagonalangriff" , image: "/team/2026-27/zweite/02-caja-peters.jpg" },
  { name: "Majela Dasler",        number: 3,  position: "Außenangriff" , image: "/team/2026-27/zweite/03-majela-dasler.jpg" },
  { name: "Saskia Boukamp",       number: 4,  position: "Außenangriff" , image: "/team/2026-27/zweite/04-saskia-boukamp.jpg" },
  { name: "Jorina Rakers",        number: 5,  position: "Mittelblock" , image: "/team/2026-27/zweite/05-jorina-rakers.jpg" },
  { name: "Celina Smit",          number: 6,  position: "Diagonalangriff" , image: "/team/2026-27/zweite/06-celina-smit.jpg" },
  { name: "Loreen Poll",          number: 7,  position: "Außenangriff" , image: "/team/2026-27/zweite/07-loreen-poll.jpg" },
  { name: "Lea Plass",            number: 8,  position: "Zuspiel" , image: "/team/2026-27/zweite/08-lea-plass.jpg" },
  { name: "Dana Volkers",         number: 10, position: "Außenangriff" , image: "/team/2026-27/zweite/10-dana-volkers.jpg" },
  { name: "Anouk Wemmenhove",     number: 11, position: "Zuspiel" , image: "/team/2026-27/zweite/11-anouk-wemmenhove.jpg" },
  { name: "Johanna Thewes",       number: 12, position: "Außenangriff" },
  { name: "Pia Jörissen",         number: 13, position: "Libera" , image: "/team/2026-27/zweite/13-pia-joerissen.jpg" },
  { name: "Anna Meyerink",        number: 14, position: "Libera" , image: "/team/2026-27/zweite/14-anna-meyerink.jpg" },
  { name: "Rebecca Harms-Ensink", number: 15, position: "Mittelblock" , image: "/team/2026-27/zweite/15-rebecca-harms-ensink.jpg" },
  { name: "Alicia Vennegeerts",   number: 17, position: "Diagonalangriff" },
  // Vom DVV ohne Nummer und Position gemeldet
  { name: "Kira Gosink" },
  { name: "Janine van der Zwaan" },
];

/**
 * Die DVV-Meldung führt vier Personen als Trainer, das ist aber die
 * Lizenzmeldung. Betreut wird die Mannschaft von Andrea Büring.
 */
export const staff2: StaffLite[] = [
  { name: "Andrea Büring", role: "Trainerin" },
];
