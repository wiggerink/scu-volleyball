import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { InstagramBeitrag, InstagramProfilStreifen } from "@/components/instagram/instagram-beitrag";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { fetchInstagramPosts, fetchInstagramProfil } from "@/lib/instagram";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Spielberichte",
  description:
    "Die neuesten Beiträge des SCU Emlichheim: Spieltage, Teamvorstellungen, Jugend und Vereinsleben – direkt aus unserem Instagram-Kanal.",
  alternates: { canonical: "/news" },
};

/*
 * Die News kommen aus dem Instagram-Kanal - dort veröffentlicht der Verein
 * seine Meldungen. Früher standen hier Beispielartikel ohne echte Grundlage.
 */
export default async function NewsPage() {
  const [posts, profil] = await Promise.all([fetchInstagramPosts(12), fetchInstagramProfil()]);
  const username = profil?.username ?? "scu.volleyball";

  return (
    <>
      <PageHero
        eyebrow="News & Stories"
        title="Aktuelles aus Emlichheim"
        description="Spieltage, Teamvorstellungen, Jugend und Vereinsleben – die neuesten Beiträge aus unserem Instagram-Kanal."
        imageUrl="/hero/hero-main.jpg"
      />

      <section className="bg-gradient-to-b from-white via-scu-gray-100/40 to-white py-16 lg:py-20">
        <Container className="flex flex-col gap-8">
          <InstagramProfilStreifen profil={profil} />

          {posts.length > 0 ? (
            <ul className="mx-auto grid w-full max-w-md grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <li key={post.id}>
                  <InstagramBeitrag
                    post={post}
                    username={username}
                    profilbild={profil?.profilbild}
                    textZeilen={4}
                    prioritaet={i < 3}
                  />
                </li>
              ))}
            </ul>
          ) : (
            // Schnittstelle nicht erreichbar oder nicht eingerichtet: auf die Kanäle verweisen
            <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-scu-gray-200">
              <p className="text-scu-black">Die neuesten Beiträge findest du direkt auf unseren Kanälen.</p>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="dark">
              <Link href={site.social.instagram} target="_blank" rel="noopener">
                <InstagramIcon className="size-4" /> Alle Beiträge auf Instagram <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={site.social.facebook} target="_blank" rel="noopener">
                <FacebookIcon className="size-4" /> Facebook
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
