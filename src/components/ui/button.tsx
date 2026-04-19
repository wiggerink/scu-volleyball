import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:ring-2 focus-visible:ring-scu-yellow focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-scu-yellow text-scu-black shadow-[0_12px_32px_-12px_rgba(255,240,1,0.7)] hover:bg-scu-yellow-dark hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(255,240,1,0.85)]",
        dark:
          "bg-scu-black text-scu-yellow hover:bg-scu-gray-900 hover:-translate-y-0.5",
        outline:
          "border-2 border-scu-black text-scu-black hover:bg-scu-black hover:text-scu-yellow",
        outlineLight:
          "border-2 border-white/80 text-white backdrop-blur hover:bg-scu-yellow hover:text-scu-black hover:border-scu-yellow",
        ghost:
          "text-scu-black hover:bg-scu-gray-100",
        link:
          "text-scu-black underline-offset-4 hover:underline decoration-scu-yellow decoration-2",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
