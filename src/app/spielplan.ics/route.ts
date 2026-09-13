import { spielplanAlsIcs } from "@/lib/ics";

/**
 * Kalender-Feed unter /spielplan.ics
 *
 * Abonnieren: webcal://scuvolleyball.de/spielplan.ics
 * Einmaliger Download: https://scuvolleyball.de/spielplan.ics
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(spielplanAlsIcs(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      // inline, damit Kalender-Apps den Feed abonnieren statt ihn nur zu speichern
      "Content-Disposition": 'inline; filename="scu-emlichheim-spielplan.ics"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
