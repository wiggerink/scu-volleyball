export type PlayerLite = {
  name: string;
  position: string;
  number?: number;
  image?: string;
};

export type StaffLite = {
  name: string;
  role: string;
  image?: string;
};

export const roster2: PlayerLite[] = [
  { name: "Alena Klok",           position: "Zuspiel" },
  { name: "Anouk Wemmenhove",     position: "Zuspiel" },
  { name: "Janine van der Zwaan", position: "Zuspiel" },
  { name: "Kira Gosink",          position: "Mittelblock" },
  { name: "Lisann Wilde",         position: "Mittelblock" },
  { name: "Jorina Rakers",        position: "Mittelblock" },
  { name: "Rebecca Harms-Ensink", position: "Mittelblock" },
  { name: "Anna Börgeling",       position: "Mittelblock" },
  { name: "Loreen Poll",          position: "Angriff" },
  { name: "Julia Koenders",       position: "Angriff" },
  { name: "Dana Volkers",         position: "Angriff" },
  { name: "Celina Smit",          position: "Angriff" },
  { name: "Caja Peters",          position: "Angriff" },
  { name: "Majela Dasler",        position: "Diagonalangriff" },
  { name: "Lisa Hansmann",        position: "Universal" },
  { name: "Anna Meyerink",        position: "Libera" },
  { name: "Jana Oudehinkel",      position: "Libera" },
];

export const staff2: StaffLite[] = [
  { name: "Andrea Berg", role: "Trainerin" },
];
