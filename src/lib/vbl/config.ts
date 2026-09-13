/**
 * Zugang zur VBL-Schnittstelle.
 *
 * STAND 13.09.2026 – noch nicht scharf geschaltet:
 * Der API-Key ist beantragt, aber noch nicht da. Ausserdem ist die Quelle noch
 * zu klaeren: Die uns genannten Wettbewerbs-IDs sind numerisch (Sparda 2. Liga
 * Pro = 781345076) und gehoeren zur klassischen SAMS-XML-Schnittstelle. Das Wiki
 * unter wiki.sams-server.de dokumentiert inzwischen eine REST-API v2, die mit
 * UUIDs statt numerischen IDs arbeitet (GET /leagues/{uuid}/rankings,
 * GET /league-matches?for-league=...). Beides existiert parallel.
 *
 * Zum Scharfschalten fehlt:
 *   1. VBL_API_KEY als Environment-Variable (Vercel, alle Umgebungen)
 *   2. Entweder die Doku der XML-Schnittstelle (Aufbau der Request-URL)
 *      oder die League-UUID der Sparda 2. Liga Pro fuer die REST-API v2
 */

/** Saisonabhaengige Wettbewerbs-IDs (matchSeriesId) laut VBL, Saison 2026/27. */
export const WETTBEWERBE = {
  "1-bundesliga-frauen": 781343569,
  "1-bundesliga-maenner": 781342965,
  "sparda-2-liga-pro": 781345076,
  "2-bundesliga-frauen-nord": 781344722,
  "2-bundesliga-frauen-sued": 781345538,
  "2-bundesliga-maenner-nord": 781344003,
  "2-bundesliga-maenner-sued": 781344363,
} as const;

/** Liga der 1. Damen. */
export const EIGENER_WETTBEWERB = WETTBEWERBE["sparda-2-liga-pro"];

/** Name der eigenen Mannschaft, wie er in den VBL-Daten steht. */
export const EIGENES_TEAM = "SCU Emlichheim";

export const API_BASIS = "https://www.volleyball-bundesliga.de/api/v2";

/**
 * Wie lange Tabelle und Ergebnisse zwischengespeichert werden.
 * Die Schnittstelle ist auf 5 Anfragen pro Sekunde und ein Tageslimit je
 * Schluessel begrenzt – ohne Cache waere das Limit schnell erreicht.
 */
export const CACHE_SEKUNDEN = 60 * 15;

export function apiKey() {
  return process.env.VBL_API_KEY;
}

export function istKonfiguriert() {
  return Boolean(apiKey());
}
