import "server-only";
import { graphAbfrage, metaZugang } from "./meta";

export type InstagramPost = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
};

type GraphMedia = {
  id: string;
  caption?: string;
  media_type: InstagramPost["mediaType"];
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

/**
 * Neueste Beiträge von @scu.volleyball.
 * Ohne Zugang oder bei einem Fehler eine leere Liste - es gibt bewusst keine
 * Beispielbeiträge mehr, die wie echte aussehen.
 */
export async function fetchInstagramPosts(limit = 9): Promise<InstagramPost[]> {
  const { instagramId } = metaZugang();
  if (!instagramId) return [];

  const daten = await graphAbfrage<{ data?: GraphMedia[] }>(
    `${instagramId}/media`,
    { fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp", limit: String(limit) },
    "instagram",
  );

  return (daten?.data ?? [])
    .map((p) => ({
      id: p.id,
      caption: p.caption ?? "",
      mediaType: p.media_type,
      // Bei Videos ist media_url die Videodatei - angezeigt wird das Vorschaubild
      mediaUrl: (p.media_type === "VIDEO" ? p.thumbnail_url : p.media_url) ?? "",
      thumbnailUrl: p.thumbnail_url,
      permalink: p.permalink,
      timestamp: p.timestamp,
    }))
    .filter((p) => p.mediaUrl);
}
