"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HighlightStory() {
  return (
    <section className="relative bg-scu-gray-100 py-20 lg:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-dark" />
      <Container className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
            <Image
              src="/team/team-group.jpg"
              alt="SCU Damen Bundesliga Team 2025/26 Saisonshooting"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-8 -right-6 rounded-2xl bg-scu-yellow text-scu-black p-5 shadow-xl rotate-[3deg] hidden sm:block">
            <Sparkles className="size-5 mb-1" />
            <div className="text-xs uppercase tracking-[0.2em] font-bold opacity-90">Erstmals</div>
            <div className="font-display text-2xl font-black leading-none">2. Liga Pro</div>
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] hidden sm:block">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-scu-black/60 flex items-center gap-1.5 before:content-[''] before:size-1.5 before:rounded-full before:bg-scu-yellow">Titelverteidigung</div>
            <div className="font-display text-2xl font-black text-scu-black leading-none mt-1">Meister 2. Liga Nord</div>
            <div className="text-xs text-scu-gray-500 mt-1">3:0 gegen VC Osnabrück · Saison 24/25</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 flex flex-col gap-6"
        >
          <Badge variant="yellow" className="w-fit">Historisch</Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] text-scu-black">
            Emlichheim schreibt <span className="relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:right-0 after:h-3 after:bg-scu-yellow after:-z-10"><span className="relative">Volleyball-Geschichte</span></span>.
          </h2>
          <p className="text-scu-gray-500 text-lg leading-relaxed">
            Mit dem Aufstieg in die neu geschaffene <strong className="text-scu-black">2. Bundesliga Pro</strong> spielt
            der SCU 2025/26 in einer der stärksten Damen-Ligen Europas. Ein Meilenstein für den Dorfverein mit 4.000
            Einwohnern – und ein Beweis dafür, dass nachhaltige Jugendarbeit an die Spitze führt.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mt-2">
            {[
              "14 Pro-Teams · 26 Spieltage · Playoff-Modus",
              "Heimspiele in der Vechtetalhalle",
              "Eigene Talente aus der Jugend im Kader",
              "Saisonstart: 20. September 2025",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start text-sm text-scu-black/80">
                <div className="mt-1 size-2 rounded-full bg-scu-yellow shrink-0 ring-2 ring-scu-black/10" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/teams/1-mannschaft">
                Team entdecken <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/verein">Unsere Geschichte</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
