import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Completás el formulario",
    text: "Contanos quién sos, cuánto pagarías de alquiler y cómo podemos contactarte.",
    highlight: false,
  },
  {
    n: "02",
    title: "Evaluamos tu caso",
    text: "Revisamos la información y un asesor te escribe para pedirte la documentación necesaria.",
    highlight: true,
  },
  {
    n: "03",
    title: "Recibís tu garantía",
    text: "Con la aprobación lista, emitimos el respaldo para que puedas firmar tu contrato.",
    highlight: false,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white" id="como-funciona">
      <Container className="flex flex-col items-start gap-[42px]">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tres pasos. Sin vueltas."
          description="Hacemos simple un trámite que suele sentirse complicado."
        />
        <ol className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className={`flex min-h-[250px] flex-col items-start gap-4 rounded-2xl border p-6 ${
                s.highlight ? "border-gold bg-cream" : "border-line bg-surface"
              }`}
            >
              <span
                className={`flex size-11 items-center justify-center rounded-full text-[13px] font-extrabold leading-[1.21] ${
                  s.highlight ? "bg-gold text-deep" : "bg-ink text-gold"
                }`}
              >
                {s.n}
              </span>
              <h3 className="w-full text-[22px] font-normal leading-[1.21] text-text">{s.title}</h3>
              <p className="w-full text-[15px] leading-[1.55] text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
