import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/lib/news";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: { images: [{ url: item.image }] },
  };
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <article>
      <div className="relative h-[50vh] min-h-[380px] bg-scu-black">
        <Image src={item.image} alt={item.title} fill priority sizes="100vw" className="object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-scu-black via-scu-black/50 to-transparent" />
        <Container className="relative h-full flex flex-col justify-end pb-10 text-white">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            {item.badge && <Badge variant="yellow">{item.badge}</Badge>}
            <Badge variant="light">{item.category}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80">
              <Clock className="size-3" />
              {new Date(item.date).toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-black leading-[1.02] max-w-4xl">{item.title}</h1>
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container className="max-w-3xl">
          <p className="text-xl text-scu-gray-700 leading-relaxed mb-6 font-medium">{item.excerpt}</p>
          {item.content && <div className="prose prose-lg">{item.content}</div>}
          <Button asChild variant="outline" className="mt-10">
            <Link href="/news"><ArrowLeft className="size-4" /> Alle News</Link>
          </Button>
        </Container>
      </section>
    </article>
  );
}
