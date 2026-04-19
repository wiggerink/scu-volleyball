"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { federationPartners } from "@/lib/sponsors";

export function FederationPartners() {
  return (
    <section className="bg-white border-y border-scu-gray-200">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          <div className="shrink-0 text-center lg:text-left">
            <div className="text-[11px] uppercase tracking-[0.24em] font-bold text-scu-black/60">Offiziell Teil von</div>
            <div className="font-display text-xl font-black text-scu-black mt-1">Liga & Verbände</div>
          </div>
          <div className="flex-1 grid grid-cols-3 items-center gap-6 md:gap-10">
            {federationPartners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={p.name}
                  className="block group"
                >
                  <div className="relative h-20 md:h-24 flex items-center justify-center">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={200}
                      height={96}
                      className="max-h-20 md:max-h-24 w-auto object-contain filter grayscale-0 transition group-hover:scale-105"
                    />
                  </div>
                  <div className="text-[11px] text-center text-scu-gray-500 mt-2 group-hover:text-scu-black transition">
                    {p.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
