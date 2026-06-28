"use client";

import {
  FileText,
  Copy,
  Download,
  Check,
} from "lucide-react";

import { EditorPanel } from "./EditorPanel";
import { IconButton } from "@/components/ui/IconButton";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { downloadText } from "@/lib/utils/clipboard";

interface Props {
  value: string;
  tokens: number;
  savedPct: number;
}

export function ToonOutputPanel({
  value,
  tokens,
  savedPct,
}: Props) {
  const { copied, copy } = useCopyToClipboard();

  const hasOutput = value.trim().length > 0;
  const showSaved = hasOutput && savedPct > 0;

  return (
    <EditorPanel
      title="TOON Output"
      icon={<FileText className="h-4 w-4" />}
      tokens={tokens}
      badge={
        showSaved ? (
          <span
            className="
              rounded-full
              border
              border-brand-200
              bg-brand-50
              px-2.5
              py-1
              text-xs
              font-medium
              text-brand-700

              dark:border-brand-900
              dark:bg-brand-950/50
              dark:text-brand-300
            "
          >
            ↓ {savedPct}% smaller
          </span>
        ) : null
      }
      actions={
        <>
          <IconButton
            label={copied ? "Copied" : "Copy TOON"}
            onClick={() => copy(value)}
            disabled={!hasOutput}
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </IconButton>

          <IconButton
            label="Download .toon"
            onClick={() =>
              downloadText("output.toon", value)
            }
            disabled={!hasOutput}
          >
            <Download className="h-4 w-4" />
          </IconButton>
        </>
      }
    >
      {hasOutput ? (
        <pre
          className="
            scrollbar-thin
            absolute
            inset-0

            overflow-auto

            p-4

            font-mono
            text-sm
            leading-relaxed

            whitespace-pre-wrap
            break-all

            text-neutral-800

            dark:text-neutral-100
          "
        >
          {value}
        </pre>
      ) : (
        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center

            p-6
            text-center
          "
        >
          <div>
            <FileText className="mx-auto mb-3 h-8 w-8 text-neutral-300 dark:text-neutral-700" />

            <p className="font-medium text-neutral-500 dark:text-neutral-400">
              No output yet
            </p>

            <p className="mt-1 text-sm text-neutral-400 dark:text-neutral-500">
              Convert your JSON to generate TOON output.
            </p>
          </div>
        </div>
      )}
    </EditorPanel>
  );
}