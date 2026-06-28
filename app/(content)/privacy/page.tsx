import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "Privacy policy for JSON to TOON. Your data never leaves your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="max-w-2xl py-14 ">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Privacy</h1>
      <p className="mt-4 text-neutral-600">
        JSON to TOON processes your data entirely in your browser. We do not upload, store, or transmit the
        JSON you paste. Conversion history is saved only in your browser&apos;s local storage and can be cleared
        anytime from the History panel.
      </p>
    </Container>
  );
}