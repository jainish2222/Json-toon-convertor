"use client";

import { useState, useCallback, useRef, type DragEvent } from "react";
import { FileJson, Copy, Trash2, Check, Upload } from "lucide-react";

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
  const [isDragOver, setIsDragOver] = useState(false);
  const dragCounter = useRef(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const readJsonFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === "string") {
          onChange(text);
        }
      };
      reader.readAsText(file);
    },
    [onChange],
  );

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    if (e.dataTransfer.types.includes("Files")) {
      setIsDragOver(true);
    }
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setIsDragOver(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      dragCounter.current = 0;

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        if (
          file.type === "application/json" ||
          file.name.endsWith(".json")
        ) {
          readJsonFile(file);
        }
      }
    },
    [readJsonFile],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        readJsonFile(file);
      }
      // Reset input so re-selecting the same file triggers change
      e.target.value = "";
    },
    [readJsonFile],
  );

  return (
    <EditorPanel
      title="JSON Input"
      icon={<FileJson className="h-4 w-4" />}
      tokens={tokens}
      actions={
        <>
          <IconButton
            label="Upload JSON file"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-4 w-4" />
          </IconButton>

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
      {/* Hidden file input for the upload button */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileSelect}
        className="hidden"
        aria-hidden="true"
      />

      {/* Drag-and-drop zone wrapping the textarea */}
      <div
        className="absolute inset-0"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
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

        {/* Drop overlay */}
        {isDragOver && (
          <div
            className="
              absolute
              inset-0
              z-10
              flex
              flex-col
              items-center
              justify-center
              gap-3

              rounded-b-2xl
              border-2
              border-dashed
              border-brand-400

              bg-brand-50/80

              backdrop-blur-sm

              transition-all
              duration-200

              dark:border-brand-500
              dark:bg-brand-900/60
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl

                bg-brand-100
                text-brand-600

                shadow-sm
                shadow-brand-200/50

                animate-bounce

                dark:bg-brand-800
                dark:text-brand-300
                dark:shadow-brand-900/50
              "
            >
              <Upload className="h-7 w-7" />
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">
                Drop your JSON file here
              </p>
              <p className="mt-0.5 text-xs text-brand-600/70 dark:text-brand-400/70">
                .json files only
              </p>
            </div>
          </div>
        )}
      </div>

      {error && value.trim() && (
        <div
          className="
            pointer-events-none
            absolute
            inset-x-4
            bottom-4
            z-20
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