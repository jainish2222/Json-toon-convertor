import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "How TOON Reduces ChatGPT and Claude Costs by Up to 60%",
  description:
    "Learn how TOON (Token-Oriented Object Notation) cuts LLM API costs by eliminating repeated keys, stripping punctuation, and compressing structured JSON data for AI prompts.",
  path: "/blog/how-toon-reduces-chatgpt-costs",
});

export default function HowToonReducesCostsPage() {
  return (
    <Container className="max-w-3xl py-14">
      <Link
        href="/blog"
        className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
      >
        ← Back to Blog
      </Link>

      <article className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-green-500 dark:text-green-600">
          How TOON Reduces ChatGPT and Claude Costs by Up to 60%
        </h1>

        <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          <time dateTime="2025-06-15">June 15, 2025</time>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>5 min read</span>
        </div>

        <div className="mt-8 space-y-8">
          <section>
            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              Every API call to ChatGPT, Claude, or Gemini is billed by token count.
              When you send structured data — like database results, API responses,
              or configuration files — the standard JSON format carries significant
              overhead. Braces, brackets, quotes, colons, and{" "}
              <strong className="text-neutral-900 dark:text-neutral-100">repeated key names</strong>{" "}
              all consume tokens without adding information value.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              The Hidden Cost of JSON in AI Prompts
            </h2>

            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
              Consider sending a table of 100 user records to an LLM. In JSON,
              each record repeats every key name — <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">"id"</code>,{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">"name"</code>,{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">"email"</code> — 100
              times each. That's 300 unnecessary key repetitions, plus hundreds
              of braces and quotes. At GPT-4's pricing, this overhead adds up
              quickly across thousands of API calls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              How TOON Solves This
            </h2>

            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
              TOON (Token-Oriented Object Notation) is specifically designed to
              minimize token waste. It applies three key strategies:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Tabular encoding</strong>{" "}
                — Arrays of objects become a header row + value rows. Keys are
                written once, not per-row.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Punctuation elimination</strong>{" "}
                — No braces, brackets, or unnecessary quotes. Structure is
                conveyed through indentation.
              </li>
              <li>
                <strong className="text-neutral-900 dark:text-neutral-100">Key folding</strong>{" "}
                — Deep nesting is collapsed into dot-notation paths, reducing
                indentation tokens.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Real-World Savings Example
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">JSON (45 tokens)</p>
                <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
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
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">TOON (18 tokens)</p>
                <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`users
  id, name, role
  1, Alice, admin
  2, Bob, user
  3, Carol, editor
count: 3`}
                </pre>
              </div>
            </div>

            <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-400">
              ↓ 60% fewer tokens — same data, zero information loss.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Cost Savings at Scale
            </h2>

            <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                    <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">Scenario</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">JSON Tokens</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">TOON Tokens</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">Savings</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-3">10 user records</td>
                    <td className="px-4 py-3">~150</td>
                    <td className="px-4 py-3">~55</td>
                    <td className="px-4 py-3 font-medium text-brand-600 dark:text-brand-400">~63%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-3">100 product objects</td>
                    <td className="px-4 py-3">~2,200</td>
                    <td className="px-4 py-3">~900</td>
                    <td className="px-4 py-3 font-medium text-brand-600 dark:text-brand-400">~59%</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                    <td className="px-4 py-3">Nested config (5 levels)</td>
                    <td className="px-4 py-3">~400</td>
                    <td className="px-4 py-3">~250</td>
                    <td className="px-4 py-3 font-medium text-brand-600 dark:text-brand-400">~38%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Simple key-value (3 keys)</td>
                    <td className="px-4 py-3">~25</td>
                    <td className="px-4 py-3">~20</td>
                    <td className="px-4 py-3 font-medium text-brand-600 dark:text-brand-400">~20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Getting Started
            </h2>

            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
              Converting JSON to TOON takes seconds. Paste your JSON into the{" "}
              <Link
                href="/#converter"
                className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                free online converter
              </Link>
              , adjust your settings, and copy the output. No uploads, no sign-in,
              and everything stays in your browser.
            </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
