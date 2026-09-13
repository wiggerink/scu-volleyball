import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Ruler, Cake, Flag, Shirt } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { roster } from "@/lib/roster";
import { schedule } from "@/lib/schedule";
import { positionsErklaerung, rollenName } from "@/lib/positions";
import { site } from "@/lib/site";

const nationen: Record<string, string> = { DE: "Deutschland", NL: "Niederlande" };

const gebDatum = new Intl.DateTimeFormat("de-DE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const spielDatum = new Intl.DateTimeFormat("de-DE", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return roster.map((p) => ({ spielerin: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ spielerin: string }>;
}): Promise<Metadata> {
  const { spielerin } = await params;
  const p = roster.find((x) => x.slug === spielerin);
  if (!p) return {};
  return {
    title: `${p.name} – ${rollenName(p.position)}, Nr. ${p.number}`,
    description: `${p.name} spielt in der Saison 2026/27 mit der Nummer ${p.number} als ${rollenName(p.position)} für die 1. Damen des SCU Emlichheim in der Sparda 2. Liga Pro.`,
    alternates: { canonical: `/teams/1-mannschaft/${p.slug}` },
    openGraph: { images: [{ url: p.image, width: 900, height: 1200, alt: p.name }] },
  };
}

export default async function SpielerinPage({
  params,
}: {
  params: Promise<{ spielerin: string }>;
}) {
  const { spielerin } = await params;
  const index = roster.findIndex((x) => x.slug === spielerin);
  if (index === -1) notFound();

  const p = roster[index];
  const vorher = roster[(index - 1 + roster.length) % roster.length];
  const nachher = roster[(index + 1) % roster.length];
  const erklaerung = positionsErklaerung(p.position);
  // Erste drei Partien der Saison – bewusst ohne "ab heute", damit die Seite
  // statisch bleibt und nicht bei jedem Build etwas anderes zeigt.
  const naechste = schedule.slice(0, 3);

  const steckbrief = [
    { icon: Shirt, label: "Rückennummer", value: String(p.number) },
    { icon: Ruler, label: "Größe", value: `${p.heightCm} cm` },
    { icon: Cake, label: "Geburtstag", value: gebDatum.format(new Date(`${p.birthDate}T00:00:00Z`)) },
    { icon: Flag, label: "Nation", value: nationen[p.nationality] ?? p.nationality },
    ...(p.atClubSince ? [{ icon: CalendarDays, label: "Beim SCU seit", value: p.atClubSince }] : []),
    ...(p.previousClub ? [{ icon: ArrowLeft, label: "Vorheriger Verein", value: p.previousClub }] : []),
  ];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: rollenName(p.position),
    height: `${p.heightCm} cm`,
    birthDate: p.birthDate,
    nationality: nationen[p.nationality] ?? p.nationality,
    image: `${site.url}${p.image}`,
    url: `${site.url}/teams/1-mannschaft/${p.slug}`,
    memberOf: { "@type": "SportsTeam", name: `${site.shortName} – 1. Damen` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero: Freisteller von der Autogrammkarte auf der Vereinsfarbe */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-32 -right-24 size-[520px] rounded-full bg-scu-yellow/15 blur-[120px]" />
          <div className="absolute inset-0 bg-grid opacity-[0.18]" />
        </div>

        <Container className="relative pt-28 sm:pt-32 lg:pt-40 pb-0">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-3">
            <Link href="/teams/1-mannschaft#kader">
              <ArrowLeft className="size-4" /> Zum Kader
            </Link>
          </Button>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 flex flex-col gap-5 pb-10 lg:pb-20">
              <Badge variant="yellow">{rollenName(p.position)}</Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] break-words" lang="de">
                {p.name}
              </h1>
              <p className="text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
                Nummer {p.number} der 1. Damen in der Saison 2026/27, {rollenName(p.position)} in der Sparda 2. Liga Pro.
              </p>
              {p.quote && (
                <blockquote className="border-l-2 border-scu-yellow pl-4 text-white/85 italic">
                  „{p.quote}&ldquo;
                </blockquote>
              )}
            </div>

            <div className="lg:col-span-5 relative">
              {/* Grosse Rueckennummer als Grafik hinter dem Freisteller */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 text-center font-display font-black leading-none text-white/[0.07] text-[13rem] lg:text-[18rem] select-none"
              >
                {p.number}
              </div>
              <Image
                src={p.cutout}
                alt={`${p.name}, Nummer ${p.number}`}
                width={1000}
                height={1300}
                sizes="(min-width:1024px) 40vw, 80vw"
                className="relative mx-auto w-auto max-h-[460px] lg:max-h-[560px] object-contain"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Steckbrief */}
      <section className="py-16 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Steckbrief" title={<>Auf einen <HighlightWord>Blick</HighlightWord></>} />

          <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steckbrief.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl bg-scu-gray-100 p-5 flex flex-col gap-2">
                <Icon className="size-4 text-scu-yellow-ink" />
                <dt className="text-[10px] uppercase tracking-[0.18em] font-bold text-scu-gray-500">{label}</dt>
                <dd className="font-display text-lg font-black text-scu-black leading-tight">{value}</dd>
              </div>
            ))}
          </dl>

          {p.story && (
            <p className="max-w-2xl text-scu-gray-500 text-lg leading-relaxed">{p.story}</p>
          )}

          {erklaerung && (
            <div className="rounded-2xl border border-scu-gray-200 p-6 max-w-2xl">
              <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-scu-yellow-ink">
                Was macht eine {rollenName(p.position)}?
              </div>
              <p className="text-scu-gray-500 leading-relaxed mt-2">{erklaerung}</p>
            </div>
          )}
        </Container>
      </section>

      {/* Naechste Spiele */}
      <section className="py-16 lg:py-20 bg-scu-gray-100">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Saison 2026/27"
            title={<>{p.name.split(" ")[0]} <HighlightWord>live sehen</HighlightWord></>}
          />
          <ul className="grid sm:grid-cols-3 gap-4">
            {naechste.map((m) => (
              <li key={`${m.date}-${m.matchday}`} className="rounded-2xl bg-white p-5 flex flex-col gap-2">
                <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-scu-yellow-ink">
                  {spielDatum.format(new Date(`${m.date}T00:00:00Z`))} · {m.time} Uhr
                </div>
                <div className="font-display font-black text-scu-black leading-tight">
                  {m.home} vs. {m.away}
                </div>
                <div className="text-xs text-scu-gray-500 inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" /> {m.venue}, {m.city}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/teams/1-mannschaft#spielplan">
                <CalendarDays className="size-4" /> Kompletter Spielplan
              </Link>
            </Button>
            <Button asChild variant="primary">
              <Link href={site.ticketsUrl} target="_blank" rel="noopener">
                Tickets
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Blaettern im Kader */}
      <section className="py-12 bg-white border-t border-scu-gray-200">
        <Container className="flex items-center justify-between gap-4">
          <Link
            href={`/teams/1-mannschaft/${vorher.slug}`}
            className="group flex items-center gap-3 text-left min-w-0"
          >
            <ArrowLeft className="size-4 shrink-0 text-scu-gray-500 group-hover:text-scu-black transition" />
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-scu-gray-500">Nr. {vorher.number}</span>
              <span className="block font-display font-black truncate group-hover:text-scu-yellow-ink transition">
                {vorher.name}
              </span>
            </span>
          </Link>
          <Link
            href={`/teams/1-mannschaft/${nachher.slug}`}
            className="group flex items-center gap-3 text-right min-w-0"
          >
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-[0.18em] text-scu-gray-500">Nr. {nachher.number}</span>
              <span className="block font-display font-black truncate group-hover:text-scu-yellow-ink transition">
                {nachher.name}
              </span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-scu-gray-500 group-hover:text-scu-black transition" />
          </Link>
        </Container>
      </section>
    </>
  );
}
