import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Trophy, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { teams } from "@/lib/teams";

const DEDICATED = ["1-mannschaft", "2-mannschaft"];

export function generateStaticParams() {
  return teams.filter((t) => !DEDICATED.includes(t.slug)).map((t) => ({ slug: t.slug }));
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
  if (DEDICATED.includes(team.slug)) notFound();

  const heroImage = team.image ?? "/team/team-group.jpg";
  const isJugend = team.gender === "Jugend";

  return (
    <>
      {/* Hero with image (or branded fallback) */}
      <section className="relative bg-scu-black text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/80 via-scu-black/60 to-scu-black" />
          <div className="absolute -top-32 right-0 size-[420px] rounded-full bg-scu-yellow/15 blur-[120px]" />
        </div>

        <Container className="relative pt-16 lg:pt-20 pb-14 lg:pb-20">
          <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6 -ml-3">
            <Link href="/teams"><ArrowLeft className="size-4" /> Alle Mannschaften</Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="yellow">{team.league}</Badge>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-bold text-white/80">
                  <Users className="size-3" /> {team.gender}
                </span>
              </div>

              <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1]">
                {team.name}
              </h1>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{team.description}</p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 flex items-center gap-5">
                <div className="font-display text-5xl lg:text-6xl font-black text-scu-yellow leading-none shrink-0">
                  {team.short}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-bold">Spielklasse</div>
                  <div className="font-display text-lg font-black text-white leading-tight truncate">{team.league}</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team-Bild Showcase */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
              <Image
                src={heroImage}
                alt={`${team.name} – SCU Emlichheim`}
                fill
                sizes="(min-width:1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 bg-gradient-to-t from-scu-black/95 via-scu-black/40 to-transparent text-white">
                <div className="text-[11px] uppercase tracking-[0.2em] text-scu-yellow font-bold">{team.short}</div>
                <div className="font-display text-2xl lg:text-3xl font-black leading-tight">{team.name} · {team.league}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionHeading
              eyebrow="Über das Team"
              title={<>Was {team.short} <span className="text-scu-yellow">ausmacht</span></>}
            />
            <p className="text-scu-gray-500 leading-relaxed">{team.description}</p>

            {team.highlights && team.highlights.length > 0 && (
              <ul className="flex flex-col gap-2.5 mt-2">
                {team.highlights.map((h) => (
                  <li key={h} className="flex gap-3 items-start text-sm text-scu-black">
                    <Sparkles className="size-4 text-scu-yellow shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      {/* Training & Kontakt */}
      <section className="bg-scu-gray-100 py-16 lg:py-20">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white border border-scu-gray-200 p-7 lg:p-8 flex flex-col gap-4">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
              <Clock className="size-6" />
            </div>
            <h3 className="font-display text-2xl font-black text-scu-black leading-tight">Trainingszeiten</h3>
            {team.trainingTimes && team.trainingTimes.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {team.trainingTimes.map((t) => (
                  <li key={t} className="text-scu-black bg-scu-gray-100 rounded-xl px-4 py-3 text-sm font-medium">
                    {t}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-scu-gray-500 leading-relaxed">
                Aktuelle Trainingszeiten erfragst du am besten direkt bei der Geschäftsstelle – wir vermitteln dir den passenden Ansprechpartner.
              </p>
            )}
            <p className="text-xs text-scu-gray-500 italic mt-2">
              Trainingsort: Vechtetalhalle, Emlichheim. Probetraining jederzeit möglich.
            </p>
          </div>

          <div className="rounded-3xl bg-scu-black text-white p-7 lg:p-8 flex flex-col gap-4 relative overflow-hidden">
            <div aria-hidden className="absolute -top-20 -right-20 size-60 rounded-full bg-scu-yellow/15 blur-3xl" />
            <div className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-scu-yellow text-scu-black">
              {isJugend ? <Users className="size-6" /> : <Trophy className="size-6" />}
            </div>
            <h3 className="relative font-display text-2xl font-black leading-tight">
              {isJugend ? "Schnuppertraining" : "Mitspielen?"}
            </h3>
            <p className="relative text-white/75 leading-relaxed text-sm">
              {isJugend
                ? "Komm vorbei, bring Sportzeug und Hallenschuhe mit – die ersten Trainings sind immer kostenlos. Wir freuen uns auf dich."
                : "Quereinsteigerinnen sind willkommen – egal ob mit Vereinserfahrung oder als Wiedereinsteigerin. Melde dich für ein Probetraining."}
            </p>
            <div className="relative flex flex-wrap gap-3 pt-2">
              <Button asChild variant="primary">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outlineLight">
                <Link href="/teams">
                  Andere Teams <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Teams */}
      <section className="bg-white py-16 lg:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Weitere Mannschaften"
            title={<>Alle <span className="text-scu-yellow">SCU-Teams</span> im Überblick</>}
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {teams
              .filter((t) => t.slug !== team.slug)
              .slice(0, 8)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/teams/${t.slug}`}
                  className="group rounded-2xl border border-scu-gray-200 bg-scu-gray-100 p-5 hover:bg-scu-black hover:border-scu-black hover:text-white transition flex flex-col gap-1"
                >
                  <div className="font-display text-2xl font-black text-scu-black group-hover:text-scu-yellow transition">{t.short}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-scu-gray-500 group-hover:text-white/60 font-semibold">{t.league}</div>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
