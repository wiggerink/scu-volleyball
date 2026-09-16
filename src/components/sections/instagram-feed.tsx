import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { InstagramBeitrag, InstagramProfilStreifen } from "@/components/instagram/instagram-beitrag";
import { fetchInstagramPosts, fetchInstagramProfil } from "@/lib/instagram";

export async function InstagramFeed() {
  const [posts, profil] = await Promise.all([fetchInstagramPosts(6), fetchInstagramProfil()]);
  // Ohne echte Beiträge kein Abschnitt - keine Platzhalter, die wie echte aussehen
  if (!posts.length) return null;

  const username = profil?.username ?? "scu.volleyball";

  return (
    <section id="instagram" className="relative overflow-hidden bg-gradient-to-b from-white via-scu-gray-100/40 to-white py-20 lg:py-28">
      <Container className="relative flex flex-col gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Instagram"
            title={
              <>
                Direkt aus der{" "}
                <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:right-0 after:-z-10 after:h-3 after:bg-scu-yellow after:content-['']">
                  <span className="relative">Vechtetalhalle</span>
                </span>
              </>
            }
            description="Spieltage, Training und Vereinsleben – die neuesten Beiträge aus unserem Instagram-Kanal."
          />
          <Link
            href="/news"
            className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-scu-black underline decoration-scu-yellow decoration-2 underline-offset-4 md:self-end"
          >
            Alle News
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <InstagramProfilStreifen profil={profil} />

        {/* Mobil wischbar wie ein Feed, ab Tablet als Raster */}
        <ul className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id} className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-auto">
              <InstagramBeitrag post={post} username={username} profilbild={profil?.profilbild} />
            </li>
          ))}
        </ul>

        <p className="text-center text-xs text-scu-gray-500">
          Beiträge aus dem offiziellen Instagram-Kanal. Bilder werden über unseren Server ausgeliefert – dein Browser
          nimmt dafür keinen Kontakt zu Instagram auf.
        </p>
      </Container>
    </section>
  );
}
