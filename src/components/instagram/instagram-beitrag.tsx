import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, Copy, Heart, MessageCircle, Play, Send } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-icons";
import type { InstagramPost, InstagramProfil } from "@/lib/instagram";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/*
 * Bausteine in Instagram-Optik - genutzt auf der Startseite und der News-Seite.
 * Alle Zahlen kommen aus der Schnittstelle; fehlt ein Wert, fehlt die Zeile.
 */

const zahl = new Intl.NumberFormat("de-DE");

export function zeitAngabe(iso: string) {
  const tage = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (tage < 1) return "heute";
  if (tage === 1) return "gestern";
  if (tage < 7) return `vor ${tage} Tagen`;
  if (tage < 30) {
    const wochen = Math.round(tage / 7);
    return wochen === 1 ? "vor einer Woche" : `vor ${wochen} Wochen`;
  }
  return new Date(iso).toLocaleDateString("de-DE", { day: "numeric", month: "long" });
}

/** Der farbige Ring, den Instagram um Profilbilder legt. */
export function ProfilRing({ bild, groesse, alt }: { bild?: string; groesse: number; alt: string }) {
  return (
    <span
      className="inline-flex shrink-0 rounded-full bg-[conic-gradient(from_210deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5,#FEDA75)] p-[2px]"
      style={{ width: groesse, height: groesse }}
    >
      <span className="relative block size-full rounded-full bg-white p-[2px]">
        <Image
          src={bild ?? "/logos/scu-logo.png"}
          alt={alt}
          width={groesse}
          height={groesse}
          className="size-full rounded-full object-cover"
        />
      </span>
    </span>
  );
}

/** Kopf eines Instagram-Profils: Bild, Name, Zahlen, Folgen-Button. */
export function InstagramProfilStreifen({ profil }: { profil: InstagramProfil | null }) {
  const username = profil?.username ?? "scu.volleyball";
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-4 rounded-2xl bg-white p-4 ring-1 ring-scu-gray-200 sm:p-5">
      <ProfilRing bild={profil?.profilbild} groesse={64} alt={`Profilbild von @${username}`} />
      <div className="min-w-0 flex-1">
        <div className="text-base font-semibold text-scu-black">{username}</div>
        {profil?.name && <div className="text-sm text-scu-gray-500">{profil.name}</div>}
        {(profil?.beitraege !== undefined || profil?.follower !== undefined) && (
          <div className="mt-1 flex gap-4 text-sm text-scu-black">
            {profil?.beitraege !== undefined && (
              <span>
                <strong className="font-semibold">{zahl.format(profil.beitraege)}</strong> Beiträge
              </span>
            )}
            {profil?.follower !== undefined && (
              <span>
                <strong className="font-semibold">{zahl.format(profil.follower)}</strong> Follower
              </span>
            )}
          </div>
        )}
      </div>
      <Link
        href={site.social.instagram}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-lg bg-[#0095F6] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1877F2]"
      >
        Folgen
        <ArrowUpRight className="size-4" />
      </Link>
    </div>
  );
}

type BeitragProps = {
  post: InstagramPost;
  username: string;
  profilbild?: string;
  /** Wie viele Zeilen Bildtext sichtbar sind. */
  textZeilen?: 2 | 4;
  /** Bild mit hoher Priorität laden (oberhalb des Falzes). */
  prioritaet?: boolean;
};

/** Ein Beitrag als Karte wie im Instagram-Feed. Die ganze Karte verlinkt auf Instagram. */
export function InstagramBeitrag({ post, username, profilbild, textZeilen = 2, prioritaet }: BeitragProps) {
  const istVideo = post.mediaType === "VIDEO";
  const istKarussell = post.mediaType === "CAROUSEL_ALBUM";
  const vorschau = post.caption.split("\n").find((z) => z.trim()) ?? "";

  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener"
      aria-label={`Beitrag auf Instagram ansehen: ${vorschau.slice(0, 80) || zeitAngabe(post.timestamp)}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-scu-gray-200 transition hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.3)] hover:ring-scu-gray-300"
    >
      {/* Kopfzeile wie im Feed */}
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <ProfilRing bild={profilbild} groesse={34} alt="" />
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[13px] font-semibold text-scu-black">{username}</div>
          <div className="text-[11px] text-scu-gray-500">{zeitAngabe(post.timestamp)}</div>
        </div>
        <InstagramIcon className="size-4 text-scu-black/70" />
      </div>

      {/* Bild im Instagram-Hochformat 4:5 - nichts wird abgeschnitten */}
      <div className="relative aspect-[4/5] overflow-hidden bg-scu-gray-100">
        <Image
          src={post.mediaUrl}
          alt={vorschau.slice(0, 120) || "Instagram-Beitrag des SCU Emlichheim"}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
          priority={prioritaet}
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        {(istVideo || istKarussell) && (
          <span className="absolute right-3 top-3 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
            {istVideo ? <Play className="size-5 fill-white" /> : <Copy className="size-5" />}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-3 pb-3.5 pt-2.5">
        {/* Aktionsleiste - nur Optik */}
        <div aria-hidden className="flex items-center gap-3.5 text-scu-black">
          <Heart className="size-[22px] transition group-hover:fill-[#FF3040] group-hover:text-[#FF3040]" />
          <MessageCircle className="size-[22px] -scale-x-100" />
          <Send className="size-[21px]" />
          {istKarussell && (
            <span className="mx-auto flex items-center gap-1">
              {Array.from({ length: Math.min(post.anzahlMedien, 5) }, (_, i) => (
                <span
                  key={i}
                  className={cn("size-1.5 rounded-full", i === 0 ? "bg-[#0095F6]" : "bg-scu-gray-300")}
                />
              ))}
            </span>
          )}
          <Bookmark className="ml-auto size-[22px]" />
        </div>

        {post.likeCount !== undefined && (
          <div className="text-[13px] font-semibold text-scu-black">Gefällt {zahl.format(post.likeCount)} Mal</div>
        )}

        {post.caption && (
          <p
            className={cn(
              "whitespace-pre-line text-[13px] leading-snug text-scu-black",
              textZeilen === 4 ? "line-clamp-4" : "line-clamp-2",
            )}
          >
            <span className="font-semibold">{username}</span> {post.caption}
          </p>
        )}

        {!!post.commentsCount && (
          <div className="text-[13px] text-scu-gray-500">
            {post.commentsCount === 1 ? "1 Kommentar ansehen" : `Alle ${post.commentsCount} Kommentare ansehen`}
          </div>
        )}
      </div>
    </Link>
  );
}
