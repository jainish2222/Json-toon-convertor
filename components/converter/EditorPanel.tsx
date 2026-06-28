"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface EditorPanelProps {
  title: string;
  icon: ReactNode;
  tokens: number;
  badge?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function EditorPanel({
  title,
  icon,
  tokens,
  badge,
  actions,
  children,
  className,
}: EditorPanelProps) {
  return (
    <section
      className={cn(
        "flex min-h-[460px] flex-col overflow-hidden rounded-2xl",
        "border border-neutral-200 bg-white shadow-sm",
        "transition-colors duration-200",

        // Dark Theme
        "dark:border-neutral-800 dark:bg-neutral-900",

        className
      )}
    >
      <header
        className={cn(
          "flex items-center justify-between gap-4",
          "border-b border-neutral-200 px-4 py-3",
          "dark:border-neutral-800"
        )}
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="shrink-0 text-brand-500">
            {icon}
          </span>

          <h2 className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {badge}

          <span
            className={cn(
              "rounded-full px-2.5 py-1",
              "bg-neutral-100 text-xs font-medium tabular-nums text-neutral-600",
              "dark:bg-neutral-800 dark:text-neutral-300"
            )}
          >
            {tokens.toLocaleString()} tokens
          </span>

          {actions}
        </div>
      </header>

      <div className="relative flex-1">
        {children}
      </div>
    </section>
  );
}