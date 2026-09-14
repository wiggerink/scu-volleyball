import { spielplan2AlsIcs } from "@/lib/ics";

/**
 * Kalender-Feed der 2. Damen unter /spielplan-2-damen.ics
 *
 * Abonnieren: webcal://scuvolleyball.de/spielplan-2-damen.ics
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(spielplan2AlsIcs(), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="scu-emlichheim-2-damen.ics"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
