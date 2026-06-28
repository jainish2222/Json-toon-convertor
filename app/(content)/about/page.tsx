import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about JSON to TOON — a free, privacy-first converter for Token-Oriented Object Notation (TOON).",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-green-500  dark:text-green-600">
        About JSON to TOON
      </h1>

      <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
        <strong className="text-neutral-900 dark:text-neutral-100">
          JSON to TOON
        </strong>{" "}
        is a free, privacy-first tool that converts standard JSON into
        <strong className="text-neutral-900 dark:text-neutral-100">
          {" "}
          Token-Oriented Object Notation (TOON)
        </strong>
        . TOON is a compact serialization format designed to reduce the number
        of tokens consumed by Large Language Models (LLMs), helping you optimize
        AI prompts while preserving your data structure.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Why JSON to TOON?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Large language models charge and operate based on token usage.
            Traditional JSON contains repeated keys, whitespace, and structural
            characters that increase token count. TOON minimizes this overhead,
            producing a more compact representation that's better suited for AI
            workflows.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Privacy First
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Everything happens entirely in your browser. Your JSON is never
            uploaded, transmitted, or stored on our servers. The converter works
            locally using the official TOON library, ensuring complete control
            over your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Built for Developers
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            JSON to TOON provides configurable encoding options including
            indentation, delimiters, key folding, and formatting preferences so
            you can generate the most efficient representation for your specific
            dataset and AI use case.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Who Is It For?
          </h2>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
            <li>AI application developers</li>
            <li>Prompt engineers</li>
            <li>LLM researchers</li>
            <li>Backend and API developers</li>
            <li>Anyone looking to reduce token usage and AI costs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Open & Transparent
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            We believe developer tools should be fast, transparent, and
            privacy-friendly. JSON to TOON focuses on simplicity, local
            processing, and a clean user experience—without ads, unnecessary
            tracking, or hidden data collection.
          </p>
        </section>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-green-500/30 dark:bg-green-500/40 p-6 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Our Mission
        </h3>

        <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
          Make AI workflows more efficient by providing fast, secure, and
          accessible tools that help developers reduce token usage without
          compromising data quality or privacy.
        </p>
      </div>
    </Container>
  );
}