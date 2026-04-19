import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { teams } from "@/lib/teams";

export function generateStaticParams() {
  return teams.filter((t) => t.slug !== "1-mannschaft").map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) return {};
  return {
    title: `${team.name} – ${team.league}`,
    description: team.description,
    alternates: { canonical: `/teams/${team.slug}` },
  };
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) notFound();
  if (team.slug === "1-mannschaft") {
    // handled by dedicated page
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={team.league}
        title={team.name}
        description={team.description}
        imageUrl="/hero/hero-main.jpg"
      >
        <Button asChild variant="outlineLight">
          <Link href="/teams"><ArrowLeft className="size-4" /> Alle Mannschaften</Link>
        </Button>
      </PageHero>

      <section className="py-20 bg-white">
        <Container className="max-w-3xl">
          <div className="prose prose-lg">
            <Badge variant="yellow" className="mb-4">{team.league}</Badge>
            <h2 className="font-display text-3xl font-black">Über das Team</h2>
            <p className="text-scu-gray-500 leading-relaxed">{team.description}</p>
            <p className="text-scu-gray-500 leading-relaxed">
              Detaillierte Kaderinformationen, Trainingszeiten und Spielpläne folgen in Kürze. Bei Fragen zum Einstieg ins Team oder Probetrainings melde dich gerne direkt bei uns.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/teams">Alle Mannschaften</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
