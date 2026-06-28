import {
  FileJson,
  Settings2,
  Copy,
  ArrowRight,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    icon: FileJson,
    title: "Paste your JSON",
    body: "Paste any valid JSON including objects, arrays, nested structures, or large datasets.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Customize the output",
    body: "Adjust indentation, delimiters, and key folding to maximize token savings.",
  },
  {
    number: "03",
    icon: Copy,
    title: "Copy or download",
    body: "Copy the generated TOON or download a .toon file for use in your AI prompts.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-20 dark:bg-neutral-950">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-600 dark:bg-brand-950/40 dark:text-brand-400">
            Simple Workflow
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Convert JSON to TOON in three steps
          </h2>

          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            No installation, no account, and no uploads. Everything happens
            locally in your browser.
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="
                      absolute
                      right-[-18px]
                      top-16
                      hidden
                      h-5
                      w-5
                      text-neutral-300
                      lg:block
                      dark:text-neutral-700
                    "
                  />
                )}

                <Card
                  className="
                    h-full
                    p-6

                    transition-all
                    duration-200

                    hover:-translate-y-1
                    hover:border-brand-300
                    hover:shadow-lg

                    dark:hover:border-brand-700
                  "
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-2xl

                        bg-brand-50
                        text-brand-600

                        dark:bg-brand-950/40
                        dark:text-brand-400
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="font-mono text-sm font-semibold text-brand-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                    {step.body}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}