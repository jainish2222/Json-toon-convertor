import { HowItWorks } from "@/components/sections/HowItWorks";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "How it works",
  description: "Convert JSON to TOON and reduce LLM token usage in three steps.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return <HowItWorks />;
}