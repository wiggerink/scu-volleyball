"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ticket, Heart, Megaphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const ctas = [
  {
    icon: Ticket,
    label: "Tickets",
    title: "Heimspiele erleben",
    text: "Bundesliga-Volleyball zum Anfassen in der Vechtetalhalle. Familienfreundliche Preise, legendäre Atmosphäre.",
    href: "/teams/1-mannschaft#tickets",
    cta: "Jetzt Tickets sichern",
    color: "bg-scu-yellow",
  },
  {
    icon: Heart,
    label: "Förderring",
    title: "Jugend fördern",
    text: "Wir sind ein Nachwuchs-Verein. Der Förderring macht Trainer, Material und Reisen für 120+ Kinder möglich.",
    href: "/jugend#foerderring",
    cta: "Mitglied werden",
    color: "bg-scu-black",
  },
  {
    icon: Megaphone,
    label: "Sponsoring",
    title: "Partner werden",
    text: "Ihr Unternehmen in der 2. Bundesliga Pro – wir erstellen ein individuelles, passgenaues Sponsoring-Paket.",
    href: "/kontakt",
    cta: "Gespräch anfragen",
    color: "bg-scu-gold",
  },
];

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-scu-gray-100">
      <Container>
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
                className="relative group rounded-3xl overflow-hidden bg-white border border-scu-gray-200 hover:border-transparent hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] transition-all"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 ${item.color}`} />
                <div className="p-7 lg:p-8 flex flex-col gap-5 h-full">
                  <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${item.color} ${item.color === "bg-scu-gold" ? "text-scu-black" : "text-white"}`}>
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-scu-yellow">{item.label}</div>
                    <h3 className="font-display text-2xl lg:text-3xl font-black mt-1 leading-tight text-scu-black">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-scu-gray-500 leading-relaxed flex-1">{item.text}</p>
                  <Button asChild variant="dark" size="md" className="w-fit">
                    <Link href={item.href}>{item.cta}</Link>
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
