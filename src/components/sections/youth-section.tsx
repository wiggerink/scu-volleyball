"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Award, Baby } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  { icon: Baby, title: "Mini-Minis & Minis", text: "Koordination, Spielfreude und erste Ballkontakte ab dem Kindergartenalter." },
  { icon: Users, title: "U13 – U20", text: "Strukturiertes Training in leistungsorientierten Gruppen. Regional & überregional unterwegs." },
  { icon: Award, title: "Bundesliga-Perspektive", text: "Eigene Talente schaffen regelmäßig den Sprung in unsere 1. Bundesliga-Mannschaft." },
  { icon: Heart, title: "Förderring e.V.", text: "Eingetragener Verein, der Jugendarbeit finanziell & strukturell möglich macht." },
];

export function YouthSection() {
  return (
    <section id="jugend" className="py-20 lg:py-28 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden"
          >
            <Image
              src="/team/groups/u13.jpg"
              alt="SCU U13 – Jugendvolleyball beim SCU Emlichheim"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-scu-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-[11px] uppercase tracking-[0.22em] font-bold opacity-80">Unsere Stars von morgen</div>
              <div className="font-display text-2xl font-black mt-1">120+ Kinder & Jugendliche</div>
            </div>
          </motion.div>
          <div className="absolute -top-4 -right-4 rounded-2xl bg-scu-yellow text-scu-black p-4 shadow-xl rotate-[4deg] hidden sm:block">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-90">Seit 1994</div>
            <div className="font-display text-xl font-black">Bundesliga</div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8">
          <Badge variant="yellow" className="w-fit">Jugendförderung</Badge>
          <SectionHeading
            title={<>Aus Emlichheim in die <HighlightWord>Bundesliga</HighlightWord>.</>}
            description="Unsere Identität ist Jugendarbeit. Viele unserer Bundesliga-Spielerinnen sind in der eigenen Jugend groß geworden. Diesen Weg machen wir möglich – mit einem der strukturiertesten Jugendkonzepte Norddeutschlands."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-scu-gray-200 p-5 hover:border-scu-yellow hover:shadow-[0_20px_40px_-20px_rgba(255,240,1,0.2)] transition-all"
                >
                  <div className="inline-flex items-center justify-center size-10 rounded-xl bg-scu-yellow/10 text-scu-yellow mb-3">
                    <Icon className="size-5" />
                  </div>
                  <div className="font-display text-lg font-black">{p.title}</div>
                  <div className="text-sm text-scu-gray-500 mt-1.5 leading-relaxed">{p.text}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="primary">
              <Link href="/jugend">
                Jugendabteilung <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/jugend#foerderring">Förderring unterstützen</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
