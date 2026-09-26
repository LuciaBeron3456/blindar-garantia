import { CheckItem } from "@/components/ui/CheckItem";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

const requirements = [
  "Ser mayor de 18 años",
  "DNI argentino o residencia vigente",
  "Ingresos demostrables",
  "Datos del alquiler o publicación",
  "Teléfono y email de contacto",
  "Documentación legible y actualizada",
];

export function Requirements() {
  return (
    <section className="bg-ink" id="requisitos">
      <Container className="flex flex-col items-start gap-12 lg:flex-row lg:gap-12 xl:gap-[90px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[22px] lg:w-[400px] xl:w-[430px]">
          <SectionHeading
            tone="dark"
            eyebrow="Antes de empezar"
            title="Tené esto a mano"
            description="No necesitás garante propietario. Con información básica podemos darte una primera respuesta."
          />
          <div className="flex items-center gap-[9px] rounded-full bg-white/[0.07] px-[14px] py-[10px]">
            <Icon name="clock" size={17} />
            <span className="text-[13px] font-bold leading-[1.21] text-white">
              Completarlo lleva menos de 5 minutos
            </span>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-[18px] rounded-3xl border border-white/[0.13] bg-white/5 p-6 sm:p-8">
          <ul className="flex w-full flex-col gap-[18px]">
            {requirements.map((r) => (
              <CheckItem key={r} tone="dark">
                {r}
              </CheckItem>
            ))}
          </ul>
          <div className="h-px w-full bg-white/[0.13]" />
          <p className="w-full text-[13px] leading-[1.5] text-mist-2">
            La aprobación está sujeta a evaluación. Si te falta algo, te ayudamos a resolverlo.
          </p>
        </div>
      </Container>
    </section>
  );
}
