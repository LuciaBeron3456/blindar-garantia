import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Benefit = { icon: IconName; title: string; text: string };
type Group = { title: string; subtitle: string; items: Benefit[] };

const groups: Group[] = [
  {
    title: "Para inquilinos",
    subtitle: "Menos barreras para llegar a tu próximo hogar.",
    items: [
      { icon: "key", title: "Sin molestar a nadie", text: "No dependés de familiares con una propiedad a su nombre." },
      { icon: "user-check-2", title: "Trámite online", text: "Enviás todo desde el celular y seguís el estado con tu asesor." },
      { icon: "message-circle", title: "Acompañamiento real", text: "Hablás con una persona que te explica cada paso." },
      { icon: "bolt", title: "Respuesta ágil", text: "Analizamos tu caso y te damos una primera respuesta en 24 hs hábiles." },
    ],
  },
  {
    title: "Para propietarios",
    subtitle: "Más claridad y respaldo desde el primer día.",
    items: [
      { icon: "shield-check-gold", title: "Respaldo contractual", text: "Más previsibilidad frente a las obligaciones del alquiler." },
      { icon: "file-check", title: "Documentación clara", text: "Recibís la garantía lista para incorporar al contrato." },
      { icon: "user-check", title: "Inquilino evaluado", text: "Analizamos la capacidad de pago antes de emitir." },
      { icon: "headset", title: "Canal de atención", text: "Un equipo disponible para acompañar durante la vigencia." },
    ],
  },
];

export function Benefits() {
  return (
    <section className="bg-surface" id="beneficios">
      <Container className="flex flex-col items-start gap-12">
        <SectionHeading
          eyebrow="Beneficios"
          title="Un acuerdo más fácil para todos"
          description="Diseñamos la experiencia para que inquilinos y propietarios avancen con tranquilidad."
        />

        {groups.map((g) => (
          <div key={g.title} className="flex w-full flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-[5px] leading-[1.21]">
              <h3 className="text-[25px] font-normal text-text">{g.title}</h3>
              <p className="text-[14px] text-muted">{g.subtitle}</p>
            </div>
            <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {g.items.map((b) => (
                <li
                  key={b.title}
                  className="flex min-h-[190px] flex-col items-start gap-[14px] rounded-2xl border border-line bg-white p-[22px] shadow-card"
                >
                  <span className="flex size-[42px] items-center justify-center rounded-xl bg-gold-soft">
                    <Icon name={b.icon} size={22} />
                  </span>
                  <h4 className="w-full text-[20px] font-normal leading-[1.21] text-text">{b.title}</h4>
                  <p className="w-full text-[14px] leading-[1.5] text-muted">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}
