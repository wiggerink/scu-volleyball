export type InstagramPost = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
};

const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "fallback-1",
    caption:
      "Historischer Moment: Der SCU steht als Meister der 3. Liga Nord 2025/26 fest – Aufstieg in die 2. Bundesliga! 🏐🏆 #SCUVolleyball",
    mediaType: "IMAGE",
    mediaUrl: "/team/team-group.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date().toISOString(),
  },
  {
    id: "fallback-2",
    caption:
      "Training unter Flutlicht – Vorbereitung auf das nächste Heimspiel in der Vechtetalhalle. Ready, Union?",
    mediaType: "IMAGE",
    mediaUrl: "/hero/hero-main.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "fallback-3",
    caption:
      "Unsere 1. Damen greifen in der 2. Bundesliga Pro an. Tickets, Spielplan und Livestream-Infos findet ihr in der Story!",
    mediaType: "IMAGE",
    mediaUrl: "/team/team-group.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date(Date.now() - 86400000 * 7).toISOString(),
  },
  {
    id: "fallback-4",
    caption:
      "120+ Kinder & Jugendliche im wöchentlichen Training – unsere Jugendabteilung ist das Herzstück des Vereins. 🧡",
    mediaType: "IMAGE",
    mediaUrl: "/hero/hero-main.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date(Date.now() - 86400000 * 10).toISOString(),
  },
  {
    id: "fallback-5",
    caption:
      "Dank an unsere Sponsoren – ohne euch wäre Bundesliga-Volleyball im Dorf nicht möglich. Ein echtes Team-Projekt.",
    mediaType: "IMAGE",
    mediaUrl: "/team/team-group.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date(Date.now() - 86400000 * 14).toISOString(),
  },
  {
    id: "fallback-6",
    caption:
      "Sieg-Feeling! Danke für die Unterstützung in der Vechtetalhalle – ihr seid unser 7. Spielerin. #UnionPower",
    mediaType: "IMAGE",
    mediaUrl: "/hero/hero-main.jpg",
    permalink: "https://www.instagram.com/scu.volleyball/",
    timestamp: new Date(Date.now() - 86400000 * 18).toISOString(),
  },
];

type GraphPost = {
  id: string;
  caption?: string;
  media_type: InstagramPost["mediaType"];
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export async function fetchInstagramPosts(limit = 9): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return FALLBACK_POSTS.slice(0, limit);

  try {
    const url = new URL("https://graph.instagram.com/me/media");
    url.searchParams.set(
      "fields",
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    );
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", token);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600, tags: ["instagram"] },
    });
    if (!res.ok) return FALLBACK_POSTS.slice(0, limit);

    const data: { data?: GraphPost[] } = await res.json();
    if (!data.data?.length) return FALLBACK_POSTS.slice(0, limit);

    return data.data.map((p) => ({
      id: p.id,
      caption: p.caption ?? "",
      mediaType: p.media_type,
      mediaUrl: p.media_url,
      thumbnailUrl: p.thumbnail_url,
      permalink: p.permalink,
      timestamp: p.timestamp,
    }));
  } catch {
    return FALLBACK_POSTS.slice(0, limit);
  }
}
