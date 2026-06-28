export interface JsonParseResult {
  ok: boolean;
  data?: unknown;
  error?: string;
}

export function validateJson(input: string): JsonParseResult {
  const trimmed = input.trim();
  if (!trimmed) return { ok: false, error: "Paste some JSON to get started." };
  try {
    return { ok: true, data: JSON.parse(trimmed) };
  } catch (err) {
    return {
      ok: false,
      error:
        err instanceof Error
          ? err.message.replace(/^JSON\.parse:\s*/, "")
          : "That doesn't look like valid JSON.",
    };
  }
}