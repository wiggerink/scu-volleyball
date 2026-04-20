export type FacebookPost = {
  id: string;
  message: string;
  picture?: string;
  permalinkUrl: string;
  createdTime: string;
  reactions?: number;
  comments?: number;
  shares?: number;
};

const FALLBACK_POSTS: FacebookPost[] = [
  {
    id: "fallback-1",
    message:
      "🏆 GESCHICHTE GESCHRIEBEN! Unsere 2. Mannschaft ist Meister der 3. Liga Nord 2025/26 und steigt zur neuen Saison in die 2. Bundesliga auf! Was für ein unglaublicher Moment für den ganzen Verein. Danke an die Spielerinnen, das Trainerteam und euch alle, die uns die ganze Saison begleitet habt. 🧡🖤 #SCUVolleyball #Aufstieg",
    picture: "/team/groups/2-mannschaft.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 1).toISOString(),
    reactions: 342,
    comments: 47,
    shares: 28,
  },
  {
    id: "fallback-2",
    message:
      "Vorbereitung läuft auf Hochtouren. Heute Doppel-Einheit in der Vechtetalhalle – die Mädels ziehen richtig an. Saisonstart in zehn Tagen, wir sind bereit. 💪",
    picture: "/hero/hero-main.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 3).toISOString(),
    reactions: 128,
    comments: 12,
    shares: 4,
  },
  {
    id: "fallback-3",
    message:
      "Willkommen zu Hause, Lisa! Unsere Kapitänin hat für eine weitere Saison in der 2. Bundesliga Pro verlängert. 🟡⚫ #UnionForever",
    picture: "/team/Lisa-Louwrink.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 6).toISOString(),
    reactions: 256,
    comments: 31,
    shares: 9,
  },
  {
    id: "fallback-4",
    message:
      "120+ Kinder, die Woche für Woche in unserer Halle Volleyball leben – das ist das Herzstück des SCU. Danke an alle Trainer:innen, die das möglich machen.",
    picture: "/team/groups/minis.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 9).toISOString(),
    reactions: 198,
    comments: 22,
    shares: 7,
  },
  {
    id: "fallback-5",
    message:
      "Heimspiel-Wochenende! 🎟️ Samstag 17:00 Uhr gegen BBSC Berlin in der Vechtetalhalle. Tickets online und an der Abendkasse. Wir brauchen euch – kommt laut und bunt!",
    picture: "/team/team-group.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 12).toISOString(),
    reactions: 167,
    comments: 18,
    shares: 14,
  },
  {
    id: "fallback-6",
    message:
      "Drei Sätze, ein Sieg, ein Statement. 3:0 gegen Oythe zum Saisonstart – so läuft's. Danke an unsere 7. Spielerin für die Gänsehautstimmung. 🔥",
    picture: "/team/groups/3-mannschaft.jpg",
    permalinkUrl: "https://www.facebook.com/scuvolleyball.emlichheim",
    createdTime: new Date(Date.now() - 86400000 * 16).toISOString(),
    reactions: 231,
    comments: 26,
    shares: 11,
  },
];

type GraphPost = {
  id: string;
  message?: string;
  full_picture?: string;
  permalink_url: string;
  created_time: string;
  reactions?: { summary?: { total_count: number } };
  comments?: { summary?: { total_count: number } };
  shares?: { count: number };
};

export async function fetchFacebookPosts(limit = 6): Promise<FacebookPost[]> {
  const token = process.env.FACEBOOK_PAGE_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  if (!token || !pageId) return FALLBACK_POSTS.slice(0, limit);

  try {
    const url = new URL(`https://graph.facebook.com/v19.0/${pageId}/posts`);
    url.searchParams.set(
      "fields",
      "id,message,full_picture,permalink_url,created_time,reactions.summary(total_count).limit(0),comments.summary(total_count).limit(0),shares",
    );
    url.searchParams.set("limit", String(limit));
    url.searchParams.set("access_token", token);

    const res = await fetch(url.toString(), {
      next: { revalidate: 900, tags: ["facebook"] },
    });
    if (!res.ok) return FALLBACK_POSTS.slice(0, limit);

    const data: { data?: GraphPost[] } = await res.json();
    if (!data.data?.length) return FALLBACK_POSTS.slice(0, limit);

    return data.data.map((p) => ({
      id: p.id,
      message: p.message ?? "",
      picture: p.full_picture,
      permalinkUrl: p.permalink_url,
      createdTime: p.created_time,
      reactions: p.reactions?.summary?.total_count,
      comments: p.comments?.summary?.total_count,
      shares: p.shares?.count,
    }));
  } catch {
    return FALLBACK_POSTS.slice(0, limit);
  }
}
