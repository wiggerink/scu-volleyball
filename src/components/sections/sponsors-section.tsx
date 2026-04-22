"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Crown, Medal, Star, Handshake, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/lib/sponsors";
import { cn } from "@/lib/utils";

const groups = [
  {
    tier: "premium" as const,
    label: "Premium-Partner",
    icon: Crown,
    columns: "grid-cols-1 md:grid-cols-3",
    tile: "aspect-[16/9]",
    padded: "p-10",
  },
  {
    tier: "gold" as const,
    label: "Gold-Partner",
    icon: Medal,
    columns: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
    tile: "aspect-[4/3]",
    padded: "p-6",
  },
  {
    tier: "silber" as const,
    label: "Silber-Partner",
    icon: Star,
    columns: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    tile: "aspect-[4/3]",
    padded: "p-5",
  },
  {
    tier: "partner" as const,
    label: "Medien & Partner",
    icon: Handshake,
    columns: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    tile: "aspect-[4/3]",
    padded: "p-5",
  },
];

export function SponsorsSection() {
  return (
    <section id="sponsoren" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-scu-gray-100 to-transparent" />
      <Container className="relative flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Unsere Partner"
            title={<>Gemeinsam an der <span className="text-scu-yellow">Spitze</span></>}
            description="Ohne das Engagement starker Unternehmen aus der Grafschaft Bentheim und dem Emsland wäre Bundesliga-Volleyball in Emlichheim nicht möglich. Ein herzliches Dankeschön an alle Partner und Förderer."
          />
          <Button asChild variant="outline" className="w-fit">
            <Link href="/sponsoren">
              Partner werden <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {groups.map((group) => {
          const items = sponsors.filter((s) => s.tier === group.tier);
          if (items.length === 0) return null;
          const Icon = group.icon;
          return (
            <div key={group.tier} className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "inline-flex items-center justify-center rounded-full size-10",
                    group.tier === "premium" && "bg-scu-yellow text-scu-black",
                    group.tier === "gold" && "bg-scu-gold text-scu-black",
                    group.tier === "silber" && "bg-scu-gray-200 text-scu-black",
                    group.tier === "partner" && "bg-scu-black text-white",
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-scu-gray-500">
                    {items.length} {items.length === 1 ? "Unternehmen" : "Unternehmen"}
                  </div>
                  <h3 className="font-display text-2xl font-black text-scu-black">{group.label}</h3>
                </div>
                <div className="flex-1 h-px bg-scu-gray-200 ml-4 hidden sm:block" />
              </div>

              <div className={cn("grid gap-3 lg:gap-4", group.columns)}>
                {items.map((s, i) => {
                  const hasProfile = !!s.profileSlug;
                  const href = hasProfile ? `/sponsoren/${s.profileSlug}` : s.href;
                  return (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: (i % 10) * 0.03 }}
                    >
                      <Link
                        href={href}
                        target={hasProfile ? undefined : "_blank"}
                        rel={hasProfile ? undefined : "nofollow noopener"}
                        aria-label={s.name}
                        title={s.name}
                        className={cn(
                          "group relative block rounded-2xl border border-scu-gray-200 bg-white overflow-hidden transition-all",
                          "hover:border-scu-yellow hover:shadow-[0_12px_30px_-10px_rgba(255,240,1,0.25)] hover:-translate-y-0.5",
                          group.tier === "premium" && "border-scu-black/10 shadow-[0_8px_40px_-20px_rgba(0,0,0,0.2)]",
                        )}
                      >
                        {hasProfile && (
                          <span className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full bg-scu-yellow text-scu-black text-[9px] font-black uppercase tracking-[0.18em] px-2 py-0.5 shadow-[0_4px_12px_-4px_rgba(255,240,1,0.6)]">
                            Portrait
                          </span>
                        )}
                        <div className={cn("relative flex items-center justify-center", group.tile, group.padded)}>
                          <Image
                            src={s.logo}
                            alt={s.name}
                            fill
                            sizes="(min-width:1024px) 20vw, 40vw"
                            className="object-contain p-4 transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-scu-black/95 text-white text-center text-xs py-2 font-semibold tracking-wide translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          {hasProfile ? `${s.name} · Portrait ansehen` : s.name}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
