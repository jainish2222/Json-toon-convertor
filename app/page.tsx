import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";
import { Converter } from "@/components/converter/Converter";
import { WhatIsToonSection } from "@/components/sections/WhatIsToonSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container className="pb-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mt-20 mb-7">
          Transform JSON into TOON
        </h2>
        <Converter />
      </Container>
      <WhatIsToonSection />
      <Features />
      <HowItWorks />
      <Faq />
    </>
  );
}
