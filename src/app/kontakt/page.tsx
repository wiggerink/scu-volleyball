import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Building2, ArrowRight, Newspaper, Receipt, Heart, Clapperboard, MonitorPlay } from "lucide-react";
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
    "Kontakt zum SC Union Emlichheim – Abteilung Volleyball: Geschäftsführung, Teammanagement, Presse, Buchhaltung, Förderring, Spieltagsregie und Livestream.",
  alternates: { canonical: "/kontakt" },
};

/** Postfächer laut Mailserver (Stand 16.09.2026). */
const personen = [
  {
    name: "Thorben Helweg",
    rolle: "Geschäftsführer · Sponsoring",
    email: "t.helweg@scuvolleyball.de",
    bild: "/team/2026-27/staff-thorben-helweg-avatar.jpg",
  },
  {
    name: "Tobias Stahl",
    rolle: "Geschäftsführer",
    email: "t.stahl@scuvolleyball.de",
    bild: "/team/2026-27/staff-tobias-stahl-avatar.jpg",
  },
  {
    name: "Silke Reurink",
    rolle: "Teammanagerin · 1. Damenmannschaft",
    email: "s.reurink@scuvolleyball.de",
    bild: "/team/2026-27/staff-silke-reurink-avatar.jpg",
  },
];

const postfaecher = [
  { icon: Newspaper, bereich: "Allgemein, News & Presse", email: "news@scuvolleyball.de" },
  { icon: Receipt, bereich: "Buchhaltung", email: "buchhaltung@scuvolleyball.de" },
  { icon: Heart, bereich: "Förderring Jugendvolleyball", email: "jfr@scuvolleyball.de" },
  { icon: Clapperboard, bereich: "Spieltagsregie", email: "regie@scuvolleyball.de" },
  // Schreibweise so wie das Postfach auf dem Mailserver angelegt ist
  { icon: MonitorPlay, bereich: "Livestream", email: "steaming@scuvolleyball.de" },
];

/** Mailadresse, die auf schmalen Bildschirmen nur vor dem @ umbricht - nie mitten im Wort. */
function MailAdresse({ email }: { email: string }) {
  const [lokal, domain] = email.split("@");
  return (
    <>
      {lokal}
      <wbr />@{domain}
    </>
  );
}

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

            <div className="rounded-3xl bg-scu-gray-100 p-6 sm:p-8 flex flex-col gap-8">
              <div>
                <h3 className="font-display text-xl font-black">Ansprechpartner:innen</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {personen.map((p) => (
                    <li key={p.email}>
                      <a
                        href={`mailto:${p.email}`}
                        className="group flex items-center gap-4 rounded-2xl bg-white p-3 pr-4 ring-1 ring-scu-gray-200 transition hover:ring-scu-black"
                      >
                        <Image
                          src={p.bild}
                          alt=""
                          width={56}
                          height={56}
                          className="size-14 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-display font-black leading-tight text-scu-black">{p.name}</div>
                          <div className="text-xs text-scu-gray-500 mt-0.5">{p.rolle}</div>
                          <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-scu-black">
                            <Mail className="size-3.5 shrink-0" />
                            <span className="underline decoration-scu-gray-300 decoration-2 underline-offset-4 transition group-hover:decoration-scu-black">
                              <MailAdresse email={p.email} />
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-black">Postfächer nach Bereich</h3>
                <ul className="mt-4 divide-y divide-scu-gray-200 rounded-2xl bg-white ring-1 ring-scu-gray-200 overflow-hidden">
                  {postfaecher.map(({ icon: Icon, bereich, email }) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="group flex items-center gap-4 px-4 py-3.5 transition hover:bg-scu-gray-100"
                      >
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-scu-black text-scu-yellow">
                          <Icon className="size-4.5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-scu-gray-500">{bereich}</span>
                          <span className="block text-sm font-semibold text-scu-black">
                            <MailAdresse email={email} />
                          </span>
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-scu-gray-300 transition group-hover:translate-x-0.5 group-hover:text-scu-black" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Eigene Höhe statt über die ganze Spalte gestreckt; läuft beim Scrollen
              neben der längeren Ansprechpartner-Liste mit */}
          <div className="self-start lg:sticky lg:top-32">
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
          </div>
        </Container>
      </section>
    </>
  );
}
