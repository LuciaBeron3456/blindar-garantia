import Image from "next/image";
import { CheckItem } from "@/components/ui/CheckItem";
import { Container } from "@/components/ui/Container";
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
        <div className="relative flex h-[400px] w-full shrink-0 flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 sm:h-[420px] lg:w-[440px] xl:w-[500px]">
          <Image
            src="/images/keys-handover.jpg"
            alt="Entrega de llaves de un departamento"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover object-[50%_35%]"
          />
          {/* Degradado para que la tarjeta de texto se lea sobre la foto */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10"
          />
          <div className="relative flex w-full flex-col items-start gap-3 rounded-2xl border border-white/15 bg-ink/70 p-5 backdrop-blur-md">
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
