import "server-only";
import { API_BASIS, CACHE_SEKUNDEN, apiKey, istKonfiguriert } from "./config";

export { WETTBEWERBE, EIGENER_WETTBEWERB, EIGENES_TEAM, istKonfiguriert } from "./config";

/** Eine Zeile der Ligatabelle, unabhaengig davon, woher sie kommt. */
export type TabellenZeile = {
  platz: number;
  team: string;
  spiele: number;
  siege: number;
  niederlagen: number;
  punkte: number;
  saetzeFuer: number;
  saetzeGegen: number;
  /** true fuer die eigene Mannschaft – die Tabelle hebt die Zeile hervor. */
  eigen: boolean;
};

/** Ein gespieltes Spiel mit Ergebnis. */
export type Ergebnis = {
  date: string;
  home: string;
  away: string;
  satzHeim: number;
  satzGast: number;
  /** Satzergebnisse als "25:21" usw., soweit geliefert. */
  saetze?: string[];
};

type Abfrage = { pfad: string; suche?: Record<string, string> };

/**
 * Eine Abfrage gegen die VBL-Schnittstelle.
 *
 * Gibt `null` zurueck, wenn kein Schluessel gesetzt ist oder die Abfrage
 * scheitert – die Seite soll dadurch nie kaputtgehen, sondern den Abschnitt
 * einfach weglassen. Fehler landen im Serverlog.
 */
async function hole<T>({ pfad, suche }: Abfrage): Promise<T | null> {
  const key = apiKey();
  if (!key) return null;

  const url = new URL(`${API_BASIS}${pfad}`);
  for (const [k, v] of Object.entries(suche ?? {})) url.searchParams.set(k, v);

  try {
    const res = await fetch(url, {
      headers: { "X-Api-Key": key, Accept: "application/json" },
      next: { revalidate: CACHE_SEKUNDEN },
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

/**
 * Tabelle der eigenen Liga.
 *
 * NOCH NICHT ANGESCHLOSSEN: Sobald der Schluessel da ist und feststeht, ob die
 * XML-Schnittstelle oder die REST-API v2 genutzt wird, wird hier die Abfrage
 * eingesetzt und das Ergebnis auf TabellenZeile gemappt. Bis dahin liefert die
 * Funktion null, und die Seite blendet den Tabellenabschnitt aus.
 */
export async function ligaTabelle(): Promise<TabellenZeile[] | null> {
  if (!istKonfiguriert()) return null;
  // Fuer die REST-API v2 waere es:
  //   const daten = await hole<...>({ pfad: `/leagues/${LEAGUE_UUID}/rankings` });
  // Die League-UUID fehlt noch, siehe config.ts.
  void hole;
  return null;
}

/** Gespielte Partien der eigenen Mannschaft. Noch nicht angeschlossen, siehe ligaTabelle. */
export async function ergebnisse(): Promise<Ergebnis[] | null> {
  if (!istKonfiguriert()) return null;
  return null;
}
