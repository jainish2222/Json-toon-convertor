import { Container } from "@/components/layout/Container";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Articles on TOON format, LLM token optimization, AI prompt engineering, and reducing AI costs with Token-Oriented Object Notation.",
  path: "/blog",
});

const posts = [
  {
    slug: "how-toon-reduces-chatgpt-costs",
    title: "How TOON Reduces ChatGPT and Claude Costs by Up to 60%",
    excerpt:
      "Large Language Models charge per token. Learn how TOON's tabular encoding eliminates repeated keys, strips unnecessary punctuation, and compresses structured data to dramatically cut your LLM API bills.",
    date: "2025-06-15",
    readTime: "5 min read",
  },
  {
    slug: "json-vs-toon-complete-comparison",
    title: "JSON vs TOON: A Complete Comparison for AI Developers",
    excerpt:
      "An in-depth look at how TOON differs from standard JSON — covering syntax, token efficiency, lossless round-trip fidelity, and when to use each format in your AI pipelines and prompt engineering workflows.",
    date: "2025-06-10",
    readTime: "7 min read",
  },
  {
    slug: "optimizing-llm-context-windows",
    title: "Optimizing LLM Context Windows: Why Data Format Matters",
    excerpt:
      "GPT-4 has 128K tokens, Claude 200K — but fitting more structured data into those limits requires smart formatting. Discover how TOON helps you maximize the information density of every prompt.",
    date: "2025-06-05",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <Container className="max-w-3xl py-14">
      <h1 className="text-3xl font-bold tracking-tight text-green-500 dark:text-green-600">
        Blog
      </h1>

      <p className="mt-5 leading-7 text-neutral-600 dark:text-neutral-400">
        Guides, insights, and best practices on TOON format, LLM token
        optimization, and reducing AI costs.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="
              group
              rounded-2xl
              border
              border-neutral-200
              bg-white
              p-6

              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:border-brand-300
              hover:shadow-lg

              dark:border-neutral-800
              dark:bg-neutral-900
              dark:hover:border-brand-700
            "
          >
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
              >
                {post.title}
              </Link>
            </h2>

            <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="
                mt-4
                inline-flex
                items-center
                gap-1.5

                text-sm
                font-medium

                text-brand-600

                transition-colors
                hover:text-brand-700

                dark:text-brand-400
                dark:hover:text-brand-300
              "
            >
              Read article
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200 bg-green-500/30 p-6 dark:border-neutral-800 dark:bg-green-500/40">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Try It Yourself
        </h3>

        <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
          See token savings in action with our free converter.{" "}
          <Link
            href="/#converter"
            className="font-medium text-brand-600 underline underline-offset-4 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Open JSON to TOON converter →
          </Link>
        </p>
      </div>
    </Container>
  );
}
