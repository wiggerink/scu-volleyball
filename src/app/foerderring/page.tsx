import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, Trophy, Mail, ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Förderring Jugendvolleyball Emlichheim e.V.",
  description:
    "Der Förderring Jugendvolleyball Emlichheim e.V. macht Trainer, Material, Auswärtsfahrten und Turniere für über 120 Kinder möglich. Mitglied werden, spenden, Kontakt.",
  alternates: { canonical: "/foerderring" },
};

const JFR_MAIL = "jfr@scu-emlichheim.de";

const mitgliedschaften = [
  { icon: Heart, label: "Einzelpersonen", text: "Für alle, die den Nachwuchs in Emlichheim unterstützen wollen." },
  { icon: Users, label: "Familien", text: "Ein Beitrag für den ganzen Haushalt." },
  { icon: Trophy, label: "Unternehmen", text: "Regionale Betriebe fördern die Jugendarbeit vor Ort." },
];

const wofuer = [
  "Zusätzliche Trainer:innen für die Nachwuchsgruppen",
  "Bälle, Netze und Trainingsmaterial",
  "Auswärtsfahrten zu Spielen und Turnieren",
  "Feriencamps und eigene Turniere",
  "Athletikkonzept und medizinische Betreuung",
  "Aus- und Fortbildung der Jugendtrainer:innen",
];

export default function FoerderringPage() {
  const jfrJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Förderring Jugendvolleyball Emlichheim e.V.",
    email: JFR_MAIL,
    url: "https://scuvolleyball.de/foerderring",
    description:
      "Gemeinnütziger Verein zur Förderung des Jugendvolleyballs beim SC Union Emlichheim.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jfrJsonLd) }} />

      <PageHero
        eyebrow="Förderring e.V."
        title={<>Investiere in die <span className="text-scu-yellow">Zukunft</span>.</>}
        description="Der Förderring Jugendvolleyball Emlichheim e.V. ist ein eingetragener, gemeinnütziger Verein. Er macht möglich, was ein Dorfverein aus eigener Kraft nicht stemmen könnte – für über 120 Kinder und Jugendliche."
        imageUrl="/team/groups/minis.jpg"
      />

      {/* Wofuer das Geld verwendet wird */}
      <section className="py-16 lg:py-24 bg-white">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Wofür"
            title={<>Jeder Euro fließt in den <HighlightWord>Nachwuchs</HighlightWord></>}
            description="Der Förderring finanziert das, was über den normalen Trainingsbetrieb hinausgeht."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wofuer.map((punkt) => (
              <li key={punkt} className="rounded-2xl bg-scu-gray-100 p-5 flex gap-3 items-start">
                <span aria-hidden className="mt-1.5 size-2 rounded-full bg-scu-yellow shrink-0" />
                <span className="text-sm text-scu-black leading-relaxed">{punkt}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Mitglied werden */}
      <section className="py-16 lg:py-24 bg-scu-black text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 right-0 size-[500px] rounded-full bg-scu-yellow/20 blur-3xl" />
        <Container className="relative grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              tone="light"
              eyebrow="Mitgliedschaft"
              title={<>Werde <span className="text-scu-yellow">Förder-Mitglied</span></>}
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {mitgliedschaften.map(({ icon: Icon, label, text }) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Icon className="size-5 text-scu-yellow mb-3" />
                  <div className="text-xs uppercase tracking-[0.22em] font-bold text-white/60">{label}</div>
                  <p className="text-sm text-white/75 mt-2 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed">
              Die Höhe des Jahresbeitrags bestimmst du selbst. Formular herunterladen, ausfüllen und
              an den Förderring schicken – auf Wunsch gibt es am Jahresende eine
              Spendenbescheinigung.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="primary" size="lg">
                <Link href="/downloads/foerderring-mitgliedschaft.pdf" target="_blank" rel="noopener">
                  <Download className="size-4" /> Beitrittsformular (PDF)
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <Link href={`mailto:${JFR_MAIL}?subject=Mitgliedschaft%20im%20F%C3%B6rderring`}>
                  <Mail className="size-4" /> Erst mal nachfragen
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/55">
              Kontakt:{" "}
              <Link href={`mailto:${JFR_MAIL}`} className="underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow">
                {JFR_MAIL}
              </Link>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-scu-yellow">Spendenkonto</div>
              <div className="font-display text-2xl font-black mt-1 leading-tight">
                Förderring Jugendvolleyball Emlichheim e.V.
              </div>
              <dl className="mt-5 text-sm text-white/75 space-y-3">
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-[0.18em]">Bank</dt>
                  <dd className="font-semibold text-white">Grafschafter Volksbank</dd>
                </div>
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-[0.18em]">IBAN</dt>
                  <dd className="font-mono text-white tracking-tight">DE18 2806 9956 4812 7418 00</dd>
                </div>
                <div>
                  <dt className="text-white/50 text-xs uppercase tracking-[0.18em]">Verwendungszweck</dt>
                  <dd className="text-white">Nachwuchsförderung</dd>
                </div>
              </dl>
              <p className="text-xs text-white/50 mt-5 leading-relaxed">
                Der Förderring ist als gemeinnützig anerkannt. Spendenbescheinigungen stellen wir auf
                Wunsch aus.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Zurueck zur Jugend */}
      <section className="py-16 bg-white">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-5">
          <h2 className="font-display text-3xl font-black">
            Wofür der Förderring <HighlightWord>arbeitet</HighlightWord>
          </h2>
          <p className="text-scu-gray-500 leading-relaxed">
            Über 120 Kinder und Jugendliche trainieren jede Woche beim SCU – von den ersten
            Ballkontakten bis zum Sprungbrett in die Bundesliga.
          </p>
          <Button asChild variant="outline">
            <Link href="/jugend">
              Zur Jugendabteilung <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
