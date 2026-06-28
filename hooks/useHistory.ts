"use client";
import { useCallback, useEffect, useState } from "react";
import type { HistoryEntry, ToonOptions } from "@/types";

const KEY = "json-toon:history";
const MAX = 25;
const INF_SENTINEL = -1;

function toStorable(o: ToonOptions): ToonOptions {
  return { ...o, flattenDepth: Number.isFinite(o.flattenDepth) ? o.flattenDepth : INF_SENTINEL };
}
function fromStorable(o: ToonOptions): ToonOptions {
  return { ...o, flattenDepth: o.flattenDepth === INF_SENTINEL ? Infinity : o.flattenDepth };
}

export function useHistory() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed: HistoryEntry[] = JSON.parse(raw);
        setEntries(parsed.map((e) => ({ ...e, options: fromStorable(e.options) })));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const save = useCallback((next: HistoryEntry[]) => {
    setEntries(next);
    try {
      const storable = next.map((e) => ({ ...e, options: toStorable(e.options) }));
      localStorage.setItem(KEY, JSON.stringify(storable));
    } catch {
      /* ignore */
    }
  }, []);

  const add = useCallback(
    (input: string, output: string, options: ToonOptions) => {
      if (!input.trim() || !output.trim()) return;
      const entry: HistoryEntry = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
        input,
        output,
        options,
      };
      setEntries((prev) => {
        const next = [entry, ...prev.filter((e) => e.input !== input)].slice(0, MAX);
        try {
          const storable = next.map((e) => ({ ...e, options: toStorable(e.options) }));
          localStorage.setItem(KEY, JSON.stringify(storable));
        } catch {
          /* ignore */
        }
        return next;
      });
    },
    [],
  );

  const remove = useCallback(
    (id: string) => save(entries.filter((e) => e.id !== id)),
    [entries, save],
  );
  const clear = useCallback(() => save([]), [save]);

  return { entries, add, remove, clear };
}