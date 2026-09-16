"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ticket, Heart, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Spielfeldlinien } from "@/components/ui/aktions-box";

const ctas = [
  {
    icon: Ticket,
    label: "Tickets",
    title: "Heimspiele erleben",
    text: "Bundesliga-Volleyball zum Anfassen in der Vechtetalhalle. Familienfreundliche Preise, legendäre Atmosphäre.",
    href: site.ticketsUrl,
    external: true,
    cta: "Jetzt Tickets sichern",
    // Die Hauptaktion des Abschnitts - einzige gelbe Karte
    hervorgehoben: true,
  },
  {
    icon: Heart,
    label: "Förderring",
    title: "Jugend fördern",
    text: "Wir sind ein Nachwuchs-Verein. Der Förderring macht Trainer, Material und Reisen für 120+ Kinder möglich.",
    href: "/foerderring",
    cta: "Mitglied werden",
  },
  {
    icon: Megaphone,
    label: "Sponsoring",
    title: "Partner werden",
    text: "Ihr Unternehmen in der Sparda 2. Liga Pro – individuell zugeschnitten, im direkten Gespräch mit der Geschäftsführung.",
    href: "/sponsoren#ansprechpartner",
    cta: "Gespräch anfragen",
  },
];

export function CtaSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-scu-gold/[0.06] via-white to-scu-yellow/[0.06] overflow-hidden">
      <div aria-hidden className="absolute -top-16 -right-10 h-80 w-80 rounded-full bg-scu-yellow/15 blur-3xl" />
      <div aria-hidden className="absolute -bottom-16 -left-10 h-80 w-80 rounded-full bg-scu-gold/15 blur-3xl" />
      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ctas.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={cn(
                  "relative rounded-3xl overflow-hidden transition-shadow",
                  item.hervorgehoben
                    ? "bg-scu-yellow text-scu-black hover:shadow-[0_30px_80px_-24px_rgba(160,130,0,0.55)] [&_a]:focus-visible:ring-scu-black [&_a]:focus-visible:ring-offset-scu-yellow"
                    : "bg-white border border-scu-gray-200 hover:shadow-[0_30px_80px_-24px_rgba(0,0,0,0.22)]",
                )}
              >
                {item.hervorgehoben && <Spielfeldlinien className="text-scu-black/[0.09]" />}
                <div className="relative p-7 lg:p-8 flex flex-col gap-5 h-full">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-black text-scu-yellow">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div
                      className={cn(
                        "text-[11px] uppercase tracking-[0.22em] font-bold",
                        item.hervorgehoben ? "text-scu-black/60" : "text-scu-gray-500",
                      )}
                    >
                      {item.label}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-black mt-1 leading-tight text-scu-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className={cn("leading-relaxed flex-1", item.hervorgehoben ? "text-scu-black/75" : "text-scu-gray-500")}>
                    {item.text}
                  </p>
                  <Button asChild variant="dark" size="md" className="w-fit">
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener" : undefined}
                    >
                      {item.cta}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
