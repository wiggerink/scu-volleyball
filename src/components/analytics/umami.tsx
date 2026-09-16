import Script from "next/script";
import { site } from "@/lib/site";
import { UMAMI_WEBSITE_ID } from "@/lib/umami";

/**
 * Besucherstatistik mit Umami - ohne Cookies und ohne Einwilligungsbanner.
 *
 * Skript und Messdaten laufen über die eigene Domain (/stats/…) und werden
 * serverseitig an Umami weitergereicht (siehe rewrites in next.config.ts).
 * Der Browser der Besucher nimmt dadurch keinen Kontakt zu Umami auf.
 *
 * Gezählt wird nur auf der echten Domain - Vorschau-Deployments und
 * localhost werden nicht erfasst.
 */
export function Umami() {
  const websiteId = UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  const host = new URL(site.url).hostname;
  const domains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS ?? `${host},www.${host}`;

  return (
    <Script
      src="/stats/script.js"
      strategy="afterInteractive"
      data-website-id={websiteId}
      // Messdaten an die eigene Domain statt an Umami direkt
      data-host-url="/stats"
      data-domains={domains}
      data-do-not-track="true"
    />
  );
}
