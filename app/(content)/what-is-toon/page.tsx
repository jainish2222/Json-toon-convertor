import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "What is TOON?",
  description:
    "TOON (Token-Oriented Object Notation) is a compact, lossless JSON encoding designed for LLM prompts. Learn how TOON works, its syntax, and why it saves 30–60% on tokens.",
  path: "/what-is-toon",
});

export default function WhatIsToonPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-green-500 dark:text-green-600">
        What is TOON?
      </h1>

      <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
        <strong className="text-neutral-900 dark:text-neutral-100">
          TOON (Token-Oriented Object Notation)
        </strong>{" "}
        is a compact, human-readable serialization format that encodes the
        complete JSON data model using indentation, tabular rows, and minimal
        punctuation. It is designed to reduce the number of tokens consumed by
        Large Language Models (LLMs) while preserving lossless round-trip
        fidelity with standard JSON.
      </p>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Why Was TOON Created?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Large language models like GPT-4, Claude, and Gemini charge per token
            and have limited context windows. Standard JSON wastes tokens on
            repeated keys, braces, brackets, quotes, and commas. TOON eliminates
            this overhead by representing the same data in a more compact format,
            typically saving <strong className="text-neutral-900 dark:text-neutral-100">30–60%</strong> of
            tokens on structured datasets.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            How Does TOON Work?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            TOON uses a set of encoding strategies to represent JSON data more
            efficiently:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Indentation-based nesting</strong>{" "}
              — Objects and arrays use indentation instead of braces and brackets.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Tabular rows</strong>{" "}
              — Uniform arrays of objects are collapsed into a header row followed
              by comma-separated value rows, eliminating repeated key names.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Minimal punctuation</strong>{" "}
              — Quotes are omitted where unnecessary. Colons, braces, and brackets
              are removed or replaced with whitespace.
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Key folding</strong>{" "}
              — When enabled, short keys in nested objects are folded into
              dot-notation paths to reduce structure depth.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            JSON vs TOON — A Quick Example
          </h2>

          <p className="mt-3 mb-4 leading-7 text-neutral-600 dark:text-neutral-400">
            Here is the same data in JSON and TOON side by side:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                JSON (~45 tokens)
              </h3>
              <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
{`{
  "users": [
    { "id": 1, "name": "Alice", "role": "admin" },
    { "id": 2, "name": "Bob", "role": "user" },
    { "id": 3, "name": "Carol", "role": "editor" }
  ],
  "count": 3
}`}
              </pre>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                TOON (~18 tokens)
              </h3>
              <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-4 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`users
  id, name, role
  1, Alice, admin
  2, Bob, user
  3, Carol, editor
count: 3`}
              </pre>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-brand-600 dark:text-brand-400">
            ↓ ~60% fewer tokens with the same data and zero information loss.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Key Properties of TOON
          </h2>

          <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">
                    Property
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">
                    TOON
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">
                    JSON
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-600 dark:text-neutral-400">
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Token Efficiency</td>
                  <td className="px-4 py-3">30–60% fewer tokens</td>
                  <td className="px-4 py-3">Baseline</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Lossless</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Human Readable</td>
                  <td className="px-4 py-3">✅ Yes</td>
                  <td className="px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Nesting</td>
                  <td className="px-4 py-3">Indentation</td>
                  <td className="px-4 py-3">Braces & brackets</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Repeated Keys</td>
                  <td className="px-4 py-3">Eliminated via tabular rows</td>
                  <td className="px-4 py-3">Repeated every object</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">Best For</td>
                  <td className="px-4 py-3">LLM prompts, AI pipelines</td>
                  <td className="px-4 py-3">APIs, data interchange</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            When Should You Use TOON?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            TOON is ideal when you need to send structured data to an LLM and
            want to maximize the information within the model's context window.
            Common use cases include:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
            <li>Embedding database query results in ChatGPT or Claude prompts</li>
            <li>Sending API response data as context for AI analysis</li>
            <li>Compressing configuration files in automated AI pipelines</li>
            <li>Reducing token costs on high-volume LLM applications</li>
            <li>Fitting more data into limited context windows (e.g., GPT-4's 128K limit)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Is TOON Lossless?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Yes. TOON preserves the complete JSON data model, including all data
            types (strings, numbers, booleans, null), nested structures, and array
            ordering. Any TOON output can be decoded back to the exact original
            JSON structure with zero data loss.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            How Much Does TOON Save?
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            Savings depend on the shape of your data:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Uniform arrays of objects</strong>{" "}
              — 50–60% savings (the biggest win, since repeated keys are completely eliminated)
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Deeply nested objects</strong>{" "}
              — 20–40% savings
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Simple key-value pairs</strong>{" "}
              — 10–20% savings
            </li>
            <li>
              <strong className="text-neutral-900 dark:text-neutral-100">Very small payloads</strong>{" "}
              — Minimal or no savings
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-green-500/30 p-6 dark:border-neutral-800 dark:bg-green-500/40">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Try It Now
        </h3>

        <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
          Convert your JSON to TOON instantly in your browser — no uploads, no
          sign-in, and completely free.{" "}
          <Link
            href="/#converter"
            className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Open the converter →
          </Link>
        </p>
      </div>
    </Container>
  );
}
