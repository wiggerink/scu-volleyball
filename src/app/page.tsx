import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { FederationPartners } from "@/components/sections/federation-partners";
import { HighlightStory } from "@/components/sections/highlight-story";
import { FacebookFeed } from "@/components/sections/facebook-feed";
import { BundesligaAktionBanner } from "@/components/sections/bundesliga-aktion-banner";
import { TeamsOverview } from "@/components/sections/teams-overview";
import { YouthSection } from "@/components/sections/youth-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { SponsorsBand } from "@/components/sections/sponsors-band";
import { CtaSection } from "@/components/sections/cta-section";
import { OrganizationJsonLd, SportsTeamJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "SCU Emlichheim Volleyball – Sparda 2. Liga Pro Damen 2026/27",
  description:
    "SC Union Emlichheim – Dorfverein mit Bundesliga-Herz. 15 Mannschaften, 120+ Kinder in der Jugend, Sparda 2. Liga Pro Damen in der Vechtetalhalle. Tickets, Spielplan, Livestream.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <SportsTeamJsonLd />
      <Hero />
      <SponsorsBand />
      <FederationPartners />
      <HighlightStory />
      <BundesligaAktionBanner />
      <FacebookFeed />
      <TeamsOverview />
      <YouthSection />
      <SponsorsSection />
      <CtaSection />
    </>
  );
}
