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
  const pathname = usePathname();
  const activeHref = React.useMemo(() => getActiveHref(pathname, site.nav), [pathname]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
                Saison {site.season} · 2. Bundesliga Pro · Damen
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
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">
          <Link href="/" aria-label="SCU Emlichheim Volleyball - Startseite" className="group shrink-0">
            <div className="relative size-16 sm:size-20 lg:size-24 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Image
                src="/logos/scu-logo.png"
                alt="SCU Emlichheim Logo"
                fill
                sizes="96px"
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center">
            {site.nav.map((item) => (
              <NavItem key={item.href} item={item} pathname={pathname} activeHref={activeHref} />
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-2 shrink-0">
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
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-scu-black/40 backdrop-blur text-white size-11 shadow-sm hover:bg-scu-yellow hover:text-scu-black hover:border-scu-yellow transition"
            aria-label="Menü öffnen"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-scu-black text-white p-6 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="relative size-10">
                    <Image src="/logos/scu-logo.png" alt="SCU" fill className="object-contain" />
                  </div>
                  <span className="font-display font-black">SCU Volleyball</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Menü schließen"
                  className="rounded-full size-11 inline-flex items-center justify-center border border-white/15 hover:bg-white/10 transition"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1.5">
                {site.nav.map((item) => {
                  const active = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "group relative rounded-2xl px-4 py-3 transition border",
                        active
                          ? "bg-scu-yellow text-scu-black border-scu-yellow"
                          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20",
                      )}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-base font-display font-black tracking-tight">{item.label}</span>
                          {item.badge && (
                            <span
                              className={cn(
                                "inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em]",
                                active ? "bg-scu-black text-scu-yellow" : "bg-scu-yellow text-scu-black",
                              )}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <ArrowUpRight
                          className={cn(
                            "size-4 transition-transform shrink-0",
                            active ? "text-scu-black" : "text-white/40 group-hover:text-scu-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          )}
                        />
                      </div>
                      {item.description && (
                        <div className={cn(
                          "text-[11px] mt-0.5 leading-snug",
                          active ? "text-scu-black/70" : "text-white/55",
                        )}>
                          {item.description}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link
                    href={site.ticketsUrl}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Ticket className="size-4" /> Tickets sichern
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <Link href="/teams/1-mannschaft#live" onClick={() => setMobileOpen(false)}>
                    <Radio className="size-4" /> Livestream
                  </Link>
                </Button>
                <Link
                  href={`mailto:${site.contact.email}`}
                  className="text-center text-sm text-white/60 hover:text-scu-yellow transition mt-2"
                >
                  {site.contact.email}
                </Link>
                <div className="flex items-center gap-4 pt-2 text-white/60 justify-center">
                  <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="hover:text-scu-yellow transition"><FacebookIcon className="size-5" /></Link>
                  <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="hover:text-scu-yellow transition"><InstagramIcon className="size-5" /></Link>
                  <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="hover:text-scu-yellow transition"><YoutubeIcon className="size-5" /></Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function matchesHref(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function getActiveHref(pathname: string | null, nav: readonly NavEntry[]) {
  if (!pathname) return null;
  let best: string | null = null;
  for (const item of nav) {
    if (matchesHref(pathname, item.href)) {
      if (best === null || item.href.length > best.length) best = item.href;
    }
  }
  return best;
}

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  return matchesHref(pathname, href);
}

function NavItem({ item, pathname, activeHref }: { item: NavEntry; pathname: string | null; activeHref: string | null }) {
  const hasChildren = !!item.children;
  const hasMega = !!item.mega;
  const [open, setOpen] = React.useState(false);
  const active = activeHref === item.href;
  const badge = item.badge;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cn(
          "relative inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[12.5px] xl:text-[13px] font-semibold whitespace-nowrap transition group",
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
        {hasMega && open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            <MegaMenu mega={item.mega!} pathname={pathname} />
          </motion.div>
        )}

        {hasChildren && !hasMega && open && (
          <motion.div
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
  return (
    <div className="relative w-[880px] xl:w-[960px] rounded-[28px] bg-scu-black/95 backdrop-blur-2xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] overflow-hidden ring-1 ring-white/10">
      <div aria-hidden className="absolute -top-24 -left-24 size-64 rounded-full bg-scu-yellow/10 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-32 -right-20 size-72 rounded-full bg-scu-yellow/5 blur-3xl pointer-events-none" />

      <div className="relative grid grid-cols-12">
        {/* Columns */}
        <div className="col-span-8 grid grid-cols-2 gap-x-6 p-8">
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
        <div className="col-span-4 relative bg-gradient-to-br from-scu-yellow/15 via-scu-yellow/5 to-transparent p-7 flex flex-col justify-between gap-6">
          <div aria-hidden className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div aria-hidden className="absolute top-0 right-0 size-32 rounded-full bg-scu-yellow/20 blur-2xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-scu-yellow text-scu-black px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.22em] mb-4 shadow-[0_8px_24px_-8px_rgba(255,240,1,0.6)]">
              <span className="size-1.5 rounded-full bg-scu-black animate-pulse" />
              15 Teams
            </div>
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
