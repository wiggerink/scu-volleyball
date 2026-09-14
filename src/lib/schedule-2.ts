export type Match2 = {
  /** ISO-Datum (YYYY-MM-DD) */
  date: string;
  /** Anwurfzeit "HH:MM" */
  time: string;
  home: string;
  away: string;
  venue: string;
  isHome: boolean;
};

/**
 * Spielplan der 2. Damen, Saison 2026/27 – 3. Liga West.
 * Quelle: dvv-ligen.de, Wettbewerb 116009519, abgerufen am 14.09.2026.
 * 22 Spiele gegen 11 Gegner, chronologisch sortiert.
 */
export const schedule2: Match2[] = [
  { date: "2026-09-20", time: "16:00", home: "FCJ Köln II", away: "SCU Emlichheim II", venue: "Georg-Büchner-Gymnasium", isHome: false },
  { date: "2026-09-27", time: "16:00", home: "SCU Emlichheim II", away: "SV BW Aasee", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-10-03", time: "16:00", home: "SC Spelle-Venhaus", away: "SCU Emlichheim II", venue: "OBS Spelle", isHome: false },
  { date: "2026-10-10", time: "16:00", home: "SCU Emlichheim II", away: "VC SFG Olpe", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-10-17", time: "19:00", home: "BW Lohne", away: "SCU Emlichheim II", venue: "Sporthalle Lohneum", isHome: false },
  { date: "2026-10-24", time: "16:00", home: "SCU Emlichheim II", away: "PTSV Aachen II", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-10-31", time: "16:00", home: "Saxonia Münster", away: "SCU Emlichheim II", venue: "Mathilde-Anneke-Gesamtschule", isHome: false },
  { date: "2026-11-07", time: "16:00", home: "SCU Emlichheim II", away: "TV Gladbeck", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-11-15", time: "16:00", home: "SCU Emlichheim II", away: "SV BW Dingden", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-11-21", time: "19:30", home: "Eiche Horn Bremen", away: "SCU Emlichheim II", venue: "Sporthalle Ronzelenstraße", isHome: false },
  { date: "2026-11-28", time: "16:00", home: "SCU Emlichheim II", away: "TV Cloppenburg", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-12-05", time: "19:00", home: "SCU Emlichheim II", away: "FCJ Köln II", venue: "Vechtetalhalle", isHome: true  },
  { date: "2026-12-12", time: "16:00", home: "SV BW Aasee", away: "SCU Emlichheim II", venue: "Ludwig-Erhard-Berufskolleg", isHome: false },
  { date: "2026-12-19", time: "16:00", home: "SCU Emlichheim II", away: "SC Spelle-Venhaus", venue: "Vechtetalhalle", isHome: true  },
  { date: "2027-01-16", time: "19:00", home: "VC SFG Olpe", away: "SCU Emlichheim II", venue: "SH St. Franziskus-Gymnasium", isHome: false },
  { date: "2027-01-23", time: "16:00", home: "SCU Emlichheim II", away: "BW Lohne", venue: "Vechtetalhalle", isHome: true  },
  { date: "2027-01-31", time: "13:30", home: "PTSV Aachen II", away: "SCU Emlichheim II", venue: "SH Maria Montessori GS", isHome: false },
  { date: "2027-02-13", time: "19:00", home: "TV Gladbeck", away: "SCU Emlichheim II", venue: "Artur-Schirrmacher-Sporthalle", isHome: false },
  { date: "2027-02-20", time: "19:00", home: "SV BW Dingden", away: "SCU Emlichheim II", venue: "Sporthalle Dingden Am Mumbecker Bach", isHome: false },
  { date: "2027-03-07", time: "16:00", home: "SCU Emlichheim II", away: "Eiche Horn Bremen", venue: "Vechtetalhalle", isHome: true  },
  { date: "2027-03-13", time: "16:00", home: "SCU Emlichheim II", away: "Saxonia Münster", venue: "Vechtetalhalle", isHome: true  },
  { date: "2027-03-20", time: "19:00", home: "TV Cloppenburg", away: "SCU Emlichheim II", venue: "Sporthalle Leharstr.", isHome: false },
];

export const schedule2Liga = "3. Liga West";
export const schedule2Updated = "2026-09-14";
