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
  /** Fehlt, wenn das Konto die Like-Zahlen ausblendet. */
  likeCount?: number;
  commentsCount?: number;
  /** Anzahl der Bilder bei einem Karussell, sonst 1. */
  anzahlMedien: number;
};

export type InstagramProfil = {
  username: string;
  name?: string;
  profilbild?: string;
  follower?: number;
  beitraege?: number;
};

type GraphMedia = {
  id: string;
  caption?: string;
  media_type: InstagramPost["mediaType"];
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  children?: { data?: unknown[] };
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
    {
      fields:
        "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,children{id}",
      limit: String(limit),
    },
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
      likeCount: p.like_count,
      commentsCount: p.comments_count,
      anzahlMedien: p.children?.data?.length || 1,
    }))
    .filter((p) => p.mediaUrl);
}

/** Kopfdaten des Kontos für den Profilstreifen über dem Feed. */
export async function fetchInstagramProfil(): Promise<InstagramProfil | null> {
  const { instagramId } = metaZugang();
  if (!instagramId) return null;

  const p = await graphAbfrage<{
    username?: string;
    name?: string;
    profile_picture_url?: string;
    followers_count?: number;
    media_count?: number;
  }>(instagramId, { fields: "username,name,profile_picture_url,followers_count,media_count" }, "instagram");

  if (!p?.username) return null;
  return {
    username: p.username,
    name: p.name,
    profilbild: p.profile_picture_url,
    follower: p.followers_count,
    beitraege: p.media_count,
  };
}
