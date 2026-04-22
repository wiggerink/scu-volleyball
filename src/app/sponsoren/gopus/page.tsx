import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  ExternalLink,
  FileCheck2,
  Gauge,
  Handshake,
  Heart,
  Mail,
  MapPin,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const GOPUS_URL = "https://www.gopus.de";

export const metadata: Metadata = {
  title: "GOpus GmbH – SAP-Beratung seit 1999 aus Emlichheim · Premium-Partner",
  description:
    "GOpus GmbH: SAP-Beratung, -Entwicklung und Add-on-Lösungen aus Emlichheim. 25+ Jahre Erfahrung, 300+ Projekte, Kunden wie Fraunhofer, Philips und Kärcher. Stolzer Partner des SCU Volleyball.",
  alternates: { canonical: "/sponsoren/gopus" },
  openGraph: {
    title: "GOpus GmbH – SAP-Beratung aus Emlichheim",
    description:
      "25+ Jahre SAP-Expertise, eigene Produkte für eInvoice, eBusiness und eDelivery. Partner des SCU Volleyball.",
    type: "article",
  },
};

const facts = [
  { k: "25+", v: "Jahre SAP-Expertise", icon: Award },
  { k: "300+", v: "Erfolgreiche Projekte", icon: Rocket },
  { k: "100 %", v: "Zufriedene Kunden", icon: Heart },
  { k: "4", v: "Standorte in Deutschland", icon: Building2 },
];

const services = [
  {
    icon: Users,
    title: "SAP-Beratung",
    text: "Strategische Begleitung bei Einführung, Rollout und Transformation – vom Fachkonzept bis zum S/4HANA-Upgrade.",
  },
  {
    icon: Cpu,
    title: "SAP-Entwicklung",
    text: "ABAP, Fiori und Integrationen, die saubere Standards mit echter Praxistauglichkeit verbinden – sauber dokumentiert, revisionssicher.",
  },
  {
    icon: Wrench,
    title: "Eigene Add-on-Produkte",
    text: "GOpus® eInvoice, eBusiness, eDelivery und Cockpit-Lösungen – fertig integrierbar, zertifiziert, deutschlandweit im Einsatz.",
  },
];

const products = [
  {
    icon: FileCheck2,
    name: "GOpus® eInvoice",
    tag: "XRechnung · ZUGFeRD",
    text: "Rechtskonformes E-Invoicing für die B2B-Pflicht ab 2025. ZUGFeRD, XRechnung, Peppol – direkt aus dem SAP-System verarbeitet.",
  },
  {
    icon: ShieldCheck,
    name: "GOpus® eBusiness",
    tag: "EDI · Automatisierung",
    text: "Elektronischer Nachrichtenaustausch mit Kunden, Lieferanten und Behörden. Von der EDI-Strecke bis zur Bestätigungsrückmeldung.",
  },
  {
    icon: Truck,
    name: "GOpus® eDelivery",
    tag: "Compliance",
    text: "Lieferdaten an die Finanzbehörden melden – pünktlich, nachvollziehbar, mit Audit-Trail für jede Bewegung.",
  },
  {
    icon: Gauge,
    name: "Equipment-Cockpits",
    tag: "ePMV · eAM · eFM",
    text: "Bündelt Instandhaltung, Anlagenmanagement und Field-Service auf einer Oberfläche – ein Klick statt fünf Transaktionen.",
  },
];

const references = [
  "Fraunhofer",
  "Philips",
  "Kärcher",
  "Metabo",
  "Fresenius",
  "Westfalen AG",
  "Apetito",
  "Emsa",
  "Compo",
  "HUF",
  "Kamps",
  "Ameos",
];

const locations = [
  { city: "Emlichheim", note: "Hauptsitz" },
  { city: "Lingen", note: "Emsland" },
  { city: "Münster", note: "Westfalen" },
  { city: "Bogen", note: "Bayern" },
];

