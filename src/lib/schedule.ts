export type Match = {
  /** ISO-Datum (YYYY-MM-DD) */
  date: string;
  /** Anwurfzeit "HH:MM" */
  time: string;
  matchday: number;
  home: string;
  away: string;
  venue: string;
  city: string;
  isHome: boolean;
};

/**
 * Spielplan der 1. Damen, Saison 2026/27 (Sparda 2. Liga Pro).
 * Quelle: VBL-CSV-Export "Spielplan_Sparda_2._Liga_Pro", Stand 13.09.2026.
 * Chronologisch sortiert - die VBL-Spieltagsnummern laufen durch vorgezogene
 * Partien (Spieltag 18, 20, 23) bewusst nicht fortlaufend.
 */
export const schedule: Match[] = [
  { date: "2026-09-20", time: "16:00", matchday:  1, home: "SCU Emlichheim"                  , away: "DSHS SnowTrex Köln"              , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2026-10-04", time: "15:00", matchday:  2, home: "TV Planegg-Krailling"            , away: "SCU Emlichheim"                  , venue: "Feodor-Lynen-Gymnasium"                 , city: "Planegg", isHome: false },
  { date: "2026-10-17", time: "16:00", matchday:  3, home: "Eintracht Spontent Düsseldorf"   , away: "SCU Emlichheim"                  , venue: "Sporthalle Louisengymnasium"            , city: "Düsseldorf", isHome: false },
  { date: "2026-10-31", time: "16:00", matchday:  4, home: "SCU Emlichheim"                  , away: "BayerVolleys Leverkusen"         , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2026-11-01", time: "16:00", matchday: 18, home: "SCU Emlichheim"                  , away: "SV Lohhof"                       , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2026-11-15", time: "16:00", matchday:  5, home: "TV Waldgirmes"                   , away: "SCU Emlichheim"                  , venue: "Sporthalle der Lahntalschule Atzbach"   , city: "Lahnau", isHome: false },
  { date: "2026-11-22", time: "16:00", matchday:  6, home: "SCU Emlichheim"                  , away: "ESA Grimma Volleys"              , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2026-12-06", time: "16:00", matchday:  8, home: "SCU Emlichheim"                  , away: "NawaRo Straubing"                , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2026-12-12", time: "17:00", matchday:  9, home: "Sparkassen Wildcats Stralsund"   , away: "SCU Emlichheim"                  , venue: "Diesterweg-Sporthalle"                  , city: "Stralsund", isHome: false },
  { date: "2026-12-20", time: "16:00", matchday: 10, home: "SCU Emlichheim"                  , away: "Neuseenland-Volleys Markkleeberg", venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-01-09", time: "18:00", matchday: 11, home: "VfL Oythe"                       , away: "SCU Emlichheim"                  , venue: "SH Gymnasium Antonianum Vechta"         , city: "Vechta", isHome: false },
  { date: "2027-01-16", time: "19:00", matchday: 12, home: "DSHS SnowTrex Köln"              , away: "SCU Emlichheim"                  , venue: "Deutsche Sporthochschule Köln, Halle 22", city: "Köln", isHome: false },
  { date: "2027-01-24", time: "15:00", matchday: 13, home: "SCU Emlichheim"                  , away: "TV Planegg-Krailling"            , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-01-30", time: "16:00", matchday: 23, home: "SCU Emlichheim"                  , away: "VCO Dresden"                     , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-01-31", time: "16:00", matchday: 14, home: "SCU Emlichheim"                  , away: "Eintracht Spontent Düsseldorf"   , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-02-06", time: "19:30", matchday: 15, home: "BayerVolleys Leverkusen"         , away: "SCU Emlichheim"                  , venue: "Ostermann-Arena"                        , city: "Leverkusen", isHome: false },
  { date: "2027-02-14", time: "16:00", matchday: 16, home: "SCU Emlichheim"                  , away: "TV Waldgirmes"                   , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-02-20", time: "18:00", matchday: 17, home: "ESA Grimma Volleys"              , away: "SCU Emlichheim"                  , venue: "Muldentalhalle"                         , city: "Grimma", isHome: false },
  { date: "2027-03-20", time: "19:00", matchday:  7, home: "SV Lohhof"                       , away: "SCU Emlichheim"                  , venue: "Sporthalle der FOS/BOS Unterschleißheim", city: "Unterschleißheim", isHome: false },
  { date: "2027-03-21", time: "15:00", matchday: 19, home: "NawaRo Straubing"                , away: "SCU Emlichheim"                  , venue: "turmair Volleyballarena"                , city: "Straubing", isHome: false },
  { date: "2027-03-29", time: "16:00", matchday: 20, home: "SCU Emlichheim"                  , away: "Sparkassen Wildcats Stralsund"   , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
  { date: "2027-04-10", time: "17:00", matchday: 23, home: "VCO Dresden"                     , away: "SCU Emlichheim"                  , venue: "Schulsporthalle des Sportschulzentrum"  , city: "Dresden", isHome: false },
  { date: "2027-04-11", time: "15:00", matchday: 21, home: "Neuseenland-Volleys Markkleeberg", away: "SCU Emlichheim"                  , venue: "Neuseenlandhalle"                       , city: "Markkleeberg", isHome: false },
  { date: "2027-04-24", time: "19:00", matchday: 22, home: "SCU Emlichheim"                  , away: "VfL Oythe"                       , venue: "Vechtetalhalle"                         , city: "Emlichheim", isHome: true  },
];

export const scheduleSeason = "2026/27";
export const scheduleUpdated = "2026-09-13";

/** Kickoff-Zeitpunkt eines Spiels als Date (lokale Hallenzeit, für Vergleiche ausreichend genau). */
function kickoff(m: Match) {
  return new Date(`${m.date}T${m.time}:00`);
}

/**
 * Nächstes Heimspiel ab `now`.
 *
 * `now === null` liefert bewusst das erste Heimspiel der Saison: Server und
 * Client rendern damit im ersten Durchgang denselben Wert (keine Hydration-
 * Abweichung), der echte Wert kommt nach dem Mount aus der Browser-Uhr.
 * Ist die Saison durch, bleibt das letzte Heimspiel stehen.
 */
export function nextHomeMatch(now: number | null): Match {
  const homeGames = schedule.filter((m) => m.isHome);
  if (now === null) return homeGames[0];
  return homeGames.find((m) => kickoff(m).getTime() >= now) ?? homeGames[homeGames.length - 1];
}

/** Erstes Spiel der Saison – Grundlage für die Saisonstart-Angabe. */
export const seasonOpener: Match = schedule[0];
