import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Radio, Ticket, CalendarDays, MapPin, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { SportsTeamJsonLd } from "@/components/seo/json-ld";
import { roster, staff } from "@/lib/roster";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "1. Damen – 2. Bundesliga Pro · Saison 2025/26",
  description:
    "Der Kader der SCU Emlichheim 1. Damen in der 2. Bundesliga Pro: Spielerinnen, Trainer:innen, Spielplan, Tickets und Livestream der Vechtetalhalle.",
  alternates: { canonical: "/teams/1-mannschaft" },
};

const upcoming = [
  { date: "2025-09-21", time: "17:00", home: "SCU Emlichheim", away: "BBSC Berlin",       venue: "Vechtetalhalle",      type: "Heim"  },
  { date: "2025-09-27", time: "19:30", home: "DSHS SnowTrex Köln", away: "SCU Emlichheim", venue: "Sportcenter Köln",    type: "Auswärts" },
  { date: "2025-10-04", time: "17:00", home: "SCU Emlichheim", away: "NawaRo Straubing",    venue: "Vechtetalhalle",      type: "Heim" },
  { date: "2025-10-11", time: "19:00", home: "VfL Oythe",       away: "SCU Emlichheim",     venue: "VfL-Halle Oythe",      type: "Auswärts" },
  { date: "2025-10-18", time: "17:00", home: "SCU Emlichheim", away: "Rote Raben Vilsbiburg", venue: "Vechtetalhalle",    type: "Heim" },
];

const positionOrder = ["Libera", "Libero", "Außenangriff", "Mittelblock", "Diagonalangriff", "Zuspiel"];

export default function FirstTeamPage() {
  const sorted = [...roster].sort(
    (a, b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position) || a.number - b.number,
  );

  return (
    <>
      <SportsTeamJsonLd />

      {/* Hero */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/team/team-group.jpg" alt="" fill sizes="100vw" className="object-cover object-top opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/70 via-scu-black/50 to-scu-black" />
        </div>
        <Container className="relative pt-44 sm:pt-48 lg:pt-56 pb-20 lg:pb-28">
          <div className="flex flex-col gap-5 max-w-3xl">
            <Badge variant="yellow">2. Bundesliga Pro · Damen</Badge>
            <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1]">
              1. Damenmannschaft <span className="text-scu-yellow">2025/26</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Eigene Talente, internationale Verstärkung und ein eingespieltes Trainer-Team: Wir greifen in der neuen 2. Bundesliga Pro an.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href="#tickets"><Ticket className="size-4" /> Tickets</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="#spielplan"><CalendarDays className="size-4" /> Spielplan</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="#live"><Radio className="size-4" /> Livestream</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Kader */}
      <section id="kader" className="py-20 lg:py-28 bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Kader"
            title={<>Unsere Spielerinnen <span className="text-scu-yellow">2025/26</span></>}
            description="Junge Talente aus der eigenen Jugend, erfahrene Leistungsträgerinnen und internationale Qualität vereint in einem Team."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {sorted.map((p) => (
              <article
                key={p.number}
                className="group relative rounded-2xl overflow-hidden bg-scu-gray-100 border border-transparent hover:border-scu-yellow transition-all hover:shadow-[0_24px_50px_-20px_rgba(255,240,1,0.35)]"
              >
                <div className="relative aspect-[3/4] bg-scu-gray-200">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 20vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-scu-yellow text-scu-black rounded-full size-10 flex items-center justify-center font-display font-black">
                    {p.number}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-scu-black to-transparent text-white">
                    <div className="font-display text-base sm:text-lg font-black leading-tight">{p.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">
                      {p.position}
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
      <section className="py-20 lg:py-24 bg-scu-gray-100">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Team hinter dem Team"
            title={<>Trainer:innen & <span className="text-scu-yellow">Medizinisches Team</span></>}
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {staff.map((s) => (
              <article key={s.name} className="rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_-12px_rgba(0,0,0,0.15)]">
                <div className="relative aspect-square">
                  <Image src={s.image} alt={s.name} fill sizes="200px" className="object-cover" />
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

      {/* Spielplan */}
      <section id="spielplan" className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Spielplan"
            title={<>Nächste <span className="text-scu-yellow">Spiele</span></>}
            description="Die wichtigsten Partien der Hinrunde in der 2. Bundesliga Pro. Vollständiger Spielplan auf volleyball-bundesliga.de."
          />
          <div className="overflow-hidden rounded-2xl border border-scu-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-scu-black text-white">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold tracking-wide">Datum</th>
                  <th className="text-left px-5 py-3 font-semibold tracking-wide">Begegnung</th>
                  <th className="text-left px-5 py-3 font-semibold tracking-wide hidden md:table-cell">Halle</th>
                  <th className="text-right px-5 py-3 font-semibold tracking-wide">Typ</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((m, i) => (
                  <tr key={i} className="border-t border-scu-gray-200 hover:bg-scu-gray-100/70">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-scu-black">
                        {new Date(m.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "2-digit" })}
                      </div>
                      <div className="text-xs text-scu-gray-500">{m.time} Uhr</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-display font-black">
                        <span className={m.home.includes("SCU") ? "text-scu-yellow" : ""}>{m.home}</span>
                        <span className="text-scu-gray-500 mx-2">vs.</span>
                        <span className={m.away.includes("SCU") ? "text-scu-yellow" : ""}>{m.away}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-scu-gray-500 hidden md:table-cell">
                      <div className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" /> {m.venue}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Badge variant={m.type === "Heim" ? "yellow" : "outline"}>{m.type}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Button asChild variant="outline">
              <Link href="https://www.volleyball-bundesliga.de/" target="_blank" rel="noopener">
                Vollständiger Spielplan bei der VBL
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
              <Link href="/kontakt">Tickets anfragen</Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-scu-yellow via-scu-yellow-dark to-scu-black p-8 lg:p-10 flex flex-col gap-5 relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 size-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-white text-scu-yellow">
              <Radio className="size-6" />
            </div>
            <h2 className="relative font-display text-3xl lg:text-4xl font-black leading-tight">Livestream & TV</h2>
            <p className="relative text-white/90 leading-relaxed">
              Alle Spiele der 2. Bundesliga Pro werden live auf VBL-TV und Sporttotal gestreamt. Mit Kommentar, Statistiken und Replays in HD-Qualität.
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