const benefits = [
  "Familiäre Unternehmenskultur mit kurzen Wegen",
  "Flexible Arbeitszeiten, Homeoffice möglich",
  "Leistungsgerechte Vergütung + Prämien",
  "Zertifizierte Weiterbildungen & SAP-Lernpfade",
  "Fitness-Zuschuss, Bike-Leasing, bAV",
  "Moderne Arbeitsplätze ab Tag 1",
];

export default function GopusSponsorPage() {
  return (
    <>
      {/* JSON-LD for SEO: Sponsorship + Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "GOpus GmbH",
            url: GOPUS_URL,
            logo: "https://scuvolleyball.de/sponsors/gopus.png",
            description:
              "SAP-Beratung, SAP-Entwicklung und Add-on-Produkte aus Emlichheim – seit 1999.",
            foundingDate: "1999",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mittelstraße 8",
              postalCode: "49824",
              addressLocality: "Emlichheim",
              addressCountry: "DE",
            },
            telephone: "+49 5943 914 255",
            email: "inquiry@gopus.de",
          }),
        }}
      />

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
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs text-white/50 tracking-[0.18em] uppercase font-semibold flex items-center gap-2">
            <Link href="/sponsoren" className="hover:text-scu-yellow transition">
              Sponsoren
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">GOpus GmbH</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="yellow">Gold-Partner</Badge>
                <Badge variant="light">SAP-Beratung seit 1999</Badge>
                <Badge variant="light">Hauptsitz Emlichheim</Badge>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
                Digitale Exzellenz
                <br />
                <span className="text-scu-yellow">direkt von nebenan.</span>
              </h1>
              <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                Seit über 25 Jahren macht die <strong className="text-white">GOpus GmbH</strong>{" "}
                aus Emlichheim das, was SAP-Projekte wirklich brauchen: zuhören,
                nachdenken und Lösungen bauen, die im Alltag funktionieren. Heute begleitet
                das Team Konzerne wie Mittelständler in die digitale Zukunft – und ist
                dabei immer noch das Unternehmen, das man beim Brötchen holen trifft.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" variant="primary">
                  <a href={GOPUS_URL} target="_blank" rel="noopener">
                    Website besuchen <ExternalLink className="size-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outlineLight">
                  <a href="#kontakt">
                    Kontakt aufnehmen <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto lg:ml-auto w-full max-w-md">
                <div className="relative rounded-3xl bg-white p-10 lg:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/sponsors/gopus.png"
                      alt="GOpus GmbH Logo"
                      fill
                      sizes="(min-width: 1024px) 28vw, 80vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div className="mt-6 pt-6 border-t border-scu-gray-200 text-center">
                    <div className="text-[10px] uppercase tracking-[0.24em] font-bold text-scu-gray-500">
                      Gold-Partner SCU Volleyball
                    </div>
                    <div className="font-display text-lg font-black text-scu-black mt-1">
                      SAP. Made in Emlichheim.
                    </div>
                  </div>
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

      {/* === Facts strip === */}
      <section className="relative -mt-10 lg:-mt-14 z-10">
        <Container>
          <div className="rounded-3xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.22)] border border-scu-gray-200 p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.v}
                  className="flex items-start gap-4 lg:border-r last:border-r-0 border-scu-gray-200 lg:pr-8"
                >
                  <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-scu-yellow text-scu-black shadow-[0_8px_20px_-8px_rgba(255,240,1,0.7)]">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-3xl lg:text-4xl font-black text-scu-black leading-none">
                      {f.k}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-scu-gray-500 font-semibold mt-1.5 leading-snug">
                      {f.v}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === Über === */}
      <section className="py-20 lg:py-28 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Über GOpus"
              title={
                <>
                  Ein Dorfunternehmen, das{" "}
                  <span className="text-scu-yellow">Konzerne digitalisiert.</span>
                </>
              }
              description="Gegründet 1999 in Emlichheim – heute mit Projekten in ganz Deutschland, den Niederlanden und darüber hinaus. Was GOpus besonders macht? Die Haltung, dass gute IT leise funktioniert – und die Nähe zu einer Region, die Wort hält."
            />
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Eigentümergeführt, unabhängig.",
                "Festes Team, keine Freelancer-Karawane.",
                "SAP-Partner mit zertifizierten Add-ons.",
                "Kunden aus Pharma, Maschinenbau, Food & mehr.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-scu-yellow shrink-0 mt-0.5" />
                  <span className="text-scu-black/85 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <figure className="relative rounded-3xl bg-gradient-to-br from-scu-yellow/15 via-white to-scu-gold/10 border border-scu-gray-200 p-8 lg:p-10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.2)]">
              <Quote className="size-10 text-scu-yellow" />
              <blockquote className="text-base lg:text-lg font-normal italic text-scu-black/75 leading-relaxed mt-4">
                „GOpus steht für innovative Lösungen und herausragenden Kundenservice –
                getrieben von unserer Leidenschaft für technologische Exzellenz und
                nachhaltigen Erfolg.“
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-scu-gray-200 flex items-center gap-4">
                <div className="inline-flex size-10 items-center justify-center rounded-full bg-scu-black text-scu-yellow font-display font-black text-sm">
                  GG
                </div>
                <div>
                  <div className="font-bold text-scu-black text-sm">Gerold Gülker</div>
                  <div className="text-xs text-scu-gray-500">
                    Geschäftsführer GOpus GmbH
                  </div>
                </div>
              </figcaption>
            </figure>
          </aside>
        </Container>
      </section>

      {/* === Leistungen === */}
      <section className="py-20 lg:py-28 bg-scu-gray-100">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Leistungen"
            title={
              <>
                Drei Säulen – ein{" "}
                <span className="text-scu-yellow">Anspruch.</span>
              </>
            }
            description="Vom Einzelworkshop bis zur vollständigen S/4HANA-Transformation. GOpus deckt die Module ab, die in einem produzierenden Unternehmen wirklich zählen: SD, MM, FI, PM, QM, PP, CRM, GTS."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.title}
                  className="group relative rounded-3xl bg-white border border-scu-gray-200 p-8 flex flex-col gap-5 hover:border-scu-yellow hover:shadow-[0_24px_60px_-20px_rgba(255,240,1,0.35)] hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-scu-black text-scu-yellow group-hover:bg-scu-yellow group-hover:text-scu-black transition">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-scu-black leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-scu-gray-500 mt-3 leading-relaxed">{s.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === Produkte === */}
      <section className="py-20 lg:py-28 bg-white">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionHeading
              eyebrow="Eigene Produkte"
              title={
                <>
                  Vier Lösungen, die{" "}
                  <span className="text-scu-yellow">direkt einsetzbar</span> sind.
                </>
              }
              description="Statt jedes Rad neu zu erfinden hat GOpus über die Jahre marktreife Add-ons gebaut. Plug-in-fertig, SAP-zertifiziert, compliance-ready – und durchgängig aus eigener Entwicklung."
            />
            <Badge variant="gold" size="md" className="shrink-0 tracking-[0.2em]">
              <Sparkles className="size-3" /> Made by GOpus
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className="relative rounded-3xl bg-scu-black text-white p-8 lg:p-10 overflow-hidden group"
                >
                  <div
                    aria-hidden
                    className="absolute -top-20 -right-16 size-48 rounded-full bg-scu-yellow/15 blur-3xl group-hover:bg-scu-yellow/25 transition"
                  />
                  <div className="relative flex items-start gap-5">
                    <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-yellow">
                        {p.tag}
                      </div>
                      <h3 className="font-display text-2xl font-black leading-tight mt-1">
                        {p.name}
                      </h3>
                      <p className="text-white/75 leading-relaxed mt-3">{p.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === Kunden === */}
      <section className="py-20 lg:py-28 bg-scu-gray-100 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-white via-scu-gray-100 to-white"
        />
        <Container className="relative flex flex-col gap-12">
          <SectionHeading
            align="center"
            eyebrow="Referenzen"
            title={
              <>
                Vertrauen von{" "}
                <span className="text-scu-yellow">Weltmarken</span> und starken
                Mittelständlern.
              </>
            }
            description="Eine Auswahl aus dem Kundenportfolio – aus 25+ Jahren gemeinsamer Projektarbeit. Vom DAX-Konzern bis zum Familienbetrieb."
          />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {references.map((name) => (
              <span
                key={name}
                className="inline-flex items-center rounded-full bg-white border border-scu-gray-200 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-scu-black hover:border-scu-yellow hover:text-scu-yellow-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_12px_-6px_rgba(0,0,0,0.1)]"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-center text-sm text-scu-gray-500 max-w-2xl mx-auto">
            … und viele mehr. Die komplette Referenzliste und Erfolgsgeschichten auf{" "}
            <a
              href={GOPUS_URL + "/"}
              target="_blank"
              rel="noopener"
              className="font-semibold text-scu-black underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow-dark transition"
            >
              gopus.de
            </a>
            .
          </p>
        </Container>
      </section>

      {/* === Standorte === */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Standorte"
            title={
              <>
                Vier Standorte.{" "}
                <span className="text-scu-yellow">Eine Handschlag-Qualität.</span>
              </>
            }
            description="Der Hauptsitz ist und bleibt Emlichheim. Dazu Lingen, Münster und Bogen – so ist GOpus dort, wo die Kunden sind."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-12">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`relative rounded-3xl p-7 lg:p-8 flex flex-col gap-3 border transition hover:-translate-y-1 ${
                  i === 0
                    ? "bg-scu-black text-white border-scu-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]"
                    : "bg-scu-gray-100 text-scu-black border-scu-gray-200 hover:border-scu-yellow"
                }`}
              >
                <MapPin
                  className={`size-6 ${i === 0 ? "text-scu-yellow" : "text-scu-black"}`}
                />
                <div>
                  <div
                    className={`text-[10px] uppercase tracking-[0.22em] font-bold ${
                      i === 0 ? "text-scu-yellow" : "text-scu-gray-500"
                    }`}
                  >
                    {loc.note}
                  </div>
                  <div className="font-display text-2xl font-black leading-tight mt-1">
                    {loc.city}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === Karriere === */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-scu-black via-scu-black to-scu-gray-800 text-white relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.25]" />
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-scu-yellow/15 blur-3xl"
        />
        <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              tone="light"
              eyebrow="Karriere"
              title={
                <>
                  Ein Team, in dem Menschen wachsen –{" "}
                  <span className="text-scu-yellow">fachlich und persönlich.</span>
                </>
              }
              description="GOpus sucht laufend SAP-Berater:innen, -Entwickler:innen und Consultants für S/4HANA, FI/CO, PM/CS und die eigenen Add-on-Produkte. Aktuell offene Stellen an allen vier Standorten."
            />
            <div className="flex flex-wrap gap-3 mt-8">
              <Button asChild size="lg" variant="primary">
                <a href={GOPUS_URL + "/karriere/"} target="_blank" rel="noopener">
                  Offene Stellen <ExternalLink className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href="mailto:bewerbung@gopus.de">
                  <Mail className="size-4" /> bewerbung@gopus.de
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-4 backdrop-blur"
                >
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-scu-yellow text-scu-black mt-0.5">
                    <CheckCircle2 className="size-4" />
                  </span>
                  <span className="text-white/90 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* === Partnerschaft SCU === */}
      <section className="py-20 lg:py-28 bg-white">
        <Container className="max-w-4xl">
          <SectionHeading
            align="center"
            eyebrow="Die Partnerschaft"
            title={
              <>
                Warum GOpus den{" "}
                <span className="text-scu-yellow">SCU Volleyball</span> trägt.
              </>
            }
          />
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-scu-yellow/10 via-white to-scu-black/5 border border-scu-gray-200 p-8 lg:p-12 text-center">
            <Handshake className="size-12 text-scu-yellow mx-auto" />
            <p className="text-lg lg:text-xl text-scu-black/85 leading-relaxed mt-6 max-w-2xl mx-auto">
              GOpus und der SCU Volleyball – zwei Geschichten, die in der gleichen
              Straße begannen. Beide stehen für den Beweis, dass man aus Emlichheim
              heraus{" "}
              <strong className="text-scu-black">
                bundesweit etwas bewegen kann
              </strong>
              , wenn man ein starkes Team, Ausdauer und klare Werte hat. Die
              Partnerschaft ist deshalb weit mehr als ein Logo auf der Bande – sie ist
              ein Bekenntnis zur Region und zur Nachwuchsarbeit, von der beide Seiten
              leben.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Badge variant="outline" size="md">
                Gold-Partner seit Jahren
              </Badge>
              <Badge variant="outline" size="md">
                Emlichheim · Grafschaft Bentheim
              </Badge>
              <Badge variant="outline" size="md">
                Gemeinsame Werte
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* === Kontakt === */}
      <section id="kontakt" className="py-20 lg:py-28 bg-scu-gray-100">
        <Container>
          <div className="rounded-3xl bg-white border border-scu-gray-200 overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col gap-6">
                <SectionHeading
                  eyebrow="Kontakt"
                  title={
                    <>
                      Gespräch{" "}
                      <span className="text-scu-yellow">in Emlichheim</span>?
                    </>
                  }
                  description="Die schnellste Antwort gibt's direkt bei GOpus. Gerold Gülker und das Team freuen sich auf Ihre Anfrage – ob zu SAP-Projekten, den Add-on-Produkten oder einer Bewerbung."
                />
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  <ContactLine icon={MapPin} label="Mittelstraße 8, 49824 Emlichheim" />
                  <ContactLine
                    icon={Phone}
                    label="+49 5943 914 255"
                    href="tel:+495943914255"
                  />
                  <ContactLine
                    icon={Mail}
                    label="inquiry@gopus.de"
                    href="mailto:inquiry@gopus.de"
                  />
                  <ContactLine icon={Building2} label="GOpus® GmbH · gegründet 1999" />
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild size="lg" variant="dark">
                    <a href={GOPUS_URL} target="_blank" rel="noopener">
                      gopus.de öffnen <ExternalLink className="size-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/sponsoren">
                      Alle Sponsoren <ArrowUpRight className="size-4" />
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
                    Selbst Partner werden?
                  </div>
                  <h3 className="font-display text-2xl lg:text-3xl font-black leading-tight">
                    Ihr Unternehmen als nächstes Portrait auf scuvolleyball.de.
                  </h3>
                  <p className="text-white/70 leading-relaxed mt-4">
                    Wir erzählen Ihre Geschichte – sichtbar, SEO-stark und mit echtem
                    Mehrwert. Sprechen Sie uns an.
                  </p>
                  <Button asChild size="lg" variant="primary" className="mt-6 w-fit">
                    <Link href="/kontakt">
                      Sponsoring-Paket anfragen <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </aside>
            </div>
          </div>

          {/* Dofollow canonical link */}
          <p className="text-center text-sm text-scu-gray-500 mt-10 max-w-2xl mx-auto">
            Mehr über die GOpus GmbH erfahren Sie auf{" "}
            <a
              href={GOPUS_URL}
              target="_blank"
              rel="noopener"
              className="font-bold text-scu-black underline decoration-scu-yellow decoration-2 underline-offset-4 hover:text-scu-yellow-dark transition"
            >
              www.gopus.de
            </a>{" "}
            – offizielle Website des Premium-Partners.
          </p>
        </Container>
      </section>
    </>
  );
}

function ContactLine({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon className="size-4 text-scu-yellow shrink-0 mt-0.5" />
      <span className="text-sm text-scu-black leading-relaxed">{label}</span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 rounded-xl bg-scu-gray-100 hover:bg-scu-yellow/20 transition px-4 py-3"
      >
        {content}
      </a>
    );
  }
  return (
    <div className="flex items-start gap-3 rounded-xl bg-scu-gray-100 px-4 py-3">
      {content}
    </div>
  );
}
