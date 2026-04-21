"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Ticket, Trophy, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-scu-black text-white clip-hero pb-32 lg:pb-44">
      <Image
        src="/hero/hero-main.jpg"
        alt="SCU Emlichheim Volleyball Damen 2. Bundesliga Pro – Saison-Shooting 2025/26"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_20%] opacity-60"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-scu-black/70 via-scu-black/50 to-scu-black/95" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-scu-black/90 via-scu-black/40 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.25]" />

      {/* Accent */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-scu-yellow/20 blur-[140px]"
      />

      <Container className="relative pt-44 sm:pt-48 lg:pt-56 xl:pt-64 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-black leading-[0.95] tracking-tight"
          >
            Heimat.
            <br />
            Leidenschaft.
            <span className="block text-scu-yellow">Volleyball.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="max-w-xl text-lg text-white/80 leading-relaxed"
          >
            Willkommen beim <strong className="text-white">SC Union Emlichheim</strong> – dem Dorf in der Grafschaft,
            das seit über 30 Jahren Bundesliga-Volleyball atmet. 2025/26 greifen unsere Damen in der{" "}
            <strong className="text-white">2. Bundesliga Pro</strong> an.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild size="lg" variant="primary">
              <Link href="/teams/1-mannschaft#tickets">
                <Ticket className="size-4" /> Heimspiel-Tickets
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/teams/1-mannschaft">
                Kader 2025/26 <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/teams/1-mannschaft#live">
                <Play className="size-4" /> Livestream
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 max-w-xl border-t border-white/10"
          >
            {[
              { k: "30+", v: "Jahre Bundesliga", icon: Trophy },
              { k: "15", v: "Mannschaften", icon: CalendarDays },
              { k: "120+", v: "Kinder & Jugend", icon: Trophy },
            ].map(({ k, v, icon: Icon }) => (
              <div key={v} className="flex items-start gap-3 pt-6">
                <Icon className="size-5 text-scu-yellow shrink-0 mt-1" />
                <div>
                  <dt className="font-display text-3xl font-black leading-none">{k}</dt>
                  <dd className="text-[11px] uppercase tracking-[0.18em] text-white/55 mt-1.5">{v}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative ml-auto w-[420px] aspect-[3/4] rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] bg-white p-1.5"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/hero/hero-meister.png"
                alt="SCU 2. Mannschaft – Meister 3. Liga Nord 2025/26"
                fill
                sizes="420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-scu-black/70 to-transparent" />
              <div className="absolute left-5 bottom-5 right-5">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-scu-yellow">Meister 2025/26</div>
                <div className="font-display text-xl font-black mt-1">2. Mannschaft steigt auf in die 2. Bundesliga</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="absolute -left-4 -bottom-8 bg-white text-scu-black rounded-2xl p-4 shadow-2xl w-60"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-black flex items-center gap-1.5 before:content-[''] before:size-2 before:rounded-full before:bg-scu-yellow">Nächstes Heimspiel</div>
            <div className="font-display text-lg font-black leading-tight mt-1">SCU Emlichheim vs. BBSC Berlin</div>
            <div className="text-xs text-scu-gray-500 mt-1">So, 21. Sept · 17:00 Uhr · Vechtetalhalle</div>
          </motion.div>
        </div>
      </Container>

      {/* Ticker */}
      <div className="relative mt-16 lg:mt-24">
        <div className="border-y border-white/10 bg-white/[0.03] backdrop-blur-sm py-3 mask-fade-x">
          <div className="flex gap-14 whitespace-nowrap text-sm uppercase tracking-[0.22em] text-white/60 font-semibold animate-[marquee_50s_linear_infinite]">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="flex gap-14 shrink-0">
                <span>🏐 2. Bundesliga Pro</span>
                <span className="text-scu-yellow">· Damen ·</span>
                <span>SC Union Emlichheim</span>
                <span className="text-scu-yellow">· Seit 1994 Bundesliga ·</span>
                <span>120+ Kinder im Training</span>
                <span className="text-scu-yellow">· Vechtetalhalle ·</span>
                <span>Saisonstart: 20. September 2025</span>
                <span className="text-scu-yellow">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
