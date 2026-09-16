"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Ticket, Radio, ArrowUpRight, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { site, type NavEntry } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Nur ein Bereich gleichzeitig offen - sonst wird das Menue wieder so lang wie vorher
  const [offenerBereich, setOffenerBereich] = React.useState<string | null>(null);
  // Welcher Menuepunkt gerade aufgeklappt ist. Der Zustand liegt hier oben,
  // weil das breite Megamenue an der ganzen Leiste haengt: unter einem einzelnen
  // Menuepunkt weit rechts wuerde ein 1000px-Panel aus dem Bild laufen.
  const [offenerPunkt, setOffenerPunkt] = React.useState<string | null>(null);
  const pathname = usePathname();
  const activeHref = React.useMemo(() => getActiveHref(pathname, site.nav), [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menue bei Routenwechsel schliessen (z. B. Browser-Zurueck bei offenem Menue)
  const [prevPathname, setPrevPathname] = React.useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  // Die Startseite steckt nur im mobilen Menue - oben genuegt das Logo.
  const sichtbareNav = site.nav.filter((item) => item.href !== "/");
  const offenesMega = sichtbareNav.find((item) => item.href === offenerPunkt && item.mega) ?? null;

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-scu-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-scu-black/75 via-scu-black/45 to-transparent",
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            "text-white/80 text-xs transition-all duration-300 overflow-hidden",
            scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100 border-b border-white/10",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-2.5 sm:px-3 py-1 min-w-0">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-scu-yellow opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-scu-yellow" />
              </span>
              <span className="text-[9px] sm:text-[10.5px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-white/90 truncate">
                Saison {site.season} · Sparda 2. Liga Pro · Damen
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 shrink-0">
              <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="hover:text-scu-yellow transition"><FacebookIcon className="size-3.5" /></Link>
              <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="hover:text-scu-yellow transition"><InstagramIcon className="size-3.5" /></Link>
              <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="hover:text-scu-yellow transition"><YoutubeIcon className="size-3.5" /></Link>
              <span className="h-3 w-px bg-white/20" />
              <Link href={`mailto:${site.contact.email}`} className="hover:text-scu-yellow transition inline-flex items-center gap-1.5">
                <Mail className="size-3" />
                {site.contact.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <header
          className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3"
          onMouseLeave={() => setOffenerPunkt(null)}
        >
          <Link
            href="/"
            aria-label="SCU Emlichheim Volleyball - Startseite"
            className="group shrink-0"
            onMouseEnter={() => setOffenerPunkt(null)}
          >
            <div className="relative size-16 sm:size-20 lg:size-28 xl:size-32 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Image
                src="/logos/scu-logo.png"
                alt="SCU Emlichheim Logo"
                fill
                sizes="128px"
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center">
            {sichtbareNav.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                activeHref={activeHref}
                offen={offenerPunkt === item.href}
                onHover={setOffenerPunkt}
              />
            ))}
          </nav>

          {/* Megamenue: mittig unter dem Header, damit es in jeder Breite
              vollstaendig im Bild bleibt. */}
          <AnimatePresence>
            {offenesMega && (
              <motion.div
                key={offenesMega.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
              >
                <MegaMenu mega={offenesMega.mega!} pathname={pathname} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hidden xl:flex items-center gap-2 shrink-0" onMouseEnter={() => setOffenerPunkt(null)}>
            <Button asChild variant="outlineLight" size="sm">
              <Link href={site.ticketsUrl} target="_blank" rel="noopener">
                <Ticket className="size-3.5" />
                Tickets
              </Link>
            </Button>
            <Button asChild variant="primary" size="sm">
              <Link href="/teams/1-mannschaft#live">
                <Radio className="size-3.5" />
                Live
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center border border-white/20 bg-scu-black/40 backdrop-blur text-white size-11 shadow-sm hover:bg-scu-yellow hover:text-scu-black hover:border-scu-yellow transition"
            aria-label="Menü öffnen"
            onClick={() => {
              const aktiv = site.nav.find((i) => i.href === activeHref && (i.children || i.mega));
              setOffenerBereich(aktiv?.href ?? null);
              setMobileOpen(true);
            }}
          >
            <Menu className="size-5" />
          </button>
        </header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
        {mobileOpen && (
          <motion.div
            key="mobile-menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-scu-black text-white flex flex-col overflow-y-auto border-l-2 border-scu-yellow"
          >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 group">
                  <div className="relative size-10 shrink-0">
                    <Image src="/logos/scu-logo.png" alt="SCU" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="font-display font-black text-sm">SCU Volleyball</span>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-scu-yellow font-bold">Sparda 2. Liga Pro</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                  className="size-10 inline-flex items-center justify-center border border-white/15 text-white/80 hover:bg-scu-yellow hover:text-scu-black hover:border-scu-yellow transition"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 flex flex-col">
                <div className="px-6 pt-6 pb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
                  Navigation
                </div>
                <nav className="flex flex-col">
                  {site.nav.map((item) => {
                    const active = activeHref === item.href;
                    const subItems = item.mega
                      ? item.mega.columns.flatMap((col) =>
                          col.items.map((it) => ({
                            label: it.label,
                            href: it.href,
                            note: it.note,
                            group: col.title,
                            external: it.external ?? false,
                          })),
                        )
                      : item.children
                      ? item.children.map((c) => ({
                          label: c.label,
                          href: c.href,
                          note: undefined,
                          group: undefined,
                          external: c.external,
                        }))
                      : [];

                    return (
                      <div key={item.href} className="border-b border-white/5">
                        {/* Beschriftung fuehrt zur Seite, der Pfeil klappt nur auf -
                            so bleibt beides mit einer Hand erreichbar. */}
                        <div className="flex items-stretch">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "group relative flex flex-1 min-w-0 items-center gap-3 px-6 py-3 transition",
                              active
                                ? "bg-scu-yellow/[0.06] text-scu-yellow"
                                : "text-white hover:bg-white/[0.04] hover:text-scu-yellow",
                            )}
                          >
                            <span
                              aria-hidden
                              className={cn(
                                "absolute left-0 top-0 bottom-0 w-1 bg-scu-yellow transition-all",
                                active ? "opacity-100" : "opacity-0 group-hover:opacity-60",
                              )}
                            />
                            <span className="flex items-center gap-2 min-w-0">
                              <span className="text-base font-display font-black tracking-tight">{item.label}</span>
                              {item.badge && (
                                <span className="inline-flex items-center bg-scu-yellow text-scu-black px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] leading-none">
                                  {item.badge}
                                </span>
                              )}
                            </span>
                          </Link>

                          {subItems.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setOffenerBereich((o) => (o === item.href ? null : item.href))}
                              aria-expanded={offenerBereich === item.href}
                              aria-controls={`untermenue-${item.href}`}
                              aria-label={`${item.label} – Untermenü ${offenerBereich === item.href ? "schließen" : "öffnen"}`}
                              className="shrink-0 px-5 text-white/40 hover:text-scu-yellow hover:bg-white/[0.04] transition"
                            >
                              <ChevronDown
                                className={cn(
                                  "size-4 transition-transform duration-200",
                                  offenerBereich === item.href && "rotate-180",
                                )}
                              />
                            </button>
                          )}
                        </div>

                        {/* Sub items (children or mega) */}
                        {subItems.length > 0 && offenerBereich === item.href && (
                          <div id={`untermenue-${item.href}`} className="pb-2 bg-white/[0.015]">
                            {(() => {
                              let lastGroup: string | undefined;
                              return subItems.map((sub) => {
                                const groupHeader =
                                  sub.group && sub.group !== lastGroup ? sub.group : null;
                                lastGroup = sub.group;
                                return (
                                  <React.Fragment key={`${item.href}-${sub.href}`}>
                                    {groupHeader && (
                                      <div className="px-6 pt-3 pb-1 text-[9px] font-bold uppercase tracking-[0.28em] text-scu-yellow/60">
                                        {groupHeader}
                                      </div>
                                    )}
                                    <Link
                                      href={sub.href}
                                      target={sub.external ? "_blank" : undefined}
                                      rel={sub.external ? "noopener" : undefined}
                                      onClick={() => setMobileOpen(false)}
                                      className="group/sub flex items-center gap-3 pl-10 pr-6 py-2 text-sm text-white/75 hover:text-scu-yellow hover:bg-white/[0.04] transition"
                                    >
                                      <span aria-hidden className="size-1 rounded-full bg-white/30 group-hover/sub:bg-scu-yellow shrink-0 transition-colors" />
                                      <span className="flex-1 min-w-0 truncate">{sub.label}</span>
                                      {sub.note && (
                                        <span className="text-[10px] text-white/35 uppercase tracking-[0.14em] shrink-0">{sub.note}</span>
                                      )}
                                      <ArrowUpRight className="size-3 text-white/25 shrink-0 group-hover/sub:text-scu-yellow transition-colors" />
                                    </Link>
                                  </React.Fragment>
                                );
                              });
                            })()}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </div>

              {/* CTA + Contact */}
              <div className="border-t border-white/10 bg-white/[0.02] px-6 py-6 flex flex-col gap-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40 mb-1">
                  Schnellzugriff
                </div>
                <Link
                  href={site.ticketsUrl}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex items-center justify-between gap-2 bg-scu-yellow text-scu-black px-5 py-3.5 font-display font-black text-sm tracking-tight hover:bg-white transition-all"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Ticket className="size-4" />
                    Tickets sichern
                  </span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/teams/1-mannschaft#live"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex items-center justify-between gap-2 border border-white/20 text-white px-5 py-3.5 font-display font-black text-sm tracking-tight hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <Radio className="size-4 text-scu-yellow" />
                    Livestream
                  </span>
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <Link
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-scu-yellow transition min-w-0"
                  >
                    <Mail className="size-3.5 shrink-0" />
                    <span className="truncate">{site.contact.email}</span>
                  </Link>
                  <div className="flex items-center gap-3 text-white/55 shrink-0">
                    <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="hover:text-scu-yellow transition"><FacebookIcon className="size-4" /></Link>
                    <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="hover:text-scu-yellow transition"><InstagramIcon className="size-4" /></Link>
                    <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="hover:text-scu-yellow transition"><YoutubeIcon className="size-4" /></Link>
                  </div>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function matchesHref(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/**
 * Alle internen Ziele eines Menuepunkts - eigenes und die des Untermenues.
 * Dadurch bleibt der Punkt markiert, wenn man auf einer Unterseite steht, die
 * nur im Megamenue steht (z. B. "Verein" auf /foerderring).
 */
function navZiele(item: NavEntry) {
  const ziele = [item.href];
  const unter = item.mega
    ? item.mega.columns.flatMap((c) => c.items)
    : item.children ?? [];
  for (const u of unter) {
    if (u.external) continue;
    ziele.push(u.href.split("#")[0]);
  }
  return ziele.filter(Boolean);
}

function getActiveHref(pathname: string | null, nav: readonly NavEntry[]) {
  if (!pathname) return null;
  let best: string | null = null;
  let bestLaenge = -1;
  for (const item of nav) {
    for (const ziel of navZiele(item)) {
      // Das genaueste Ziel gewinnt: /teams/1-mannschaft schlaegt /teams.
      if (matchesHref(pathname, ziel) && ziel.length > bestLaenge) {
        best = item.href;
        bestLaenge = ziel.length;
      }
    }
  }
  return best;
}

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return matchesHref(pathname, href);
}

function NavItem({
  item,
  activeHref,
  offen,
  onHover,
}: {
  item: NavEntry;
  activeHref: string | null;
  offen: boolean;
  onHover: (href: string | null) => void;
}) {
  const hasChildren = !!item.children;
  const hasMega = !!item.mega;
  const active = activeHref === item.href;
  const badge = item.badge;

  return (
    <div className="relative" onMouseEnter={() => onHover(item.href)}>
      <Link
        href={item.href}
        className={cn(
          "relative inline-flex items-center gap-1.5 px-3 xl:px-4 py-2.5 text-base xl:text-[17px] font-semibold whitespace-nowrap transition group",
          active
            ? "text-scu-yellow"
            : "text-white/85 hover:text-scu-yellow",
        )}
      >
        <span>{item.label}</span>
        {badge && (
          <span className={cn(
            "inline-flex items-center rounded-full px-1.5 py-px text-[8.5px] font-black uppercase tracking-[0.15em] leading-none",
            active ? "bg-scu-yellow/30 text-scu-yellow border border-scu-yellow/40" : "bg-scu-yellow text-scu-black",
          )}>
            {badge}
          </span>
        )}
        {(hasChildren || hasMega) && <ChevronDown className="size-3 opacity-60 group-hover:rotate-180 transition-transform" />}

        {/* Active indicator: animated underline */}
        {active && (
          <motion.span
            layoutId="nav-active"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="absolute left-2.5 right-2.5 xl:left-3 xl:right-3 bottom-0.5 h-[2px] rounded-full bg-scu-yellow shadow-[0_0_12px_rgba(255,240,1,0.5)]"
          />
        )}
      </Link>

      <AnimatePresence>
        {hasChildren && !hasMega && offen && (
          <motion.div
            key="children-dropdown"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
          >
            <div className="min-w-64 rounded-2xl border border-white/10 bg-scu-black/95 backdrop-blur-xl p-2 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.7)]">
              {item.children!.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener" : undefined}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-scu-yellow/10 hover:text-scu-yellow transition group/sub"
                >
                  {c.label}
                  <ArrowUpRight className="size-3.5 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type MegaData = NonNullable<NavEntry["mega"]>;

function MegaMenu({ mega, pathname }: { mega: MegaData; pathname: string | null }) {
  // Drei Spalten brauchen mehr Platz als zwei, sonst brechen die Beschriftungen um.
  const breit = mega.columns.length >= 3;

  return (
    <div
      className={cn(
        "relative rounded-[28px] bg-scu-black/95 backdrop-blur-2xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] overflow-hidden ring-1 ring-white/10",
        breit
          ? "w-[min(960px,calc(100vw-2rem))] xl:w-[1060px]"
          : "w-[min(880px,calc(100vw-2rem))] xl:w-[960px]",
      )}
    >
      <div aria-hidden className="absolute -top-24 -left-24 size-64 rounded-full bg-scu-yellow/10 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -right-20 size-72 rounded-full bg-scu-yellow/5 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-12">
        {/* Columns */}
        <div className={cn("grid gap-x-6 p-8", breit ? "col-span-9 grid-cols-3" : "col-span-8 grid-cols-2")}>
          {mega.columns.map((col) => (
            <div key={col.title}>
              <div className="text-[10px] font-black tracking-[0.28em] uppercase text-scu-yellow/90 mb-4 px-3 flex items-center gap-2">
                <span className="size-1 rounded-full bg-scu-yellow" />
                {col.title}
              </div>
              <ul className="flex flex-col">
                {col.items.map((it) => {
                  const active = isActive(pathname, it.href);
                  return (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        {...(it.external ? { target: "_blank", rel: "noopener" } : {})}
                        className="group/sub relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:bg-white/[0.04]"
                      >
                        <span
                          className={cn(
                            "absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r-full bg-scu-yellow transition-all",
                            active ? "h-7 opacity-100" : "h-0 opacity-0 group-hover/sub:h-5 group-hover/sub:opacity-70",
                          )}
                        />
                        <div className="flex-1 min-w-0">
                          <div className={cn(
                            "font-semibold text-sm transition-colors leading-tight",
                            active ? "text-scu-yellow" : "text-white group-hover/sub:text-scu-yellow",
                          )}>
                            {it.label}
                          </div>
                          {it.note && (
                            <div className="text-[11px] text-white/45 mt-0.5 leading-snug group-hover/sub:text-white/65 transition-colors">
                              {it.note}
                            </div>
                          )}
                        </div>
                        <ArrowUpRight
                          className={cn(
                            "size-3.5 shrink-0 transition-all",
                            active
                              ? "text-scu-yellow"
                              : "text-white/25 -translate-x-1 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:text-scu-yellow",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature */}
        <div className={cn(breit ? "col-span-3" : "col-span-4", "relative bg-gradient-to-br from-scu-yellow/15 via-scu-yellow/5 to-transparent p-7 flex flex-col justify-between gap-6")}>
          <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div aria-hidden className="absolute top-0 right-0 size-32 rounded-full bg-scu-yellow/20 blur-2xl pointer-events-none" />
          <div className="relative">
            {mega.feature.badge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-scu-yellow text-scu-black px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.22em] mb-4 shadow-[0_8px_24px_-8px_rgba(255,240,1,0.6)]">
                <span className="size-1.5 rounded-full bg-scu-black animate-pulse" />
                {mega.feature.badge}
              </div>
            )}
            <h3 className="font-display text-xl font-black leading-tight text-white">
              {mega.feature.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mt-2">
              {mega.feature.text}
            </p>
          </div>
          <Link
            href={mega.feature.cta.href}
            className="relative inline-flex items-center justify-between rounded-full bg-scu-yellow text-scu-black px-4 py-2.5 text-sm font-bold hover:bg-white transition-all group/feat shadow-[0_12px_28px_-10px_rgba(255,240,1,0.5)]"
          >
            {mega.feature.cta.label}
            <ArrowUpRight className="size-4 group-hover/feat:translate-x-0.5 group-hover/feat:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
