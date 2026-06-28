"use client";

import { Settings2 } from "lucide-react";

import { Select } from "@/components/ui/Select";
import {
  INDENT_OPTIONS,
  KEY_FOLDING_OPTIONS,
  DELIMITER_OPTIONS,
  FLATTEN_DEPTH_OPTIONS,
} from "@/config/converter";

import type {
  Delimiter,
  KeyFolding,
  ToonOptions,
} from "@/types";

interface Props {
  options: ToonOptions;
  setOption: <K extends keyof ToonOptions>(
    key: K,
    value: ToonOptions[K]
  ) => void;
}

const INF = "Infinity";

export function SettingsBar({
  options,
  setOption,
}: Props) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-neutral-200
        bg-white
        shadow-sm
        transition-colors

        dark:border-neutral-800
        dark:bg-neutral-900
      "
    >
      <header
        className="
          flex
          items-center
          gap-2
          border-b
          border-neutral-200
          px-5
          py-4

          dark:border-neutral-800
        "
      >
        <Settings2 className="h-4 w-4 text-brand-500" />

        <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Converter Settings
        </h2>
      </header>

      <div className="grid gap-5 p-5 sm:grid-cols-2 xl:grid-cols-4">
        <Select
          label="Indent Spaces"
          value={options.indent}
          onChange={(e) =>
            setOption("indent", Number(e.target.value))
          }
        >
          {INDENT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        <Select
          label="Key Folding"
          value={options.keyFolding}
          onChange={(e) =>
            setOption("keyFolding", e.target.value as KeyFolding)
          }
        >
          {KEY_FOLDING_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        <Select
          label="Delimiter"
          value={options.delimiter}
          onChange={(e) =>
            setOption("delimiter", e.target.value as Delimiter)
          }
        >
          {DELIMITER_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        <Select
          label="Flatten Depth"
          value={
            Number.isFinite(options.flattenDepth)
              ? options.flattenDepth
              : INF
          }
          disabled={options.keyFolding === "off"}
          onChange={(e) =>
            setOption(
              "flattenDepth",
              e.target.value === INF
                ? Infinity
                : Number(e.target.value)
            )
          }
        >
          {FLATTEN_DEPTH_OPTIONS.map((o) => (
            <option
              key={o.label}
              value={
                Number.isFinite(o.value)
                  ? o.value
                  : INF
              }
            >
              {o.label}
            </option>
          ))}
        </Select>
      </div>
    </section>
  );
}