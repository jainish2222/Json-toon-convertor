import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "TOON Specification & Docs",
  description:
    "Complete documentation for TOON (Token-Oriented Object Notation) — syntax rules, encoding options, data types, tabular format, key folding, and delimiter configuration.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-green-500 dark:text-green-600">
        TOON Specification &amp; Documentation
      </h1>

      <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
        This page describes the syntax and encoding rules of{" "}
        <strong className="text-neutral-900 dark:text-neutral-100">
          TOON (Token-Oriented Object Notation)
        </strong>
        . TOON is a compact, human-readable representation of the JSON data
        model, optimized for reducing token usage in Large Language Model (LLM)
        prompts.
      </p>

      <div className="mt-10 space-y-10">
        {/* ---- Core Concepts ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Core Concepts
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Indentation-Based Structure
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                TOON replaces JSON's braces (<code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">{"{ }"}</code>) and
                brackets (<code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">{"[ ]"}</code>) with
                indentation levels. Each level of nesting is represented by a
                consistent number of spaces (configurable: 2 or 4).
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">JSON</p>
                  <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
{`{
  "name": "Alice",
  "age": 30,
  "active": true
}`}
                  </pre>
                </div>
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">TOON</p>
                  <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`name: Alice
age: 30
active: true`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Nested Objects
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                Nested objects are represented by increasing the indentation level.
                No braces are needed — the parser uses whitespace depth to
                determine hierarchy.
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">JSON</p>
                  <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
{`{
  "user": {
    "name": "Alice",
    "address": {
      "city": "London"
    }
  }
}`}
                  </pre>
                </div>
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">TOON</p>
                  <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`user
  name: Alice
  address
    city: London`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Tabular Format ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Tabular Format (Arrays of Objects)
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            The single most powerful optimization in TOON. When an array contains
            objects with the same set of keys, TOON encodes them as a{" "}
            <strong className="text-neutral-900 dark:text-neutral-100">header row</strong> followed by{" "}
            <strong className="text-neutral-900 dark:text-neutral-100">value rows</strong>,
            eliminating all repeated key names.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">JSON (~65 tokens)</p>
              <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
{`[
  { "id": 1, "name": "Alice", "role": "admin" },
  { "id": 2, "name": "Bob", "role": "user" },
  { "id": 3, "name": "Carol", "role": "editor" }
]`}
              </pre>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">TOON (~15 tokens)</p>
              <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`id, name, role
1, Alice, admin
2, Bob, user
3, Carol, editor`}
              </pre>
            </div>
          </div>

          <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-400">
            ↓ ~77% token reduction — keys are written once instead of per-row.
          </p>
        </section>

        {/* ---- Data Types ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Data Types
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            TOON supports all JSON data types. Values are encoded as follows:
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">JSON</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-900 dark:text-neutral-100">TOON</th>
                </tr>
              </thead>
              <tbody className="font-mono text-neutral-600 dark:text-neutral-400">
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">String</td>
                  <td className="px-4 py-3">{`"hello"`}</td>
                  <td className="px-4 py-3">hello</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">Number</td>
                  <td className="px-4 py-3">42</td>
                  <td className="px-4 py-3">42</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">Boolean</td>
                  <td className="px-4 py-3">true / false</td>
                  <td className="px-4 py-3">true / false</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">Null</td>
                  <td className="px-4 py-3">null</td>
                  <td className="px-4 py-3">null</td>
                </tr>
                <tr className="border-b border-neutral-100 dark:border-neutral-800/50">
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">Object</td>
                  <td className="px-4 py-3">{`{ "k": "v" }`}</td>
                  <td className="px-4 py-3">k: v (indented)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">Array</td>
                  <td className="px-4 py-3">[1, 2, 3]</td>
                  <td className="px-4 py-3">Indented list or tabular</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ---- Encoding Options ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Encoding Options
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            The JSON to TOON converter supports several configurable options to
            customize the output:
          </p>

          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Indent Size
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                Controls the number of spaces used per nesting level. Available
                values:{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">2</code> (default)
                or{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">4</code> spaces.
                Smaller indentation produces fewer whitespace tokens.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Delimiter
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                The character used to separate values in tabular rows. Options:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-6 text-neutral-600 dark:text-neutral-400">
                <li>
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">,</code>{" "}
                  <strong className="text-neutral-900 dark:text-neutral-100">Comma</strong> (default) — Most readable.
                </li>
                <li>
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">\t</code>{" "}
                  <strong className="text-neutral-900 dark:text-neutral-100">Tab</strong> — Best for maximum token savings. Tabs
                  typically tokenize as a single token.
                </li>
                <li>
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">|</code>{" "}
                  <strong className="text-neutral-900 dark:text-neutral-100">Pipe</strong> — Useful when values contain commas.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Key Folding
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                When set to{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">safe</code>,
                the encoder folds simple nested keys into dot-notation paths where
                safe to do so, reducing indentation depth. When set to{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">off</code>{" "}
                (default), keys remain fully expanded.
              </p>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">Key Folding Off</p>
                  <pre className="overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200">
{`user
  address
    city: London`}
                  </pre>
                </div>
                <div>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Key Folding Safe</p>
                  <pre className="overflow-x-auto rounded-xl border border-brand-200 bg-brand-50/50 p-3 font-mono text-sm leading-relaxed text-neutral-800 dark:border-brand-900 dark:bg-brand-950/30 dark:text-neutral-200">
{`user.address.city: London`}
                  </pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Flatten Depth
              </h3>
              <p className="mt-2 leading-7 text-neutral-600 dark:text-neutral-400">
                Controls how many levels of nesting the tabular optimizer inspects
                when collapsing arrays. Values:{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">Infinity</code>{" "}
                (default, check all levels),{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">1</code>,{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">2</code>,{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">3</code>, or{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">5</code>.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Round-trip Fidelity ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Round-Trip Fidelity
          </h2>

          <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
            TOON is a lossless encoding. Any valid JSON can be encoded to TOON
            and decoded back to produce the exact same JSON structure. This means:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
            <li>All data types are preserved exactly (strings, numbers, booleans, null)</li>
            <li>Array ordering is maintained</li>
            <li>Object key ordering is maintained</li>
            <li>Nested depth and structure are preserved</li>
            <li>Empty objects and arrays are represented correctly</li>
          </ul>
        </section>

        {/* ---- Best Practices ---- */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
            Best Practices for Maximum Savings
          </h2>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">1. Use tabular data when possible</h3>
              <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Structure your JSON as arrays of objects with uniform keys. This
                triggers TOON's tabular encoding and produces the highest savings.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">2. Use tab delimiters for maximum compression</h3>
              <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Tabs typically tokenize as a single token in most LLM tokenizers,
                making them more efficient than commas or pipes.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">3. Enable key folding for deep nesting</h3>
              <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                If your data has deeply nested objects with simple leaf values,
                enabling safe key folding reduces indentation tokens.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">4. Use 2-space indentation</h3>
              <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Fewer spaces per level means fewer whitespace tokens. 2-space
                indentation is the default and most efficient setting.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-green-500/30 p-6 dark:border-neutral-800 dark:bg-green-500/40">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Try the Converter
        </h3>

        <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
          Experiment with all encoding options in real time.{" "}
          <Link
            href="/#converter"
            className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Open the JSON to TOON converter →
          </Link>
        </p>
      </div>
    </Container>
  );
}
