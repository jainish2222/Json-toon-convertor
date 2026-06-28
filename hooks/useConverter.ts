"use client";
import { useCallback, useMemo, useState } from "react";
import { jsonToToon } from "@/lib/toon/jsonToToon";
import { tokenSavings } from "@/lib/tokens/countTokens";
import { DEFAULT_OPTIONS, EXAMPLE_JSON } from "@/config/converter";
import { useDebounce } from "./useDebounce";
import type { ToonOptions } from "@/types";

export function useConverter() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<ToonOptions>(DEFAULT_OPTIONS);

  const debouncedInput = useDebounce(input, 200);
  const result = useMemo(() => jsonToToon(debouncedInput, options), [debouncedInput, options]);
  const output = result.ok ? result.toon : "";
  const stats = useMemo(() => tokenSavings(debouncedInput, output), [debouncedInput, output]);

  const setOption = useCallback(
    <K extends keyof ToonOptions>(key: K, value: ToonOptions[K]) =>
      setOptions((prev) => ({ ...prev, [key]: value })),
    [],
  );

  const loadExample = useCallback(() => setInput(EXAMPLE_JSON), []);
  const clear = useCallback(() => setInput(""), []);
  const reset = useCallback(() => setOptions(DEFAULT_OPTIONS), []);

  return {
    input, setInput, options, setOption, setOptions,
    result, output, stats,
    error: result.ok ? null : result.error,
    loadExample, clear, reset,
  };
}