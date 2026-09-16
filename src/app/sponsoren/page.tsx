import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eye, Users2, Heart, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { sponsoringContact } from "@/lib/sponsors";

export const metadata: Metadata = {
  title: "Sponsoring & Partner",
  description:
    "Ihr Unternehmen in der Sparda 2. Liga Pro: Sponsoring beim SCU Emlichheim – individuell und im direkten Gespräch. Mit Reichweite in Niedersachsen, Nordrhein-Westfalen und den Niederlanden.",
  alternates: { canonical: "/sponsoren" },
};

const stats = [
  { v: "300–700", k: "Zuschauer pro Heimspiel" },
  { v: "14",    k: "Mannschaften quer durchs Land" },
  { v: "35+",   k: "Jahre Bundesliga-Geschichte" },
  { v: "120+",  k: "Kinder & Jugendliche im Training" },
];

const reasons = [
  { icon: Eye,     title: "Reichweite", text: "Live-Streams, 300 bis 700 Zuschauer pro Heimspiel, lokale Medien & soziale Netzwerke." },
  { icon: Users2,  title: "Nähe",       text: "Direkter Zugang zu einer engagierten Community in Niedersachsen und der Grenzregion." },
  { icon: Heart,   title: "Verantwortung", text: "Ihre Marke wird mit Jugendförderung, Nachhaltigkeit und Tradition verbunden." },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsoring"
        title={<>Ihre Marke in der <span className="text-scu-yellow">Sparda 2. Liga Pro</span>.</>}
        description="Bundesliga-Volleyball in der Grafschaft: Eine Bühne mit hoher Sichtbarkeit, großer Glaubwürdigkeit und echter regionaler Verwurzelung – für Unternehmen, die mehr als Logos wollen."
        imageUrl="/team/team-group.jpg"
      >
        <Button asChild variant="primary" size="lg"><Link href="#ansprechpartner">Jetzt Partner werden</Link></Button>
      </PageHero>

      {/* Zahlen */}
      <section className="py-16 bg-white border-b border-scu-gray-200">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.k} className="text-center md:text-left">
                <div className="font-display text-4xl lg:text-5xl font-black text-scu-yellow">{s.v}</div>
                <div className="text-sm text-scu-gray-500 mt-2 font-medium">{s.k}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Warum sponsern */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white via-scu-yellow/[0.04] to-white overflow-hidden">
        <div aria-hidden className="absolute -top-16 -right-20 h-72 w-72 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Warum SCU?"
            title={<>Drei Gründe für ein <HighlightWord>Engagement</HighlightWord></>}
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              const isYellow = i % 2 === 0;
              return (
                <div
                  key={r.title}
                  className={`group relative overflow-hidden rounded-2xl bg-white border border-scu-gray-200 p-7 transition hover:-translate-y-1 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] ${isYellow ? "hover:border-scu-yellow" : "hover:border-scu-gold"}`}
                >
                  <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${isYellow ? "bg-scu-yellow" : "bg-scu-gold"}`} />
                  <div className={`inline-flex size-12 items-center justify-center rounded-xl mb-4 ${isYellow ? "bg-scu-yellow text-scu-black" : "bg-scu-gold text-scu-black"} shadow-[0_10px_24px_-8px_rgba(255,240,1,0.55)]`}>
                    <Icon className="size-6" />
                  </div>
                  <div className="font-display text-xl font-black text-scu-black">{r.title}</div>
                  <div className="text-sm text-scu-gray-500 mt-2 leading-relaxed">{r.text}</div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Ansprechpartner – Sponsoring läuft im direkten Gespräch, ohne öffentliche Pakete */}
      <section id="ansprechpartner" className="relative py-20 lg:py-24 bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-scu-yellow/15 blur-3xl" />
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="flex flex-col gap-5">
              <div className="text-[11px] uppercase tracking-[0.24em] font-bold text-scu-yellow">Ihr Ansprechpartner</div>
              <h2 className="font-display text-4xl lg:text-5xl font-black leading-[1.02]">
                Sponsoring ist bei uns <span className="text-scu-yellow">Chefsache</span>.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Kein Paket von der Stange: Jedes Engagement beim SCU wird individuell zugeschnitten – von der Bande
                bis zum Trikot, von der Jugendförderung bis zum Content-Format. Rufen Sie einfach an oder schreiben
                Sie eine E-Mail, alles Weitere besprechen wir persönlich.
              </p>
            </div>

            <div className="rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur p-8 flex flex-col sm:flex-row items-center gap-7">
              {sponsoringContact.photo ? (
                <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl ring-2 ring-scu-yellow/60">
                  <Image
                    src={sponsoringContact.photo}
                    alt={sponsoringContact.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="size-28 rounded-2xl bg-scu-yellow text-scu-black flex items-center justify-center font-display text-4xl font-black shrink-0 ring-2 ring-scu-yellow/60">
                  TH
                </div>
              )}
              <div className="flex flex-col gap-3 text-center sm:text-left min-w-0">
                <div>
                  <div className="font-display text-2xl font-black">{sponsoringContact.name}</div>
                  <div className="text-sm text-white/60 mt-0.5">{sponsoringContact.role}</div>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={sponsoringContact.phoneHref} className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-white hover:text-scu-yellow transition font-semibold">
                    <Phone className="size-4 text-scu-yellow shrink-0" /> {sponsoringContact.phone}
                  </a>
                  <a href={`mailto:${sponsoringContact.email}`} className="inline-flex items-center justify-center sm:justify-start gap-2.5 text-white hover:text-scu-yellow transition font-semibold break-all">
                    <Mail className="size-4 text-scu-yellow shrink-0" /> {sponsoringContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SponsorsSection />
    </>
  );
}
