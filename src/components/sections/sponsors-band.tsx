import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/lib/sponsors";

/* Schmales Partner-Band direkt unter dem Hero: alle Sponsoren gleichwertig
   als Endlos-Marquee, mit direktem Verweis auf die Sponsoren-Seite. */
export function SponsorsBand() {
  return (
    <section aria-label="Unsere Partner" className="relative bg-white border-b border-scu-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
        <div className="flex items-center gap-2.5 shrink-0">
          <Handshake className="size-4 text-scu-yellow-dark" />
          <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-scu-gray-500 whitespace-nowrap">
            Unsere Partner
          </span>
        </div>

        <div className="relative flex-1 min-w-0 w-full overflow-hidden mask-fade-x">
          <div className="flex w-max items-center gap-10 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, copy) => (
              <div key={copy} className="flex items-center gap-10 shrink-0" aria-hidden={copy === 1}>
                {sponsors.map((s) =>
                  s.logo ? (
                    <div key={s.name} className="relative h-9 w-24 shrink-0" title={s.name}>
                      <Image
                        src={s.logo}
                        alt={copy === 0 ? s.name : ""}
                        fill
                        sizes="96px"
                        className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                      />
                    </div>
                  ) : (
                    <span
                      key={s.name}
                      title={s.name}
                      className="shrink-0 font-display text-sm font-black text-scu-black/60 whitespace-nowrap"
                    >
                      {s.name}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <Button asChild variant="outline" size="sm" className="shrink-0">
          <Link href="/sponsoren">
            Alle Partner & Sponsoring <ArrowRight className="size-3.5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
