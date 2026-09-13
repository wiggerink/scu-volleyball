import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Bilder aus der Saison 2026/27 des SCU Emlichheim: Mannschaftsfotos, Spielszenen aus der Vechtetalhalle und Aufnahmen vom Saison-Shooting bei der Emsland Group.",
  alternates: { canonical: "/galerie" },
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title={<>Bilder aus unserer <span className="text-scu-yellow">Saison</span>.</>}
        description="Mannschaftsfotos, Spielszenen und Momente vom Saison-Shooting 2026/27. Alle Aufnahmen von Hinnerk Schröer."
        imageUrl="/gallery/mannschaft-vechtetalhalle.jpg"
      />

      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <GalleryGrid images={gallery} />
        </Container>
      </section>
    </>
  );
}
