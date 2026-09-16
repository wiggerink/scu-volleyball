import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { teams } from "@/lib/teams";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const staticPaths = [
    "",
    "/teams",
    "/teams/1-mannschaft",
    "/news",
    "/verein",
    "/jugend",
    "/foerderring",
    "/vechtetalhalle",
    "/galerie",
    "/sponsoren",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === "" ? "daily" : "weekly",
    priority: p === "" ? 1 : 0.7,
  }));

  const teamEntries: MetadataRoute.Sitemap = teams
    .filter((t) => t.slug !== "1-mannschaft")
    .map((t) => ({
      url: `${base}/teams/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...staticEntries, ...teamEntries];
}
