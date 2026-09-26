import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

/** Datos estructurados (schema.org) para buscadores. */
export function JsonLd() {
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;

  const organization = {
    "@type": ["Organization", "FinancialService"],
    "@id": orgId,
    name: site.name,
    alternateName: "Blindar Fianza de Locaciones",
    url: site.url,
    logo: `${site.url}/images/logo-light.png`,
    image: `${site.url}/opengraph-image.png`,
    description: site.description,
    email: site.email,
    telephone: site.phoneDisplay.replace(/\s/g, ""),
    areaServed: { "@type": "Country", name: "Argentina" },
    address: {
      "@type": "PostalAddress",
      addressCountry: site.address.country,
      addressRegion: site.address.region,
      addressLocality: site.address.locality,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: `+${site.whatsappNumber}`,
        email: site.email,
        availableLanguage: ["es"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": siteId,
    url: site.url,
    name: site.name,
    inLanguage: "es-AR",
    publisher: { "@id": orgId },
  };

  const service = {
    "@type": "Service",
    name: "Garantía de alquiler Blindar",
    serviceType: "Garantía para alquileres (fianza de locaciones)",
    description:
      "Respaldo que reemplaza al garante propietario para firmar un contrato de alquiler. Evaluación en 24 hs hábiles y acompañamiento de un asesor.",
    provider: { "@id": orgId },
    areaServed: { "@type": "Country", name: "Argentina" },
    audience: { "@type": "Audience", audienceType: "Inquilinos y propietarios" },
    url: `${site.url}/#solicitud`,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#preguntas`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: site.url,
    name: site.title,
    description: site.description,
    inLanguage: "es-AR",
    isPartOf: { "@id": siteId },
    about: { "@id": orgId },
    primaryImageOfPage: `${site.url}/opengraph-image.png`,
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [organization, website, webPage, service, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // JSON generado en servidor a partir de datos propios; no incluye input de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
