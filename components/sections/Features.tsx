import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import {
  Coins,
  ShieldCheck,
  Repeat,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Fewer Tokens",
    body: "Reduce prompt size by 30–60% by eliminating braces, repeated keys, and unnecessary punctuation.",
  },
  {
    icon: ShieldCheck,
    title: "Private by Default",
    body: "Everything runs locally in your browser. Your JSON is never uploaded to a server.",
  },
  {
    icon: Repeat,
    title: "Lossless Round-trip",
    body: "TOON preserves the complete JSON data model, allowing perfect conversion back to JSON.",
  },
  {
    icon: Zap,
    title: "Instant Preview",
    body: "See the converted output and estimated token savings as you type or change settings.",
  },
];

export function Features() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Why use TOON?
        </h2>

        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          A compact JSON representation designed for AI prompts, developer
          tools, and efficient data exchange.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card
              key={feature.title}
              className="
                group
                p-6

                transition-all
                duration-200

                hover:-translate-y-1
                hover:border-brand-300
                hover:shadow-lg

                dark:hover:border-brand-700
              "
            >
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

                  transition-colors

                  group-hover:bg-brand-500
                  group-hover:text-white

                  dark:bg-brand-950/40
                  dark:text-brand-400
                  dark:group-hover:bg-brand-500
                  dark:group-hover:text-white
                "
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                {feature.body}
              </p>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}