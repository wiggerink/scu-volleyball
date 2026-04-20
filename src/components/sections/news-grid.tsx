"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/news";

export function NewsGrid() {
  const [featured, ...rest] = newsItems;
  const grid = rest.slice(0, 4);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Aktuelles"
            title={<>Neues aus <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-3 after:bg-scu-yellow after:-z-10"><span className="relative">Emlichheim</span></span></>}
            description="Spielberichte, Kader-News und Einblicke hinter die Kulissen – direkt aus der Vechtetalhalle."
          />
          <Button asChild variant="outline" size="md" className="hidden md:inline-flex self-start md:self-end">
            <Link href="/news">
              Alle News <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rounded-2xl lg:rounded-3xl overflow-hidden group bg-scu-black"
          >
            <Link href={`/news/${featured.slug}`} className="block">
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[440px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover group-hover:scale-[1.03] transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-scu-black via-scu-black/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7 lg:p-10 gap-3 lg:gap-4 text-white">
                  <div className="flex items-center gap-2 flex-wrap">
                    {featured.badge && <Badge variant="yellow">{featured.badge}</Badge>}
                    <Badge variant="light">{featured.category}</Badge>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/70">
                      <Clock className="size-3" />
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-black leading-tight max-w-2xl">
                    {featured.title}
                  </h3>
                  <p className="max-w-2xl text-sm sm:text-base text-white/75 leading-relaxed line-clamp-3 sm:line-clamp-none">{featured.excerpt}</p>
                  <div className="inline-flex items-center gap-2 font-semibold text-scu-yellow group-hover:gap-3 transition-all text-sm sm:text-base">
                    Weiterlesen <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
            {grid.map((item, idx) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl overflow-hidden bg-scu-gray-100 hover:bg-white border border-transparent hover:border-scu-gray-200 transition"
              >
                <Link href={`/news/${item.slug}`} className="flex gap-3 sm:gap-4 h-full p-3">
                  <div className="relative w-24 sm:w-28 lg:w-32 shrink-0 aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 128px, 112px"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-between gap-2 py-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      {item.badge && <Badge variant="yellow" size="sm">{item.badge}</Badge>}
                      <span className="text-[10px] uppercase tracking-[0.18em] text-scu-gray-500 font-semibold">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <h4 className="font-display text-sm sm:text-base font-black leading-tight text-scu-black group-hover:text-scu-yellow-dark transition line-clamp-3">
                      {item.title}
                    </h4>
                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-scu-black">
                      Weiterlesen <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        <Button asChild variant="outline" size="md" className="md:hidden self-center">
          <Link href="/news">
            Alle News <ArrowRight className="size-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit", month: "short", year: "numeric",
  });
}
