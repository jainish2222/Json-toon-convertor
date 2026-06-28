export const siteConfig = {
  name: "JSON to TOON",
  shortName: "JSON→TOON",
  url: "https://jsontotoon.app", // ← change to your domain
  description:
    "Convert JSON to TOON (Token-Oriented Object Notation) and cut LLM token usage by up to 60%. Free, fast, and runs entirely in your browser.",
  keywords: [
    "JSON to TOON",
    "TOON converter",
    "Token-Oriented Object Notation",
    "LLM token optimizer",
    "reduce LLM tokens",
    "JSON token saver",
    "TOON format",
    "AI prompt compression",
  ],
  twitter: "@jsontotoon",
  ogImage: "/og.png",
  locale: "en_US",
} as const;

export type SiteConfig = typeof siteConfig;