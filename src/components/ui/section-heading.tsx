"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

/**
 * HighlightWord — wraps a word or phrase inside a heading with a
 * skewed yellow marker-pen effect. Use instead of
 * <span className="text-scu-yellow"> for light-background headings.
 *
 * Usage:
 *   <SectionHeading title={<>Gemeinsam an der <HighlightWord>Spitze</HighlightWord></>} />
 */
export function HighlightWord({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  /** "dark" = yellow bar under black text (light bg). "light" = solid yellow text (dark bg). */
  tone?: "dark" | "light";
}) {
  if (tone === "light") {
    return <span className="text-scu-yellow">{children}</span>;
  }
  return (
    <span className="relative inline-block text-scu-black">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-1 h-3 lg:h-4 bg-scu-yellow/70 -skew-x-6 -z-0"
      />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className={cn(
            "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-scu-yellow" : "text-scu-yellow",
          )}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={cn(
          "font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05]",
          "heading-gradient",
          tone === "light" && "heading-gradient--light",
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            tone === "dark" ? "text-scu-gray-500" : "text-white/70",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
