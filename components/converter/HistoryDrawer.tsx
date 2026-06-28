"use client";

import { cn } from "@/lib/utils/cn";
import { IconButton } from "@/components/ui/IconButton";
import { Button } from "@/components/ui/Button";
import { X, Clock, Trash2 } from "lucide-react";
import type { HistoryEntry } from "@/types";

interface Props {
  open: boolean;
  entries: HistoryEntry[];
  onClose: () => void;
  onRestore: (entry: HistoryEntry) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function HistoryDrawer({
  open,
  entries,
  onClose,
  onRestore,
  onRemove,
  onClear,
}: Props) {
  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      <aside
        role="dialog"
        aria-label="Conversion history"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col",
          "border-l border-neutral-200 bg-white shadow-2xl",
          "transition-transform duration-300 ease-out",
          "dark:border-neutral-800 dark:bg-neutral-950",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-500" />
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">
              History
            </h2>
          </div>

          <IconButton label="Close history" onClick={onClose}>
            <X className="h-4 w-4" />
          </IconButton>
        </header>

        {/* Content */}
        <div className="scrollbar-thin flex-1 overflow-auto p-3">
          {entries.length === 0 ? (
            <div className="mt-16 text-center">
              <Clock className="mx-auto mb-3 h-8 w-8 text-neutral-300 dark:text-neutral-700" />

              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                No conversions yet.
              </p>

              <p className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">
                Recent JSON → TOON conversions will appear here.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-2">
              {entries.map((entry) => (
                <li key={entry.id} className="group relative">
                  <button
                    onClick={() => onRestore(entry)}
                    className={cn(
                      "w-full rounded-xl border p-3 pr-11 text-left",
                      "transition-all duration-200",
                      "border-neutral-200 bg-white",
                      "hover:border-brand-300 hover:bg-brand-50/40",
                      "dark:border-neutral-800 dark:bg-neutral-900",
                      "dark:hover:border-brand-500/50 dark:hover:bg-brand-500/10"
                    )}
                  >
                    <time className="block text-xs text-neutral-400 dark:text-neutral-500">
                      {new Date(entry.createdAt).toLocaleString()}
                    </time>

                    <span className="mt-2 block line-clamp-2 whitespace-pre-wrap break-all font-mono text-xs text-neutral-600 dark:text-neutral-300">
                      {entry.input.slice(0, 120)}
                    </span>
                  </button>

                  <IconButton
                    label="Delete entry"
                    onClick={() => onRemove(entry.id)}
                    className={cn(
                      "absolute right-2 top-2",
                      "opacity-100 md:opacity-0",
                      "transition-opacity",
                      "md:group-hover:opacity-100"
                    )}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </IconButton>
                </li>
              ))}
            </ul>
          )}
        </div>

        {entries.length > 0 && (
          <footer className="border-t border-neutral-200 p-3 dark:border-neutral-800">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "w-full text-red-500",
                "hover:bg-red-50",
                "dark:hover:bg-red-950/40"
              )}
              onClick={onClear}
            >
              <Trash2 className="h-4 w-4" />
              Clear all history
            </Button>
          </footer>
        )}
      </aside>
    </>
  );
}