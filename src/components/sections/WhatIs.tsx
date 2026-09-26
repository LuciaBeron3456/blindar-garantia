import { CheckItem } from "@/components/ui/CheckItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Se presenta junto con tu documentación al firmar",
  "Cubre las obligaciones previstas en el contrato",
  "Un asesor te explica costos y alcance antes de avanzar",
];

export function WhatIs() {
  return (
    <section className="bg-surface" id="que-es">
      <Container className="flex flex-col items-center gap-12 lg:flex-row lg:gap-12 xl:gap-[90px]">
        <div className="flex h-[380px] w-full shrink-0 flex-col items-start justify-between rounded-3xl bg-ink p-6 sm:h-[420px] lg:w-[440px] xl:w-[500px]">
          <div className="flex size-[58px] items-center justify-center rounded-[18px] bg-white/[0.07]">
            <Icon name="circle-x-dark" size={32} />
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.07] p-5">
            <p className="text-[11px] font-extrabold leading-[1.21] text-gold">
              TU CONTRATO, RESPALDADO
            </p>
            <p className="w-full text-[23px] leading-[1.2] text-white sm:text-[27px]">
              Blindar responde ante el propietario si surge un incumplimiento.
            </p>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-6">
          <SectionHeading
            eyebrow="En pocas palabras"
            title="Una alternativa al garante tradicional"
            description="Es un respaldo que reemplaza la garantía propietaria. La inmobiliaria recibe la seguridad que necesita y vos podés avanzar con el alquiler sin depender de familiares o amigos."
          />
          <ul className="flex w-full flex-col gap-[14px]">
            {highlights.map((h) => (
              <CheckItem key={h}>{h}</CheckItem>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
