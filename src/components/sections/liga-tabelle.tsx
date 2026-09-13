import { Container } from "@/components/ui/container";
import { HighlightWord, SectionHeading } from "@/components/ui/section-heading";
import { ligaTabelle } from "@/lib/vbl";

/**
 * Ligatabelle aus der VBL-Schnittstelle.
 *
 * Rendert nichts, solange keine Daten da sind (kein API-Key, Abfrage
 * fehlgeschlagen, Saison noch nicht gestartet). Der Abschnitt taucht also
 * von selbst auf, sobald die Schnittstelle laeuft – ohne weitere Aenderung.
 */
export async function LigaTabelle() {
  const zeilen = await ligaTabelle();
  if (!zeilen?.length) return null;

  return (
    <section id="tabelle" className="py-20 lg:py-24 bg-scu-gray-100">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Tabelle"
          title={<>Sparda 2. Liga <HighlightWord>Pro</HighlightWord></>}
          description="Aktueller Stand laut offizieller VBL-Schnittstelle."
        />
        <div className="overflow-x-auto rounded-2xl border border-scu-gray-200 bg-white">
          <table className="w-full min-w-[620px] text-sm">
            <caption className="sr-only">Tabelle der Sparda 2. Liga Pro, Saison 2026/27</caption>
            <thead className="bg-scu-black text-white">
              <tr>
                <th scope="col" className="text-left px-4 py-3 font-semibold">#</th>
                <th scope="col" className="text-left px-4 py-3 font-semibold">Mannschaft</th>
                <th scope="col" className="text-right px-4 py-3 font-semibold">Sp.</th>
                <th scope="col" className="text-right px-4 py-3 font-semibold hidden sm:table-cell">S</th>
                <th scope="col" className="text-right px-4 py-3 font-semibold hidden sm:table-cell">N</th>
                <th scope="col" className="text-right px-4 py-3 font-semibold hidden md:table-cell">Sätze</th>
                <th scope="col" className="text-right px-4 py-3 font-semibold">Punkte</th>
              </tr>
            </thead>
            <tbody>
              {zeilen.map((z) => (
                <tr
                  key={z.team}
                  className={`border-t border-scu-gray-200 ${z.eigen ? "bg-scu-yellow/[0.12] font-semibold" : ""}`}
                >
                  <td className="px-4 py-3 tabular-nums">{z.platz}</td>
                  <td className="px-4 py-3 font-display font-black">{z.team}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{z.spiele}</td>
                  <td className="px-4 py-3 text-right tabular-nums hidden sm:table-cell">{z.siege}</td>
                  <td className="px-4 py-3 text-right tabular-nums hidden sm:table-cell">{z.niederlagen}</td>
                  <td className="px-4 py-3 text-right tabular-nums hidden md:table-cell">
                    {z.saetzeFuer}:{z.saetzeGegen}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums font-display font-black">{z.punkte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
