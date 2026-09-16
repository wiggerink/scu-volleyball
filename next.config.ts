import type { NextConfig } from "next";

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
   * Ohne Umami-Konfiguration gibt es die Pfade nicht.
   */
  async rewrites() {
    if (!process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID) return [];
    const skript = process.env.UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";
    const api = (process.env.UMAMI_API_URL ?? "https://gateway.umami.is").replace(/\/$/, "");
    return [
      { source: "/stats/script.js", destination: skript },
      { source: "/stats/api/send", destination: `${api}/api/send` },
    ];
  },
  async redirects() {
    return [
      { source: "/teams/u14", destination: "/teams/8-mannschaft", permanent: true },
      { source: "/teams/u13", destination: "/teams/9-mannschaft", permanent: true },
      // Die früheren Beispielartikel gibt es nicht mehr - die News kommen aus Instagram
      { source: "/news/:slug", destination: "/news", permanent: true },
    ];
  },
};

export default nextConfig;
