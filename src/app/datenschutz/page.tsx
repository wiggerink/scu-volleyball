import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung des SC Union Emlichheim – Abteilung Volleyball.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutz" />
      <section className="py-16 lg:py-20 bg-white">
        <Container className="max-w-3xl prose prose-neutral">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TTDSG, BDSG).
          </p>
          <h2>1. Verantwortliche Stelle</h2>
          <p>
            SC Union Emlichheim e. V., Lägen Diek 12, 49824 Emlichheim<br />
            E-Mail: news@scuvolleyball.de
          </p>
          <h2>2. Erfassung allgemeiner Informationen</h2>
          <p>
            Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten Angaben zum Typ des Webbrowsers, zum Betriebssystem, zum Domainnamen und ähnliche Daten.
          </p>
          <h2>3. Cookies</h2>
          <p>
            Wir setzen auf unserer Website nur technisch notwendige Cookies ein. Analyse- oder Marketing-Cookies werden ausschließlich mit Ihrer ausdrücklichen Einwilligung verwendet.
          </p>
          <h2>4. Hosting</h2>
          <p>Diese Website wird bei Vercel Inc. (USA/EU) gehostet. Es wird ein Auftragsverarbeitungsvertrag abgeschlossen.</p>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Zudem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
          </p>
        </Container>
      </section>
    </>
  );
}
