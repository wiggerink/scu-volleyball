import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  Globe,
  Image as ImageIcon,
  Link2,
  LineChart,
  Mail,
  MessageSquare,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "info@web-n-search.de";
const CONTACT_SUBJECT = "Sponsoren-Portraitseite auf scuvolleyball.de";
const EXAMPLE_HREF = "/sponsoren/gopus";
const SAMPLE_REPORT_HREF = "/downloads/sponsoren-beispielreport.pdf";

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  CONTACT_SUBJECT,
)}`;

export const metadata: Metadata = {
  title: "Sponsoren-Portrait auf scuvolleyball.de – Angebot für SCU-Partner",
  description:
    "Eigene Portraitseite auf scuvolleyball.de für SCU-Sponsoren. Professionell getextet, SEO-optimiert, mit dofollow-Backlink. Einmalig 790 €, Contentpflege 99 €/Jahr.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/sponsoren/angebot" },
};

const benefits = [
  {
    icon: Link2,
    title: "Dofollow-Backlink mit echtem SEO-Wert",
    text: "scuvolleyball.de ist eine Bundesliga-Domain mit regionaler Relevanz und stetig wachsendem Traffic. Ein dofollow-Link von hier wirkt auf Ihre eigene Website – messbar, dauerhaft, nicht austauschbar.",
    tint: "yellow", // scu-yellow accent
  },
  {
    icon: FileText,
    title: "Ihre Geschichte – professionell erzählt",
    text: "Statt eines Logos in der Sponsorenleiste bekommen Sie eine eigene Unterseite mit Fließtext, Fakten, Referenzen und Ihrer Haltung. Von einem Menschen recherchiert und geschrieben – nicht von einer Vorlage.",
    tint: "gold", // scu-gold accent
  },
  {
    icon: Target,
    title: "Regionale Sichtbarkeit mit Reichweite",
    text: "Die SCU-Seite wird von Partnern, Fans und Entscheider:innen aus der Grafschaft Bentheim und dem Emsland regelmäßig besucht. Ihre Portraitseite ist dabei – nicht versteckt, sondern verlinkt.",
    tint: "yellow",
  },
  {
    icon: Users,
    title: "Recruiting-Kanal inklusive",
    text: "Lokale Unternehmen kämpfen um Fachkräfte. Eine Portraitseite auf einer Vereins-Website, die junge Menschen aus der Region lesen, ist ein unterschätztes Recruiting-Instrument.",
    tint: "gold",
  },
] as const;

const deliverables = [
  {
    icon: Globe,
    label: "Eigene Unterseite",
    text: "/sponsoren/ihr-firmenname – sprechende URL, sauber eingebunden",
  },
  {
    icon: Link2,
    label: "Dofollow-Backlink",
    text: "Kein nofollow, kein sponsored-Tag – voller SEO-Wert",
  },
  {
    icon: FileText,
    label: "Redaktioneller Text",
    text: "Ca. 400–600 Wörter, auf Basis eines kurzen Briefing-Calls",
  },
  {
    icon: ImageIcon,
    label: "Bildintegration",
    text: "Logo, Teamfoto, Produktbilder – nach Wunsch und Verfügbarkeit",
  },
  {
    icon: Search,
    label: "SEO-Setup",
    text: "Meta-Tags, Open Graph, JSON-LD Organization-Schema",
  },
  {
    icon: Gauge,
    label: "Responsives Design",
    text: "Mobile, Tablet, Desktop – im Look der Hauptseite",
  },
  {
    icon: Calendar,
    label: "1 Jahr Hosting",
    text: "Inklusive – die Seite läuft dauerhaft auf scuvolleyball.de",
  },
  {
    icon: BadgeCheck,
    label: "Portrait-Kennzeichnung",
    text: "Gelbes Portrait-Label in der Sponsorenübersicht",
  },
];

const processSteps = [
  {
    k: "01",
    icon: MessageSquare,
    title: "Briefing-Gespräch",
    text: "30–45 Minuten telefonisch oder vor Ort. Wir klären, was Sie erzählen möchten, welche Bilder Sie haben und welche Keywords für Ihre SEO-Ziele wichtig sind.",
  },
  {
    k: "02",
    icon: FileText,
    title: "Entwurf & Recherche",
    text: "Innerhalb von 5 Arbeitstagen bekommen Sie einen vollständigen Seitenentwurf als Vorschau-Link. Inklusive Text, Layout und Bildintegration.",
  },
  {
    k: "03",
    icon: Sparkles,
    title: "Feedback-Runde",
    text: "Sie geben Rückmeldung – wir setzen Änderungen um. Eine Feedback-Runde ist im Preis enthalten und reicht in der Regel völlig aus.",
  },
  {
    k: "04",
    icon: Rocket,
    title: "Go-Live",
    text: "Ihre Portraitseite geht online. Parallel wird sie in die Sponsorenübersicht eingebunden und mit einem „Portrait“-Label hervorgehoben.",
  },
];

const faqs = [
  {
    q: "Ist das ein Angebot des SC Union Emlichheim?",
    a: "Nein. Die Portraitseiten sind ein Angebot von Web & Search – dem Dienstleister, der die neue SCU-Website ehrenamtlich umsetzt. Der Verein ist einverstanden und freut sich, dass seine Partner auf der Seite zusätzlich sichtbar sein können. Die Rechnung stellt Web & Search, nicht der SCU.",
  },
  {
    q: "Was genau ist ein „dofollow-Backlink“ und warum ist das wichtig?",
    a: "Suchmaschinen bewerten Websites unter anderem danach, wie viele andere Seiten auf sie verlinken. Ein dofollow-Link gibt dabei volle SEO-Kraft weiter. Links von Agenturen oder Linkbörsen sind oft „nofollow“ und damit SEO-wertlos. Unsere Links sind bewusst dofollow – das ist der harte Kern des Angebots.",
  },
  {
    q: "Was kostet die Contentpflege konkret?",
    a: "99 € pro Jahr. Darin enthalten sind kleine inhaltliche Anpassungen (Texte aktualisieren, Logo tauschen, neue Referenzen ergänzen), Link-Monitoring und der laufende Betrieb. Größere Neugestaltungen werden separat kalkuliert.",
  },
  {
    q: "Muss ich die Pflege zwingend buchen?",
    a: "Nein. Die Seite bleibt auch ohne Pflegevertrag 12 Monate online. Danach entscheiden Sie, ob Sie verlängern möchten oder nicht. Ohne Verlängerung wird die Seite deaktiviert – der Backlink geht dann verloren.",
  },
  {
    q: "Wie lange dauert es bis zum Go-Live?",
    a: "Vom Briefing-Call bis zum Livegang typischerweise 2 Wochen. Wenn Sie Ihre Texte und Bilder zügig liefern, auch schneller.",
  },
  {
    q: "Kann ich später noch Änderungen machen?",
    a: "Ja – kleine Anpassungen sind in der Jahrespflege enthalten. Unabhängig davon dürfen Sie jederzeit Änderungswünsche melden; kleinere Dinge gehen meist schnell, größere werden offen kalkuliert.",
  },
  {
    q: "Wer schreibt den Text?",
    a: "Web & Search persönlich – basierend auf dem Briefing-Gespräch, Ihrer Website und einer kurzen Recherche. Kein Textbaukasten, keine KI-Platzhalter. Wenn Sie selbst einen Text liefern möchten, ist das natürlich auch möglich.",
  },
  {
    q: "Was passiert, wenn die SCU-Website mal neu gestaltet wird?",
    a: "Die Portraitseiten sind fester Bestandteil der Website-Struktur. Bei zukünftigen Relaunches werden sie nicht gelöscht, sondern mitübernommen. Der Backlink bleibt bestehen.",
  },
];

export default function AngebotPage() {
  return (
    <>
      {/* === Hero === */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
        <div
          aria-hidden
          className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-scu-yellow/25 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-20 right-0 h-80 w-80 rounded-full bg-scu-gold/20 blur-3xl"
        />

        <Container className="relative pt-44 sm:pt-48 lg:pt-56 pb-16 lg:pb-24">
          <nav className="mb-8 text-xs text-white/50 tracking-[0.18em] uppercase font-semibold flex items-center gap-2">
            <Link href="/sponsoren" className="hover:text-scu-yellow transition">
              Sponsoren
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">Portrait-Angebot</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="yellow">Exklusiv für SCU-Partner</Badge>
                <Badge variant="light">SEO-optimiert</Badge>
                <Badge variant="light">Dofollow-Backlink</Badge>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Ihr Unternehmen
                <br />
                <span className="text-scu-yellow">im Portrait.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                Als Partner des SCU Volleyball sind Sie bereits auf{" "}
                <strong className="text-white">scuvolleyball.de</strong> mit Logo
                sichtbar. Mit einer eigenen Portraitseite bekommen Sie mehr: Ihre
                Geschichte, Ihre Leistungen, Ihre Haltung – und einen{" "}
                <strong className="text-white">dofollow-Backlink</strong>, der
                Ihrer eigenen Website dauerhaft Reichweite zuspielt.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" variant="primary">
                  <a href={mailtoHref}>
                    Jetzt anfragen <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <Link href={EXAMPLE_HREF}>
                    Beispiel: GOpus <ExternalLink className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a
                    href={SAMPLE_REPORT_HREF}
                    target="_blank"
                    rel="noopener"
                  >
                    Beispiel-Report (PDF) <Download className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Pricing sticker */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto lg:ml-auto w-full max-w-md">
                <div className="relative rounded-3xl bg-white p-8 lg:p-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] font-bold text-scu-gray-500">
                    <Sparkles className="size-3 text-scu-yellow" />
                    Komplettpaket
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-6xl lg:text-7xl font-black text-scu-black leading-none">
                      790
                    </span>
                    <span className="font-display text-3xl font-black text-scu-black">
                      €
                    </span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-scu-gray-500 mt-2">
                    einmalig · zzgl. MwSt.
                  </div>

                  <div className="my-6 h-px bg-scu-gray-200" />

                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-black text-scu-black leading-none">
                      99
                    </span>
                    <span className="font-display text-lg font-black text-scu-black">
                      €
                    </span>
                    <span className="text-sm font-semibold text-scu-gray-500">
                      / Jahr
                    </span>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-scu-gray-500 mt-2">
                    Contentpflege · optional
                  </div>

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {[
                      "Eigene Unterseite inkl. Domain-Integration",
                      "Dofollow-Backlink auf Ihre Website",
                      "Redaktioneller Text (ca. 400–600 Wörter)",
                      "1 Feedback-Runde inklusive",
                      "12 Monate Hosting inklusive",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-scu-black/85"
                      >
                        <CheckCircle2 className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  aria-hidden
                  className="absolute -top-4 -right-4 size-20 rounded-2xl bg-scu-yellow rotate-[8deg] -z-10"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-6 -left-6 size-24 rounded-2xl bg-scu-gold -rotate-[6deg] -z-10"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* === Warum === */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-scu-yellow/[0.04] to-white overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-scu-yellow/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-scu-gold/15 blur-3xl"
        />
        <Container className="relative flex flex-col gap-14">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
              <span className="h-px w-8 bg-current" />
              Warum eine Portraitseite
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
              Mehr als ein Logo in der{" "}
              <span className="relative inline-block text-scu-black">
                <span className="relative z-10">Sponsorenleiste.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-scu-gray-500">
              Sponsoring auf reiner Logo-Ebene hat seine Grenzen. Eine eigene
              Portraitseite macht aus Sichtbarkeit echte Wirkung – für Ihr
              Marketing, Ihre SEO, Ihr Recruiting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              const isYellow = b.tint === "yellow";
              return (
                <article
                  key={b.title}
                  className={`group relative overflow-hidden rounded-3xl bg-white border border-scu-gray-200 p-8 flex flex-col gap-5 hover:-translate-y-1 transition-all shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] ${
                    isYellow ? "hover:border-scu-yellow" : "hover:border-scu-gold"
                  }`}
                >
                  {/* Colored accent bar at top */}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-1.5 ${
                      isYellow ? "bg-scu-yellow" : "bg-scu-gold"
                    }`}
                  />
                  {/* Soft bg blob */}
                  <span
                    aria-hidden
                    className={`absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition ${
                      isYellow ? "bg-scu-yellow/20" : "bg-scu-gold/20"
                    }`}
                  />
                  <div
                    className={`relative inline-flex size-14 items-center justify-center rounded-2xl shadow-[0_10px_24px_-8px_rgba(255,240,1,0.55)] ${
                      isYellow
                        ? "bg-scu-yellow text-scu-black"
                        : "bg-scu-gold text-scu-black"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-xl lg:text-2xl font-black text-scu-black leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-scu-gray-500 mt-3 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === Deliverables === */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-scu-yellow/[0.06] via-white to-scu-gold/[0.05] overflow-hidden">
        <Container className="relative flex flex-col gap-14">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
              <span className="h-px w-8 bg-current" />
              Leistungsumfang
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
              Was Sie für{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-scu-black">790 €</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                />
              </span>{" "}
              bekommen.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-scu-gray-500">
              Ein komplett umgesetztes, sofort sichtbares Ergebnis. Kein
              Bastelkasten, kein Template-Selbstbau. Fertig übergeben –
              inklusive aller SEO-Grundlagen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {deliverables.map((d, i) => {
              const Icon = d.icon;
              // Alternate yellow / gold / soft-yellow / soft-gold for visual variety
              const palette = [
                {
                  tile: "bg-scu-yellow text-scu-black",
                  border: "hover:border-scu-yellow",
                  shadow: "hover:shadow-[0_18px_40px_-20px_rgba(255,240,1,0.5)]",
                },
                {
                  tile: "bg-scu-gold text-scu-black",
                  border: "hover:border-scu-gold",
                  shadow: "hover:shadow-[0_18px_40px_-20px_rgba(212,175,55,0.5)]",
                },
              ][i % 2];
              return (
                <div
                  key={d.label}
                  className={`group relative rounded-2xl bg-white border border-scu-gray-200 p-6 flex flex-col gap-4 transition-all hover:-translate-y-1 ${palette.border} ${palette.shadow}`}
                >
                  <div
                    className={`inline-flex size-11 items-center justify-center rounded-xl ${palette.tile} shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)]`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-display font-black text-scu-black">
                      {d.label}
                    </div>
                    <div className="text-sm text-scu-gray-500 leading-relaxed mt-1">
                      {d.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === Live-Beispiel === */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-scu-yellow/15 via-white to-scu-gold/10 border border-scu-gray-200 p-8 lg:p-14 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="black">Live-Beispiel</Badge>
                  <Badge variant="outline">Gold-Partner GOpus</Badge>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-scu-black leading-[1.05]">
                  So sieht Ihr{" "}
                  <span className="text-scu-yellow">Portrait</span> aus.
                </h2>
                <p className="text-base sm:text-lg text-scu-gray-500 leading-relaxed max-w-2xl">
                  Die GOpus GmbH aus Emlichheim war der erste Partner mit einer
                  vollständigen Portraitseite. Vom Hero über eigene Produkte bis
                  zum Karriere-Call-to-Action – ein vollständiger Markenauftritt
                  auf einer Seite. In genau diesem Format entsteht auch Ihre.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild size="lg" variant="dark">
                    <Link href={EXAMPLE_HREF}>
                      Beispiel öffnen <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={mailtoHref}>
                      So eine Seite möchte ich auch{" "}
                      <Mail className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <ul className="flex flex-col gap-3">
                  {[
                    { icon: TrendingUp, label: "Hero mit Markenclaim" },
                    { icon: Briefcase, label: "Leistungsübersicht" },
                    { icon: Target, label: "Referenzen & Kunden" },
                    { icon: Users, label: "Karriere-Sektion" },
                    { icon: Link2, label: "Kontaktbereich mit Backlink" },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <li
                        key={row.label}
                        className="flex items-center gap-3 rounded-2xl bg-white border border-scu-gray-200 px-5 py-4"
                      >
                        <div className="inline-flex size-9 items-center justify-center rounded-full bg-scu-yellow text-scu-black">
                          <Icon className="size-4" />
                        </div>
                        <span className="font-semibold text-scu-black">
                          {row.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* === Beispiel-Report === */}
      <section className="relative py-20 lg:py-28 bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-15" />
        <div
          aria-hidden
          className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-scu-yellow/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-scu-gold/15 blur-3xl"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="yellow">Transparenz</Badge>
                <Badge variant="light">Beispiel-Report</Badge>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05]">
                Was bringt eine Portraitseite{" "}
                <span className="text-scu-yellow">wirklich?</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
                Damit Sie sich ein realistisches Bild machen können, haben wir
                einen{" "}
                <strong className="text-white">
                  kompletten Beispiel-Report
                </strong>{" "}
                erstellt – so, wie Sie ihn im Rahmen der Contentpflege einmal
                pro Quartal bekommen könnten. Mit Traffic-Zahlen,
                SEO-Rankings und Conversion-Funnel.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: BarChart3, label: "Traffic & Nutzerverhalten" },
                  { icon: Search, label: "SEO-Rankings & Backlinks" },
                  { icon: LineChart, label: "Conversion-Funnel" },
                  { icon: TrendingUp, label: "Quartalsweise automatisch" },
                ].map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.label}
                      className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                    >
                      <div className="inline-flex size-9 items-center justify-center rounded-full bg-scu-yellow text-scu-black">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {row.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild size="lg" variant="primary">
                  <a
                    href={SAMPLE_REPORT_HREF}
                    target="_blank"
                    rel="noopener"
                  >
                    Beispiel-Report laden <Download className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a href={mailtoHref}>
                    So einen Report will ich auch{" "}
                    <Mail className="size-4" />
                  </a>
                </Button>
              </div>
              <p className="text-xs text-white/50 max-w-md">
                PDF, 4 Seiten · fiktive &bdquo;Muster GmbH &amp; Co. KG&ldquo;,
                Q1 2026 · öffnet in neuem Tab.
              </p>
            </div>

            {/* PDF preview mock */}
            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md">
                <a
                  href={SAMPLE_REPORT_HREF}
                  target="_blank"
                  rel="noopener"
                  className="group relative block rounded-3xl bg-white text-scu-black p-8 lg:p-10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden hover:-translate-y-1 transition-all"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-2 bg-scu-yellow"
                  />
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-gray-500">
                        Sponsoren-Portrait
                      </div>
                      <div className="font-display text-xl font-black text-scu-black mt-1">
                        Beispiel-Report
                      </div>
                      <div className="text-xs text-scu-gray-500 mt-0.5">
                        Q1 2026 · Muster GmbH &amp; Co. KG
                      </div>
                    </div>
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-black text-scu-yellow shrink-0">
                      <FileText className="size-5" />
                    </div>
                  </div>

                  {/* Mock KPI cards */}
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {[
                      { label: "Views", value: "3.412", delta: "+18%" },
                      { label: "Verweildauer", value: "2:47", delta: "+22%" },
                      { label: "Backlink-Klicks", value: "284", delta: "+41%" },
                    ].map((k) => (
                      <div
                        key={k.label}
                        className="rounded-xl border border-scu-gray-200 p-3 relative overflow-hidden"
                      >
                        <div
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-0.5 bg-scu-yellow"
                        />
                        <div className="text-[8px] uppercase tracking-[0.12em] font-bold text-scu-gray-500">
                          {k.label}
                        </div>
                        <div className="font-display text-base font-black text-scu-black mt-1">
                          {k.value}
                        </div>
                        <div className="text-[9px] font-bold text-green-600 mt-0.5">
                          {k.delta}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mock bar chart */}
                  <div className="rounded-xl bg-scu-gray-100 p-4 mb-4">
                    <div className="text-[9px] uppercase tracking-[0.14em] font-bold text-scu-gray-500 mb-3">
                      Top Traffic-Quellen
                    </div>
                    <div className="flex flex-col gap-2">
                      {[
                        { l: "Google organic", w: 88 },
                        { l: "Direct", w: 52 },
                        { l: "scuvolleyball.de", w: 41 },
                        { l: "LinkedIn", w: 19 },
                      ].map((row) => (
                        <div key={row.l} className="flex items-center gap-2">
                          <span className="text-[9px] text-scu-gray-500 w-24 shrink-0">
                            {row.l}
                          </span>
                          <div
                            className="h-2 rounded-full bg-scu-yellow"
                            style={{ width: `${row.w}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-scu-gray-200">
                    <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-scu-gray-500">
                      4 Seiten · PDF
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-scu-black group-hover:text-scu-yellow-dark transition">
                      Öffnen
                      <Download className="size-3" />
                    </div>
                  </div>
                </a>
                <div
                  aria-hidden
                  className="absolute -bottom-6 -right-6 size-24 rounded-2xl bg-scu-yellow -rotate-[4deg] -z-10"
                />
                <div
                  aria-hidden
                  className="absolute -top-4 -left-4 size-20 rounded-2xl bg-scu-gold rotate-[6deg] -z-10"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* === Marktvergleich === */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-scu-yellow/[0.08] via-white to-scu-gold/[0.06]"
        />
        <div
          aria-hidden
          className="absolute -top-32 right-10 h-[420px] w-[420px] rounded-full bg-scu-yellow/20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-scu-gold/15 blur-3xl"
        />
        <Container className="relative">
          <div className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
              <span className="h-px w-8 bg-current" />
              Marktvergleich
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
              790 € klingt{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-scu-black">günstig</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                />
              </span>
              ?
              <br />
              Ist es auch.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-scu-gray-500">
              Ein nüchterner Blick darauf, was die einzelnen Bestandteile bei
              Agenturen typischerweise kosten – und warum das Gesamtpaket so
              bewusst unter der Wahrnehmungsschwelle für Marketingbudgets
              bleibt.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Agency card - kept dark for contrast, but smaller presence */}
            <div className="relative rounded-3xl bg-white border-2 border-scu-gray-200 p-8 lg:p-10 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-scu-gray-100 text-scu-gray-500">
                  <Briefcase className="size-4" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-scu-gray-500">
                  Einzeln bei einer Agentur
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Dofollow-Backlink (monatliche Miete)", price: "300–800 € / Monat" },
                  { label: "Redaktioneller Text (400–600 Wörter)", price: "400–800 €" },
                  { label: "Landing-Page-Design & Umsetzung", price: "1.200–2.500 €" },
                  { label: "SEO-Grundsetup inkl. JSON-LD", price: "300–500 €" },
                  { label: "Hosting & Betrieb (12 Monate)", price: "150–300 €" },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-2.5 border-b border-scu-gray-200 last:border-b-0"
                  >
                    <span className="text-sm text-scu-black/75">{row.label}</span>
                    <span className="text-sm font-bold text-scu-black whitespace-nowrap">
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t-2 border-scu-gray-200 flex items-center justify-between">
                <span className="text-sm font-semibold text-scu-gray-500 uppercase tracking-wider">
                  Listenpreis
                </span>
                <span className="font-display text-3xl font-black text-scu-black">
                  ~ 4.500 €+
                </span>
              </div>
            </div>

            {/* Winner card - bright yellow, glowing, clearly the hero */}
            <div className="relative rounded-3xl bg-gradient-to-br from-scu-yellow via-scu-yellow to-scu-gold text-scu-black p-8 lg:p-10 shadow-[0_40px_100px_-30px_rgba(255,240,1,0.75)] border-2 border-scu-yellow/0 overflow-hidden">
              <div
                aria-hidden
                className="absolute -top-20 -right-16 size-56 rounded-full bg-white/20 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-16 -left-12 size-40 rounded-full bg-white/10 blur-2xl"
              />
              <div className="relative flex items-center gap-2 mb-5">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-scu-black text-scu-yellow">
                  <Sparkles className="size-4" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] font-black">
                  Komplettpaket scuvolleyball.de
                </span>
              </div>
              <div className="relative flex items-baseline gap-3">
                <span className="font-display text-7xl lg:text-8xl font-black leading-none">
                  790
                </span>
                <span className="font-display text-3xl font-black">€</span>
                <span className="text-sm font-bold uppercase tracking-wider">
                  einmalig
                </span>
              </div>
              <p className="relative mt-5 text-scu-black/85 leading-relaxed">
                Alles aus einer Hand: Briefing, Text, Design, SEO, Hosting. Kein
                laufendes Abo, keine Zusatzkosten, kein Agentur-Aufschlag. Wer
                möchte, bucht die Contentpflege für{" "}
                <strong>99 € / Jahr</strong> dazu.
              </p>
              <div className="relative mt-8 pt-6 border-t-2 border-scu-black/15 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wider">
                  Ihre Ersparnis
                </span>
                <span className="font-display text-3xl font-black">
                  ~ 3.700 €+
                </span>
              </div>
            </div>
          </div>
          <p className="relative text-center text-sm text-scu-gray-500 mt-10 max-w-2xl mx-auto">
            Hinweis: Vergleichswerte sind Marktdurchschnitte 2025 für deutsche
            Mittelstands-Agenturen. Einzelne Positionen können je nach Anbieter
            abweichen – am Gesamtverhältnis ändert das wenig.
          </p>
        </Container>
      </section>

      {/* === Ablauf === */}
      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        <div
          aria-hidden
          className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-scu-gold/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-scu-yellow/15 blur-3xl"
        />
        <Container className="relative flex flex-col gap-14">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
              <span className="h-px w-8 bg-current" />
              So läuft&apos;s ab
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
              Vier Schritte bis zum{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-scu-black">Go-Live.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-scu-gray-500">
              Typischerweise sind Sie in 2 Wochen online. Ohne Aufwand auf
              Ihrer Seite – abgesehen von einem Briefing-Gespräch und einer
              Feedback-Runde.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              // Alternate accent color per step — yellow/gold/yellow/gold
              const isYellow = i % 2 === 0;
              return (
                <article
                  key={step.k}
                  className={`group relative overflow-hidden rounded-3xl bg-white border-2 border-scu-gray-200 p-7 lg:p-8 flex flex-col gap-5 transition hover:-translate-y-1 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)] ${
                    isYellow ? "hover:border-scu-yellow" : "hover:border-scu-gold"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute -top-16 -right-16 size-44 rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition ${
                      isYellow ? "bg-scu-yellow/25" : "bg-scu-gold/25"
                    }`}
                  />
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`font-display text-5xl font-black leading-none ${
                        isYellow ? "text-scu-yellow" : "text-scu-gold"
                      }`}
                    >
                      {step.k}
                    </span>
                    <div
                      className={`inline-flex size-12 items-center justify-center rounded-2xl shadow-[0_10px_24px_-8px_rgba(255,240,1,0.55)] ${
                        isYellow
                          ? "bg-scu-yellow text-scu-black"
                          : "bg-scu-gold text-scu-black"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-xl font-black text-scu-black leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-scu-gray-500 mt-2 leading-relaxed text-sm">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === FAQ === */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-scu-yellow/[0.05] via-white to-white overflow-hidden">
        <div
          aria-hidden
          className="absolute top-20 right-0 h-64 w-64 rounded-full bg-scu-gold/10 blur-3xl"
        />
        <Container className="relative max-w-4xl">
          <div className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
              <span className="h-px w-8 bg-current" />
              Häufige Fragen
              <span className="h-px w-8 bg-current" />
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
              Alles, was Sie vorher noch{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-scu-black">
                  wissen wollen.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                />
              </span>
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white border border-scu-gray-200 open:border-scu-yellow open:shadow-[0_12px_30px_-14px_rgba(0,0,0,0.12)] transition-all"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-6 py-5 font-display font-black text-scu-black text-base lg:text-lg">
                  <span>{f.q}</span>
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-scu-gray-100 text-scu-black group-open:bg-scu-yellow group-open:rotate-45 transition-all">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="size-4"
                      aria-hidden
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-1 text-scu-gray-500 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* === Kontakt === */}
      <section
        id="kontakt"
        className="relative py-20 lg:py-28 bg-gradient-to-br from-white via-scu-yellow/[0.05] to-scu-gold/[0.06] overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-scu-yellow/15 blur-3xl"
        />
        <Container className="relative">
          <div className="rounded-3xl bg-white border border-scu-gray-200 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col gap-6">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-scu-yellow-dark">
                    <span className="h-px w-8 bg-current" />
                    Kontakt aufnehmen
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-scu-black">
                    Gespräch{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-scu-black">
                        vereinbaren
                      </span>
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
                      />
                    </span>
                    .
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-scu-gray-500">
                    Der einfachste Weg ist eine kurze E-Mail. Schreiben Sie
                    mir, welches Unternehmen Sie vertreten – ich melde mich mit
                    einem Terminvorschlag für den Briefing-Call.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <a
                    href={mailtoHref}
                    className="flex items-start gap-3 rounded-xl bg-scu-gray-100 hover:bg-scu-yellow/20 transition px-4 py-3"
                  >
                    <Mail className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                    <span className="text-sm text-scu-black leading-relaxed font-semibold">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                  <a
                    href="https://web-n-search.de"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-3 rounded-xl bg-scu-gray-100 hover:bg-scu-yellow/20 transition px-4 py-3"
                  >
                    <Globe className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                    <span className="text-sm text-scu-black leading-relaxed font-semibold">
                      Web &amp; Search · web-n-search.de
                    </span>
                  </a>
                  <div className="flex items-start gap-3 rounded-xl bg-scu-gray-100 px-4 py-3 sm:col-span-2">
                    <Phone className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                    <span className="text-sm text-scu-black leading-relaxed">
                      Telefonisch auf Anfrage per E-Mail – ich rufe gerne
                      zurück.
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild size="lg" variant="primary">
                    <a href={mailtoHref}>
                      E-Mail schreiben <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href={EXAMPLE_HREF}>
                      Beispiel ansehen <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <aside className="lg:col-span-5 bg-scu-black text-white p-8 lg:p-12 flex flex-col justify-center gap-5 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 size-60 rounded-full bg-scu-yellow/20 blur-3xl"
                />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-yellow mb-3">
                    Transparenz-Hinweis
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-black leading-tight">
                    Ein Angebot von Web &amp; Search.
                  </h3>
                  <p className="text-white/70 leading-relaxed mt-4">
                    Die SCU-Website wird von Web &amp; Search ehrenamtlich
                    umgesetzt. Die Portraitseiten sind ein separates, bezahltes
                    Angebot des Dienstleisters an interessierte Sponsoren. Der
                    Verein ist einverstanden und profitiert von der
                    zusätzlichen Qualität seines Partner-Bereichs.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="yellow">Für SCU-Partner</Badge>
                    <Badge variant="light">Transparent</Badge>
                    <Badge variant="light">Einmalig 790 €</Badge>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
