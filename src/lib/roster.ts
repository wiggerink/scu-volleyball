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

export const roster: Player[] = [
  { name: "Leonie Klassen",        number: 1,  position: "Libera",           heightCm: 168, birthYear: 2002, nationality: "DE", image: "/team/Leonie-Klassen.jpg" },
  { name: "Nina Herrmann",         number: 2,  position: "Außenangriff",     heightCm: 174, birthYear: 2005, nationality: "DE", image: "/team/Nina-Herrmann.jpg" },
  { name: "Hannah Tranel",         number: 3,  position: "Mittelblock",      heightCm: 181, birthYear: 2005, nationality: "DE", image: "/team/Hannah-Tranel.jpg" },
  { name: "Christin große Brüna",  number: 5,  position: "Libera",           heightCm: 170, birthYear: 2007, nationality: "DE", image: "/team/Christin-grosse-Bruena.jpg" },
  { name: "Pia Schweitzer",        number: 6,  position: "Zuspiel",          heightCm: 169, birthYear: 2008, nationality: "DE", image: "/team/Pia-Schweitzer.jpg" },
  { name: "Jana Brüning",          number: 7,  position: "Zuspiel",          heightCm: 182, birthYear: 2002, nationality: "DE", image: "/team/Jana-Bruening.jpg" },
  { name: "Emily Tranel",          number: 8,  position: "Mittelblock",      heightCm: 183, birthYear: 2005, nationality: "DE", image: "/team/Emily-Tranel.jpg" },
  { name: "Marie Maathuis",        number: 10, position: "Mittelblock",      heightCm: 183, birthYear: 2002, nationality: "DE", image: "/team/Marie-Maathuis.jpg" },
  { name: "Lisa Louwrink",         number: 12, position: "Diagonalangriff",  heightCm: 188, birthYear: 2004, nationality: "NL", image: "/team/Lisa-Louwrink.jpg" },
  { name: "Lona Volkers",          number: 15, position: "Außenangriff",     heightCm: 178, birthYear: 2000, nationality: "DE", image: "/team/Lona-Volkes.jpg" },
];

export const staff: Staff[] = [
  { name: "Axel Büring",            role: "Cheftrainer",       image: "/team/Axel-Buering.jpg" },
  { name: "Konstantin von Ditfurth",role: "Co-Trainer",        image: "/team/Konstantin-von-Ditfurth.jpg" },
  { name: "Erik Heerkes",           role: "Co-Trainer",        image: "/team/Erik-Heerkes.jpg" },
  { name: "Heike Schiphouwer",      role: "Physiotherapie",    image: "/team/Heike-Schiphower.jpg" },
  { name: "Ilka Thesing",           role: "Physiotherapie",    image: "/team/Ilka-Thesing.jpg" },
];
