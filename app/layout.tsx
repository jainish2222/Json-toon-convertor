import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata(),
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ff7a18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html   lang="en"
      suppressHydrationWarning >
      <body className="flex min-h-dvh flex-col antialiased">
         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
