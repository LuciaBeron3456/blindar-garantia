import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WA_DEFAULT_MESSAGE, site, waLink } from "@/lib/site";
import { RequestForm } from "./RequestForm";

export function RequestSection() {
  return (
    <section className="bg-ink" id="solicitud">
      <Container className="flex flex-col items-start gap-12 lg:flex-row lg:gap-12 xl:gap-[90px]">
        <RequestForm />

        <aside className="order-first flex w-full shrink-0 flex-col items-start gap-[26px] lg:order-none lg:w-[380px] xl:w-[420px]">
          <SectionHeading
            tone="dark"
            eyebrow="Empezá hoy"
            title="Tu próximo hogar puede estar más cerca"
            description="¿No querés completar el formulario? Sin problema. Escribinos por WhatsApp y te orientamos al instante, sin papeles ni esperas."
          />

          <div className="flex items-center gap-2 rounded-xl bg-wa/15 px-[14px] py-[10px]">
            <Icon name="dot-green" size={8} />
            <span className="text-[13px] font-semibold leading-[1.21] text-white">
              Respondemos en minutos por WhatsApp
            </span>
          </div>

          <Button href={waLink(WA_DEFAULT_MESSAGE)} external variant="whatsapp" withWhatsAppIcon>
            Escribir por WhatsApp
          </Button>

          <ul className="flex w-full flex-col items-start gap-[15px]">
            <li className="flex items-center gap-3">
              <Icon name="mail" size={19} />
              <a href={`mailto:${site.email}`} className="text-[15px] font-semibold leading-[1.21] text-white hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" size={19} />
              <a href={`tel:+${site.whatsappNumber}`} className="text-[15px] font-semibold leading-[1.21] text-white hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="clock-white" size={19} />
              <span className="text-[15px] font-semibold leading-[1.21] text-white">{site.hours}</span>
            </li>
          </ul>

          <p className="w-full text-[13px] leading-[1.5] text-mist-2">
            Atendemos consultas de CABA, GBA y principales ciudades del país.
          </p>
        </aside>
      </Container>
    </section>
  );
}
