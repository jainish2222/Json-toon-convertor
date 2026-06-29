"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { faqs } from "@/components/sections/Faq";

export function JsonLd() {
  const pathname = usePathname();

  // Create base graph structure
  const graph: any[] = [
    {
      "@type": "WebApplication",
      "@id": `${siteConfig.url}/#webapp`,
      name: siteConfig.name,
      url: siteConfig.url,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description: siteConfig.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: {
        "@type": "Organization",
        "name": "PurplePie",
        "url": "https://www.purplepie.in/"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.purplepie.in/#organization",
      name: "PurplePie",
      url: "https://www.purplepie.in/",
      sameAs: []
    }
  ];

  // Include FAQ and HowTo page schemas on the homepage
  if (pathname === "/" || pathname === "/how-it-works") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

    graph.push({
      "@type": "HowTo",
      name: "How to convert JSON to TOON",
      description: "Follow these three steps to compress your JSON files into Token-Oriented Object Notation (TOON) for AI prompt optimization.",
      step: [
        {
          "@type": "HowToStep",
          "name": "Paste your JSON",
          "text": "Paste any valid JSON including objects, arrays, nested structures, or large datasets into the converter input panel.",
          "url": `${siteConfig.url}/#converter`
        },
        {
          "@type": "HowToStep",
          "name": "Customize the output options",
          "text": "Adjust settings such as indentation, delimiter (comma, tab, pipe), key folding, and flatten depth to maximize token savings.",
          "url": `${siteConfig.url}/#converter`
        },
        {
          "@type": "HowToStep",
          "name": "Copy or download TOON",
          "text": "Copy the compressed TOON output directly to your clipboard or download it as a .toon file for use in your AI prompts.",
          "url": `${siteConfig.url}/#converter`
        }
      ]
    });
  }

  // Breadcrumbs schema generator for sub-pages
  if (pathname && pathname !== "/") {
    const segments = pathname.split("/").filter(Boolean);
    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url as string,
      }
    ];

    let currentUrl = siteConfig.url;
    segments.forEach((segment, index) => {
      currentUrl += `/${segment}`;
      
      let name = segment.replace(/-/g, " ");
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      // Map custom names for segments
      if (segment === "docs") name = "Documentation";
      if (segment === "what-is-toon") name = "What is TOON?";
      if (segment === "blog") name = "Blog";
      if (segment === "about") name = "About Us";
      if (segment === "privacy") name = "Privacy Policy";
      if (segment === "how-it-works") name = "How It Works";

      itemListElement.push({
        "@type": "ListItem",
        position: index + 2,
        name: name,
        item: currentUrl,
      });
    });

    graph.push({
      "@type": "BreadcrumbList",
      itemListElement,
    });
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}