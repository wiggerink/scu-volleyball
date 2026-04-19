import type { Metadata } from "next";
import Link from "next/link";
import { Users, Target, Heart, Trophy, Flag, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
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
  { icon: Trophy,  title: "Spitzensport",   text: "2. Bundesliga Pro Damen. 30+ Jahre Bundesliga-Volleyball." },
  { icon: Users,   title: "Gemeinschaft",   text: "Über 400 aktive Mitglieder, ehrenamtlich getragen." },
  { icon: Flag,    title: "Nachhaltigkeit", text: "Wir bilden eigene Talente aus – bis zur Bundesliga." },
  { icon: HeartHandshake, title: "Partner", text: "Eingebettet in ein starkes regionales Sponsoren-Netzwerk." },
];

const milestones = [
  { year: "1994", title: "Erster Aufstieg in die Bundesliga",        text: "Der SCU spielt erstmals Volleyball auf höchstem Niveau." },
  { year: "2013", title: "Gründung Jugendförderring",                text: "Struktureller Rahmen für nachhaltige Nachwuchsförderung." },
  { year: "2021", title: "Athletikkonzept mit Sporthochschule Köln", text: "Profi-Standards in Trainingssteuerung & Prävention." },
  { year: "2024", title: "Meister der 2. Bundesliga Nord",           text: "3:0-Sieg über VC Osnabrück – Titelverteidigung perfekt." },
  { year: "2025", title: "Aufstieg in die 2. Bundesliga Pro",        text: "Historischer Schritt in eine der stärksten Ligen Europas." },
];

export default function VereinPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={<>30 Jahre Bundesliga. <span className="text-scu-yellow">Eine Heimat.</span></>}
        description="Der SC Union Emlichheim ist eine der außergewöhnlichsten Volleyball-Geschichten Deutschlands: Ein 4.000-Einwohner-Dorf trägt seit über drei Jahrzehnten hochklassigen Bundesliga-Volleyball."
        imageUrl="/team/team-group.jpg"
      />

      <section className="py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Werte"
              title={<>Was uns <span className="text-scu-yellow">ausmacht</span></>}
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
          <ol className="relative mt-14 border-l border-white/10 ml-4 space-y-10">
            {milestones.map((m) => (
              <li key={m.year} className="ml-8 relative">
                <span className="absolute -left-[42px] top-1 inline-flex items-center justify-center size-10 rounded-full bg-scu-yellow text-scu-black font-display font-black text-xs shadow-[0_0_0_6px_rgba(255,240,1,0.2)]">
                  {m.year.slice(-2)}
                </span>
                <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-scu-yellow">{m.year}</div>
                <div className="font-display text-2xl font-black mt-1.5">{m.title}</div>
                <p className="text-white/70 mt-2 max-w-2xl">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container className="max-w-3xl text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl lg:text-4xl font-black">
            Werde Teil der <span className="text-scu-yellow">SCU-Familie</span>.
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
