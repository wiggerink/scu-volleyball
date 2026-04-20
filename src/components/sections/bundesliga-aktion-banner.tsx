"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Tv } from "lucide-react";
import { Container } from "@/components/ui/container";

export function BundesligaAktionBanner() {
  return (
    <section className="relative overflow-hidden bg-scu-black text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,240,1,0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full bg-scu-yellow/10 blur-[120px]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.08]" />

      <Container className="relative py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2.5 w-fit rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scu-yellow opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-scu-yellow" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-scu-yellow">
                #2BLnfaktion
              </span>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.02]">
              Unterstütze die <span className="relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-3 after:bg-scu-yellow/80 after:-z-10"><span className="relative">2. Bundesliga</span></span> live im Stream.
            </h2>

            <p className="text-white/75 text-lg leading-relaxed max-w-xl">
              Zeig deiner Liga, dass du dabei bist. Alle Spiele der 2. Bundesliga Pro Damen werden live auf{" "}
              <strong className="text-white">Dyn Media</strong> übertragen – mit Kommentar, Statistiken und HD-Replays. Jede Stimme zählt.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="https://www.volleyball-bundesliga.de/2blnfaktion"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-scu-yellow text-scu-black px-6 py-3 font-semibold text-sm shadow-[0_10px_32px_-10px_rgba(255,240,1,0.6)] hover:bg-scu-yellow-dark transition-all hover:-translate-y-0.5"
              >
                <Play className="size-4 fill-scu-black" />
                Zur Fan-Aktion
                <ArrowUpRight className="size-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/teams/1-mannschaft#live"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition"
              >
                <Tv className="size-4" />
                SCU-Livestream
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-scu-yellow/15 via-scu-yellow/5 to-transparent p-8 lg:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-scu-yellow text-scu-black px-3 py-1 text-[11px] uppercase tracking-[0.2em] font-black">
                    Live
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold">auf Dyn</span>
                </div>
                <Tv className="size-6 text-scu-yellow" />
              </div>

              <div className="mt-8 font-display font-black leading-[0.95]">
                <div className="text-[clamp(56px,10vw,96px)] text-scu-yellow tracking-tight">#2BLN</div>
                <div className="text-3xl lg:text-4xl text-white">faktion</div>
              </div>

              <p className="mt-6 text-sm text-white/70 leading-relaxed">
                Die offizielle Fan-Aktion der 2. Bundesliga Volleyball Nord. Jedes Spiel – jeder Aufschlag – jeder Punkt.
              </p>

              <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/60 font-semibold">
                <span>14 Teams</span>
                <span className="text-white/20">·</span>
                <span>26 Spieltage</span>
                <span className="text-white/20">·</span>
                <span>HD-Stream</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
