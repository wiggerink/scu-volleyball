import type { NextConfig } from "next";
import { UMAMI_API_URL, UMAMI_SCRIPT_URL, UMAMI_WEBSITE_ID } from "./src/lib/umami";

const nextConfig: NextConfig = {
  images: {
    // Kein 3840px-Rendering: grosse Erstoptimierungen liefen auf Vercel in Timeouts
    // (kaputte Bilder direkt nach jedem Deploy, bis der Bild-Cache warm war)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
  /**
   * Die Jugendmannschaften laufen seit der Saison 2026/27 in der
   * Vereinsnummerierung mit. Die alten Adressen bleiben gültig, damit
   * bestehende Links und Suchtreffer nicht ins Leere laufen.
   */
  /**
   * Umami über die eigene Domain: der Browser lädt /stats/script.js und
   * sendet an /stats/api/send, der Server reicht beides an Umami weiter.
   */
  async rewrites() {
    if (!UMAMI_WEBSITE_ID) return [];
    return [
      { source: "/stats/script.js", destination: UMAMI_SCRIPT_URL },
      { source: "/stats/api/send", destination: `${UMAMI_API_URL}/api/send` },
    ];
  },
  async redirects() {
    return [
      { source: "/teams/u14", destination: "/teams/8-mannschaft", permanent: true },
      { source: "/teams/u13", destination: "/teams/9-mannschaft", permanent: true },
      // Die früheren Beispielartikel gibt es nicht mehr - die News kommen aus Instagram
      { source: "/news/:slug", destination: "/news", permanent: true },

      /*
       * Adressen der alten WordPress-Seite (scuvolleyball.de bis September 2026),
       * damit Suchtreffer, Lesezeichen und Links von Partnern weiter ankommen.
       * Quelle: Sitemap der alten Seite, 36 Seiten und rund 810 Blogbeiträge.
       */
      // Mannschaften
      { source: "/1-mannschaft", destination: "/teams/1-mannschaft", permanent: true },
      { source: "/2-mannschaft", destination: "/teams/2-mannschaft", permanent: true },
      { source: "/:nr(3|4|5|6|7)-mannschaft", destination: "/teams/:nr-mannschaft", permanent: true },
      { source: "/u14", destination: "/teams/8-mannschaft", permanent: true },
      // alte U13-Seiten: "10.+11." und "12.+13." - heute die 9. bis 11. Mannschaft
      { source: "/10-11-mannschaft", destination: "/teams/10-mannschaft", permanent: true },
      { source: "/12-13-mannschaft", destination: "/teams/9-mannschaft", permanent: true },
      { source: "/minis", destination: "/teams/minis", permanent: true },
      { source: "/mini-minis", destination: "/teams/mini-minis", permanent: true },
      { source: "/hobby", destination: "/teams/hobby", permanent: true },
      { source: "/hobbyliga", destination: "/teams/hobbyliga", permanent: true },
      { source: "/oldies", destination: "/teams", permanent: true },
      { source: "/mannschaften", destination: "/teams", permanent: true },
      // 1. Mannschaft: Spielbetrieb
      { source: "/spielplan", destination: "/teams/1-mannschaft#spielplan", permanent: true },
      { source: "/tabelle", destination: "/teams/1-mannschaft#tabelle", permanent: true },
      { source: "/ergebnisse", destination: "/teams/1-mannschaft#ergebnisse", permanent: true },
      { source: "/tickets", destination: "/teams/1-mannschaft#tickets", permanent: true },
      { source: "/live-uebertragung", destination: "/teams/1-mannschaft#live", permanent: true },
      { source: "/management", destination: "/teams/1-mannschaft#management", permanent: true },
      // Verein & Jugend
      { source: "/scu-emlichheim", destination: "/verein", permanent: true },
      { source: "/scu-volleyball-abteilung", destination: "/verein", permanent: true },
      { source: "/scu-marketing-gmbh", destination: "/impressum", permanent: true },
      { source: "/jugendfoerderung", destination: "/jugend", permanent: true },
      { source: "/jugendfoerderring", destination: "/foerderring", permanent: true },
      { source: "/scu-foerderring", destination: "/foerderring", permanent: true },
      { source: "/cookie-richtlinie-eu", destination: "/datenschutz", permanent: true },
      { source: "/abstimmung-scu-allstars", destination: "/", permanent: true },
      // Blog: Beiträge (/2015/10/03/…), Kategorien, Autoren, Schlagwörter, Seitenzahlen, Feeds
      { source: "/aktuelles", destination: "/news", permanent: true },
      { source: "/:jahr(\\d{4})/:monat(\\d{2})/:tag(\\d{2})/:rest*", destination: "/news", permanent: true },
      { source: "/:jahr(\\d{4})/:monat(\\d{2})", destination: "/news", permanent: true },
      { source: "/category/:rest*", destination: "/news", permanent: true },
      { source: "/tag/:rest*", destination: "/news", permanent: true },
      { source: "/author/:rest*", destination: "/news", permanent: true },
      { source: "/page/:nr(\\d+)", destination: "/news", permanent: true },
      { source: "/feed", destination: "/news", permanent: true },
      { source: "/feed/:rest*", destination: "/news", permanent: true },
    ];
  },
  /** Schutz-Header, die keine Funktion einschränken. HSTS setzt Vercel selbst. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
