import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { LegalLayout, LegalSection } from "@/components/ui/legal-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der SC UNION Emlichheim Marketing GmbH – Betreiberin von scuvolleyball.de.",
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
            auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TDDDG, BDSG).
          </>
        }
      >
        <LegalSection title="1. Verantwortliche Stelle">
          <p>
            <strong>SC UNION Emlichheim Marketing GmbH</strong><br />
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

        <LegalSection title="3. Cookies und Speicher im Browser">
          <p>
            Unsere Website setzt keine Cookies und legt auch sonst keine Informationen in Ihrem Browser ab (etwa im Local Storage). Wir setzen keine Tracking- oder Marketingdienste ein. Für die Besucherstatistik nutzen wir das cookielose Werkzeug Umami (siehe Abschnitt 6). Ein Cookie-Banner gibt es deshalb nicht.
          </p>
          <p>
            Alle Inhalte – einschließlich der Schriftarten – werden von unserem eigenen Server ausgeliefert. Beim Aufruf unserer Seiten wird Ihr Browser nicht mit Servern Dritter wie Google, Meta oder Umami verbunden.
          </p>
        </LegalSection>

        <LegalSection title="4. Hosting">
          <p>
            Diese Website wird bei <strong>Vercel Inc.</strong> gehostet (USA/EU-Region). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.
          </p>
        </LegalSection>

        <LegalSection title="5. Beiträge aus unserem Instagram-Kanal">
          <p>
            Auf unserer Startseite und auf der News-Seite zeigen wir aktuelle Beiträge unseres Instagram-Kanals an. Die Beiträge – Texte, Bilder und Kennzahlen wie „Gefällt mir“-Angaben und Follower – ruft ausschließlich unser Server über die offizielle Graph API der Meta Platforms Ireland Ltd. ab und speichert sie vorübergehend zwischen. Auch die Bilder werden über unseren Server ausgeliefert.
          </p>
          <p>
            Beim Aufruf unserer Seiten werden deshalb keine Daten von Ihnen an Meta übermittelt. Erst wenn Sie auf einen Beitrag oder auf „Folgen“ klicken, gelangen Sie zu Instagram; dort gelten die Datenschutzbestimmungen von Meta.
          </p>
        </LegalSection>

        <LegalSection title="6. Besucherstatistik mit Umami">
          <p>
            Um zu verstehen, welche Seiten gelesen werden, nutzen wir die Webanalyse Umami Cloud. Umami arbeitet ohne Cookies und ohne geräteübergreifende Profile.
          </p>
          <p>
            Beim Aufruf einer Seite übermittelt Ihr Browser folgende Angaben an unseren Server: die aufgerufene Adresse und den Seitentitel, die zuvor besuchte Seite (Referrer), Bildschirmgröße und Spracheinstellung. Unser Server leitet diese Angaben zusammen mit den technischen Verbindungsdaten an Umami weiter. Umami leitet daraus Browser, Betriebssystem, Gerätetyp sowie Land, Region und Stadt ab und fasst Seitenaufrufe zu Besuchen zusammen. Die IP-Adresse wird dabei nach Angaben des Anbieters nicht gespeichert; eine Zuordnung der Statistik zu einzelnen Personen ist nicht möglich.
          </p>
          <p>
            Das Umami-Skript liest lediglich einen Eintrag „umami.disabled“ im lokalen Speicher Ihres Browsers aus, mit dem Sie die Zählung für sich abschalten können; es schreibt selbst nichts. Ist in Ihrem Browser „Do Not Track“ aktiviert, wird Ihr Besuch nicht erfasst. Gezählt wird nur auf scuvolleyball.de.
          </p>
          <p>
            Rechtsgrundlage ist unser berechtigtes Interesse an einer datensparsamen Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO). Anbieter von Umami Cloud ist die Umami Software, Inc., USA.
          </p>
        </LegalSection>

        <LegalSection title="7. Kontaktaufnahme">
          <p>
            Wenn Sie uns per E-Mail oder über das Kontaktformular schreiben, verarbeiten wir Ihre Angaben (Name, E-Mail-Adresse, Thema und Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit einem Vertrag zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Nachrichten aus dem Kontaktformular werden per E-Mail an uns weitergeleitet und nicht in einer Datenbank auf der Website gespeichert.
          </p>
        </LegalSection>

        <LegalSection title="8. Links zu externen Angeboten">
          <p>
            Unsere Website enthält Links zu externen Angeboten, etwa zu Instagram, Facebook und YouTube, zum Ticketshop von Reservix, zu VBL-TV und zu Google Maps. Diese Inhalte sind nicht eingebettet; eine Verbindung zum jeweiligen Anbieter entsteht erst, wenn Sie einen Link anklicken. Für die Verarbeitung Ihrer Daten dort ist der jeweilige Anbieter verantwortlich.
          </p>
        </LegalSection>

        <LegalSection title="9. Ihre Rechte">
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

        <LegalSection title="10. Kontakt zum Datenschutz">
          <p>
            Für Fragen zum Datenschutz wenden Sie sich bitte an: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          <p className="text-sm">Stand: September 2026</p>
        </LegalSection>
      </LegalLayout>
    </>
  );
}
