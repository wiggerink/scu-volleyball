import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Radio, Ticket, CalendarDays, MapPin, Trophy, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { SportsTeamJsonLd } from "@/components/seo/json-ld";
import { management, roster, staff } from "@/lib/roster";
import { schedule } from "@/lib/schedule";
import { LigaTabelle } from "@/components/sections/liga-tabelle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "1. Damen – Sparda 2. Liga Pro · Saison 2026/27",
  description:
    "Der Kader der SCU Emlichheim 1. Damen in der Sparda 2. Liga Pro 2026/27: Spielerinnen, Trainer:innen, Spielplan, Tickets und Livestream aus der Vechtetalhalle.",
  alternates: { canonical: "/teams/1-mannschaft" },
};

// Datum in UTC formatieren: die ISO-Daten aus dem VBL-Export sind reine Kalendertage,
// ohne feste Zeitzone würde der Server je nach Offset einen Tag danebenliegen.
const matchDate = new Intl.DateTimeFormat("de-DE", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "2-digit",
  timeZone: "UTC",
});

const teamPhoto = "/team/1-damen-2026-27.jpg";

const positionOrder = ["Libera", "Libero", "Außenangriff", "Mittelblock", "Diagonalangriff", "Zuspiel"];

export default function FirstTeamPage() {
  const sorted = [...roster].sort(
    (a, b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position) || a.number - b.number,
  );
  const homeGames = schedule.filter((m) => m.isHome).length;

  return (
    <>
      <SportsTeamJsonLd />

      {/* Hero */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        {/* Nur Farbstimmung: stark unscharfe, kleine Variante des Mannschaftsfotos */}
        <div aria-hidden className="absolute inset-0">
          <Image
            src={teamPhoto}
            alt=""
            fill
            sizes="640px"
            className="object-cover object-center scale-125 blur-3xl opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/90 via-scu-black/80 to-scu-black" />
          <div aria-hidden className="absolute -top-32 right-0 size-[480px] rounded-full bg-scu-yellow/15 blur-[120px]" />
        </div>
        <Container className="relative pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24">
          <div className="flex flex-col gap-5 max-w-3xl">
            <Badge variant="yellow">Sparda 2. Liga Pro · Damen</Badge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] break-words" lang="de">
              1.&nbsp;Damenmann&shy;schaft <span className="text-scu-yellow">2026/27</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
              Eigene Talente, internationale Verstärkung und ein eingespieltes Trainer-Team: In der Saison 2026/27 greifen wir in der Sparda 2. Liga Pro an.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href={site.ticketsUrl} target="_blank" rel="noopener"><Ticket className="size-4" /> Tickets</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="#spielplan"><CalendarDays className="size-4" /> Spielplan</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="#live"><Radio className="size-4" /> Livestream</Link>
              </Button>
            </div>
          </div>

          {/* Mannschaftsfoto bewusst als eigenständiges Bild statt als Hintergrund */}
          <figure className="relative mt-12 lg:mt-16">
            <div aria-hidden className="absolute -inset-x-4 -bottom-6 top-10 rounded-[32px] bg-scu-yellow/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_40px_90px_-35px_rgba(0,0,0,0.9)]">
              <Image
                src={teamPhoto}
                alt="Die 1. Damenmannschaft des SCU Emlichheim in der Saison 2026/27 mit Trainer- und Betreuerteam vor dem Werk der Emsland Group"
                width={2048}
                height={1478}
                sizes="(min-width:1280px) 1216px, 100vw"
                className="w-full h-auto"
                priority
              />
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs text-white/55">
              <span>Unsere 1. Damenmannschaft der Saison 2026/27 mit Trainer- und Betreuerteam</span>
              <span>Foto: Hinnerk Schröer</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Kader */}
      <section id="kader" className="py-20 lg:py-28 bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Kader"
            title={<>Unsere Spielerinnen <HighlightWord>2026/27</HighlightWord></>}
            description="Junge Talente aus der eigenen Jugend, erfahrene Leistungsträgerinnen und internationale Qualität vereint in einem Team."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {sorted.map((p) => (
              <article
                key={p.number}
                className="group relative rounded-2xl overflow-hidden bg-scu-gray-100 ring-1 ring-transparent transition duration-300 ease-out hover:-translate-y-1.5 hover:ring-scu-yellow hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.45)] focus-within:-translate-y-1.5 focus-within:ring-scu-yellow"
              >
                {/* Ganze Karte klickbar, Linktext bleibt der Name */}
                <Link href={`/teams/1-mannschaft/${p.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">{p.name} – Steckbrief</span>
                </Link>
                <div className="relative aspect-[3/4] bg-scu-gray-200 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07] group-focus-within:scale-[1.07]"
                  />
                  <div className="absolute top-3 left-3 z-10 bg-scu-yellow text-scu-black rounded-full size-11 flex items-center justify-center font-display font-black text-lg transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110">
                    {p.number}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-scu-black via-scu-black/75 to-transparent text-white transition-[padding] duration-300">
                    <div className="font-display text-lg sm:text-xl font-black leading-tight">{p.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">
                      {p.position}
                    </div>
                    {/* Faehrt erst beim Ueberfahren aus und macht sichtbar, dass die Karte verlinkt ist */}
                    <div className="h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:h-6 group-hover:opacity-100 group-focus-within:h-6 group-focus-within:opacity-100">
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
                        Steckbrief <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
                <dl className="grid grid-cols-3 text-[11px] text-scu-gray-500 p-3 bg-white">
                  <div>
                    <dt className="uppercase tracking-[0.15em] text-[9px]">Größe</dt>
                    <dd className="font-semibold text-scu-black">{p.heightCm} cm</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.15em] text-[9px]">Jahrgang</dt>
                    <dd className="font-semibold text-scu-black">{p.birthYear}</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.15em] text-[9px]">Nation</dt>
                    <dd className="font-semibold text-scu-black">{p.nationality}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Trainer & Staff */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <div aria-hidden className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative flex flex-col gap-10">
          <SectionHeading
            eyebrow="Team hinter dem Team"
            title={<>Trainer:innen & <HighlightWord>Medizinisches Team</HighlightWord></>}
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {staff.map((s) => (
              <article key={s.name} className="rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_-12px_rgba(0,0,0,0.15)]">
                <div className="relative aspect-square">
                  <Image src={s.image} alt={s.name} fill sizes="200px" className="object-cover object-top" />
                </div>
                <div className="p-4">
                  <div className="font-display text-base font-black leading-tight">{s.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">{s.role}</div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Management */}
      <section id="management" className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Management"
            title={<>Geschäftsführung & <HighlightWord>Teammanagement</HighlightWord></>}
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {management.map((m) => (
              <article key={m.name} className="rounded-2xl overflow-hidden bg-scu-gray-100 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.15)]">
                <div className="relative aspect-square">
                  <Image src={m.image} alt={m.name} fill sizes="200px" className="object-cover object-top" />
                </div>
                <div className="p-4">
                  <div className="font-display text-base font-black leading-tight">{m.name}</div>
                  {m.role && (
                    <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">{m.role}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <LigaTabelle />

      {/* Spielplan */}
      <section id="spielplan" className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Spielplan"
            title={<>Alle Spiele der <HighlightWord>Saison 2026/27</HighlightWord></>}
            description={`${schedule.length} Partien in der Sparda 2. Liga Pro, davon ${homeGames} Heimspiele in der Vechtetalhalle. Quelle: offizieller VBL-Spielplan, Stand 13. September 2026.`}
          />
          <div className="overflow-x-auto rounded-2xl border border-scu-gray-200">
            <table className="w-full min-w-[680px] text-sm">
              <caption className="sr-only">
                Spielplan der 1. Damenmannschaft des SCU Emlichheim in der Saison 2026/27
              </caption>
              <thead className="bg-scu-black text-white">
                <tr>
                  <th scope="col" className="text-left px-5 py-3 font-semibold tracking-wide">Datum</th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold tracking-wide">Begegnung</th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold tracking-wide hidden md:table-cell">Halle</th>
                  <th scope="col" className="text-right px-5 py-3 font-semibold tracking-wide">Typ</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((m) => (
                  <tr
                    key={`${m.date}-${m.matchday}`}
                    className={`border-t border-scu-gray-200 hover:bg-scu-gray-100/70 ${m.isHome ? "bg-scu-yellow/[0.05]" : ""}`}
                  >
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="font-semibold text-scu-black">
                        {matchDate.format(new Date(`${m.date}T00:00:00Z`))}
                      </div>
                      <div className="text-xs text-scu-gray-500">{m.time} Uhr · {m.matchday}. Spieltag</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-display font-black">
                        <span className={m.isHome ? "text-scu-yellow" : ""}>{m.home}</span>
                        <span className="text-scu-gray-500 mx-2">vs.</span>
                        <span className={m.isHome ? "" : "text-scu-yellow"}>{m.away}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-scu-gray-500 hidden md:table-cell">
                      <div className="inline-flex items-start gap-1.5">
                        <MapPin className="size-3.5 shrink-0 mt-0.5" />
                        <span>
                          {m.venue}
                          <span className="block text-xs text-scu-gray-500/80">{m.city}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Badge variant={m.isHome ? "yellow" : "outline"}>{m.isHome ? "Heim" : "Auswärts"}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Button asChild variant="outline">
              <Link href="https://www.volleyball-bundesliga.de/" target="_blank" rel="noopener">
                Spielplan & Tabelle bei der VBL
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Tickets & Live */}
      <section id="tickets" className="py-20 lg:py-28 bg-scu-black text-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div id="live" className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col gap-5">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
              <Ticket className="size-6" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-black leading-tight">Heimspiel-Tickets</h2>
            <p className="text-white/70 leading-relaxed">
              Erlebe Spitzen-Volleyball hautnah in der Vechtetalhalle. Tickets an der Abendkasse und online. Dauerkarten für die gesamte Hinrunde.
            </p>
            <ul className="text-sm text-white/80 space-y-2">
              <li className="flex gap-2"><Trophy className="size-4 text-scu-yellow shrink-0 mt-0.5" /> Erwachsene ab 12 € · Jugendliche ab 6 €</li>
              <li className="flex gap-2"><Trophy className="size-4 text-scu-yellow shrink-0 mt-0.5" /> Kinder bis 12 Jahre frei</li>
              <li className="flex gap-2"><Trophy className="size-4 text-scu-yellow shrink-0 mt-0.5" /> Familien-Ticket & Dauerkarten verfügbar</li>
            </ul>
            <Button asChild size="lg" variant="primary" className="w-fit">
              <Link href={site.ticketsUrl} target="_blank" rel="noopener">Tickets online kaufen</Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-scu-yellow via-scu-yellow-dark to-scu-black p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-white text-scu-yellow">
              <Radio className="size-6" />
            </div>
            <h2 className="relative font-display text-3xl lg:text-4xl font-black leading-tight">Livestream & TV</h2>
            <p className="relative text-white/90 leading-relaxed">
              Alle Spiele der Sparda 2. Liga Pro werden live auf VBL-TV und Sporttotal gestreamt. Mit Kommentar, Statistiken und Replays in HD-Qualität.
            </p>
            <div className="relative flex flex-wrap gap-3">
              <Button asChild size="lg" variant="dark" className="bg-white text-scu-black hover:bg-scu-gray-100">
                <Link href="https://www.volleyball-bundesliga.de/" target="_blank" rel="noopener">VBL-TV öffnen</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href={site.social.youtube} target="_blank" rel="noopener">YouTube-Kanal</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
