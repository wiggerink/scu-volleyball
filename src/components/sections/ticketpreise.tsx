import { ticketpreise, ticketHinweise } from "@/lib/tickets";

/**
 * Preisliste für die dunklen Ticket-Kacheln.
 *
 * Bewusst als Blöcke statt als vierspaltige Tabelle: Auf dem Handy wären
 * Tarif, Eintritt, GN-Card-Preis und Jahreskarte nebeneinander unlesbar.
 */
export function Ticketpreise() {
  return (
    <div className="flex flex-col gap-5">
      {ticketpreise.map((t) => (
        <div key={t.gruppe} className="border-t border-white/15 pt-4">
          <div className="font-display font-black text-white leading-tight">{t.gruppe}</div>
          <dl className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="text-white/55">Eintritt</dt>
              <dd className="font-semibold text-white">{t.eintritt}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">mit GN-Card</dt>
              <dd className="font-semibold text-white">{t.gnCard}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/55">Jahreskarte</dt>
              <dd className="font-semibold text-white">{t.jahreskarte}</dd>
            </div>
          </dl>
        </div>
      ))}

      <ul className="text-xs text-white/55 space-y-1">
        {ticketHinweise.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
