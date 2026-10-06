# Blindar · Garantías para alquileres

Landing page de Blindar implementada en Next.js (App Router) + Tailwind CSS v4 a partir del diseño de Figma "Blindar · Negro · Desktop".

## Desarrollo

```bash
npm install
npm run dev
```

Abrí <http://localhost:3000>.

## Estructura

- `src/app/page.tsx` compone las secciones en orden.
- `src/components/sections/` una carpeta por sección (Header, Hero, WhatIs, HowItWorks, Requirements, Benefits, Faq, RequestSection, Footer, FloatingButtons). La sección de testimonios se quitó a pedido del cliente; se apoyan en las reseñas de Google.
- `src/components/ui/` piezas reutilizables (Button, SectionHeading, CheckItem, Icon, Logo, WhatsAppIcon, Container).
- `src/lib/site.ts` datos de contacto, número de WhatsApp y navegación.
- `src/app/api/solicitud/route.ts` recibe el formulario (nombre, DNI, email, teléfono, monto, mensaje). Por ahora valida y loguea; conectar a CRM/email.
- `src/app/globals.css` tokens de color, sombras y tipografía del diseño.
- `public/icons` y `public/images` assets exportados desde Figma.

## Notas de diseño

- El logo oficial (candado + wordmark) está recortado en piezas con fondo transparente: `logo-icon-*.png` y `logo-wordmark-*.png` (`light` para fondos claros, `dark` para oscuros). También hay `logo-light.png` / `logo-dark.png` completos y el favicon en `src/app/icon.png`.
- Los botones de WhatsApp usan el logo oficial de WhatsApp en lugar del ícono "circle-x" que traía el diseño.
- Datos de contacto reales (WhatsApp, email, dirección, Instagram) en `src/lib/site.ts`. Las páginas de Privacidad / Términos siguen como `#` hasta tener contenido.

## SEO

- Metadata completa en `src/app/layout.tsx` (title, description, keywords, canonical, Open Graph, Twitter, robots). Los textos viven en `src/lib/site.ts`.
- `NEXT_PUBLIC_SITE_URL` define la URL pública (canonical, sitemap, robots, OG). Ver `.env.example`.
- Rutas generadas por Next: `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.png`, `/opengraph-image.png`.
- Datos estructurados JSON-LD en `src/components/JsonLd.tsx`: Organization/FinancialService, WebSite, WebPage, Service y FAQPage (comparte las preguntas de `src/lib/faqs.ts`).
- Una sola `h1` (hero), `h2` por sección y `h3` para subgrupos; `lang="es-AR"`.
# blindar-garantia

## Créditos de imágenes

- `public/images/keys-handover.jpg`: foto de Pexels (https://www.pexels.com/photo/7641904/), licencia Pexels (uso comercial libre, sin atribución obligatoria).
