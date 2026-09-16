import type { Metadata } from "next";
import Link from "next/link";
import { Users, Target, Heart, Trophy, Flag, HeartHandshake, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Der Verein – SC Union Emlichheim",
  description:
    "Seit über drei Jahrzehnten schreibt der SC Union Emlichheim Volleyball-Geschichte in der Grafschaft Bentheim. Werte, Geschichte und Management unseres Vereins.",
  alternates: { canonical: "/verein" },
};

const values = [
  { icon: Heart,   title: "Heimat",         text: "Verwurzelt in Emlichheim, getragen von einer ganzen Region." },
  { icon: Target,  title: "Jugendarbeit",   text: "120+ Kinder & Jugendliche in strukturierten Trainingsgruppen." },
  { icon: Trophy,  title: "Spitzensport",   text: "Sparda 2. Liga Pro Damen. 35+ Jahre Bundesliga-Volleyball." },
  { icon: Users,   title: "Gemeinschaft",   text: "Über 400 aktive Mitglieder, ehrenamtlich getragen." },
  { icon: Flag,    title: "Nachhaltigkeit", text: "Wir bilden eigene Talente aus – bis zur Bundesliga." },
  { icon: HeartHandshake, title: "Partner", text: "Eingebettet in ein starkes regionales Sponsoren-Netzwerk." },
];

/**
 * Eckdaten laut Verein (Stand 15.09.2026).
 * Die Kurzform im Jahres-Kreis nimmt die ersten beiden Ziffern ab Stelle 3,
 * das funktioniert für "1989/90" wie für "2000".
 */
const milestones = [
  { year: "1989/90", title: "Beginn Bundesliga-Volleyball",        text: "Emlichheim spielt erstmals Volleyball auf Bundesliga-Niveau." },
  { year: "1998/99", title: "1. Bundesliga",                       text: "Erste Saison im Oberhaus des deutschen Volleyballs." },
  { year: "1999/00", title: "2. Bundesliga",                       text: "" },
  { year: "2000",    title: "Gründung der Spielbetriebsgesellschaft", text: "Der Spielbetrieb der Bundesliga-Mannschaft wird ausgegliedert – der Grundstein der heutigen Struktur." },
  { year: "2000/01", title: "1. Bundesliga",                       text: "Zurück im Oberhaus." },
  { year: "2001",    title: "Gründung Jugendförderring",           text: "Struktureller Rahmen für nachhaltige Nachwuchsförderung." },
  { year: "2001/02", title: "1. Bundesliga",                       text: "" },
  { year: "2002/03", title: "2. Bundesliga",                       text: "" },
  { year: "2003/04", title: "1. Bundesliga",                       text: "" },
  { year: "2004/05", title: "2. Bundesliga",                       text: "" },
  { year: "2015",    title: "25 Jahre Bundesliga",                 text: "Ein Vierteljahrhundert Bundesliga-Volleyball im Dorf – gefeiert mit einer großen Jubiläumsfeier." },
  { year: "2024/25", title: "Meister der 2. Bundesliga Nord",      text: "" },
  { year: "2025/26", title: "Meister der 2. Bundesliga Nord",      text: "Titelverteidigung – und diesmal mit dem Aufstieg." },
  { year: "2026/27", title: "Sparda 2. Liga Pro",                  text: "Erste Saison in einer der stärksten Damen-Ligen Europas." },
];

export default function VereinPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={<>35 Jahre Bundesliga. <span className="text-scu-yellow">Eine Heimat.</span></>}
        description="Der SC Union Emlichheim ist eine der außergewöhnlichsten Volleyball-Geschichten Deutschlands: Ein 4.000-Einwohner-Dorf trägt seit 1989/90 hochklassigen Bundesliga-Volleyball."
        imageUrl="/team/team-group.jpg"
      />

      <section className="py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Werte"
              title={<>Was uns <HighlightWord>ausmacht</HighlightWord></>}
              description="Sechs Prinzipien, die Emlichheim zu einem besonderen Volleyball-Standort machen."
            />
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-scu-gray-200 p-6 hover:border-scu-yellow transition-all">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-scu-yellow/10 text-scu-yellow mb-3">
                    <Icon className="size-5" />
                  </div>
                  <div className="font-display text-lg font-black">{v.title}</div>
                  <div className="text-sm text-scu-gray-500 mt-1.5">{v.text}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-scu-black text-white">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Meilensteine"
            title={<>Unsere <span className="text-scu-yellow">Geschichte</span></>}
          />
          {/* Zweispaltig ab sm: Jahr links, Ereignis rechts. Einspaltig wuerde der
              Zeitstrahl auf breiten Schirmen als schmale Saeule mit viel Leerraum
              danebenstehen und ueber 1.500 px hoch werden. */}
          <ol className="relative mt-12 sm:mt-14 border-l border-white/10 ml-0 sm:ml-4 space-y-7 sm:space-y-6">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="relative ml-5 sm:ml-10 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-8 sm:items-baseline"
              >
                <span
                  aria-hidden
                  className="absolute -left-[25px] sm:-left-[45px] top-[7px] size-2.5 rounded-full bg-scu-yellow shadow-[0_0_0_4px_rgba(255,240,1,0.2)]"
                />
                <div className="font-display font-black text-scu-yellow text-sm sm:text-base tabular-nums">
                  {m.year}
                </div>
                <div className="mt-1 sm:mt-0">
                  <div className="font-display text-xl sm:text-2xl font-black leading-tight">{m.title}</div>
                  {m.text && (
                    <p className="text-white/70 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">{m.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Verhaeltnis zum Stammverein - steht sonst nur im Impressum */}
      <section className="py-20 lg:py-24 bg-scu-gray-100">
        <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <SectionHeading
            eyebrow="Struktur"
            title={<>Teil des <HighlightWord>SC Union Emlichheim</HighlightWord></>}
          />
          <div className="flex flex-col gap-5">
            <p className="text-scu-gray-500 text-lg leading-relaxed">
              Unser Stammverein ist der <strong className="text-scu-black">SC Union Emlichheim e. V.</strong> Bei ihm
              liegt der sportliche Spielbetrieb aller Mannschaften – von den Minis bis zur Bundesliga.
            </p>
            <p className="text-scu-gray-500 leading-relaxed">
              Aus der Volleyball-Abteilung heraus ist die{" "}
              <strong className="text-scu-black">SC UNION Emlichheim Marketing GmbH</strong> ausgegliedert. Sie
              verantwortet Vermarktung, Fanservices und diese Website. Wer mehr über den Gesamtverein und seine
              übrigen Abteilungen wissen will, findet das beim Stammverein.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild variant="outline">
                <Link href="https://www.scu-emlichheim.de/" target="_blank" rel="noopener">
                  Zum SC Union Emlichheim <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/impressum">Impressum &amp; Rechtliches</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl lg:text-4xl font-black">
            Werde Teil der <HighlightWord>SCU-Familie</HighlightWord>.
          </h2>
          <p className="text-scu-gray-500 text-lg leading-relaxed">
            Ob als Spielerin, Trainer, Helferin, Fan oder Sponsor: Wir freuen uns über jeden, der Emlichheim zu dem macht, was es ist.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg"><Link href="/kontakt">Kontakt</Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/jugend">Jugend & Förderring</Link></Button>
          </div>
        </Container>
      </section>
    </>
  );
}
