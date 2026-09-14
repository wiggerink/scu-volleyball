import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Ticket, CalendarDays, Navigation, Radio, Car, Accessibility } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { schedule } from "@/lib/schedule";
import { site } from "@/lib/site";
import { Ticketpreise } from "@/components/sections/ticketpreise";

const adresse = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
const kartenSuche = encodeURIComponent(`${site.venue.name}, ${adresse}`);

const spieltag = new Intl.DateTimeFormat("de-DE", {
  weekday: "long",
  day: "2-digit",
  month: "long",
  timeZone: "UTC",
});

export const metadata: Metadata = {
  title: "Vechtetalhalle – Anfahrt & Heimspiele",
  description:
    "Die Vechtetalhalle in Emlichheim: Adresse, Anfahrt und alle Heimspiele der 1. Damen in der Sparda 2. Liga Pro 2026/27. Jugendspiele auch in der Herbert-Taube-Halle nebenan – gleiche Adresse, gleicher Eingang.",
  alternates: { canonical: "/vechtetalhalle" },
};

export default function VechtetalhallePage() {
  const heimspiele = schedule.filter((m) => m.isHome);

  const hallenJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.venue.name,
    url: `${site.url}/vechtetalhalle`,
    image: `${site.url}/hero/vechtetalhalle.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.venue.region,
      addressCountry: "DE",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Parkplatz", value: true },
      { "@type": "LocationFeatureSpecification", name: "Barrierefreier Zugang", value: true },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hallenJsonLd) }} />

      {/* Hero mit dem Hallenbild in voller Breite */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/hero/vechtetalhalle.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-45"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/80 via-scu-black/55 to-scu-black" />
        </div>
        <Container className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 lg:pb-24">
          <div className="flex flex-col gap-5 max-w-2xl">
            <Badge variant="yellow">Unsere Halle</Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
              Vechtetalhalle
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Hier spielen unsere Damen. {heimspiele.length} Heimspiele in der Sparda 2. Liga Pro,
              dazu der komplette Trainings- und Spielbetrieb von den Minis bis zur Bundesliga.
              Ein Teil der Jugendspiele läuft in der Herbert-Taube-Halle direkt nebenan – gleiche Adresse, gleicher Eingang.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href={`https://www.google.com/maps/search/?api=1&query=${kartenSuche}`} target="_blank" rel="noopener">
                  <Navigation className="size-4" /> Route planen
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="#heimspiele"><CalendarDays className="size-4" /> Heimspiele</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Anfahrt */}
      <section className="py-16 lg:py-24 bg-white">
        <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Anfahrt" title={<>So findest du <HighlightWord>uns</HighlightWord></>} />
            <address className="not-italic text-lg leading-relaxed text-scu-black">
              <strong className="font-display font-black">{site.venue.name}</strong>
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href={`https://www.google.com/maps/search/?api=1&query=${kartenSuche}`} target="_blank" rel="noopener">
                  <MapPin className="size-4" /> In Google Maps öffnen
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={`https://maps.apple.com/?q=${kartenSuche}`} target="_blank" rel="noopener">
                  In Apple Karten öffnen
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Car, titel: "Parken", text: "Parkmöglichkeiten direkt an der Halle." },
                { icon: Accessibility, titel: "Barrierefrei", text: "Barrierefreier Zugang ist möglich." },
              ].map(({ icon: Icon, titel, text }) => (
                <div key={titel} className="rounded-2xl bg-scu-gray-100 p-5 flex flex-col gap-2">
                  <Icon className="size-5 text-scu-yellow-ink" />
                  <div className="font-display font-black text-scu-black">{titel}</div>
                  <p className="text-sm text-scu-gray-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Zweiter Spielort direkt nebenan - fuer Eltern die haeufigste Rueckfrage */}
            <div className="rounded-2xl border-l-4 border-scu-yellow bg-scu-gray-100 p-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">
                Zweiter Spielort
              </div>
              <p className="text-sm text-scu-black leading-relaxed">
                Ein Teil der <strong>Jugendspiele</strong> findet in der{" "}
                <strong>Herbert-Taube-Halle</strong> direkt nebenan statt – gleiche Adresse,
                gleicher Eingang. Für die Anfahrt ändert sich also nichts.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-scu-gray-200">
            <Image
              src="/hero/vechtetalhalle.jpg"
              alt="Die Vechtetalhalle in Emlichheim von außen, mit dem Volleyball-Schriftzug des SCU an der Fassade"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Heimspiele */}
      <section id="heimspiele" className="py-16 lg:py-24 bg-scu-gray-100">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Saison 2026/27"
            title={<>Alle <HighlightWord>Heimspiele</HighlightWord></>}
            description={`${heimspiele.length} Partien der 1. Damen in der Vechtetalhalle. Der komplette Spielplan mit allen Auswärtsspielen steht auf der Mannschaftsseite.`}
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {heimspiele.map((m) => (
              <li key={`${m.date}-${m.matchday}`} className="rounded-2xl bg-white p-5 flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-scu-yellow-ink">
                  {spieltag.format(new Date(`${m.date}T00:00:00Z`))} · {m.time} Uhr
                </div>
                <div className="font-display font-black text-scu-black leading-tight">
                  {m.home} vs. {m.away}
                </div>
                <div className="text-xs text-scu-gray-500">{m.matchday}. Spieltag</div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/teams/1-mannschaft#spielplan">
                <CalendarDays className="size-4" /> Kompletter Spielplan
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="webcal://scuvolleyball.de/spielplan.ics">Spielplan abonnieren</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Tickets & Livestream */}
      <section className="py-16 lg:py-24 bg-scu-black text-white">
        <Container className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col gap-5">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
              <Ticket className="size-6" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight">Tickets</h2>
            <Ticketpreise />
            <p className="text-sm text-white/70">Abendkasse am Spieltag – oder vorab online sichern.</p>
            <Button asChild variant="primary" className="w-fit">
              <Link href={site.ticketsUrl} target="_blank" rel="noopener">Tickets online kaufen</Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col gap-5">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
              <Radio className="size-6" />
            </div>
            <h2 className="font-display text-3xl font-black leading-tight">Nicht vor Ort?</h2>
            <p className="text-white/70 leading-relaxed">
              Alle Spiele der Sparda 2. Liga Pro werden live übertragen. Die Links zu Stream und
              Ticker findest du auf der Mannschaftsseite.
            </p>
            <Button asChild variant="outlineLight" className="w-fit">
              <Link href="/teams/1-mannschaft#live">Zum Livestream</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
