"use client";

import { FileJson, Copy, Trash2, Check } from "lucide-react";

import { EditorPanel } from "./EditorPanel";
import { IconButton } from "@/components/ui/IconButton";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { EXAMPLE_PLACEHOLDER } from "@/config/converter";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  tokens: number;
  error: string | null;
}

export function JsonInputPanel({
  value,
  onChange,
  onClear,
  tokens,
  error,
}: Props) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <EditorPanel
      title="JSON Input"
      icon={<FileJson className="h-4 w-4" />}
      tokens={tokens}
      actions={
        <>
          <IconButton
            label={copied ? "Copied" : "Copy JSON"}
            onClick={() => copy(value)}
            disabled={!value}
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </IconButton>

          <IconButton
            label="Clear input"
            onClick={onClear}
            disabled={!value}
          >
            <Trash2 className="h-4 w-4" />
          </IconButton>
        </>
      }
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder={EXAMPLE_PLACEHOLDER}
        className="
          scrollbar-thin
          absolute
          inset-0
          h-full
          w-full
          resize-none
          bg-transparent
          p-4
          font-mono
          text-sm
          leading-relaxed

          text-neutral-800
          placeholder:text-neutral-400

          outline-none

          transition-colors

          dark:text-neutral-100
          dark:placeholder:text-neutral-600
        "
      />

      {error && value.trim() && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-4
            bottom-4
            rounded-lg
            border

            border-red-200
            bg-red-50/90
            px-3
            py-2

            text-xs
            font-medium
            text-red-700

            backdrop-blur

            dark:border-red-900
            dark:bg-red-950/70
            dark:text-red-300
          "
        >
          {error}
        </div>
      )}
    </EditorPanel>
  );
}