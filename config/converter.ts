import type { Delimiter, KeyFolding, ToonOptions } from "@/types";

export const DEFAULT_OPTIONS: ToonOptions = {
  indent: 2,
  delimiter: ",",
  keyFolding: "off",
  flattenDepth: Infinity,
};

export const INDENT_OPTIONS = [
  { label: "2 spaces", value: 2 },
  { label: "4 spaces", value: 4 },
] as const;

export const KEY_FOLDING_OPTIONS: { label: string; value: KeyFolding }[] = [
  { label: "Disabled", value: "off" },
  { label: "Safe", value: "safe" },
];

export const DELIMITER_OPTIONS: { label: string; value: Delimiter }[] = [
  { label: "Comma (,)", value: "," },
  { label: "Tab (\\t)", value: "\t" },
  { label: "Pipe (|)", value: "|" },
];

export const FLATTEN_DEPTH_OPTIONS = [
  { label: "Infinity", value: Infinity },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "5", value: 5 },
] as const;

export const EXAMPLE_JSON = `{
  "users": [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" },
    { "id": 3, "name": "Carol", "role": "editor" }
  ],
  "count": 3
}`;

export const EXAMPLE_PLACEHOLDER = `Paste your JSON here...

Example:
{
  "name": "Alice",
  "age": 30
}`;