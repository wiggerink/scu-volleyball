"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Ticket, Radio } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-scu-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-scu-black/70 via-scu-black/40 to-transparent",
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            "hidden md:block text-white/80 text-xs transition-all duration-300 overflow-hidden",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100 border-b border-white/10",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-scu-yellow text-scu-black px-2.5 py-0.5 font-semibold uppercase tracking-widest">
                2. Bundesliga Pro · Damen
              </span>
              <span className="text-white/60">Saison {site.season}</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href={site.social.facebook} target="_blank" aria-label="Facebook" className="hover:text-scu-yellow transition"><FacebookIcon className="size-3.5" /></Link>
              <Link href={site.social.instagram} target="_blank" aria-label="Instagram" className="hover:text-scu-yellow transition"><InstagramIcon className="size-3.5" /></Link>
              <Link href={site.social.youtube} target="_blank" aria-label="YouTube" className="hover:text-scu-yellow transition"><YoutubeIcon className="size-3.5" /></Link>
              <span className="h-3 w-px bg-white/20" />
              <Link href={`mailto:${site.contact.email}`} className="hover:text-scu-yellow transition">
                {site.contact.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <motion.header>
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8 py-3">
            <Link href="/" aria-label="SCU Emlichheim Volleyball - Startseite" className="group">
              <div className="relative size-20 lg:size-24 shrink-0 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
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

            <nav className="hidden lg:flex items-center gap-1">
              {site.nav.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Button asChild variant="outlineLight" size="sm">
                <Link href="/teams/1-mannschaft#tickets">
                  <Ticket className="size-3.5" />
                  Tickets
                </Link>
              </Button>
              <Button asChild variant="primary" size="sm">
                <Link href="/teams/1-mannschaft#live">
                  <Radio className="size-3.5" />
                  Livestream
                </Link>
              </Button>
            </div>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-full border border-white/20 bg-scu-black/40 backdrop-blur text-white size-11 shadow-sm"
              aria-label="Menü öffnen"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </motion.header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-scu-black text-white p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <div className="relative size-10 rounded-xl bg-scu-black border border-white/10 p-1.5">
                    <Image src="/logos/scu-logo.png" alt="SCU" fill className="object-contain p-1" />
                  </div>
                  <span className="font-display font-black">SCU Volleyball</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} aria-label="Menü schließen" className="rounded-full size-11 inline-flex items-center justify-center border border-white/15">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 rounded-xl text-lg font-semibold hover:bg-white/5 transition flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronDown className="size-4 -rotate-90 opacity-40" />
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/teams/1-mannschaft#tickets" onClick={() => setMobileOpen(false)}>
                    <Ticket className="size-4" /> Tickets sichern
                  </Link>
                </Button>
                <div className="flex items-center gap-4 pt-4 text-white/60 justify-center">
                  <Link href={site.social.facebook} target="_blank" aria-label="Facebook"><FacebookIcon className="size-5" /></Link>
                  <Link href={site.social.instagram} target="_blank" aria-label="Instagram"><InstagramIcon className="size-5" /></Link>
                  <Link href={site.social.youtube} target="_blank" aria-label="YouTube"><YoutubeIcon className="size-5" /></Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavItem({ item }: { item: (typeof site.nav)[number] }) {
  const hasChildren = "children" in item && item.children;
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold text-white/85 hover:text-scu-yellow transition"
      >
        {item.label}
        {hasChildren && <ChevronDown className="size-3.5 opacity-60" />}
      </Link>
      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-3"
          >
            <div className="min-w-56 rounded-2xl border border-white/10 bg-scu-black/95 backdrop-blur-xl p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              {item.children!.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-scu-yellow"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
