export type Delimiter = "," | "\t" | "|";
export type KeyFolding = "off" | "safe";

export interface ToonOptions {
  indent: number;
  delimiter: Delimiter;
  keyFolding: KeyFolding;
  flattenDepth: number; // Infinity = unlimited
}

export interface ConvertSuccess {
  ok: true;
  toon: string;
  error: null;
}
export interface ConvertFailure {
  ok: false;
  toon: "";
  error: string;
}
export type ConvertResult = ConvertSuccess | ConvertFailure;

export interface TokenStats {
  json: number;
  toon: number;
  savedPct: number; // positive = saved
}

export interface HistoryEntry {
  id: string;
  createdAt: number;
  input: string;
  output: string;
  options: ToonOptions;
}