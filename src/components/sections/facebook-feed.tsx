import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, MessageCircle, MoreHorizontal, Send, Share2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacebookIcon } from "@/components/ui/social-icons";
import { fetchFacebookPosts, type FacebookPost } from "@/lib/facebook";
import { site } from "@/lib/site";

function formatRelative(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.round(diff / 3600000);
  if (hours < 1) return "gerade eben";
  if (hours < 24) return `vor ${hours} Std.`;
  const days = Math.round(hours / 24);
  if (days === 1) return "gestern";
  if (days < 7) return `vor ${days} Tagen`;
  if (days < 30) return `vor ${Math.round(days / 7)} Wochen`;
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
}

function formatCount(n?: number) {
  if (!n) return "0";
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

export async function FacebookFeed() {
  const posts = await fetchFacebookPosts(6);

  return (
    <section
      id="feed"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-scu-gray-100/40 to-white relative overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-scu-yellow/20 blur-[140px]"
      />

      <Container className="relative flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="@scuvolleyball.emlichheim"
            title={
              <>
                Direkt aus der{" "}
                <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-3 after:bg-scu-yellow after:-z-10">
                  <span className="relative">Vechtetalhalle</span>
                </span>
              </>
            }
            description="Spielberichte, Stories und Momente rund um den SCU Volleyball – live vom Spieltag, aus dem Training und dem Vereinsleben."
          />
          <Link
            href={site.social.facebook}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-scu-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-scu-yellow hover:text-scu-black transition self-start md:self-end shrink-0"
          >
            <FacebookIcon className="size-4" />
            Auf Facebook folgen
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Profile header */}
        <div className="relative rounded-3xl bg-white border border-scu-gray-200 p-5 sm:p-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.2)] overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-scu-yellow/40 via-scu-gold/30 to-scu-black/5"
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="relative shrink-0">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-scu-yellow via-scu-gold to-scu-yellow-dark">
                <div className="p-[2px] rounded-full bg-white">
                  <div className="relative size-20 rounded-full overflow-hidden bg-scu-black">
                    <Image
                      src="/scu-logo.png"
                      alt="SCU Emlichheim Volleyball"
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center size-7 rounded-full bg-[#1877F2] text-white ring-2 ring-white">
                <FacebookIcon className="size-3.5" />
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <div className="font-display text-xl sm:text-2xl font-black">SCU Emlichheim Volleyball</div>
                <span className="inline-flex items-center gap-1 rounded-full bg-scu-yellow/20 text-scu-black text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5">
                  Offiziell
                </span>
              </div>
              <div className="text-sm text-scu-gray-500 mt-0.5">@scuvolleyball.emlichheim · Sportverein</div>
              <div className="flex flex-wrap gap-5 text-sm text-scu-gray-500 mt-3">
                <span>
                  <strong className="text-scu-black font-bold">{posts.length}</strong> Beiträge
                </span>
                <span>
                  <strong className="text-scu-black font-bold">3.2k</strong> Gefällt mir
                </span>
                <span>
                  <strong className="text-scu-black font-bold">3.4k</strong> Abonnenten
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feed grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((post, idx) => (
            <PostCard key={post.id} post={post} priority={idx < 3} />
          ))}
        </div>

        <p className="text-xs text-scu-gray-500 text-center">
          Beiträge werden direkt aus dem offiziellen Facebook-Kanal geladen. Es werden keine Cookies auf deinem Gerät gesetzt.
        </p>
      </Container>
    </section>
  );
}

function PostCard({ post, priority }: { post: FacebookPost; priority?: boolean }) {
  const preview = post.message.split("\n")[0] ?? "";
  return (
    <article className="group relative flex flex-col rounded-3xl bg-white border border-scu-gray-200 overflow-hidden shadow-[0_12px_40px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_28px_60px_-20px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-300">
      {/* Post header */}
      <div className="flex items-center gap-3 p-4 pb-3">
        <div className="p-[2px] rounded-full bg-gradient-to-tr from-scu-yellow via-scu-gold to-scu-yellow-dark shrink-0">
          <div className="p-[1.5px] rounded-full bg-white">
            <div className="relative size-9 rounded-full overflow-hidden bg-scu-black">
              <Image
                src="/scu-logo.png"
                alt=""
                fill
                sizes="36px"
                className="object-contain p-1"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0 leading-tight">
          <div className="text-sm font-bold text-scu-black truncate">SCU Emlichheim Volleyball</div>
          <div className="text-[11px] text-scu-gray-500 flex items-center gap-1.5">
            <span>{formatRelative(post.createdTime)}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-0.5">
              <span className="inline-block size-2 rounded-full border border-scu-gray-500/60" aria-hidden />
              Öffentlich
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Beitragsoptionen"
          className="inline-flex items-center justify-center size-8 rounded-full text-scu-gray-500 hover:bg-scu-gray-100 transition"
        >
          <MoreHorizontal className="size-4" />
        </button>
      </div>

      {/* Caption */}
      {post.message && (
        <Link
          href={post.permalinkUrl}
          target="_blank"
          rel="noopener"
          className="px-4 pb-3 block"
        >
          <p className="text-sm text-scu-black/90 leading-relaxed line-clamp-3">
            {preview}
          </p>
        </Link>
      )}

      {/* Image */}
      {post.picture && (
        <Link
          href={post.permalinkUrl}
          target="_blank"
          rel="noopener"
          className="relative block aspect-[4/5] bg-scu-gray-100 overflow-hidden"
        >
          <Image
            src={post.picture}
            alt={preview.slice(0, 80) || "Facebook-Beitrag"}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover group-hover:scale-[1.03] transition duration-700"
            unoptimized={post.picture.startsWith("http")}
          />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-scu-black/70 backdrop-blur text-white text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
            <FacebookIcon className="size-3" />
            Post
          </div>
        </Link>
      )}

      {/* Reaction bar */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between text-xs text-scu-gray-500">
        <div className="flex items-center gap-1.5">
          <span className="relative flex -space-x-1">
            <span className="inline-flex items-center justify-center size-5 rounded-full bg-gradient-to-br from-rose-500 to-red-500 ring-2 ring-white">
              <Heart className="size-2.5 fill-white text-white" />
            </span>
            <span className="inline-flex items-center justify-center size-5 rounded-full bg-gradient-to-br from-scu-yellow to-scu-gold ring-2 ring-white text-[10px]">
              👏
            </span>
          </span>
          <span className="font-semibold text-scu-black">{formatCount(post.reactions)}</span>
        </div>
        <div className="flex items-center gap-3">
          {post.comments !== undefined && <span>{formatCount(post.comments)} Kommentare</span>}
          {post.shares !== undefined && <span>{formatCount(post.shares)} geteilt</span>}
        </div>
      </div>

      {/* Action row */}
      <div className="mx-4 mt-1 mb-4 grid grid-cols-3 border-t border-scu-gray-200 pt-2">
        <ActionButton icon={Heart} label="Gefällt mir" />
        <ActionButton icon={MessageCircle} label="Kommentar" />
        <ActionButton icon={Share2} label="Teilen" />
      </div>

      {/* Hover overlay CTA */}
      <Link
        href={post.permalinkUrl}
        target="_blank"
        rel="noopener"
        className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-scu-yellow text-scu-black text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 opacity-0 group-hover:opacity-100 transition shadow-lg"
        aria-label="Auf Facebook öffnen"
      >
        <Send className="size-3" />
        Ansehen
      </Link>
    </article>
  );
}

function ActionButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center gap-2 rounded-lg py-1.5 text-xs font-semibold text-scu-gray-500 hover:bg-scu-gray-100 hover:text-scu-black transition"
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}
