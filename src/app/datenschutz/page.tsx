import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { LegalLayout, LegalSection } from "@/components/ui/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der SC Union Emlichheim Marketing GmbH – Betreiberin von scuvolleyball.de.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        description="Datenschutz ist uns wichtig. Hier erklären wir transparent, welche Daten wir verarbeiten und warum."
      />

      <LegalLayout
        intro={
          <>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich
            auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TTDSG, BDSG).
          </>
        }
      >
        <LegalSection title="1. Verantwortliche Stelle">
          <p>
            <strong>SC Union Emlichheim Marketing GmbH</strong><br />
            {site.address.street}<br />
            {site.address.postalCode} {site.address.city}<br />
            E-Mail: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </LegalSection>

        <LegalSection title="2. Erfassung allgemeiner Informationen">
          <p>
            Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Server-Logfiles beinhalten Angaben zum Typ des Webbrowsers, zum Betriebssystem, zum Domainnamen Ihres Internet-Service-Providers, Ihre anonymisierte IP-Adresse und ähnliche Daten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </LegalSection>

        <LegalSection title="3. Cookies">
          <p>
            Wir setzen auf unserer Website nur technisch notwendige Cookies ein, die für den reibungslosen Betrieb erforderlich sind. Analyse- oder Marketing-Cookies werden ausschließlich mit Ihrer ausdrücklichen Einwilligung verwendet.
          </p>
        </LegalSection>

        <LegalSection title="4. Hosting">
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> gehostet (USA/EU-Region). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
          </p>
        </LegalSection>

        <LegalSection title="5. Instagram-Integration">
          <p>
            Auf unserer Startseite zeigen wir aktuelle Beiträge unseres Instagram-Kanals an. Die Daten werden ausschließlich serverseitig über die offizielle Instagram Graph API (Meta Platforms Ireland Ltd.) abgerufen. Es werden keine Cookies von Meta auf Ihrem Gerät gesetzt, solange Sie nicht auf einen Beitrag klicken.
          </p>
        </LegalSection>

        <LegalSection title="6. Ihre Rechte">
          <p>
            Sie haben jederzeit das Recht auf:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft über Ihre gespeicherten Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p>
            Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
          </p>
        </LegalSection>

        <LegalSection title="7. Kontakt zum Datenschutz">
          <p>
            Für Fragen zum Datenschutz wenden Sie sich bitte an: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
