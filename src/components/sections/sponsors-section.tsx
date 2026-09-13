"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { sponsors, type Sponsor } from "@/lib/sponsors";
import { cn } from "@/lib/utils";

/* Alle Sponsoren gleichwertig: ein Raster, einheitliche Kacheln,
   alphabetische Reihenfolge (kein öffentliches Stufenmodell). */

function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const hasProfile = !!sponsor.profileSlug;
  const href = hasProfile ? `/sponsoren/${sponsor.profileSlug}` : sponsor.href;

  const inner = (
    <>
      {hasProfile && (
        <span className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-scu-yellow text-scu-black text-[9px] font-black uppercase tracking-[0.18em] px-2 py-0.5 shadow-[0_4px_12px_-4px_rgba(255,240,1,0.6)]">
          Portrait
        </span>
      )}
      <div className="relative flex items-center justify-center aspect-[4/3] p-5">
        {sponsor.logo ? (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            fill
            sizes="(min-width:1024px) 16vw, 40vw"
            className="object-contain p-4 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="font-display text-center text-base sm:text-lg font-black text-scu-black/80 leading-tight px-2">
            {sponsor.name}
          </span>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-scu-black/95 text-white text-center text-xs py-2 font-semibold tracking-wide translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        {hasProfile ? `${sponsor.name} · Portrait ansehen` : sponsor.name}
      </div>
    </>
  );

  const tileClass = cn(
    "group relative block rounded-2xl border border-scu-gray-200 bg-white overflow-hidden transition-all",
    "hover:border-scu-yellow hover:shadow-[0_12px_30px_-10px_rgba(255,240,1,0.25)] hover:-translate-y-0.5",
  );

  if (!href) {
    return (
      <div className={tileClass} title={sponsor.name}>
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={href}
      target={hasProfile ? undefined : "_blank"}
      rel={hasProfile ? undefined : "nofollow noopener"}
      aria-label={sponsor.name}
      title={sponsor.name}
      className={tileClass}
    >
      {inner}
    </Link>
  );
}

export function SponsorsSection() {
  return (
    <section id="sponsoren" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-scu-gray-100 to-transparent" />
      <Container className="relative flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Unsere Partner"
            title={<>Gemeinsam an der <HighlightWord>Spitze</HighlightWord></>}
            description="Ohne das Engagement starker Unternehmen aus der Grafschaft Bentheim und dem Emsland wäre Bundesliga-Volleyball in Emlichheim nicht möglich. Ein herzliches Dankeschön an alle Partner und Förderer."
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/sponsoren">
              Partner werden <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
          {sponsors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 12) * 0.03 }}
            >
              <SponsorTile sponsor={s} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
