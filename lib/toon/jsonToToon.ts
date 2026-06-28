import { encode } from "@toon-format/toon";
import { validateJson } from "./validateJson";
import type { ConvertResult, ToonOptions } from "@/types";

export function jsonToToon(input: string, options: ToonOptions): ConvertResult {
  const parsed = validateJson(input);
  if (!parsed.ok) {
    return { ok: false, toon: "", error: parsed.error ?? "Invalid JSON." };
  }
  try {
    const toon = encode(parsed.data, {
      indent: options.indent,
      delimiter: options.delimiter,
      keyFolding: options.keyFolding,
      flattenDepth: options.flattenDepth,
    });
    return { ok: true, toon, error: null };
  } catch (err) {
    return {
      ok: false,
      toon: "",
      error: err instanceof Error ? err.message : "Failed to encode TOON.",
    };
  }
}