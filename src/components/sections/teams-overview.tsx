"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { teams } from "@/lib/teams";
import { cn } from "@/lib/utils";

const accentClasses: Record<string, string> = {
  red: "bg-scu-yellow text-scu-black",
  black: "bg-scu-black text-scu-yellow",
  gold: "bg-scu-gold text-scu-black",
};

function circleLabel(short: string) {
  const base = short.replace(/^SCU\s*/, "");
  if (base !== short) return base;
  if (/^U\d+/.test(base)) return base;
  return base
    .split(/[-\s]+/)
    .map((p) => p.charAt(0).toUpperCase())
    .join("");
}

export function TeamsOverview() {
  return (
    <section id="teams" className="relative py-20 lg:py-28 bg-scu-black text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      <div aria-hidden className="absolute -top-20 right-1/3 h-80 w-80 rounded-full bg-scu-yellow/20 blur-3xl" />

      <Container className="relative flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            tone="light"
            eyebrow="Unsere Mannschaften"
            title={<>13 Teams · ein <span className="text-scu-yellow">SCU</span></>}
            description="Vom Mini-Volleyball bis zur 2. Bundesliga Pro: Bei uns findet jede Spielerin und jeder Spieler den passenden Platz."
          />
          <Button asChild variant="outlineLight" className="w-fit">
            <Link href="/teams">Alle Teams <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {teams.map((team, i) => {
            const isFirst = team.tier === 1;
            return (
              <motion.div
                key={team.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              >
                <Link
                  href={`/teams/${team.slug}`}
                  className={cn(
                    "group relative block rounded-2xl p-6 lg:p-7 border transition-all h-full",
                    isFirst
                      ? "bg-scu-yellow border-scu-yellow text-scu-black hover:bg-scu-yellow-dark shadow-[0_30px_80px_-20px_rgba(255,240,1,0.5)]"
                      : "bg-white/[0.04] border-white/10 hover:border-white/30 hover:bg-white/[0.08]",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={cn(
                      "inline-flex items-center justify-center h-10 w-10 rounded-xl font-display font-black text-sm",
                      isFirst ? "bg-scu-black text-scu-yellow" : accentClasses[team.accent],
                    )}>
                      {circleLabel(team.short)}
                    </div>
                    {isFirst && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-scu-black px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-scu-yellow">
                        <Trophy className="size-3" /> Flaggschiff
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-black mt-6 leading-tight">
                    {team.name}
                  </h3>
                  <div className="text-sm font-semibold opacity-80 mt-1">{team.league}</div>
                  <p className="text-sm opacity-70 mt-3 leading-relaxed line-clamp-3">
                    {team.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] group-hover:gap-3 transition-all">
                    Team ansehen <ArrowUpRight className="size-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
