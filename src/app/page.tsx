import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FederationPartners } from "@/components/sections/federation-partners";
import { HighlightStory } from "@/components/sections/highlight-story";
import { NewsGrid } from "@/components/sections/news-grid";
import { TeamsOverview } from "@/components/sections/teams-overview";
import { YouthSection } from "@/components/sections/youth-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { CtaSection } from "@/components/sections/cta-section";
import { OrganizationJsonLd, SportsTeamJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "SCU Emlichheim Volleyball – 2. Bundesliga Pro Damen 2025/26",
  description:
    "SC Union Emlichheim – Dorfverein mit Bundesliga-Herz. 13 Mannschaften, 120+ Kinder in der Jugend, 2. Bundesliga Pro Damen in der Vechtetalhalle. Tickets, Spielplan, Livestream.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <SportsTeamJsonLd />
      <Hero />
      <FederationPartners />
      <HighlightStory />
      <NewsGrid />
      <TeamsOverview />
      <YouthSection />
      <SponsorsSection />
      <CtaSection />
    </>
  );
}
