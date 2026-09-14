export type Tarif = {
  gruppe: string;
  eintritt: string;
  /** Ermäßigt gegen Vorlage der GN-Card der Grafschafter Nachrichten */
  gnCard: string;
  jahreskarte: string;
};

/**
 * Eintrittspreise der Heimspiele, Saison 2026/27.
 * Eine Quelle für beide Seiten (1. Mannschaft und Vechtetalhalle),
 * damit die Preise nicht auseinanderlaufen.
 */
export const ticketpreise: Tarif[] = [
  { gruppe: "Erwachsene", eintritt: "8,00 €", gnCard: "7,00 €", jahreskarte: "69,00 €" },
  {
    gruppe: "Jugendliche ab 13 Jahren, Studenten, Rentner",
    eintritt: "6,00 €",
    gnCard: "5,00 €",
    jahreskarte: "49,00 €",
  },
];

export const ticketHinweise = [
  "Jugendliche bis 12 Jahre haben freien Eintritt.",
  "Die Jahreskarte gilt nicht für Pokalspiele.",
];
