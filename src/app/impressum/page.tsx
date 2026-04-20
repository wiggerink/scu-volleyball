import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { LegalLayout, LegalSection } from "@/components/ui/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der SC Union Emlichheim Marketing GmbH – Betreiberin von scuvolleyball.de.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" description="Angaben gemäß § 5 TMG und § 18 MStV." />

      <LegalLayout>
        <LegalSection title="Anbieterin gemäß § 5 TMG">
          <p>
            <strong>SC Union Emlichheim Marketing GmbH</strong><br />
            {site.address.street}<br />
            {site.address.postalCode} {site.address.city}<br />
            {site.address.country}
          </p>
        </LegalSection>

        <LegalSection title="Vertreten durch">
          <p>Die Geschäftsführung der SC Union Emlichheim Marketing GmbH.</p>
        </LegalSection>

        <LegalSection title="Kontakt">
          <p>
            E-Mail: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </LegalSection>

        <LegalSection title="Registereintrag">
          <p>
            Eintragung im Handelsregister · Amtsgericht Osnabrück<br />
            Registernummer: <em className="not-italic text-scu-gray-500">[wird ergänzt]</em>
          </p>
        </LegalSection>

        <LegalSection title="Umsatzsteuer-ID">
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:{" "}
            <em className="not-italic text-scu-gray-500">[wird ergänzt]</em>
          </p>
        </LegalSection>

        <LegalSection title="Sportlicher Spielbetrieb">
          <p>
            Der sportliche Spielbetrieb der Volleyball-Abteilung liegt beim <strong>SC Union Emlichheim e. V.</strong>,
            {" "}{site.address.street}, {site.address.postalCode} {site.address.city} – eingetragen im Vereinsregister
            beim Amtsgericht Osnabrück.
          </p>
          <p>
            Die SC Union Emlichheim Marketing GmbH ist die Betreiberin dieser Website und zuständig für Vermarktung,
            Fanservices und Kommunikation rund um die 2. Bundesliga-Mannschaft.
          </p>
        </LegalSection>

        <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p>
            Geschäftsführung der SC Union Emlichheim Marketing GmbH<br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Inhalte">
          <p>
            Als Diensteanbieterin sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </LegalSection>

        <LegalSection title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </LegalSection>

        <LegalSection title="Urheberrecht">
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Urheber:innen.
          </p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
