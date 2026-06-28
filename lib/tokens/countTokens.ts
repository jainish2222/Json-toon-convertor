export function estimateTokens(text: string): number {
  if (!text) return 0;
  const matches = text.match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g);
  if (!matches) return 0;
  let tokens = 0;
  for (const m of matches) {
    tokens += /^[A-Za-z0-9_]+$/.test(m) ? Math.max(1, Math.ceil(m.length / 4)) : 1;
  }
  return tokens;
}

export function tokenSavings(json: string, toon: string) {
  const j = estimateTokens(json);
  const t = estimateTokens(toon);
  const savedPct = j === 0 ? 0 : Math.round(((j - t) / j) * 100);
  return { json: j, toon: t, savedPct };
}