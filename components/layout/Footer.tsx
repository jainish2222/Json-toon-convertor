import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

const links = [
  {
    href: "/privacy",
    label: "Privacy",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/how-it-works",
    label: "How it works",
  },
];

export function Footer() {
  return (
    <footer
      className="
        mt-10
        border-t

        border-neutral-200
        bg-white/80

        py-8

        backdrop-blur

        transition-colors

        dark:border-neutral-800
        dark:bg-neutral-950/80
      "
    >
      <Container className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400">
            <span>© {new Date().getFullYear()}</span>

            <Image
              src="/green-leaves-svgrepo-com.svg"
              alt={siteConfig.name}
              width={22}
              height={22}
              priority
              className="h-5 w-5"
            />

            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              {siteConfig.name}
            </span>
          </p>

          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Runs entirely in your browser.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            No data is uploaded.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                transition-colors

                text-neutral-500

                hover:text-neutral-900

                dark:text-neutral-400
                dark:hover:text-white
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
