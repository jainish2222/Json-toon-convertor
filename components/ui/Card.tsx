import { cn } from "@/lib/utils/cn";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        `
        rounded-2xl
        border

        border-neutral-200
        bg-white

        shadow-sm

        transition-colors
        duration-200

        dark:border-neutral-800
        dark:bg-neutral-900
        `,
        className
      )}
      {...props}
    />
  );
}