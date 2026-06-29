import { Container } from "@/components/layout/Container";
import Link from "next/link";

export function WhatIsToonSection() {
  return (
    <section className="border-t border-neutral-200 py-16 dark:border-neutral-800">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              What is TOON?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              A format designed for the AI era. Compress database arrays, API results,
              and nested objects for prompts.
            </p>
          </div>

          {/* Definition Paragraph (AEO target) */}
          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/30 p-6 dark:border-brand-900/20 dark:bg-brand-950/10">
            <p className="text-base leading-7 text-neutral-700 dark:text-neutral-300">
              <strong className="text-brand-600 dark:text-brand-400 font-semibold">
                TOON (Token-Oriented Object Notation)
              </strong>{" "}
              is a compact, human-readable serialization format that encodes standard JSON data models using indentation-based nesting and tabular rows instead of braces and repeated keys. It is specifically designed to compress prompts and save up to 60% of LLM token usage, making it the perfect data format for AI prompt optimization.
            </p>
          </div>

          {/* JSON vs TOON Comparison Table */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
              JSON vs TOON Comparison
            </h3>
            
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                    <th className="px-4 py-4 text-left font-semibold text-neutral-900 dark:text-neutral-100 w-1/3">Feature</th>
                    <th className="px-4 py-4 text-left font-semibold text-neutral-900 dark:text-neutral-100">JSON</th>
                    <th className="px-4 py-4 text-left font-semibold text-neutral-900 dark:text-neutral-100">TOON</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-4 font-semibold text-neutral-900 dark:text-neutral-100">Token Efficiency</td>
                    <td className="px-4 py-4">Baseline (high syntax overhead)</td>
                    <td className="px-4 py-4 font-medium text-brand-600 dark:text-brand-400">30–60% fewer tokens</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-4 font-semibold text-neutral-900 dark:text-neutral-100">Formatting Syntax</td>
                    <td className="px-4 py-4">Braces, brackets, quotes, commas</td>
                    <td className="px-4 py-4">Indentation and tab/comma lines</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-4 font-semibold text-neutral-900 dark:text-neutral-100">Repeated Keys</td>
                    <td className="px-4 py-4">Repeated on every item in an array</td>
                    <td className="px-4 py-4">Written once (tabular header row)</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-4 font-semibold text-neutral-900 dark:text-neutral-100">Round-trip Fidelity</td>
                    <td className="px-4 py-4">Lossless</td>
                    <td className="px-4 py-4">Lossless (fully convertible back to JSON)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold text-neutral-900 dark:text-neutral-100">Best Suited For</td>
                    <td className="px-4 py-4">APIs, databases, server communication</td>
                    <td className="px-4 py-4">AI prompts, context windows, AI pipelines</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/what-is-toon"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Learn more about the TOON specification →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
