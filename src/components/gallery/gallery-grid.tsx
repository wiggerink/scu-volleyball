"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [offen, setOffen] = React.useState<number | null>(null);
  const schliessenRef = React.useRef<HTMLButtonElement>(null);
  // Merkt sich, von welcher Kachel aus geöffnet wurde, um den Fokus zurückzugeben
  const ausloeser = React.useRef<HTMLButtonElement | null>(null);

  const zu = React.useCallback(() => {
    setOffen(null);
    ausloeser.current?.focus();
  }, []);

  const blaettern = React.useCallback(
    (richtung: 1 | -1) => setOffen((i) => (i === null ? i : (i + richtung + images.length) % images.length)),
    [images.length],
  );

  React.useEffect(() => {
    if (offen === null) return;
    schliessenRef.current?.focus();
    const taste = (e: KeyboardEvent) => {
      if (e.key === "Escape") zu();
      if (e.key === "ArrowRight") blaettern(1);
      if (e.key === "ArrowLeft") blaettern(-1);
    };
    window.addEventListener("keydown", taste);
    // Hintergrund nicht mitscrollen lassen, solange die Lightbox offen ist
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", taste);
      document.body.style.overflow = vorher;
    };
  }, [offen, zu, blaettern]);

  const bild = offen === null ? null : images[offen];

  return (
    <>
      {/* Mauerwerk-Layout über CSS-Spalten: behält die Originalformate bei,
          ohne dass Hoch- und Querformate sich gegenseitig beschneiden. */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-6 [column-fill:balance]">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={(e) => {
              ausloeser.current = e.currentTarget;
              setOffen(i);
            }}
            className="group mb-4 lg:mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-scu-gray-200 ring-1 ring-transparent transition duration-300 hover:ring-scu-yellow focus-visible:ring-scu-yellow focus-visible:outline-none"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {bild && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildansicht"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-scu-black/95 p-4 sm:p-8"
          onClick={zu}
        >
          <button
            ref={schliessenRef}
            type="button"
            onClick={zu}
            aria-label="Schließen"
            className="absolute top-4 right-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-scu-yellow hover:text-scu-black transition"
          >
            <X className="size-5" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); blaettern(-1); }}
            aria-label="Vorheriges Bild"
            className="absolute left-2 sm:left-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-scu-yellow hover:text-scu-black transition"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); blaettern(1); }}
            aria-label="Nächstes Bild"
            className="absolute right-2 sm:right-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-scu-yellow hover:text-scu-black transition"
          >
            <ChevronRight className="size-5" />
          </button>

          <figure
            className="relative flex max-h-full max-w-5xl flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={bild.src}
              src={bild.src}
              alt={bild.alt}
              width={bild.width}
              height={bild.height}
              sizes="90vw"
              className="max-h-[78vh] w-auto rounded-xl object-contain"
              priority
            />
            <figcaption className="text-center text-sm text-white/70">
              {bild.alt}
              <span className="block text-xs text-white/40 mt-1">
                {offen! + 1} von {images.length} · Foto: Hinnerk Schröer
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
