import type { Metadata } from "next";
import Link from "next/link";
import { Baby, Users, Euro, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Jugendvolleyball & Förderring",
  description:
    "Von Mini-Minis bis zur Bundesliga: Das Jugendkonzept des SCU Emlichheim macht aus Kindern Bundesliga-Spielerinnen. Mit dem Förderring Jugendvolleyball e.V.",
  alternates: { canonical: "/jugend" },
};

const groups = [
  { slug: "mini-minis", icon: Baby,   title: "Mini-Minis",      age: "4 – 6 Jahre",   text: "Erste Bewegungserfahrungen mit Ball & Koordination. Spielerischer Einstieg in den Volleyballsport." },
  { slug: "minis",      icon: Users,  title: "Minis",           age: "6 – 10 Jahre",  text: "Kleinfeld-Volleyball: erste Turniere, erste Techniken, erste Erfolge im Team." },
  { slug: "u13",        icon: Users,  title: "U13",             age: "11 – 13 Jahre", text: "Leistungsorientiertes Training in der Jugendkreisliga. Der Start in die Talentförderung." },
  { slug: "u14",        icon: Users,  title: "U14 / U16 / U18", age: "13 – 18 Jahre", text: "Strukturiertes Athletik- & Techniktraining. Eigene Talente auf dem Weg in die Bundesliga." },
];

const benefits = [
  "Qualifizierte Trainer & Jugendtrainer:innen",
  "Eigenes Athletikkonzept mit Sporthochschule Köln",
  "Physiotherapie & medizinische Betreuung",
  "Auswärtsfahrten, Turniere, Feriencamps",
  "Eigene Bundesliga-Perspektive",
  "Starke Gemeinschaft – mehr als nur Sport",
];

export default function JugendPage() {
  return (
    <>
      <PageHero
        eyebrow="Jugendvolleyball"
        title={<>Aus Emlichheim in die <span className="text-scu-yellow">Bundesliga</span>.</>}
        description="Wir bilden unsere Stars von morgen selbst aus. 120+ Kinder und Jugendliche trainieren jede Woche bei uns – von den ersten Ballkontakten bis zum Bundesliga-Sprungbrett."
        imageUrl="/team/Pia-Schweitzer.jpg"
      />

      {/* Gruppen */}
      <section className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Altersgruppen"
            title={<>Für jedes Alter die <HighlightWord>passende Gruppe</HighlightWord></>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {groups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.slug} id={g.slug} className="group rounded-2xl bg-scu-gray-100 p-6 hover:bg-white hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] border border-transparent hover:border-scu-gray-200 transition-all scroll-mt-28">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-scu-yellow text-scu-black mb-4">
                    <Icon className="size-6" />
                  </div>
                  <Badge variant="outline" size="sm" className="mb-3">{g.age}</Badge>
                  <h3 className="font-display text-2xl font-black">{g.title}</h3>
                  <p className="text-sm text-scu-gray-500 mt-2 leading-relaxed">{g.text}</p>
                </div>
              );
            })}
          </div>
          {/* Wo gespielt wird - fuer Eltern die haeufigste Rueckfrage */}
          <div className="rounded-2xl border-l-4 border-scu-yellow bg-scu-gray-100 p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-bold mb-1">
              Wo wird gespielt?
            </div>
            <p className="text-sm text-scu-black leading-relaxed">
              Training und Spiele finden in der{" "}
              <Link href="/vechtetalhalle" className="font-semibold underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow-ink">
                Vechtetalhalle
              </Link>{" "}
              statt, ein Teil der Jugendspiele in der Herbert-Taube-Halle direkt nebenan – gleiche
              Adresse, gleicher Eingang.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild><Link href="/kontakt">Schnuppertraining vereinbaren</Link></Button>
            <Button asChild variant="outline"><Link href="/vechtetalhalle">Anfahrt zur Halle</Link></Button>
            <Button asChild variant="outline"><Link href="#foerderring">Förderring unterstützen</Link></Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <div aria-hidden className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative grid lg:grid-cols-2 gap-12">
          <SectionHeading
            eyebrow="Das bekommst du bei uns"
            title={<>Profi-Struktur für <HighlightWord>unseren Nachwuchs</HighlightWord></>}
            description="Wir heben Jugendvolleyball auf ein Niveau, das in einem Dorfverein einzigartig ist. Hinter jedem Training steht ein durchdachtes Konzept."
          />
          <ul className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-white rounded-2xl p-4">
                <CheckCircle2 className="size-5 text-scu-yellow mt-0.5 shrink-0" />
                <span className="text-sm text-scu-black font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Förderring */}
      <section id="foerderring" className="py-20 lg:py-24 bg-scu-black text-white relative overflow-hidden scroll-mt-28">
        <div aria-hidden className="absolute -top-40 right-0 size-[500px] rounded-full bg-scu-yellow/20 blur-3xl" />
        <Container className="relative max-w-3xl flex flex-col items-start gap-6">
          <Badge variant="yellow" className="w-fit">Förderring e.V.</Badge>
          <h2 className="font-display text-4xl lg:text-5xl font-black leading-[1.05]">
            Der <span className="text-scu-yellow">Förderring</span> macht es möglich.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed">
            Der <strong>Förderring Jugendvolleyball Emlichheim e.V.</strong> ist ein eingetragener,
            gemeinnütziger Verein. Er finanziert zusätzliche Trainer:innen, Material,
            Auswärtsfahrten und Turniere für über 120 Kinder – alles, was über den normalen
            Trainingsbetrieb hinausgeht.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/foerderring"><Euro className="size-4" /> Förderring unterstützen</Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <Link href="/downloads/foerderring-mitgliedschaft.pdf" target="_blank" rel="noopener">
                Beitrittsformular
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
