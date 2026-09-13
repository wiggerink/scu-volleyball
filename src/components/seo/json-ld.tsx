import { site } from "@/lib/site";
import { roster, staff } from "@/lib/roster";
import { schedule } from "@/lib/schedule";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: site.name,
    alternateName: "SCU Emlichheim",
    url: site.url,
    logo: `${site.url}/logos/scu-logo.png`,
    sport: "Volleyball",
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.venue.region,
      addressCountry: "DE",
    },
    location: {
      "@type": "SportsActivityLocation",
      name: site.venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressCountry: "DE",
      },
    },
    email: site.contact.email,
    description: site.description,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SportsTeamJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: `${site.shortName} – 1. Damen`,
    sport: "Volleyball",
    url: `${site.url}/teams/1-mannschaft`,
    logo: `${site.url}/logos/scu-logo.png`,
    memberOf: {
      "@type": "SportsOrganization",
      name: site.league,
      url: "https://www.volleyball-bundesliga.de/",
    },
    coach: staff
      .filter((s) => s.role.toLowerCase().includes("trainer"))
      .map((c) => ({ "@type": "Person", name: c.name, jobTitle: c.role })),
    athlete: roster.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.position,
      nationality: p.nationality,
      height: `${p.heightCm} cm`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Die Saisonspiele als SportsEvent.
 *
 * Damit kann Google "nächstes Spiel SCU Emlichheim" direkt beantworten und die
 * Partien als Termin-Rich-Result ausspielen. Quelle sind dieselben Daten wie
 * für die Spielplan-Tabelle, es kann also nichts auseinanderlaufen.
 */
export function MatchesJsonLd() {
  const data = schedule.map((m) => ({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${m.home} – ${m.away}`,
    // Kalendertag plus Anwurfzeit in deutscher Ortszeit; der Offset wechselt
    // mit der Sommerzeit, deshalb aus dem Datum abgeleitet.
    startDate: `${m.date}T${m.time}:00${sommerzeit(m.date) ? "+02:00" : "+01:00"}`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    sport: "Volleyball",
    location: {
      "@type": "Place",
      name: m.venue,
      address: { "@type": "PostalAddress", addressLocality: m.city, addressCountry: "DE" },
    },
    homeTeam: { "@type": "SportsTeam", name: m.home },
    awayTeam: { "@type": "SportsTeam", name: m.away },
    organizer: { "@type": "SportsOrganization", name: "Volleyball Bundesliga", url: "https://www.volleyball-bundesliga.de/" },
    url: `${site.url}/teams/1-mannschaft#spielplan`,
    ...(m.isHome ? { offers: { "@type": "Offer", url: site.ticketsUrl, availability: "https://schema.org/InStock" } } : {}),
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Mitteleuropäische Sommerzeit: letzter Sonntag im März bis letzter Sonntag im Oktober. */
function sommerzeit(isoTag: string) {
  const d = new Date(`${isoTag}T12:00:00Z`);
  const jahr = d.getUTCFullYear();
  const letzterSonntag = (monat: number) => {
    const ende = new Date(Date.UTC(jahr, monat + 1, 0));
    return new Date(Date.UTC(jahr, monat, ende.getUTCDate() - ende.getUTCDay()));
  };
  return d >= letzterSonntag(2) && d < letzterSonntag(9);
}
