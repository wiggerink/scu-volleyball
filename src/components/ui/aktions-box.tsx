import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Linien eines Volleyballfelds, wie sie auf dem Hallenboden stehen:
 * Seitenlinie, Mittellinie und die beiden Angriffslinien, die jenseits der
 * Seitenlinie gestrichelt weiterlaufen. Rein dekorativ.
 *
 * Die Farbe kommt über `currentColor` - der Aufrufer setzt sie samt Deckkraft
 * per `text-…`-Klasse.
 */
export function Spielfeldlinien({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {/* Seitenlinie - erst ab der ersten Angriffslinie, damit sie nicht hinter den
          linksbündigen Buttons durchläuft. Es entsteht eine Feldecke. */}
      <div className="absolute left-[58%] right-0 bottom-[22%] h-0.5 bg-current" />
      {/* Angriffslinie, Mittellinie, Angriffslinie - jeweils mit gestrichelter Verlängerung */}
      {["left-[58%]", "left-[76%]", "left-[94%]"].map((pos, i) => (
        <div key={pos}>
          <div className={cn("absolute top-0 bottom-[22%] w-0.5 bg-current", pos)} />
          {i !== 1 && (
            <div className={cn("absolute bottom-0 h-[22%] border-l-2 border-dashed border-current", pos)} />
          )}
        </div>
      ))}
    </div>
  );
}

type Props = {
  /** "gelb" für die eine Hauptaktion eines Abschnitts, "dunkel" für die Begleitbox daneben. */
  ton: "gelb" | "dunkel";
  icon: LucideIcon;
  titel: ReactNode;
  /** Überschriftenebene - h2 in eigenen Abschnitten, h3 unter einer Abschnittsüberschrift. */
  ebene?: "h2" | "h3";
  text: ReactNode;
  /** Zusätzlicher Inhalt zwischen Text und Buttons, z. B. eine Preisliste. */
  extra?: ReactNode;
  aktionen: ReactNode;
  id?: string;
  className?: string;
};

/**
 * Hervorgehobene Box für eine Handlungsaufforderung.
 *
 * Gelb ist flächig und ohne Verlauf: Ein Übergang von Gelb nach Schwarz
 * läuft durch ein trübes Oliv, und weiße Schrift auf Gelb ist kaum lesbar.
 * Auf Gelb deshalb schwarze Schrift und schwarze Buttons
 * (`variant="dark"` / `variant="outline"`).
 */
export function AktionsBox({ ton, icon: Icon, titel, ebene = "h2", text, extra, aktionen, id, className }: Props) {
  const gelb = ton === "gelb";
  const Ueberschrift = ebene;

  return (
    <div
      id={id}
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 lg:p-10 flex flex-col gap-5",
        gelb
          ? // Fokusring: der gelbe Standardring wäre auf gelbem Grund unsichtbar
            "bg-scu-yellow text-scu-black [&_a]:focus-visible:ring-scu-black [&_a]:focus-visible:ring-offset-scu-yellow"
          : "bg-white/5 border border-white/10 text-white",
        className,
      )}
    >
      {gelb && <Spielfeldlinien className="text-scu-black/[0.09]" />}

      <div
        className={cn(
          "relative inline-flex size-12 items-center justify-center rounded-2xl",
          gelb ? "bg-scu-black text-scu-yellow" : "bg-scu-yellow text-scu-black",
        )}
      >
        <Icon className="size-6" />
      </div>
      {/* Lange Komposita wie "Damenmannschaft" passen auf schmalen Handys sonst nicht in die Box */}
      <Ueberschrift lang="de" className="relative font-display text-2xl sm:text-3xl lg:text-4xl font-black leading-tight hyphens-auto break-words">
        {titel}
      </Ueberschrift>
      <div className={cn("relative leading-relaxed", gelb ? "text-scu-black/75" : "text-white/70")}>{text}</div>
      {extra && <div className="relative">{extra}</div>}
      <div className="relative flex flex-wrap gap-3 mt-auto pt-1">{aktionen}</div>
    </div>
  );
}
