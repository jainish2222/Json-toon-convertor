import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { HelpCircle } from "lucide-react";

export const faqs = [
  {
    q: "What is TOON?",
    a: "TOON (Token-Oriented Object Notation) is a compact, human-readable encoding of the JSON data model designed for LLM prompts. It uses indentation and tabular rows instead of braces and repeated keys, cutting token usage while remaining lossless.",
  },
  {
    q: "How much can I save versus JSON?",
    a: "Typically 30–60% fewer tokens, with the biggest savings on uniform arrays of objects. Deeply nested or non-uniform data saves less, and very small payloads may see little difference.",
  },
  {
    q: "Is my data sent to a server?",
    a: "No. Conversion happens entirely in your browser using the official TOON library, so your JSON never leaves your device.",
  },
  {
    q: "Can I convert TOON back to JSON?",
    a: "Yes. TOON is a lossless representation of JSON, so any TOON produced here can be decoded back to the original structure.",
  },
  {
    q: "When should I use a tab or pipe delimiter?",
    a: "Tabs usually tokenize most efficiently and reduce quoting. Pipes help when values contain commas. Start with commas for readability, then switch to tabs for maximum savings on tabular data.",
  },
];

export function Faq() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400">
            <HelpCircle className="h-6 w-6" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-neutral-600 dark:text-neutral-400">
            Everything you need to know about TOON and the converter.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card
              key={faq.q}
              className="p-6 transition-all hover:border-brand-300 dark:hover:border-brand-700"
            >
              <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                {faq.q}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}