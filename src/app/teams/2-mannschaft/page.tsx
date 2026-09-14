import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, Trophy, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { roster2, staff2 } from "@/lib/roster-2";
import { schedule2, schedule2Liga } from "@/lib/schedule-2";

const positionOrder2 = ["Libera", "Außenangriff", "Mittelblock", "Diagonalangriff", "Zuspiel"];

/** Spielerinnen, die der DVV ohne Position fuehrt, stehen am Ende. */
function positionsRang(position?: string) {
  const i = position ? positionOrder2.indexOf(position) : -1;
  return i === -1 ? positionOrder2.length : i;
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter((p) => p && p[0].toUpperCase() === p[0])
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const metadata: Metadata = {
  title: "2. Damen – 3. Liga West · Saison 2026/27",
  description:
    "Die 2. Damen des SCU Emlichheim in der 3. Liga West: Kader, Trainerin und der komplette Spielplan der Saison 2026/27.",
  alternates: { canonical: "/teams/2-mannschaft" },
};

const spieltag2 = new Intl.DateTimeFormat("de-DE", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "2-digit",
  timeZone: "UTC",
});

export default function SecondTeamPage() {
  const heimspiele2 = schedule2.filter((m) => m.isHome).length;
  const gegner2 = new Set(schedule2.map((m) => (m.isHome ? m.away : m.home))).size;
  const sortedRoster = [...roster2].sort(
    (a, b) =>
      positionsRang(a.position) - positionsRang(b.position) ||
      (a.number ?? 99) - (b.number ?? 99) ||
      a.name.localeCompare(b.name, "de"),
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src="/team/team-group.jpg" alt="" fill sizes="100vw" className="object-cover object-top opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/80 via-scu-black/60 to-scu-black" />
          <div className="absolute -top-32 right-0 size-[480px] rounded-full bg-scu-yellow/15 blur-[120px]" />
        </div>
        <Container className="relative pt-32 sm:pt-40 lg:pt-56 pb-16 sm:pb-20 lg:pb-28">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-3">
            <Link href="/teams"><ArrowLeft className="size-4" /> Alle Mannschaften</Link>
          </Button>

          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="yellow">3. Liga West · Damen</Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[1] break-words hyphens-auto" lang="de">
              2.&nbsp;Damen <span className="text-scu-yellow">2026/27</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
              Der Unterbau unserer Ersten: durchlässig nach oben, Sprungbrett für Talente aus der eigenen Jugend
              und seit Jahren fest in der dritten Liga verankert.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href="#kader"><Users className="size-4" /> Zum Kader</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="#spielplan"><CalendarDays className="size-4" /> Spielplan</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Kader */}
      <section id="kader" className="relative py-20 lg:py-28 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-10 h-80 w-80 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow="Kader"
            title={<>Unsere Spielerinnen <HighlightWord>2026/27</HighlightWord></>}
            description="Durchlässig zur Ersten, verstärkt durch Talente aus der eigenen Jugend. Kader laut offizieller DVV-Mannschaftsmeldung, Stand 14. September 2026."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {sortedRoster.map((p) => (
              <article
                key={p.name}
                className="group relative rounded-2xl overflow-hidden bg-white ring-1 ring-transparent transition duration-300 ease-out hover:-translate-y-1.5 hover:ring-scu-yellow hover:shadow-[0_30px_60px_-24px_rgba(0,0,0,0.45)] focus-within:-translate-y-1.5 focus-within:ring-scu-yellow"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-scu-black via-scu-gray-800 to-scu-black flex items-center justify-center overflow-hidden">
                  {p.number !== undefined && (
                    <div className="absolute top-3 left-3 z-10 bg-scu-yellow text-scu-black rounded-full size-11 flex items-center justify-center font-display font-black text-lg transition-transform duration-300 group-hover:scale-110">
                      {p.number}
                    </div>
                  )}
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                  ) : (
                    <>
                      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,240,1,0.15),transparent_60%)]" />
                      <span className="relative font-display text-5xl lg:text-6xl font-black text-white/90 transition duration-300 group-hover:text-scu-yellow group-hover:scale-110">
                        {getInitials(p.name)}
                      </span>
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-scu-black via-scu-black/75 to-transparent text-white">
                    <div className="font-display text-lg sm:text-xl font-black leading-tight">{p.name}</div>
                    {p.position && (
                      <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">
                        {p.position}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border-l-4 border-scu-yellow bg-white p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">Fotos folgen</div>
            <p className="text-sm text-scu-black leading-relaxed">
              Team- und Einzelfotos der Zweiten für die Saison 2026/27 werden nachgereicht.
            </p>
          </div>
        </Container>
      </section>

      {/* Trainerin */}
      <section className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Team hinter dem Team" title={<>Trainerin & <HighlightWord>Staff</HighlightWord></>} />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {staff2.map((s) => (
              <article key={s.name} className="rounded-2xl overflow-hidden bg-scu-gray-100 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.15)]">
                <div className="relative aspect-square bg-gradient-to-br from-scu-black via-scu-gray-800 to-scu-black flex items-center justify-center">
                  {s.image ? (
                    <Image src={s.image} alt={s.name} fill sizes="200px" className="object-cover object-top" />
                  ) : (
                    <>
                      <Users aria-hidden className="absolute size-10 text-white/15" />
                      <span className="relative font-display text-3xl font-black text-white/90">{getInitials(s.name)}</span>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-display text-base font-black leading-tight">{s.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-scu-yellow-dark font-bold mt-1">{s.role}</div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Ausblick */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-scu-gold/[0.06] via-white to-scu-yellow/[0.06] overflow-hidden">
        <div aria-hidden className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-scu-gold/15 blur-3xl" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <Image src="/hero/vechtetalhalle.jpg" alt="Die Vechtetalhalle in Emlichheim" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-scu-black/95 via-scu-black/40 to-transparent">
                <div className="text-[11px] uppercase tracking-[0.2em] text-scu-yellow font-bold">Vechtetalhalle</div>
                <div className="font-display text-2xl font-black text-white">Heimstätte aller SCU-Teams</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Saison 2026/27"
              title={<>Was die <HighlightWord>3. Liga West</HighlightWord> bringt</>}
            />
            <p className="text-scu-gray-500 text-lg leading-relaxed">
Die Zweite spielt überregional von Bremen bis Aachen – und bleibt dabei das, was sie ausmacht:
              durchlässig zur Ersten und ein Sprungbrett für junge Talente aus der eigenen Jugend. Wer hier überzeugt,
              trainiert schnell eine Etage höher mit.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                `Überregionaler Spielbetrieb mit ${gegner2 + 1} Teams`,
                `${schedule2.length} Spiele, davon ${heimspiele2} in der Vechtetalhalle`,
                "Direkte Durchlässigkeit zum Kader der Ersten",
                "Talente aus der SCU-Jugend in tragenden Rollen",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm text-scu-black">
                  <TrendingUp className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border-l-4 border-scu-yellow bg-white p-5 mt-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">Mitspielen?</div>
              <p className="text-sm text-scu-black leading-relaxed">
                Fragen zu Probetraining oder Mitgliedschaft?{" "}
                <Link href="/kontakt" className="font-semibold underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow-dark">Direkt melden</Link>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Spielplan */}
      <section id="spielplan" className="py-20 lg:py-24 bg-white scroll-mt-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Spielplan"
            title={<>Alle Spiele der <HighlightWord>Saison 2026/27</HighlightWord></>}
            description={`${schedule2.length} Partien in der ${schedule2Liga}, davon ${heimspiele2} Heimspiele in der Vechtetalhalle. Quelle: offizieller DVV-Spielplan, Stand 14. September 2026.`}
          />
          <div className="overflow-x-auto rounded-2xl border border-scu-gray-200">
            <table className="w-full min-w-[640px] text-sm">
              <caption className="sr-only">
                Spielplan der 2. Damenmannschaft des SCU Emlichheim in der Saison 2026/27
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
                {schedule2.map((m) => (
                  <tr
                    key={`${m.date}-${m.home}`}
                    className={`border-t border-scu-gray-200 hover:bg-scu-gray-100/70 ${m.isHome ? "bg-scu-yellow/[0.05]" : ""}`}
                  >
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="font-semibold text-scu-black">
                        {spieltag2.format(new Date(`${m.date}T00:00:00Z`))}
                      </div>
                      <div className="text-xs text-scu-gray-500">{m.time} Uhr</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-display font-black">
                        <span className={m.isHome ? "text-scu-yellow" : ""}>{m.home}</span>
                        <span className="text-scu-gray-500 mx-2">vs.</span>
                        <span className={m.isHome ? "" : "text-scu-yellow"}>{m.away}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-scu-gray-500 hidden md:table-cell">
                      <div className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5 shrink-0" /> {m.venue}
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
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="rounded-3xl bg-gradient-to-br from-scu-yellow via-scu-yellow-dark to-scu-black p-10 lg:p-16 text-white relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 size-80 rounded-full bg-white/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Trophy className="size-10 text-white/90 mb-4" />
              <h2 className="font-display text-3xl lg:text-4xl font-black leading-tight">
                Werde Teil der Aufstiegs-Saison.
              </h2>
              <p className="text-white/85 mt-3 leading-relaxed">
                Sponsoring, Tickets, Mitgliedschaft – sprich uns an und sei dabei, wenn der SCU mit zwei Damenteams in der Bundesliga antritt.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" variant="dark" className="bg-white text-scu-black hover:bg-scu-gray-100">
                <Link href="/sponsoren">Sponsoring</Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
