import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full font-semibold tracking-[0.14em] uppercase",
  {
    variants: {
      variant: {
        yellow: "bg-scu-yellow text-scu-black",
        black: "bg-scu-black text-scu-yellow",
        outline: "border border-scu-black/80 text-scu-black",
        ghost: "bg-scu-gray-100 text-scu-black",
        light: "bg-white/90 text-scu-black backdrop-blur",
        gold: "bg-scu-gold text-scu-black",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: { variant: "yellow", size: "sm" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}
