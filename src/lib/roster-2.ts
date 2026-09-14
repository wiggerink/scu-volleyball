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
 * Quelle: dvv-ligen.de, Mannschaftsseite SC Union Emlichheim II
 * (Wettbewerb 116009519, Team 116009552), abgerufen am 14.09.2026.
 * Positionsbezeichnungen an die der 1. Mannschaft angeglichen
 * (Libero -> Libera, Diagonal -> Diagonalangriff).
 */
export const roster2: PlayerLite[] = [
  { name: "Mareen van Münster",   number: 1,  position: "Außenangriff" },
  { name: "Caja Peters",          number: 2,  position: "Diagonalangriff" },
  { name: "Majela Dasler",        number: 3,  position: "Außenangriff" },
  { name: "Saskia Boukamp",       number: 4,  position: "Außenangriff" },
  { name: "Jorina Rakers",        number: 5,  position: "Mittelblock" },
  { name: "Celina Smit",          number: 6,  position: "Diagonalangriff" },
  { name: "Loreen Poll",          number: 7,  position: "Außenangriff" },
  { name: "Lea Plass",            number: 8,  position: "Zuspiel" },
  { name: "Dana Volkers",         number: 10, position: "Außenangriff" },
  { name: "Anouk Wemmenhove",     number: 11, position: "Zuspiel" },
  { name: "Johanna Thewes",       number: 12, position: "Außenangriff" },
  { name: "Pia Jörissen",         number: 13, position: "Libera" },
  { name: "Anna Meyerink",        number: 14, position: "Libera" },
  { name: "Rebecca Harms-Ensink", number: 15, position: "Mittelblock" },
  { name: "Alicia Vennegeerts",   number: 17, position: "Diagonalangriff" },
  // Vom DVV ohne Nummer und Position gemeldet
  { name: "Kira Gosink" },
  { name: "Janine van der Zwaan" },
];

/** Trainerteam laut DVV-Mannschaftsmeldung. */
export const staff2: StaffLite[] = [
  { name: "Andrea Büring",  role: "Trainerin" },
  { name: "Axel Büring",    role: "Trainer" },
  { name: "Michael Lehmann", role: "Trainer" },
  { name: "Claudia Volkers", role: "Trainerin" },
];
