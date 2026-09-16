import "server-only";

/**
 * Zugang zur Graph-API von Meta für Facebook-Seite und Instagram.
 *
 * Beide Feeds laufen über denselben Seiten-Token der Facebook-Seite
 * "SCU Volleyball Emlichheim". Instagram ist mit der Seite verknüpft und wird
 * über die Instagram-Business-ID abgefragt - ein eigener Instagram-Token ist
 * dafür nicht nötig.
 *
 * Erzeugt über die Meta-App "SCU-Volleyball" (Entwicklungsmodus) mit
 * pages_show_list, pages_read_engagement, pages_read_user_content und
 * instagram_basic. Der Token gehört nur in die Umgebungsvariablen.
 */
export const GRAPH_API = "https://graph.facebook.com/v26.0";

/** Wie lange Beiträge zwischengespeichert werden. */
export const META_CACHE_SEKUNDEN = 60 * 30;

export function metaZugang() {
  return {
    token: process.env.FACEBOOK_PAGE_TOKEN,
    seitenId: process.env.FACEBOOK_PAGE_ID,
    instagramId: process.env.INSTAGRAM_USER_ID,
  };
}

/**
 * Eine Abfrage gegen die Graph-API. Liefert `null`, wenn sie scheitert -
 * der Abschnitt fällt dann weg, statt die Seite zu stören. Der Fehlertext
 * landet im Serverlog, der Token nie.
 */
export async function graphAbfrage<T>(pfad: string, parameter: Record<string, string>, tag: string): Promise<T | null> {
  const { token } = metaZugang();
  if (!token) return null;

  const url = new URL(`${GRAPH_API}/${pfad}`);
  for (const [k, v] of Object.entries(parameter)) url.searchParams.set(k, v);
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url, { next: { revalidate: META_CACHE_SEKUNDEN, tags: [tag] } });
    if (!res.ok) {
      const fehler = (await res.json().catch(() => null)) as { error?: { message?: string; code?: number } } | null;
      console.error(`Graph-API ${pfad}: ${res.status} ${fehler?.error?.code ?? ""} ${fehler?.error?.message ?? ""}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error(`Graph-API ${pfad} nicht erreichbar`, err instanceof Error ? err.message : err);
    return null;
  }
}
