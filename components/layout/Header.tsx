import Image from "next/image";
import Link from "next/link";

import { Container } from "./Container";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b

        border-neutral-200
        bg-white/80

        backdrop-blur-xl

        transition-colors

        dark:border-neutral-800
        dark:bg-neutral-950/80
      "
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3

            transition-opacity

            hover:opacity-90
          "
        >
          <Image
            src="/green-leaves-svgrepo-com.svg"
            alt={siteConfig.name}
            width={36}
            height={36}
            priority
          />

          <div className="leading-tight">
            <h1 className="font-semibold text-neutral-900 dark:text-neutral-100">
              {siteConfig.name}
            </h1>

            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              JSON → TOON Converter
            </p>
          </div>
        </Link>

        {/* Right */}
        <nav className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="https://www.purplepie.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              h-10
              items-center

              rounded-xl

              border
              border-neutral-200

              bg-white

              px-4

              text-sm
              font-medium

              text-neutral-800

              transition-all

              hover:border-brand-300
              hover:bg-brand-50

              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500/20

              dark:border-neutral-700
              dark:bg-neutral-900
              dark:text-neutral-100

              dark:hover:border-brand-500
              dark:hover:bg-neutral-800
            "
          >
            Parent Company
          </Link>
        </nav>
      </Container>
    </header>
  );
}