export const site = {
  name: "Blindar",
  tagline: "FIANZA DE LOCACIONES",
  /** URL pública del sitio. Configurable con NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://blindar.com.ar").replace(/\/$/, ""),
  title: "Blindar · Garantía de alquiler sin garante propietario",
  description:
    "Alquilá sin garante propietario. Blindar emite garantías para alquileres aceptadas por inmobiliarias en CABA, GBA y todo el país. Respuesta en 24 hs hábiles y asesoramiento humano por WhatsApp.",
  keywords: [
    "garantía de alquiler",
    "garantía para alquilar",
    "alquilar sin garante",
    "garante propietario",
    "fianza de locaciones",
    "seguro de caución alquiler",
    "garantía inmobiliaria",
    "alquiler CABA",
    "alquiler GBA",
    "Blindar",
  ],
  locale: "es_AR",
  address: { country: "AR", region: "Buenos Aires", locality: "Ciudad Autónoma de Buenos Aires" },
  whatsappNumber: "5491155550189",
  phoneDisplay: "+54 9 11 5555 0189",
  email: "hola@blindar.com.ar",
  hours: "Lun a vie, 9 a 18 hs",
  // TODO: reemplazar por las URLs reales de redes
  instagram: "#",
  linkedin: "#",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const WA_DEFAULT_MESSAGE =
  "Hola Blindar, quiero consultar por una garantía para alquilar.";

export const nav = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas", href: "#preguntas" },
];
