import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface Args {
  title?: string;
  description?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: Args = {}): Metadata {
  const fullTitle = title
    ? `${title} · ${siteConfig.name}`
    : `${siteConfig.name} — Convert JSON to TOON & Save LLM Tokens`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
  };
}