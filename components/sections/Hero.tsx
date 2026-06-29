import Image from "next/image";
import { ShieldCheck, Sparkles, Zap } from "lucide-react";

import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/exploration-settlements-different-planets.webp"
          alt="Exploration settlements on different planets futuristic backdrop"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div
        aria-hidden
        className="
          absolute
          inset-0
          -z-10

          bg-gradient-to-b
          from-black/40
          via-black/25
          to-white

          dark:to-neutral-950
        "
      />

      {/* Glow */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          -z-10
          h-72

          bg-[radial-gradient(circle_at_top,var(--color-brand-400),transparent_70%)]

          opacity-40
          blur-3xl
        "
      />

      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/20

              bg-white/10

              px-4
              py-2

              text-sm
              font-medium

              text-white

              backdrop-blur-md
            "
          >
            <Sparkles className="h-4 w-4" />
            Token-Oriented Object Notation
          </span>

          {/* Heading */}
          <h1
            className="
              mt-8

              text-balance

              text-5xl
              font-bold
              tracking-tight

              text-white

              sm:text-6xl

              [text-shadow:0_4px_20px_rgb(0_0_0/.35)]
            "
          >
            Convert JSON into{" "}
            <span className="text-brand-300">TOON</span>

            <br />

            and reduce LLM tokens by up to{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              60%
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl

              text-lg
              leading-8

              text-white/90
            "
          >
            A compact, lossless JSON representation built for AI prompts.
            Convert instantly in your browser with no uploads or sign-in.
          </p>

          {/* Feature chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Chip icon={Zap}>30–60% fewer tokens</Chip>

            <Chip icon={ShieldCheck}>100% private</Chip>

            <Chip icon={Sparkles}>Lossless conversion</Chip>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Chip({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2

        rounded-full

        border
        border-white/20

        bg-white/10

        px-4
        py-2

        text-sm
        text-white

        backdrop-blur-md
      "
    >
      <Icon className="h-4 w-4 text-brand-300" />
      {children}
    </div>
  );
}