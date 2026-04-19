import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Badge } from "@/components/ui/badge";
import { newsItems } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & Spielberichte",
  description:
    "Alle aktuellen News, Spielberichte und Geschichten aus dem SCU Emlichheim – von der 2. Bundesliga Pro bis zur Jugend.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="Aktuelles aus Emlichheim"
        description="Spielberichte, Interviews und Geschichten rund um unsere 13 Teams."
        imageUrl="/hero/hero-main.jpg"
      />

      <section className="py-16 lg:py-20 bg-white">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article
              key={item.slug}
              className="group rounded-2xl overflow-hidden bg-scu-gray-100 hover:bg-white border border-transparent hover:border-scu-gray-200 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] transition-all"
            >
              <Link href={`/news/${item.slug}`}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  {item.badge && <Badge variant="yellow" className="absolute top-3 left-3">{item.badge}</Badge>}
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-scu-gray-500 font-semibold">
                    <Clock className="size-3" />
                    {new Date(item.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}
                    <span className="text-scu-yellow">· {item.category}</span>
                  </div>
                  <h2 className="font-display text-xl font-black leading-tight text-scu-black group-hover:text-scu-yellow transition">
                    {item.title}
                  </h2>
                  <p className="text-sm text-scu-gray-500 leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-scu-yellow mt-2 group-hover:gap-3 transition-all">
                    Weiterlesen <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
