"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: `
    bg-gradient-to-b
    from-brand-400
    to-brand-500

    text-white

    shadow-sm

    hover:from-brand-500
    hover:to-brand-600

    active:scale-[0.98]

    focus-visible:ring-brand-500/30
  `,

  secondary: `
    border

    border-neutral-200
    bg-white
    text-neutral-900

    shadow-sm

    hover:bg-neutral-50
    hover:border-neutral-300

    active:scale-[0.98]

    focus-visible:ring-neutral-300

    dark:border-neutral-700
    dark:bg-neutral-900
    dark:text-neutral-100

    dark:hover:border-neutral-600
    dark:hover:bg-neutral-800

    dark:focus-visible:ring-neutral-600
  `,

  ghost: `
    text-neutral-600

    hover:bg-neutral-100
    hover:text-neutral-900

    active:scale-[0.98]

    focus-visible:ring-neutral-300

    dark:text-neutral-300
    dark:hover:bg-neutral-800
    dark:hover:text-white

    dark:focus-visible:ring-neutral-600
  `,
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-xs gap-1.5",
  md: "h-11 px-4 text-sm gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "secondary",
      size = "md",
      type,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      type={type ?? "button"}
      className={cn(
        `
        inline-flex
        items-center
        justify-center

        rounded-xl

        font-medium

        whitespace-nowrap

        transition-all
        duration-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2

        ring-offset-white
        dark:ring-offset-neutral-950

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";