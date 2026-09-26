import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "Pensé que sin garante no iba a poder alquilar. Me explicaron todo por WhatsApp y en dos días ya tenía la aprobación.",
    name: "Martina G.",
    city: "Palermo, CABA",
  },
  {
    quote: "El proceso fue mucho más claro de lo que esperaba. Subí la documentación desde el celular y siempre supe qué faltaba.",
    name: "Lucas P.",
    city: "Rosario, Santa Fe",
  },
  {
    quote: "Como propietaria me dio tranquilidad entender el respaldo y tener un contacto directo para consultar.",
    name: "Verónica R.",
    city: "Córdoba Capital",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white" id="testimonios">
      <Container className="flex flex-col items-start gap-9">
        <SectionHeading eyebrow="Experiencias reales" title="Personas que ya pudieron avanzar" />
        <ul className="grid w-full grid-cols-1 gap-[18px] md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex min-h-[250px] flex-col items-start gap-[18px] rounded-3xl border border-line bg-white p-6 shadow-card"
            >
              <p className="text-[17px] leading-[1.21] tracking-[0.06em] text-gold" aria-label="5 de 5 estrellas">
                ★★★★★
              </p>
              <blockquote className="w-full text-[17px] leading-[1.55] text-text">
                “{t.quote}”
              </blockquote>
              <div className="flex flex-col items-start gap-[3px] leading-[1.21]">
                <p className="text-[14px] text-text">{t.name}</p>
                <p className="text-[13px] text-muted">{t.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
