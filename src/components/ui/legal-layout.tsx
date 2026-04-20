import * as React from "react";
import { Container } from "@/components/ui/container";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ title, children }: SectionProps) {
  return (
    <section className="relative pl-6 lg:pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-full before:bg-scu-yellow/80">
      <h2 className="font-display text-xl lg:text-2xl font-black text-scu-black leading-tight mb-3">
        {title}
      </h2>
      <div className="text-scu-gray-500 leading-relaxed text-[15px] space-y-3 [&_strong]:text-scu-black [&_a]:text-scu-black [&_a]:font-semibold [&_a]:underline [&_a]:decoration-scu-yellow [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:text-scu-yellow-dark">
        {children}
      </div>
    </section>
  );
}

export function LegalLayout({
  intro,
  children,
}: {
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container className="max-w-3xl">
        {intro && (
          <div className="mb-12 text-lg text-scu-gray-500 leading-relaxed border-l-2 border-scu-yellow/40 pl-5 italic">
            {intro}
          </div>
        )}
        <div className="flex flex-col gap-10">{children}</div>
      </Container>
    </section>
  );
}
