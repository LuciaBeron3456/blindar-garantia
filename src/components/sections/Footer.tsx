import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

const footerNav = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
];

const linkClass = "text-[14px] leading-[1.21] text-white transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="bg-ink">
      <Container className="flex flex-col items-start gap-[42px] py-12 lg:py-16">
        <div className="flex w-full flex-col items-start gap-10 md:flex-row md:justify-between">
          <div className="flex w-full flex-col items-start gap-4 md:w-[320px]">
            <Logo tone="dark" />
            <p className="w-full text-[14px] leading-[1.55] text-mist-3">
              Garantías para alquilar con respaldo, claridad y acompañamiento humano.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-[13px] font-extrabold uppercase leading-[1.21] text-gold">Navegación</h3>
            {footerNav.map((l) => (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <h3 className="text-[13px] font-extrabold uppercase leading-[1.21] text-gold">Contacto</h3>
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
            <a href={`tel:+${site.whatsappNumber}`} className={linkClass}>
              {site.phoneDisplay}
            </a>
            <p className="text-[14px] leading-[1.21] text-white">
              <a href={site.instagram} className="hover:text-gold">Instagram</a>
              <span className="mx-2">·</span>
              <a href={site.linkedin} className="hover:text-gold">LinkedIn</a>
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-white/[0.13]" />

        <div className="flex w-full flex-col items-start justify-between gap-2 text-[12px] leading-[1.21] text-mist-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Blindar. Todos los derechos reservados.</p>
          <p>
            <a href="#" className="hover:text-white">Privacidad</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white">Términos y condiciones</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
