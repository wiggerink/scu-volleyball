import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { isMailConfigured } from "@/lib/mail";
import { KontaktForm } from "@/components/forms/kontakt-form";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zum SC Union Emlichheim – Abteilung Volleyball. Geschäftsstelle, Anfragen für Sponsoring, Tickets, Jugend & Presse.",
  alternates: { canonical: "/kontakt" },
};

const contacts = [
  { role: "Allgemein & News",   name: "Geschäftsstelle", email: site.contact.email },
  { role: "Sponsoring",         name: "Sponsoring-Team", email: site.contact.email },
  { role: "Jugend",             name: "Jugendleitung",   email: site.contact.email },
  { role: "Tickets",            name: "Ticketing",       email: site.contact.email },
  { role: "Presse",             name: "Pressestelle",    email: site.contact.email },
];

export default function KontaktPage() {
  const mailBereit = isMailConfigured();

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Lass uns <span className="text-scu-yellow">reden</span>.</>}
        description="Egal ob Probetraining, Sponsoring-Anfrage, Presse oder einfach ein Feedback zu einem Spiel – wir freuen uns auf deine Nachricht."
        imageUrl="/hero/hero-main.jpg"
      />

      <section className="py-20 lg:py-24 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <div className="rounded-3xl border border-scu-gray-200 p-8 flex flex-col gap-4">
              <Building2 className="size-8 text-scu-yellow" />
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-scu-yellow">Geschäftsstelle</div>
                <h2 className="font-display text-2xl font-black mt-1">SC UNION Emlichheim Marketing GmbH</h2>
                <div className="text-xs text-scu-gray-500 mt-1">Sportlicher Spielbetrieb: SC Union Emlichheim e. V.</div>
              </div>
              <div className="text-scu-gray-500 space-y-1.5">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 mt-0.5 text-scu-yellow" />
                  <div>
                    <div className="font-semibold text-scu-black">{site.venue.name}</div>
                    <div>{site.address.street}</div>
                    <div>{site.address.postalCode} {site.address.city}</div>
                  </div>
                </div>
                <Link href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-3 text-scu-black hover:text-scu-yellow transition font-semibold pt-2">
                  <Mail className="size-4 text-scu-yellow" />
                  {site.contact.email}
                </Link>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="size-10 inline-flex items-center justify-center rounded-full bg-scu-gray-100 hover:bg-scu-yellow hover:text-scu-black transition">
                  <FacebookIcon className="size-4" />
                </Link>
                <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="size-10 inline-flex items-center justify-center rounded-full bg-scu-gray-100 hover:bg-scu-yellow hover:text-scu-black transition">
                  <InstagramIcon className="size-4" />
                </Link>
                <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="size-10 inline-flex items-center justify-center rounded-full bg-scu-gray-100 hover:bg-scu-yellow hover:text-scu-black transition">
                  <YoutubeIcon className="size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-scu-gray-100 p-8">
              <h3 className="font-display text-xl font-black mb-4">Ansprechpartner:innen</h3>
              <ul className="divide-y divide-scu-gray-200">
                {contacts.map((c) => (
                  <li key={c.role} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] font-bold text-scu-yellow">{c.role}</div>
                      <div className="font-semibold">{c.name}</div>
                    </div>
                    <Link href={`mailto:${c.email}`} className="text-sm font-semibold text-scu-black hover:text-scu-yellow inline-flex items-center gap-1">
                      E-Mail <ArrowRight className="size-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {mailBereit ? (
            <KontaktForm email={site.contact.email} />
          ) : (
            /* Ohne SMTP-Zugangsdaten kein Formular, das ins Leere laeuft -
               stattdessen offen die Adresse zeigen. */
            <div className="rounded-3xl bg-scu-black text-white p-8 lg:p-10 flex flex-col gap-5">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
                <Mail className="size-6" />
              </div>
              <h2 className="font-display text-3xl font-black leading-tight">Schreib uns</h2>
              <p className="text-white/70 leading-relaxed">
                Am schnellsten erreichst du uns per E-Mail. Wir melden uns in der Regel innerhalb von 48 Stunden.
              </p>
              <Button asChild variant="primary" size="lg" className="w-fit">
                <Link href={`mailto:${site.contact.email}`}>{site.contact.email}</Link>
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
