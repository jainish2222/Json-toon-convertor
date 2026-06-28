import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "About",
  description: "About JSON to TOON — a free, private converter for Token-Oriented Object Notation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="max-w-2xl py-14 mt-0">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900">About</h1>
      <p className="mt-4 text-neutral-600">
        JSON to TOON converts JSON into Token-Oriented Object Notation, a compact encoding designed to
        reduce the number of tokens you send to large language models.
      </p>
      <p className="mt-4 text-neutral-600">
        Everything runs locally in your browser using the official TOON library — no servers, no tracking,
        no uploads. Tweak indentation, delimiter, and key folding to find the most efficient encoding for your data.
      </p>
    </Container>
  );
}