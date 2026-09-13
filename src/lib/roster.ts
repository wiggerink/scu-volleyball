export type Player = {
  name: string;
  /** URL-Segment der Einzelseite unter /teams/1-mannschaft/ */
  slug: string;
  number: number;
  position: string;
  heightCm: number;
  /** Geburtsdatum als ISO-Tag, Quelle VBL-Kader */
  birthDate: string;
  birthYear: number;
  nationality: string;
  /** Porträt aus dem Shooting Vechtetalhalle, 3:4 */
  image: string;
  /** Freisteller von der Autogrammkarte, mit Transparenz */
  cutout: string;

  // Ab hier Angaben, die die Spielerinnen selbst beisteuern muessen.
  // Alles optional: fehlt ein Feld, entfaellt die Zeile im Steckbrief.
  /** Verein vor dem SCU */
  previousClub?: string;
  /** Seit wann im Verein, z. B. "2021" */
  atClubSince?: string;
  /** Wie sie zum Volleyball kam, zwei bis drei Saetze */
  story?: string;
  /** Kurzes Zitat oder Motto */
  quote?: string;
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
  { name: "Leonie Klassen",       slug: "leonie-klassen", number: 1,  position: "Libera",          heightCm: 168, birthDate: "2002-10-07", birthYear: 2002, nationality: "DE", image: "/team/2026-27/01-leonie-klassen.jpg", cutout: "/team/2026-27/karten/01-leonie-klassen.webp" },
  { name: "Nina Herrmann",        slug: "nina-herrmann", number: 2,  position: "Außenangriff",    heightCm: 174, birthDate: "2005-06-26", birthYear: 2005, nationality: "DE", image: "/team/2026-27/02-nina-herrmann.jpg", cutout: "/team/2026-27/karten/02-nina-herrmann.webp" },
  { name: "Hannah Tranel",        slug: "hannah-tranel", number: 3,  position: "Mittelblock",     heightCm: 183, birthDate: "2005-07-16", birthYear: 2005, nationality: "DE", image: "/team/2026-27/03-hannah-tranel.jpg", cutout: "/team/2026-27/karten/03-hannah-tranel.webp" },
  { name: "Lina Hanstede",        slug: "lina-hanstede", number: 4,  position: "Diagonalangriff", heightCm: 180, birthDate: "2004-06-28", birthYear: 2004, nationality: "NL", image: "/team/2026-27/04-lina-hanstede.jpg", cutout: "/team/2026-27/karten/04-lina-hanstede.webp" },
  { name: "Christin große Brüna", slug: "christin-grosse-bruena", number: 5,  position: "Libera",          heightCm: 170, birthDate: "2007-07-26", birthYear: 2007, nationality: "DE", image: "/team/2026-27/05-christin-grosse-bruena.jpg", cutout: "/team/2026-27/karten/05-christin-grosse-bruena.webp" },
  { name: "Jana Brüning",         slug: "jana-bruening", number: 7,  position: "Zuspiel",         heightCm: 182, birthDate: "2002-08-20", birthYear: 2002, nationality: "DE", image: "/team/2026-27/07-jana-bruening.jpg", cutout: "/team/2026-27/karten/07-jana-bruening.webp" },
  { name: "Emily Tranel",         slug: "emily-tranel", number: 8,  position: "Mittelblock",     heightCm: 185, birthDate: "2005-07-16", birthYear: 2005, nationality: "DE", image: "/team/2026-27/08-emily-tranel.jpg", cutout: "/team/2026-27/karten/08-emily-tranel.webp" },
  { name: "Michelle Fenske",      slug: "michelle-fenske", number: 9,  position: "Außenangriff",    heightCm: 181, birthDate: "2006-08-17", birthYear: 2006, nationality: "DE", image: "/team/2026-27/09-michelle-fenske.jpg", cutout: "/team/2026-27/karten/09-michelle-fenske.webp" },
  { name: "Marie Maathuis",       slug: "marie-maathuis", number: 10, position: "Mittelblock",     heightCm: 183, birthDate: "2002-01-06", birthYear: 2002, nationality: "DE", image: "/team/2026-27/10-marie-maathuis.jpg", cutout: "/team/2026-27/karten/10-marie-maathuis.webp" },
  { name: "Noek Hofhuis",         slug: "noek-hofhuis", number: 11, position: "Zuspiel",         heightCm: 180, birthDate: "2006-07-02", birthYear: 2006, nationality: "NL", image: "/team/2026-27/11-noek-hofhuis.jpg", cutout: "/team/2026-27/karten/11-noek-hofhuis.webp" },
  { name: "Lona Volkers",         slug: "lona-volkers", number: 15, position: "Außenangriff",    heightCm: 178, birthDate: "2000-02-28", birthYear: 2000, nationality: "DE", image: "/team/2026-27/15-lona-volkers.jpg", cutout: "/team/2026-27/karten/15-lona-volkers.webp" },
];

export const staff: Staff[] = [
  { name: "Axel Büring",       role: "Cheftrainer",    image: "/team/2026-27/staff-axel-buering.jpg" },
  { name: "Heike Schiphouwer", role: "Physiotherapie", image: "/team/2026-27/staff-heike-schiphouwer.jpg" },
  { name: "Ilka Thesing",      role: "Physiotherapie", image: "/team/2026-27/staff-ilka-thesing.jpg" },
];

export type ManagementMember = {
  name: string;
  /** Ohne Funktion rendert die Karte nur den Namen. */
  role?: string;
  image: string;
};

/** Geschäftsführung der SC UNION Emlichheim Marketing GmbH (siehe Impressum) und Teammanagement. */
export const management: ManagementMember[] = [
  { name: "Thorben Helweg", role: "Geschäftsführer", image: "/team/2026-27/staff-thorben-helweg.jpg" },
  { name: "Tobias Stahl",   role: "Geschäftsführer", image: "/team/2026-27/staff-tobias-stahl.jpg" },
  // Funktion von Silke Reurink noch offen - die VBL fuehrt sie als Co-Trainerin
  { name: "Silke Reurink",  image: "/team/2026-27/staff-silke-reurink.jpg" },
];
