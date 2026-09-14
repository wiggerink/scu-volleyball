import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { ergebnisse } from "@/lib/vbl";

const datum = new Intl.DateTimeFormat("de-DE", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

/**
 * Gespielte Partien mit Ergebnis, direkt aus der VBL-Schnittstelle.
 *
 * Rendert nichts, solange kein Spiel gewertet ist – vor dem ersten Spieltag
 * fehlt der Abschnitt also einfach und taucht danach von selbst auf.
 */
export async function Ergebnisse() {
  const spiele = await ergebnisse();
  if (!spiele?.length) return null;

  return (
    <section id="ergebnisse" className="py-20 lg:py-24 bg-white scroll-mt-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Ergebnisse"
          title={<>Bisherige <HighlightWord>Spiele</HighlightWord></>}
          description="Alle gewerteten Partien der laufenden Saison, direkt aus der offiziellen VBL-Schnittstelle."
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spiele.map((s) => (
            <li
              key={`${s.date}-${s.home}`}
              className={`rounded-2xl border p-5 flex flex-col gap-3 ${
                s.gewonnen ? "border-scu-yellow bg-scu-yellow/[0.06]" : "border-scu-gray-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-scu-gray-500">
                  {datum.format(new Date(`${s.date}T00:00:00Z`))}
                </span>
                <Badge variant={s.gewonnen ? "yellow" : "outline"}>
                  {s.gewonnen ? "Sieg" : "Niederlage"}
                </Badge>
              </div>

              <div className="font-display font-black leading-tight text-scu-black">
                {s.home} <span className="text-scu-gray-500">vs.</span> {s.away}
              </div>

              <div className="font-display text-3xl font-black text-scu-black leading-none">
                {s.saetze}
              </div>

              {s.einzelsaetze.length > 0 && (
                <div className="text-xs text-scu-gray-500">{s.einzelsaetze.join(" · ")}</div>
              )}

              {s.isHome && s.zuschauer && (
                <div className="text-xs text-scu-gray-500">{s.zuschauer} Zuschauer</div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
