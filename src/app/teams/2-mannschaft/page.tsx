import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Trophy, Sparkles, Crown, TrendingUp, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { roster2, staff2 } from "@/lib/roster-2";

const positionOrder2 = ["Libera", "Zuspiel", "Angriff", "Mittelblock", "Diagonalangriff", "Universal"];

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
  title: "2. Damen – 2. Bundesliga · Saison 2026/27",
  description:
    "Aufsteiger SCU Emlichheim 2. Damen: Nach der Meisterschaft in der 3. Liga Nord 2025/26 startet die Mannschaft 2026/27 in der 2. Bundesliga.",
  alternates: { canonical: "/teams/2-mannschaft" },
};

const lastSeasonHighlights = [
  { value: "1.", label: "Platz 3. Liga Nord", note: "Saison 2025/26" },
  { value: "Meister", label: "Aufstieg sichergestellt", note: "Sechs Spieltage vor Saisonende" },
  { value: "2. BL", label: "Neue Liga 2026/27", note: "Erste Mannschaft im Profibereich" },
];

const finalGame = {
  date: "2026-04-26",
  time: "16:00",
  home: "SCU Emlichheim II",
  away: "TV Cloppenburg",
  venue: "Vechtetalhalle",
  note: "Letztes Spiel der Saison – Meisterehrung im Anschluss",
};

const milestones = [
  {
    year: "2024/25",
    title: "Wieder rauf in die 3. Liga",
    text: "Nach souveräner Saison in der Oberliga gelingt der direkte Wiederaufstieg.",
  },
  {
    year: "2025/26",
    title: "Meisterschaft & Aufstieg",
    text: "Mit klarer Tabellenführung sichert sich das Team frühzeitig die Meisterschaft der 3. Liga Nord.",
  },
  {
    year: "2026/27",
    title: "Premiere 2. Bundesliga",
    text: "Erstmals zwei SCU-Damenteams im Bundesligabereich – ein Meilenstein für die Vereinsgeschichte.",
  },
];

