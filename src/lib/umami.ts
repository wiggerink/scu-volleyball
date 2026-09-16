/**
 * Umami Cloud - Website "scuvolleyball.de".
 * Die Website-ID ist öffentlich (sie steht in jedem Seitenquelltext) und darf
 * deshalb im Code stehen. Per Umgebungsvariable überschreibbar.
 */
export const UMAMI_WEBSITE_ID =
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "17a40e86-c639-498c-a200-1547ecdfeb0b";

/** Herkunft des Skripts und Ziel der Messdaten (Umami Cloud). */
export const UMAMI_SCRIPT_URL = process.env.UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";
export const UMAMI_API_URL = (process.env.UMAMI_API_URL ?? "https://gateway.umami.is").replace(/\/$/, "");
