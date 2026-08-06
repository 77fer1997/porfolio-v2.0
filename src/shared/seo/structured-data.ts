import { contactConfig } from "@shared/config/contact.config";
import { siteConfig } from "@shared/config/site.config";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  sameAs: contactConfig.isPlaceholder ? [] : [contactConfig.linkedin],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "es-PE",
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: "Peru",
  serviceType: [
    "Presencia y mejora digital",
    "Automatizacion e integracion",
    "Aplicaciones web, moviles y software a medida",
  ],
};

export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    "Presencia y mejora digital",
    "Automatizacion e integracion",
    "Aplicaciones web, moviles y software a medida",
  ].map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      provider: { "@type": "Organization", name: siteConfig.name },
    },
  })),
};

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

