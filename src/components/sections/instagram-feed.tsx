import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstagramIcon } from "@/components/ui/social-icons";
import { fetchInstagramPosts } from "@/lib/instagram";
import { site } from "@/lib/site";

function formatRelative(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.round(diff / 86400000);
  if (days < 1) return "heute";
  if (days === 1) return "gestern";
  if (days < 7) return `vor ${days} Tagen`;
  if (days < 30) return `vor ${Math.round(days / 7)} Wochen`;
  return new Date(iso).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" });
}

export async function InstagramFeed() {
  const posts = await fetchInstagramPosts(6);

  return (
    <section id="instagram" className="py-20 lg:py-28 bg-gradient-to-b from-white via-scu-gray-100/40 to-white relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-30" />

      <Container className="relative flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="@scu.volleyball"
            title={
              <>
                Direkt aus der{" "}
                <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-3 after:bg-scu-yellow after:-z-10">
                  <span className="relative">Vechtetalhalle</span>
                </span>
              </>
            }
            description="Bilder, Storys und Stimmen rund um den SCU Volleyball – live von Spieltagen, Trainings und aus dem Vereinsleben."
          />
          <Link
            href={site.social.instagram}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 rounded-full bg-scu-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-scu-yellow hover:text-scu-black transition self-start md:self-end shrink-0"
          >
            <InstagramIcon className="size-4" />
            Auf Instagram folgen
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {posts.map((post) => {
            const isVideo = post.mediaType === "VIDEO";
            const isCarousel = post.mediaType === "CAROUSEL_ALBUM";
            const src = isVideo && post.thumbnailUrl ? post.thumbnailUrl : post.mediaUrl;

            return (
              <Link
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-scu-gray-100 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.25)] transition-all"
              >
                <Image
                  src={src}
                  alt={post.caption.slice(0, 80) || "Instagram-Beitrag"}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                  unoptimized={src.startsWith("http")}
                />
                <div className="absolute top-2 right-2 flex gap-1.5">
                  {isVideo && (
                    <span className="inline-flex items-center justify-center size-7 rounded-full bg-scu-black/70 backdrop-blur text-white">
                      <Play className="size-3.5 fill-white" />
                    </span>
                  )}
                  {isCarousel && (
                    <span className="inline-flex items-center justify-center size-7 rounded-full bg-scu-black/70 backdrop-blur text-white text-[10px] font-bold">
                      ◼◻
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-scu-black/90 via-scu-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white text-[12px] leading-snug line-clamp-4">
                    {post.caption || "Beitrag ansehen"}
                  </p>
                  <div className="flex items-center justify-between mt-2 text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">
                    <span className="inline-flex items-center gap-1">
                      <Heart className="size-3 fill-scu-yellow text-scu-yellow" />
                      Auf Insta
                    </span>
                    <span>{formatRelative(post.timestamp)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-xs text-scu-gray-500 text-center">
          Beiträge werden direkt aus dem offiziellen Instagram-Kanal geladen. Keine Cookies werden auf deinem Gerät gesetzt.
        </p>
      </Container>
    </section>
  );
}
