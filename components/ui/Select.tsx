"use client";

import { cn } from "@/lib/utils/cn";
import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export function Select({
  label,
  className,
  id,
  children,
  ...props
}: SelectProps) {
  const selectId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={selectId}
        className="
          text-xs
          font-semibold
          uppercase
          tracking-wide
          text-neutral-500
          dark:text-neutral-400
        "
      >
        {label}
      </label>

      <div className="group relative">
        <select
          id={selectId}
          className={cn(
            `
            h-11
            w-full
            appearance-none

            rounded-xl
            border

            border-neutral-200
            bg-white

            px-3
            pr-10

            text-sm
            text-neutral-900

            shadow-sm
            transition-all
            duration-200

            hover:border-neutral-300

            focus:border-brand-500
            focus:outline-none
            focus:ring-2
            focus:ring-brand-500/20

            disabled:cursor-not-allowed
            disabled:opacity-60
            disabled:hover:border-neutral-200

            dark:border-neutral-700
            dark:bg-neutral-950
            dark:text-neutral-100

            dark:hover:border-neutral-600

            dark:focus:border-brand-400
            dark:focus:ring-brand-400/20

            dark:disabled:border-neutral-800
            dark:disabled:bg-neutral-900
            `,
            className
          )}
          {...props}
        >
          {children}
        </select>

        <ChevronDown
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2

            text-neutral-400
            transition-colors

            group-hover:text-neutral-600
            group-focus-within:text-brand-500

            dark:text-neutral-500
            dark:group-hover:text-neutral-300
            dark:group-focus-within:text-brand-400
          "
        />
      </div>
    </div>
  );
}