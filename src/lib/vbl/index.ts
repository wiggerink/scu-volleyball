import "server-only";
import {
  API_BASIS,
  CACHE_SEKUNDEN,
  EIGENES_TEAM,
  LIGA_UUID,
  TEAM_UUID,
  apiKey,
} from "./config";

export { EIGENES_TEAM, istKonfiguriert } from "./config";

/** Eine Zeile der Ligatabelle. */
export type TabellenZeile = {
  platz: number;
  team: string;
  spiele: number;
  siege: number;
  niederlagen: number;
  punkte: number;
  saetzeFuer: number;
  saetzeGegen: number;
  /** true für die eigene Mannschaft – die Tabelle hebt die Zeile hervor. */
  eigen: boolean;
};

/** Ein gespieltes Spiel mit Ergebnis. */
export type Ergebnis = {
  date: string;
  time: string;
  home: string;
  away: string;
  /** Sätze aus Sicht der Heimmannschaft, z. B. "3:1" */
  saetze: string;
  /** Ballpunkte gesamt, z. B. "98:85" */
  ballpunkte: string;
  einzelsaetze: string[];
  isHome: boolean;
  gewonnen: boolean;
  zuschauer: number | null;
};

/**
 * Eine Abfrage gegen die VBL-Schnittstelle.
 *
 * Gibt `null` zurück, wenn kein Schlüssel gesetzt ist oder die Abfrage
 * scheitert – die Seite soll dadurch nie kaputtgehen, sondern den Abschnitt
 * einfach weglassen. Fehler landen im Serverlog.
 */
async function hole<T>(pfad: string): Promise<T | null> {
  const key = apiKey();
  if (!key) return null;

  try {
    const res = await fetch(`${API_BASIS}${pfad}`, {
      // Die API kennt nur hal+json; mit application/json antwortet sie mit 406.
      headers: { "X-Api-Key": key, Accept: "application/hal+json" },
      next: { revalidate: CACHE_SEKUNDEN, tags: ["vbl"] },
    });
    if (!res.ok) {
      console.error(`VBL-Abfrage ${pfad} fehlgeschlagen: ${res.status} ${res.statusText}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`VBL-Abfrage ${pfad} fehlgeschlagen`, err);
    return null;
  }
}

type RankingRow = {
  teamName: string;
  rank: number;
  matchesPlayed: number;
  points: number;
  wins: number;
  losses: number;
  setWins: number;
  setLosses: number;
};

/** Tabelle der Sparda 2. Liga Pro. */
export async function ligaTabelle(): Promise<TabellenZeile[] | null> {
  const daten = await hole<{ content?: RankingRow[] }>(`/leagues/${LIGA_UUID}/rankings?size=50`);
  const zeilen = daten?.content;
  if (!zeilen?.length) return null;

  return zeilen
    .map((z) => ({
      platz: z.rank,
      team: z.teamName,
      spiele: z.matchesPlayed,
      siege: z.wins,
      niederlagen: z.losses,
      punkte: z.points,
      saetzeFuer: z.setWins,
      saetzeGegen: z.setLosses,
      eigen: z.teamName.includes(EIGENES_TEAM),
    }))
    .sort((a, b) => a.platz - b.platz);
}

type MatchRow = {
  date: string;
  time: string;
  host: string;
  spectators: number | null;
  _embedded?: { team1?: { uuid: string; name: string }; team2?: { uuid: string; name: string } };
  results: null | {
    winner: string;
    setPoints: string;
    ballPoints: string;
    sets?: { ballPoints: string }[];
  };
};

/**
 * Bereits gespielte Partien der eigenen Mannschaft, neueste zuerst.
 * Vor dem ersten Spieltag liefert die Funktion null, der Abschnitt entfällt dann.
 */
export async function ergebnisse(): Promise<Ergebnis[] | null> {
  const daten = await hole<{ content?: MatchRow[] }>(
    `/league-matches?for-team=${TEAM_UUID}&size=60`,
  );
  const spiele = daten?.content?.filter((m) => m.results);
  if (!spiele?.length) return null;

  return spiele
    .map((m) => {
      const heim = m._embedded?.team1;
      const gast = m._embedded?.team2;
      const wirSindHeim = heim?.uuid === TEAM_UUID;
      return {
        date: m.date,
        time: m.time,
        home: heim?.name ?? "",
        away: gast?.name ?? "",
        saetze: m.results!.setPoints,
        ballpunkte: m.results!.ballPoints,
        einzelsaetze: (m.results!.sets ?? []).map((s) => s.ballPoints),
        isHome: wirSindHeim,
        gewonnen: m.results!.winner === TEAM_UUID,
        zuschauer: m.spectators || null,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
