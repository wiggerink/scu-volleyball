export type Sponsor = {
  name: string;
  logo: string;
  href: string;
  tier: "premium" | "gold" | "silber" | "partner";
  /** Wenn gesetzt, hat der Sponsor ein eigenes Portrait unter /sponsoren/{profileSlug} */
  profileSlug?: string;
};

export const sponsors: Sponsor[] = [
  { name: "bekuplast",            tier: "premium", logo: "/sponsors/bekuplast.png",            href: "https://www.bekuplast.com/" },
  { name: "Emsland Group",        tier: "premium", logo: "/sponsors/emsland-group.jpg",        href: "https://www.emsland-group.de/" },
  { name: "Stahl Baumeisterhaus", tier: "premium", logo: "/sponsors/stahl-baumeisterhaus.jpg", href: "https://www.stahl-baumeisterhaus.de/" },

  { name: "Harbour Energy",       tier: "gold",    logo: "/sponsors/harbour-energy.png",       href: "https://www.harbourenergy.com/" },
  { name: "Peters Gruppe",        tier: "gold",    logo: "/sponsors/peters-gruppe.png",        href: "https://peters-gruppe.com/" },
  { name: "gopus",                tier: "gold",    logo: "/sponsors/gopus.png",                href: "https://www.gopus.de", profileSlug: "gopus" },
  { name: "Sparkasse Nordhorn",   tier: "gold",    logo: "/sponsors/sparkasse-nordhorn.png",   href: "https://www.sparkasse-nordhorn.de/" },
  { name: "Grafschafter Volksbank",tier: "gold",   logo: "/sponsors/grafschafter-volksbank.png",href: "https://www.grafschafter-volksbank.de/" },
  { name: "Intersport Kamps",     tier: "gold",    logo: "/sponsors/intersport-kamps.png",     href: "https://www.intersport.de/haendlersuche/sportgeschaefte-niedersachsen/48455-bad-bentheim-sport-und-freizeit-kamps/" },

  { name: "evb Kanzlei",          tier: "silber",  logo: "/sponsors/evb-kanzlei.png",          href: "https://www.evb-kanzlei.de" },
  { name: "Reisebüro Berndt",     tier: "silber",  logo: "/sponsors/reisebuero-berndt.jpg",    href: "https://www.reisebuero-berndt.de/" },
  { name: "Brookmann Werbetechnik",tier: "silber", logo: "/sponsors/brookmann.png",            href: "http://www.brookmann-werbetechnik.de/" },
  { name: "van Lohuizen Pallets", tier: "silber",  logo: "/sponsors/van-lohuizen.jpg",         href: "http://www.vanlohuizenpallets.com/" },
  { name: "Harmsen Komtec",       tier: "silber",  logo: "/sponsors/harmsen-komtec.png",       href: "https://www.harmsen-komtec.de/" },
  { name: "A&S",                  tier: "silber",  logo: "/sponsors/aunds.png",                href: "http://www.aunds-gmbh.de/" },
  { name: "Ragano",               tier: "silber",  logo: "/sponsors/ragano.png",               href: "https://www.ragano.de/" },
  { name: "Steuermanufaktur",     tier: "silber",  logo: "/sponsors/steuermanufaktur.png",     href: "https://steuermanufaktur.team/" },
  { name: "J.B. Küpers",          tier: "silber",  logo: "/sponsors/jb-kuepers.png",           href: "https://www.jbkuepers.de/" },
  { name: "NVB",                  tier: "silber",  logo: "/sponsors/nvb.png",                  href: "https://www.nvb.de/" },
  { name: "Kwade & Sohn",         tier: "silber",  logo: "/sponsors/kwade.png",                href: "https://www.kwade-sohn.de/" },

  { name: "Grafschafter Nachrichten", tier: "partner", logo: "/sponsors/gn-online.png",        href: "https://www.gn-online.de/" },
];

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