export default function SecondTeamPage() {
  const sortedRoster = [...roster2].sort(
    (a, b) => positionOrder2.indexOf(a.position) - positionOrder2.indexOf(b.position) || a.name.localeCompare(b.name, "de"),
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
        <Container className="relative pt-44 sm:pt-48 lg:pt-56 pb-20 lg:pb-28">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-3">
            <Link href="/teams"><ArrowLeft className="size-4" /> Alle Mannschaften</Link>
          </Button>

          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="yellow">2. Bundesliga · Damen</Badge>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-bold text-scu-yellow">
                <Crown className="size-3" /> Meister 3. Liga Nord 25/26
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[1] break-words hyphens-auto" lang="de">
              2.&nbsp;Damen <span className="text-scu-yellow">2026/27</span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Aufsteiger in die 2. Bundesliga: Mit der Meisterschaft 2025/26 in der 3. Liga Nord schreibt unsere Zweite
              ein neues Kapitel – der SCU stellt erstmals zwei Damenteams im Bundesligabereich.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href="#kader"><Users className="size-4" /> Zum Kader</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="#aufstieg"><Sparkles className="size-4" /> Aufstiegs-Story</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
                <Link href="#abschluss"><CalendarDays className="size-4" /> Letztes Spiel</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Aufstiegs-Story */}
      <section id="aufstieg" className="py-20 lg:py-28 bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Saison 2025/26"
            title={<>Meister & <HighlightWord>Aufsteiger</HighlightWord></>}
            description="Sechs Spieltage vor Schluss stand die Meisterschaft fest. Eine Saison, in der das Team die 3. Liga Nord dominiert hat."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {lastSeasonHighlights.map((h) => (
              <div
                key={h.label}
                className="rounded-3xl border border-scu-gray-200 bg-gradient-to-br from-white to-scu-gray-100 p-7 lg:p-8 flex flex-col gap-2"
              >
                <div className="font-display text-5xl lg:text-6xl font-black text-scu-yellow leading-none">{h.value}</div>
                <div className="font-display text-lg font-black text-scu-black leading-tight mt-2">{h.label}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-scu-gray-500 font-semibold">{h.note}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
            {milestones.map((m, idx) => (
              <article
                key={m.year}
                className="relative rounded-2xl bg-scu-gray-100 p-7 hover:bg-white hover:shadow-[0_24px_50px_-25px_rgba(0,0,0,0.25)] transition border border-transparent hover:border-scu-gray-200"
              >
                <div className="absolute top-5 right-5 inline-flex size-9 items-center justify-center rounded-full bg-scu-yellow text-scu-black font-display font-black text-sm">
                  {idx + 1}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-scu-yellow-dark font-bold">{m.year}</div>
                <h3 className="font-display text-xl font-black text-scu-black mt-2 leading-tight">{m.title}</h3>
                <p className="text-sm text-scu-gray-500 leading-relaxed mt-3">{m.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Kader */}
      <section id="kader" className="relative py-20 lg:py-28 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-10 h-80 w-80 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            eyebrow="Kader"
            title={<>Unsere Spielerinnen <HighlightWord>2025/26</HighlightWord></>}
            description="Der Meisterkader der 3. Liga Nord – durchlässig zur Ersten, verstärkt durch Talente aus der eigenen Jugend."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
            {sortedRoster.map((p) => (
              <article
                key={p.name}
                className="group relative rounded-2xl overflow-hidden bg-white border border-transparent hover:border-scu-yellow transition-all hover:shadow-[0_24px_50px_-20px_rgba(255,240,1,0.35)]"
              >
                <div className="relative aspect-[3/4] bg-gradient-to-br from-scu-black via-scu-gray-800 to-scu-black flex items-center justify-center overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width:1024px) 20vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  ) : (
                    <>
                      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,240,1,0.15),transparent_60%)]" />
                      <span className="relative font-display text-5xl lg:text-6xl font-black text-white/90 group-hover:text-scu-yellow transition-colors">
                        {getInitials(p.name)}
                      </span>
                    </>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-scu-black to-transparent text-white">
                    <div className="font-display text-sm lg:text-base font-black leading-tight">{p.name}</div>
                    <div className="text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-scu-yellow font-bold mt-1">
                      {p.position}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border-l-4 border-scu-yellow bg-white p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">Fotos folgen</div>
            <p className="text-sm text-scu-black leading-relaxed">
              Professionelle Team- und Einzelshoots für die Saison 2026/27 (2. Bundesliga) folgen nach der Sommerpause.
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

      {/* Letztes Spiel */}
      <section id="abschluss" className="py-20 lg:py-24 bg-scu-black text-white relative overflow-hidden">
        <div aria-hidden className="absolute -bottom-32 -left-20 size-[420px] rounded-full bg-scu-yellow/10 blur-[120px]" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Badge variant="yellow" className="w-fit">Letztes Saisonspiel</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-black leading-[1.05]">
              Komm zur <span className="text-scu-yellow">Meisterehrung</span> in die Vechtetalhalle.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-xl">
              Das Team verabschiedet sich aus der 3. Liga Nord und feiert mit euch die Meisterschaft. Im Anschluss an
              das Spiel: offizielle Ehrung, Pokalübergabe und Aufstiegsfeier mit Fans und Familien.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href="/teams/1-mannschaft">1. Bundesliga-Damen ansehen <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7 lg:p-8 flex flex-col gap-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-scu-yellow font-bold">
                <span>Heimspiel</span>
                <span>{new Date(finalGame.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}</span>
              </div>
              <div className="font-display font-black text-2xl lg:text-3xl leading-tight">
                <div className="text-scu-yellow">{finalGame.home}</div>
                <div className="text-white/40 text-sm font-semibold tracking-[0.2em] uppercase my-1">vs.</div>
                <div>{finalGame.away}</div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/70 pt-3 border-t border-white/10">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5 text-scu-yellow" />{finalGame.time} Uhr</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5 text-scu-yellow" />{finalGame.venue}</span>
              </div>
              <p className="text-xs text-white/60 italic">{finalGame.note}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Ausblick */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-scu-gold/[0.06] via-white to-scu-yellow/[0.06] overflow-hidden">
        <div aria-hidden className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-scu-gold/15 blur-3xl" />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <Image src="/hero/hero-main.jpg" alt="Vorbereitung 2. Bundesliga 2026/27" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-scu-black/95 via-scu-black/40 to-transparent">
                <div className="text-[11px] uppercase tracking-[0.2em] text-scu-yellow font-bold">Vechtetalhalle</div>
                <div className="font-display text-2xl font-black text-white">Heimstätte für 2 Bundesliga-Teams</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Saison 2026/27"
              title={<>Was die <HighlightWord>2. Bundesliga</HighlightWord> bringt</>}
            />
            <p className="text-scu-gray-500 text-lg leading-relaxed">
              Mit dem Aufstieg übernimmt unsere Zweite eine neue Rolle: bundesweiter Spielbetrieb, weitere Auswärtsfahrten und
              eine deutlich höhere Spielklassen-Anforderung. Gleichzeitig bleibt sie das, was sie ausmacht – durchlässig zur Ersten
              und ein Sprungbrett für junge Talente aus der eigenen Jugend.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {[
                "Bundesweiter Spielbetrieb mit 12 Teams",
                "Direkte Durchlässigkeit zum Bundesliga-Pro-Kader",
                "Heimspiele weiterhin in der Vechtetalhalle",
                "Talente aus der SCU-Jugend in tragenden Rollen",
                "Trainerteam mit Erfahrung im Profibereich",
                "Saisonstart: September 2026",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm text-scu-black">
                  <TrendingUp className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border-l-4 border-scu-yellow bg-white p-5 mt-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">Hinweis</div>
              <p className="text-sm text-scu-black leading-relaxed">
                Detaillierter Spielplan 2026/27 folgt nach Saisonabschluss und Sommerpause. Fragen zu Probetraining
                oder Mitgliedschaft? <Link href="/kontakt" className="font-semibold underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow-dark">Direkt melden</Link>.
              </p>
            </div>
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
