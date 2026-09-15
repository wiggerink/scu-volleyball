"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Ticket, Trophy, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import { nextHomeMatch } from "@/lib/schedule";
import { teams } from "@/lib/teams";

/* Termin der Heimspiel-Karte: kurzes Format ("So, 20. Sept"), UTC-fix wie im Spielplan,
   damit der Kalendertag aus dem VBL-Export nicht je nach Serverzeitzone kippt. */
const shortDate = new Intl.DateTimeFormat("de-DE", {
  weekday: "short", day: "numeric", month: "short", timeZone: "UTC",
});

/* Lebendiger Hero: das Teamfoto als subtiler Cinemagraph-Loop (KI-animiert).
   Das statische Bild bleibt Basis-Layer und Fallback (reduced motion, Save-Data,
   Ladefehler); das Video blendet erst ein, wenn es abspielbereit ist. */
function subscribeMotionPref(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function wantsVideo() {
  type NetworkInformation = { saveData?: boolean };
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = (navigator as Navigator & { connection?: NetworkInformation }).connection?.saveData === true;
  return !reducedMotion && !saveData;
}

function subscribeViewport(onChange: () => void) {
  const mq = window.matchMedia("(min-width: 768px)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function isDesktopViewport() {
  return window.matchMedia("(min-width: 768px)").matches;
}

/* Besucher-Uhrzeit als externer Store: einmal pro Seitenaufruf eingefroren, damit
   getSnapshot einen stabilen Wert liefert (sonst rendert React endlos neu). */
let clientNow: number | null = null;
const subscribeNothing = () => () => {};
function getClientNow() {
  clientNow ??= Date.now();
  return clientNow;
}
function getServerNow(): number | null {
  return null;
}

/* Cinemagraph pausiert: hero-main.mp4 ist aus dem 25/26-Hero-Foto animiert und zeigt
   eine andere Szene als das neue Saisonbild - der Crossfade wuerde sichtbar umspringen.
   Wieder auf true setzen, sobald ein Loop aus dem 26/27-Foto vorliegt. */
const HERO_CINEMAGRAPH = false;

function HeroBackdrop() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const [videoFailed, setVideoFailed] = React.useState(false);
  // Server-Snapshot false: SSR rendert nur das Bild, Video kommt erst clientseitig dazu
  const prefersVideo = React.useSyncExternalStore(subscribeMotionPref, wantsVideo, () => false);
  const showVideo = HERO_CINEMAGRAPH && prefersVideo;
  // Desktop 1920px-Variante, Mobile spart mit 960px Bandbreite
  const isDesktop = React.useSyncExternalStore(subscribeViewport, isDesktopViewport, () => false);
  const videoSrc = isDesktop ? "/hero/hero-main.mp4" : "/hero/hero-main-mobile.mp4";

  // Bei Quellenwechsel (Breakpoint) laedt das Video neu -> Foto solange wieder zeigen
  const [prevSrc, setPrevSrc] = React.useState(videoSrc);
  if (prevSrc !== videoSrc) {
    setPrevSrc(videoSrc);
    setVideoReady(false);
  }

  return (
    <>
      {/* Foto ausblenden, sobald das Video laeuft: beide halbtransparent uebereinander
          ergaebe wegen des leicht anderen Video-Bildausschnitts einen Ghosting-Effekt */}
      <Image
        src="/hero/hero-home.jpg"
        alt="Spielball auf dem Hallenboden der Vechtetalhalle vor einem Heimspiel des SCU Emlichheim"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-[center_20%] transition-opacity duration-1000 ${videoReady ? "opacity-0" : "opacity-60"}`}
      />
      {showVideo && !videoFailed && (
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          poster="/hero/hero-home.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onCanPlay={() => {
            const v = videoRef.current;
            if (v) v.playbackRate = 0.75;
            setVideoReady(true);
          }}
          onError={() => {
            setVideoFailed(true);
            setVideoReady(false);
          }}
          className={`absolute inset-0 h-full w-full object-cover object-[center_20%] transition-opacity duration-1000 ${videoReady ? "opacity-60" : "opacity-0"}`}
        />
      )}
    </>
  );
}

export function Hero() {
  // Server-Snapshot null -> erster Render zeigt ueberall das erste Heimspiel der Saison,
  // Markup stimmt also auf beiden Seiten. Nach der Hydration zaehlt die Uhr des Besuchers,
  // damit die Karte auch dann stimmt, wenn seit dem letzten Deploy Spiele vorbei sind.
  const now = React.useSyncExternalStore(subscribeNothing, getClientNow, getServerNow);
  const homeGame = nextHomeMatch(now);

  return (
    <section className="relative overflow-hidden bg-scu-black text-white clip-hero pb-32 lg:pb-44">
      <HeroBackdrop />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-scu-black/70 via-scu-black/50 to-scu-black/95" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-scu-black/90 via-scu-black/40 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.25]" />

      {/* Accent */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-scu-yellow/20 blur-[140px]"
      />

      <Container className="relative pt-32 sm:pt-40 lg:pt-56 xl:pt-64 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] font-black leading-[0.95] tracking-tight"
          >
            Heimat.
            <br />
            Leidenschaft.
            <span className="block text-scu-yellow">Volleyball.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="max-w-xl text-lg text-white/80 leading-relaxed"
          >
            Willkommen beim <strong className="text-white">SC Union Emlichheim</strong> – dem Dorf in der Grafschaft,
            das seit 1989/90 Bundesliga-Volleyball atmet. 2026/27 greifen unsere Damen in der{" "}
            <strong className="text-white">Sparda 2. Liga Pro</strong> an.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild size="lg" variant="primary">
              <Link href={site.ticketsUrl} target="_blank" rel="noopener">
                <Ticket className="size-4" /> Heimspiel-Tickets
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/teams/1-mannschaft">
                Kader 2026/27 <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/teams/1-mannschaft#live">
                <Play className="size-4" /> Livestream
              </Link>
            </Button>
          </motion.div>

          {/* Naechstes Heimspiel fuer kleine Viewports: die Bildkarte rechts ist erst ab lg sichtbar,
              auf dem Handy stand der Termin sonst nirgends. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="lg:hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-4 max-w-xl"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-yellow flex items-center gap-1.5 before:content-[''] before:size-2 before:rounded-full before:bg-scu-yellow">
              Nächstes Heimspiel
            </div>
            <div className="font-display text-base font-black leading-tight mt-1.5">
              {homeGame.home} vs. {homeGame.away}
            </div>
            <div className="text-xs text-white/65 mt-1">
              {shortDate.format(new Date(`${homeGame.date}T00:00:00Z`))} · {homeGame.time} Uhr · {homeGame.venue}
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 max-w-xl border-t border-white/10"
          >
            {[
              { k: "35+", v: "Jahre Bundesliga", icon: Trophy },
              { k: String(teams.length), v: "Mannschaften", icon: CalendarDays },
              { k: "120+", v: "Kinder & Jugend", icon: Trophy },
            ].map(({ k, v, icon: Icon }) => (
              <div key={v} className="flex items-start gap-2 sm:gap-3 pt-6">
                <Icon className="size-4 sm:size-5 text-scu-yellow shrink-0 mt-1" />
                <div className="min-w-0">
                  <dt className="font-display text-2xl sm:text-3xl font-black leading-none">{k}</dt>
                  <dd className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/55 mt-1.5">{v}</dd>
                </div>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative ml-auto w-[420px] aspect-[3/4] rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] bg-white p-1.5"
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/hero/hero-spielszene.jpg"
                alt="Angriff über das Netz bei einem Heimspiel des SCU Emlichheim in der Vechtetalhalle"
                fill
                sizes="420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-scu-black/75 to-transparent" />
              <div className="absolute left-5 top-5 right-5">
                <div className="text-xs font-semibold tracking-[0.22em] uppercase text-scu-yellow">Heimspiel</div>
                <div className="font-display text-xl font-black mt-1">Sparda 2. Liga Pro in der Vechtetalhalle</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="absolute -left-4 -bottom-8 bg-white text-scu-black rounded-2xl p-4 shadow-2xl w-60"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-scu-black flex items-center gap-1.5 before:content-[''] before:size-2 before:rounded-full before:bg-scu-yellow">Nächstes Heimspiel</div>
            <div className="font-display text-lg font-black leading-tight mt-1">{homeGame.home} vs. {homeGame.away}</div>
            <div className="text-xs text-scu-gray-500 mt-1">
              {shortDate.format(new Date(`${homeGame.date}T00:00:00Z`))} · {homeGame.time} Uhr · {homeGame.venue}
            </div>
          </motion.div>
        </div>
      </Container>

    </section>
  );
}
