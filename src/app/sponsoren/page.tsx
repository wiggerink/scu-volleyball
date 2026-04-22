import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Users2, TrendingUp, Handshake, Megaphone, Heart } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { SponsorsSection } from "@/components/sections/sponsors-section";

export const metadata: Metadata = {
  title: "Sponsoring & Partner",
  description:
    "Ihr Unternehmen in der 2. Bundesliga Pro: Sponsoring-Pakete für den SCU Emlichheim. Mit Reichweite in Niedersachsen, Nordrhein-Westfalen und den Niederlanden.",
  alternates: { canonical: "/sponsoren" },
};

const stats = [
  { v: "2.500+", k: "Zuschauer pro Heimspiel" },
  { v: "15",    k: "Mannschaften quer durchs Land" },
  { v: "30+",   k: "Jahre Bundesliga-Geschichte" },
  { v: "120+",  k: "Kinder & Jugendliche im Training" },
];

const packages = [
  {
    icon: Megaphone,
    tier: "Premium",
    color: "bg-scu-yellow text-scu-black",
    price: "individuell",
    perks: ["Bandenwerbung Spitzenplatz", "Trikot- oder Hosenplatzierung", "Präsenz auf allen Kommunikationskanälen", "VIP-Tickets & Hospitality", "Eigene Content-Formate (Reels, Videos)"],
  },
  {
    icon: TrendingUp,
    tier: "Gold",
    color: "bg-scu-gold text-scu-black",
    price: "ab 5.000 € p.a.",
    perks: ["Bandenwerbung Premiumfläche", "Logo auf der Startseite", "Social-Media-Kooperation", "Tickets für Heimspiele", "Einladung zu Netzwerk-Events"],
  },
  {
    icon: Handshake,
    tier: "Silber",
    color: "bg-scu-black text-white",
    price: "ab 1.500 € p.a.",
    perks: ["Bandenwerbung", "Logo auf der Partner-Seite", "Nennung im Hallenheft", "Tickets für Heimspiele"],
  },
  {
    icon: Heart,
    tier: "Partner",
    color: "bg-scu-gray-800 text-white",
    price: "individuell",
    perks: ["Materialsponsoring", "Kooperationen mit der Jugend", "Lokale Aktionen & Events", "Individuelle Absprachen"],
  },
];

const reasons = [
  { icon: Eye,     title: "Reichweite", text: "Live-Streams, 2.500+ Zuschauer pro Heimspiel, lokale Medien & soziale Netzwerke." },
  { icon: Users2,  title: "Nähe",       text: "Direkter Zugang zu einer engagierten Community in Niedersachsen und der Grenzregion." },
  { icon: Heart,   title: "Verantwortung", text: "Ihre Marke wird mit Jugendförderung, Nachhaltigkeit und Tradition verbunden." },
];

export default function SponsorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsoring"
        title={<>Ihre Marke in der <span className="text-scu-yellow">2. Bundesliga Pro</span>.</>}
        description="Bundesliga-Volleyball in der Grafschaft: Eine Bühne mit hoher Sichtbarkeit, großer Glaubwürdigkeit und echter regionaler Verwurzelung – für Unternehmen, die mehr als Logos wollen."
        imageUrl="/team/team-group.jpg"
      >
        <Button asChild variant="primary" size="lg"><Link href="/kontakt">Jetzt Partner werden</Link></Button>
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

      {/* Pakete */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <Container className="relative">
          <SectionHeading
            eyebrow="Pakete"
            title={<>Passgenaues <HighlightWord>Sponsoring</HighlightWord></>}
            description="Vier Ebenen, unzählige Kombinationsmöglichkeiten. Gerne erstellen wir Ihnen ein individuelles Angebot."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {packages.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.tier} className="rounded-2xl bg-white p-7 flex flex-col gap-4 border border-scu-gray-200 hover:border-scu-yellow transition shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
                  <div className={`inline-flex size-12 items-center justify-center rounded-xl ${p.color} shadow-[0_10px_24px_-8px_rgba(0,0,0,0.25)]`}>
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] font-bold text-scu-yellow-dark">{p.tier}</div>
                    <div className="font-display text-2xl font-black text-scu-black">{p.price}</div>
                  </div>
                  <ul className="text-sm text-scu-gray-500 space-y-2">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-scu-yellow shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="dark" className="mt-auto w-full">
                    <Link href="/kontakt">Anfragen</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <SponsorsSection />
    </>
  );
}
