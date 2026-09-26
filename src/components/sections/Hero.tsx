import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { WA_DEFAULT_MESSAGE, waLink } from "@/lib/site";

const trust = ["Respuesta en 24 hs", "Asesoramiento humano", "Proceso 100% online"];

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-12 xl:gap-[76px]">
        {/* Copy */}
        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[22px] lg:max-w-[650px]">
          <div className="flex items-center gap-2 rounded-full bg-ink-2 px-3 py-[7px]">
            <Icon name="dot" size={7} />
            <span className="text-[11px] font-bold leading-[1.21] text-gold">
              GARANTÍA SIMPLE. RESPUESTA RÁPIDA.
            </span>
          </div>

          <h1 className="w-full text-[44px] font-normal leading-[1.02] text-ink sm:text-[56px] xl:text-[68px]">
            Alquilá sin garante propietario
          </h1>

          <p className="w-full text-[18px] leading-[1.5] text-muted lg:text-[21px]">
            Con Blindar obtenés una garantía para presentar en la inmobiliaria, sin
            pedirle escrituras a nadie. Te acompañamos de punta a punta.
          </p>

          <div className="flex flex-col items-start gap-[10px]">
            <div className="flex flex-wrap items-start gap-3">
              <Button href="#solicitud" className="px-6">
                Quiero mi garantía
              </Button>
              <Button
                href={waLink(WA_DEFAULT_MESSAGE)}
                external
                variant="whatsapp"
                withWhatsAppIcon
                className="px-6"
              >
                Hablar por WhatsApp
              </Button>
            </div>
            <p className="text-[13px] leading-[1.21] text-placeholder">
              ¿Preferís hablar primero? Escribinos sin completar ningún formulario.
            </p>
          </div>

          <ul className="flex w-full flex-wrap gap-x-6 gap-y-3 min-[1360px]:grid min-[1360px]:grid-cols-3">
            {trust.map((t) => (
              <CheckItem key={t}>{t}</CheckItem>
            ))}
          </ul>
        </div>

        {/* Apoyo visual */}
        <div className="relative flex h-[440px] w-full max-w-[520px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-[28px] p-5 sm:h-[560px] sm:p-[26px] lg:w-[440px] xl:w-[520px]">
          <Image
            src="/images/hero-visual.png"
            alt="Pareja sonriendo con las llaves de su nuevo hogar"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 520px"
            className="object-cover"
          />

          <div className="relative flex w-full max-w-[300px] flex-col items-start gap-[10px] rounded-2xl bg-white/95 p-4 shadow-status">
            <div className="flex w-full items-center justify-between">
              <span className="text-[12px] font-bold leading-[1.21] text-muted">TU SOLICITUD</span>
              <span className="rounded-full bg-ink px-[10px] py-[5px] text-[11px] font-extrabold leading-[1.21] text-gold">
                EN EVALUACIÓN
              </span>
            </div>
            <p className="w-full text-[22px] leading-[1.21] text-text">
              Garantía para tu próximo hogar
            </p>
            <div
              className="h-[7px] w-full overflow-hidden rounded-full bg-surface-2"
              role="progressbar"
              aria-valuenow={78}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progreso de la solicitud"
            >
              <div className="h-full w-[78%] rounded-full bg-gold" />
            </div>
            <p className="text-[12px] leading-[1.21] text-muted">
              Respondemos en hasta 24 hs hábiles
            </p>
          </div>

          <div className="relative flex items-center gap-2 rounded-full bg-ink px-[13px] py-[9px]">
            <Icon name="shield-check" size={16} />
            <span className="text-[12px] font-bold leading-[1.21] text-white">
              Respaldo claro y seguro
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
