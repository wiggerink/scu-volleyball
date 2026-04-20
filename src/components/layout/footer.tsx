import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Heart } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/container";

const linkGroups = [
  {
    title: "Mannschaften",
    links: [
      { label: "1. Damen – 2. Bundesliga Pro", href: "/teams/1-mannschaft" },
      { label: "2. Damen – 3. Liga", href: "/teams/2-mannschaft" },
      { label: "Alle Mannschaften", href: "/teams" },
      { label: "Jugendabteilung", href: "/jugend" },
    ],
  },
  {
    title: "Verein",
    links: [
      { label: "Über uns", href: "/verein" },
      { label: "Jugendförderring", href: "/jugend#foerderring" },
      { label: "Sponsoren", href: "/sponsoren" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Tickets", href: "/teams/1-mannschaft#tickets" },
      { label: "Livestream", href: "/teams/1-mannschaft#live" },
      { label: "Spielplan", href: "/teams/1-mannschaft#spielplan" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-scu-black text-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div aria-hidden className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-scu-yellow/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-scu-yellow/10 blur-3xl" />

      <Container className="relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative size-14">
                <Image src="/logos/scu-logo.png" alt="SCU Logo" fill sizes="56px" className="object-contain" />
              </div>
              <div>
                <div className="font-display font-black text-lg leading-none">SC Union Emlichheim</div>
                <div className="text-xs uppercase tracking-[0.25em] text-scu-yellow mt-1">Volleyball Abteilung</div>
              </div>
            </Link>

            <p className="text-white/70 leading-relaxed max-w-sm">
              {site.description}
            </p>

            <div className="flex flex-col gap-2 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-scu-yellow shrink-0" />
                <div>
                  <div className="font-semibold text-white">{site.venue.name}</div>
                  <div>{site.address.street}</div>
                  <div>{site.address.postalCode} {site.address.city}</div>
                </div>
              </div>
              <Link href={`mailto:${site.contact.email}`} className="flex items-center gap-3 hover:text-white transition">
                <Mail className="size-4 text-scu-yellow" />
                {site.contact.email}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="size-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-scu-yellow hover:border-scu-yellow hover:text-scu-black transition">
                <FacebookIcon className="size-4" />
              </Link>
              <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="size-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-scu-yellow hover:border-scu-yellow hover:text-scu-black transition">
                <InstagramIcon className="size-4" />
              </Link>
              <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="size-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-scu-yellow hover:border-scu-yellow hover:text-scu-black transition">
                <YoutubeIcon className="size-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-sm uppercase tracking-[0.2em] text-scu-yellow font-black mb-4">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-white transition">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} SC Union Emlichheim Marketing GmbH.</span>
            <span className="hidden md:inline text-white/20">·</span>
            <Link
              href="https://web-n-search.de"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-1.5 text-white/60 hover:text-scu-yellow transition"
            >
              <span>Gebaut mit</span>
              <Heart className="size-3.5 text-scu-yellow fill-scu-yellow group-hover:scale-125 transition-transform" />
              <span>in Emlichheim von</span>
              <span className="font-semibold underline decoration-scu-yellow/50 decoration-1 underline-offset-4 group-hover:decoration-scu-yellow">Web &amp; Search</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-scu-yellow animate-pulse" />
              Offizieller Club der 2. Bundesliga Pro
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
