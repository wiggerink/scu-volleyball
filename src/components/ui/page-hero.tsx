import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Kopfbereich der Unterseiten.
 *
 * Bewusst ohne JavaScript: Die Einblendung ist eine CSS-Animation
 * (hero-rise-text, startet sichtbar), damit Überschrift und Text mit dem
 * ersten Bild da sind. Vorher lief sie über Framer Motion und wartete mit
 * opacity 0 auf die Hydration - das verzögerte den LCP jeder Unterseite.
 */
export function PageHero({ eyebrow, title, description, imageUrl, className, children }: Props) {
  return (
    <section className={cn("relative bg-scu-black text-white overflow-hidden", className)}>
      {imageUrl && (
        <div aria-hidden className="absolute inset-0">
          {/* Über next/image statt CSS-Hintergrund: passende Größe fürs Gerät und
              WebP statt des vollen Original-JPEGs. Qualität 50 reicht, das Bild
              liegt mit 35 % Deckkraft unter einem Verlauf. */}
          <Image src={imageUrl} alt="" fill sizes="100vw" quality={50} loading="eager" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/70 via-scu-black/60 to-scu-black" />
        </div>
      )}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
      <div aria-hidden className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-scu-yellow/25 blur-3xl" />

      <Container className="relative pt-32 sm:pt-40 lg:pt-56 pb-16 sm:pb-20 lg:pb-28">
        <div className="hero-rise-text flex flex-col gap-5 max-w-3xl">
          {eyebrow && <Badge variant="yellow" className="w-fit">{eyebrow}</Badge>}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black leading-[1]">{title}</h1>
          {description && <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">{description}</p>}
          {children && <div className="pt-2">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
