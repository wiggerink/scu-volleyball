import { site } from "@/lib/site";
import { roster, staff } from "@/lib/roster";

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
