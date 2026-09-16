"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

/**
 * IBAN mit einem Klick in die Zwischenablage.
 *
 * Auf einer Spendenseite ist das Abtippen einer 22-stelligen Nummer die
 * eigentliche Hürde – besonders auf dem Handy, wo die Seite neben der
 * Banking-App liegt.
 */
export function IbanKopieren({ iban }: { iban: string }) {
  const [kopiert, setKopiert] = React.useState(false);

  React.useEffect(() => {
    if (!kopiert) return;
    const t = setTimeout(() => setKopiert(false), 2500);
    return () => clearTimeout(t);
  }, [kopiert]);

  async function kopieren() {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ""));
      setKopiert(true);
    } catch {
      // Ältere Browser oder verweigerte Berechtigung: die IBAN steht daneben,
      // sie lässt sich weiterhin von Hand markieren.
    }
  }

  return (
    <button
      type="button"
      onClick={kopieren}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-1 text-xs font-semibold text-white/70 transition hover:border-scu-yellow hover:text-scu-yellow focus-visible:border-scu-yellow focus-visible:outline-none"
    >
      {kopiert ? (
        <>
          <Check className="size-3.5" aria-hidden /> Kopiert
        </>
      ) : (
        <>
          <Copy className="size-3.5" aria-hidden /> IBAN kopieren
        </>
      )}
      <span className="sr-only">{kopiert ? "IBAN wurde kopiert" : "IBAN in die Zwischenablage kopieren"}</span>
    </button>
  );
}
