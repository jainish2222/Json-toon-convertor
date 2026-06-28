"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, label, children, ...props }, ref) => (
    <button
      ref={ref}
      type={props.type ?? "button"}
      aria-label={label}
      title={label}
      className={cn(
        `
        inline-flex
        h-9
        w-9
        items-center
        justify-center

        rounded-xl

        text-neutral-500

        transition-all
        duration-200

        hover:bg-neutral-100
        hover:text-neutral-900

        active:scale-95

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand-500/20

        disabled:pointer-events-none
        disabled:opacity-40

        dark:text-neutral-400
        dark:hover:bg-neutral-800
        dark:hover:text-neutral-100
        dark:focus-visible:ring-brand-400/20
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

IconButton.displayName = "IconButton";