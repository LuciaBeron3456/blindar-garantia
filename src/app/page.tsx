import { JsonLd } from "@/components/JsonLd";
import { Benefits } from "@/components/sections/Benefits";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RequestSection } from "@/components/sections/RequestSection";
import { Requirements } from "@/components/sections/Requirements";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatIs } from "@/components/sections/WhatIs";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="flex flex-col">
        <Hero />
        <WhatIs />
        <HowItWorks />
        <Requirements />
        <Benefits />
        <Testimonials />
        <Faq />
        <RequestSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
