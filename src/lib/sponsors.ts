export type Sponsor = {
  name: string;
  /** Fehlt das Logo (noch), rendert die Kachel den Namen als Platzhalter. */
  logo?: string;
  /** Fehlt die URL, ist die Kachel nicht verlinkt. */
  href?: string;
  /** Wenn gesetzt, hat der Sponsor ein eigenes Portrait unter /sponsoren/{profileSlug} */
  profileSlug?: string;
};

/**
 * Alle Sponsoren gleichwertig (kein öffentliches Stufenmodell),
 * alphabetisch sortiert.
 */
export const sponsors: Sponsor[] = [
  { name: "A&S",                      logo: "/sponsors/aunds.png",                 href: "http://www.aunds-gmbh.de/" },
  { name: "bekuplast",                logo: "/sponsors/bekuplast.png",             href: "https://www.bekuplast.com/" },
  { name: "Brookmann Werbetechnik",   logo: "/sponsors/brookmann.png",             href: "http://www.brookmann-werbetechnik.de/" },
  { name: "Emsland Group",            logo: "/sponsors/emsland-group.jpg",         href: "https://www.emsland-group.de/" },
  { name: "evb Kanzlei",              logo: "/sponsors/evb-kanzlei.png",           href: "https://www.evb-kanzlei.de" },
  { name: "gopus",                    logo: "/sponsors/gopus.png",                 href: "https://www.gopus.de", profileSlug: "gopus" },
  { name: "Grafschafter Nachrichten", logo: "/sponsors/gn-online.png",             href: "https://www.gn-online.de/" },
  { name: "Grafschafter Volksbank",   logo: "/sponsors/grafschafter-volksbank.png",href: "https://www.grafschafter-volksbank.de/" },
  { name: "Harbour Energy",           logo: "/sponsors/harbour-energy.png",        href: "https://www.harbourenergy.com/" },
  { name: "Harmsen Komtec",           logo: "/sponsors/harmsen-komtec.png",        href: "https://www.harmsen-komtec.de/" },
  { name: "Holthuis Gabelstapler",  logo: "/sponsors/holthuis.png",             href: "http://www.holthuis-gabelstapler.de/" },
  { name: "Intersport Kamps",         logo: "/sponsors/intersport-kamps.png",      href: "https://www.intersport.de/haendlersuche/sportgeschaefte-niedersachsen/48455-bad-bentheim-sport-und-freizeit-kamps/" },
  { name: "J.B. Küpers",              logo: "/sponsors/jb-kuepers.svg",            href: "https://www.jbkuepers.de/" },
  { name: "Kwade & Sohn",             logo: "/sponsors/kwade.png",                 href: "https://www.kwade-sohn.de/" },
  // moelle.de leitet auf solidus.com um - Zieladresse noch klaeren
  { name: "Moelle",                 logo: "/sponsors/moelle.webp" },
  { name: "NVB",                      logo: "/sponsors/nvb.png",                   href: "https://www.nvb.de/" },
  { name: "Peters Gruppe",            logo: "/sponsors/peters-gruppe.png",         href: "https://peters-gruppe.com/" },
  { name: "Ragano",                   logo: "/sponsors/ragano.png",                href: "https://www.ragano.de/" },
  { name: "Reisebüro Berndt",         logo: "/sponsors/reisebuero-berndt.jpg",     href: "https://www.reisebuero-berndt.de/" },
  { name: "Sparkasse Nordhorn",       logo: "/sponsors/sparkasse-nordhorn.png",    href: "https://www.sparkasse-nordhorn.de/" },
  { name: "Stahl Baumeisterhaus",     logo: "/sponsors/stahl-baumeisterhaus.jpg",  href: "https://www.stahl-baumeisterhaus.de/" },
  { name: "Steuermanufaktur",         logo: "/sponsors/steuermanufaktur.png",      href: "https://steuermanufaktur.team/" },
  { name: "van Lohuizen Pallets",     logo: "/sponsors/van-lohuizen.jpg",          href: "http://www.vanlohuizenpallets.com/" },
  { name: "Wolters Klimakontor" },
];

/** Ansprechpartner für Sponsoring-Anfragen (kein öffentlicher Paket-Ausweis). */
export const sponsoringContact = {
  name: "Thorben Helweg",
  role: "Geschäftsführer · SC UNION Emlichheim Marketing GmbH",
  phone: "0176 43348764",
  phoneHref: "tel:+4917643348764",
  email: "t.helweg@scuvolleyball.de",
  /** Quadratischer Kopf-Ausschnitt - das Portraet im Hochformat waere im
   *  kleinen Avatar der Karte vor allem Hallenwand. */
  photo: "/team/2026-27/staff-thorben-helweg-avatar.jpg" as string | undefined,
};

export type FederationPartner = {
  name: string;
  logo: string;
  href: string;
};

export const federationPartners: FederationPartner[] = [
  { name: "Volleyball Bundesliga – 2. Liga Frauen Pro", logo: "/logos/vbl-2liga-frauen.png", href: "https://www.volleyball-bundesliga.de/" },
  { name: "Deutscher Volleyball-Verband (DVV)",         logo: "/logos/dvv.png",              href: "https://www.volleyball-verband.de/" },
  { name: "Nordwestdeutscher Volleyball-Verband",       logo: "/logos/nwvv.webp",            href: "https://www.nwvv.de/" },
];
