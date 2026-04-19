import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung des SC Union Emlichheim – Abteilung Volleyball.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="py-16 lg:py-20 bg-white">
        <Container className="max-w-3xl prose prose-neutral">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>SC Union Emlichheim e. V.</strong><br />
            Abteilung Volleyball<br />
            {site.address.street}<br />
            {site.address.postalCode} {site.address.city}
          </p>
          <h2>Vertreten durch</h2>
          <p>Den Vorstand gem. § 26 BGB.</p>
          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
          <h2>Registereintrag</h2>
          <p>Vereinsregister · Amtsgericht Osnabrück</p>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Vorstand SC Union Emlichheim e. V.<br />
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Container>
      </section>
    </>
  );
}
