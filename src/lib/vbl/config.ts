/**
 * Zugang zur VBL-REST-API (SAMS).
 *
 * Der Schlüssel gilt für beide Schnittstellen des Verbands: die REST-API mit
 * den festen Daten (Saisons, Ligen, Spielpläne, Tabellen) und den Distributor
 * für Live-Daten einzelner Spiele. Er liegt in VBL_API_KEY und gehört niemals
 * in den Quelltext.
 *
 * Wichtig: Die API antwortet in application/hal+json. Mit Accept:
 * application/json quittiert sie jede Anfrage mit 406.
 */

export const API_BASIS = "https://www.volleyball-bundesliga.de/api/v2";

/** Sparda 2. Liga Pro, Saison 2026/27 – ermittelt über /leagues, 13 Teams. */
export const LIGA_UUID = "731a6188-6f1f-4577-9a4b-78a617cf29e1";

/** SCU Emlichheim in dieser Liga. */
export const TEAM_UUID = "745cd6f2-66f6-42a1-a7da-36588564719c";

/** Saison 2026/27. */
export const SAISON_UUID = "838de94c-d738-4e44-9d6e-fe979af75e62";

/** Name der eigenen Mannschaft, wie ihn die VBL-Daten führen. */
export const EIGENES_TEAM = "SCU Emlichheim";

/**
 * Wie lange Tabelle und Ergebnisse zwischengespeichert werden.
 * Die Schnittstelle ist auf 5 Anfragen pro Sekunde und ein Tageslimit je
 * Schlüssel begrenzt – ohne Cache wäre das Limit schnell erreicht.
 */
export const CACHE_SEKUNDEN = 60 * 15;

export function apiKey() {
  return process.env.VBL_API_KEY;
}

export function istKonfiguriert() {
  return Boolean(apiKey());
}
