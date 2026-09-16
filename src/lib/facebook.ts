import "server-only";
import { graphAbfrage, metaZugang } from "./meta";

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

/**
 * Neueste Beiträge der Facebook-Seite.
 * Ohne Zugang oder bei einem Fehler eine leere Liste - es gibt bewusst keine
 * Beispielbeiträge mehr, die wie echte aussehen.
 *
 * Braucht zusätzlich pages_read_user_content, sonst antwortet die API mit #10.
 */
export async function fetchFacebookPosts(limit = 6): Promise<FacebookPost[]> {
  const { seitenId } = metaZugang();
  if (!seitenId) return [];

  const daten = await graphAbfrage<{ data?: GraphPost[] }>(
    `${seitenId}/posts`,
    {
      fields:
        "id,message,full_picture,permalink_url,created_time,reactions.summary(total_count).limit(0),comments.summary(total_count).limit(0),shares",
      limit: String(limit),
    },
    "facebook",
  );

  return (daten?.data ?? []).map((p) => ({
    id: p.id,
    message: p.message ?? "",
    picture: p.full_picture,
    permalinkUrl: p.permalink_url,
    createdTime: p.created_time,
    reactions: p.reactions?.summary?.total_count,
    comments: p.comments?.summary?.total_count,
    shares: p.shares?.count,
  }));
}
