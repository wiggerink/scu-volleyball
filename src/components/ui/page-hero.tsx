"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, imageUrl, className, children }: Props) {
  return (
    <section className={cn("relative bg-scu-black text-white overflow-hidden", className)}>
      {imageUrl && (
        <div aria-hidden className="absolute inset-0">
          <div
            style={{ backgroundImage: `url(${imageUrl})` }}
            className="w-full h-full bg-cover bg-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-scu-black/70 via-scu-black/60 to-scu-black" />
        </div>
      )}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
      <div aria-hidden className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-scu-yellow/25 blur-3xl" />

      <Container className="relative pt-44 sm:pt-48 lg:pt-56 pb-20 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 max-w-3xl"
        >
          {eyebrow && <Badge variant="yellow" className="w-fit">{eyebrow}</Badge>}
          <h1 className="font-display text-5xl lg:text-7xl font-black leading-[1]">{title}</h1>
          {description && <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{description}</p>}
          {children && <div className="pt-2">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
