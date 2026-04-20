import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { teams } from "@/lib/teams";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Alle Mannschaften",
  description:
    "13 Mannschaften beim SCU Emlichheim: von der 2. Bundesliga Pro Damen über Oberliga & Bezirksliga bis Mini-Volleyball. Deine Mannschaft wartet auf dich.",
  alternates: { canonical: "/teams" },
};

export default function TeamsPage() {
  const senior = teams.filter((t) => t.gender === "Damen");
  const youth  = teams.filter((t) => t.gender === "Jugend");

  return (
    <>
      <PageHero
        eyebrow="Mannschaften"
        title={<>13 Teams · ein Verein.</>}
        description="Bundesliga-Volleyball und Breitensport auf höchstem Niveau in der Grafschaft Bentheim."
        imageUrl="/team/team-group.jpg"
      />

      <section className="py-20 lg:py-24 bg-white">
        <Container className="flex flex-col gap-14">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-black mb-2">Damen</h2>
            <p className="text-scu-gray-500 mb-8">Acht Damenteams von der Bundesliga bis zur Kreisklasse.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {senior.map((t) => (
                <Link
                  key={t.slug}
                  href={`/teams/${t.slug}`}
                  className={cn(
                    "group relative block rounded-2xl overflow-hidden border transition-all",
                    t.tier === 1
                      ? "bg-scu-yellow border-scu-yellow text-scu-black shadow-[0_24px_60px_-20px_rgba(255,240,1,0.55)]"
                      : "bg-white border-scu-gray-200 hover:border-scu-black hover:-translate-y-0.5",
                  )}
                >
                  {t.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-scu-gray-100">
                      <Image
                        src={t.image}
                        alt={`${t.name} – Mannschaftsfoto`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] font-bold opacity-80">{t.league}</div>
                    <div className="font-display text-2xl font-black mt-1.5">{t.name}</div>
                    <p className={cn("text-sm mt-3 leading-relaxed line-clamp-3", t.tier === 1 ? "opacity-90" : "text-scu-gray-500")}>
                      {t.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] group-hover:gap-3 transition-all">
                      Ansehen <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-black mb-2">Jugend</h2>
            <p className="text-scu-gray-500 mb-8">Unsere Nachwuchs-Abteilung – die Zukunft des SCU-Volleyballs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {youth.map((t) => (
                <Link
                  key={t.slug}
                  href={`/jugend#${t.slug}`}
                  className="group relative block rounded-2xl overflow-hidden border border-scu-gray-200 hover:border-scu-black hover:-translate-y-0.5 transition-all bg-white"
                >
                  {t.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-scu-gray-100">
                      <Image
                        src={t.image}
                        alt={`${t.name} – Mannschaftsfoto`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] font-bold opacity-80">{t.league}</div>
                    <div className="font-display text-2xl font-black mt-1.5">{t.name}</div>
                    <p className="text-sm mt-3 leading-relaxed text-scu-gray-500 line-clamp-3">{t.description}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] group-hover:gap-3 transition-all">
                      Ansehen <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
