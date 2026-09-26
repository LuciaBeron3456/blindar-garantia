import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";
import { faqs } from "@/lib/faqs";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  return (
    <section className="bg-surface" id="preguntas">
      <Container className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16 xl:gap-[100px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[22px] lg:w-[380px] xl:w-[420px]">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que necesitás saber"
            description="Si tu duda no está acá, escribinos. Te respondemos sin tecnicismos."
          />
          <Button href={waLink(WA_DEFAULT_MESSAGE)} external variant="whatsapp" withWhatsAppIcon>
            Consultar por WhatsApp
          </Button>
        </div>
        <div className="w-full min-w-0 flex-1">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
