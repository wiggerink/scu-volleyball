export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
  image: string;
  href?: string;
  badge?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "aufstieg-2-bundesliga-pro",
    title: "Historisch: SCU Emlichheim in der 2. Bundesliga Pro",
    category: "Saison 2025/26",
    date: "2025-09-20",
    excerpt:
      "Nach einer überragenden Saison in der 2. Bundesliga Nord greift unsere 1. Damenmannschaft 2025/26 erstmals in der neugeschaffenen 2. Bundesliga Pro an – einer der stärksten Damen-Ligen Europas.",
    image: "/hero/hero-main.jpg",
    badge: "TOP-STORY",
  },
  {
    slug: "vertragsverlaengerung-tranel-maathuis",
    title: "Schlüsselspielerinnen verlängern für die neue Saison",
    category: "Kader",
    date: "2025-06-12",
    excerpt:
      "Emily Tranel, Marie Maathuis und Hannah Tranel bleiben dem SCU auch in der kommenden Zweitliga-Saison erhalten und bilden das Rückgrat unseres Teams.",
    image: "/team/Emily-Tranel.jpg",
    badge: "KADER",
  },
  {
    slug: "titelverteidigung-in-osnabrueck",
    title: "3:0 gegen Osnabrück – Titelverteidigung perfekt",
    category: "Spielbericht",
    date: "2025-04-06",
    excerpt:
      "Mit einem souveränen 3:0-Sieg gegen den VC Osnabrück haben wir die Titelverteidigung in der 2. Liga perfekt gemacht. Die Halle stand Kopf.",
    image: "/team/team-group.jpg",
    badge: "3:0 SIEG",
  },
  {
    slug: "athletikkonzept",
    title: "Athletikkonzept macht Top-Leistungen möglich",
    category: "Hinter den Kulissen",
    date: "2025-02-18",
    excerpt:
      "Mit Physiotherapeut Marvin Dinter von der Sporthochschule Köln und starken Partnern im medizinischen Netzwerk heben wir die Athletik unserer Spielerinnen auf Top-Niveau.",
    image: "/team/Axel-Buering.jpg",
    badge: "STRATEGIE",
  },
  {
    slug: "jugendfoerderring",
    title: "Jugendförderring: Fundament für die Bundesliga-Zukunft",
    category: "Jugend",
    date: "2025-01-30",
    excerpt:
      "Rund 120 Kinder und Jugendliche trainieren wöchentlich bei uns. Der Förderring Jugendvolleyball Emlichheim e.V. macht strukturelle Top-Arbeit möglich.",
    image: "/team/Pia-Schweitzer.jpg",
    badge: "JUGEND",
  },
  {
    slug: "fan-artikel",
    title: "Neue Fan-Kollektion 2025/26",
    category: "Shop",
    date: "2025-08-30",
    excerpt:
      "Neue Trikots, neue Schals, neue Hoodies – die Kollektion zur Bundesliga-Saison ist da. Erhältlich vor Ort in der Vechtetalhalle und online.",
    image: "/team/Lisa-Louwrink.jpg",
    badge: "SHOP",
  },
];
