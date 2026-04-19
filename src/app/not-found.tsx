import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative bg-scu-black text-white min-h-[70vh] flex items-center overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-scu-yellow/30 blur-3xl" />
      <Container className="relative text-center max-w-2xl">
        <div className="font-display text-[140px] lg:text-[200px] font-black leading-none text-scu-yellow">404</div>
        <h1 className="font-display text-3xl lg:text-5xl font-black leading-tight mt-4">
          Diese Seite ist außerhalb des Feldes.
        </h1>
        <p className="text-white/70 mt-4 text-lg">
          Aber keine Sorge: Zurück zum nächsten Punkt geht es hier.
        </p>
        <div className="flex gap-3 justify-center mt-8">
          <Button asChild variant="primary" size="lg"><Link href="/">Zur Startseite</Link></Button>
          <Button asChild variant="outlineLight" size="lg"><Link href="/teams/1-mannschaft">Zum Team</Link></Button>
        </div>
      </Container>
    </section>
  );
}
