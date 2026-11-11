export const heroContent = {
  eyebrow: "DISEÑO DIGITAL · AREQUIPA",
  description:
    "Diseñamos webs, automatizaciones y sistemas a medida para reducir tareas repetitivas y ordenar el trabajo de tu negocio.",
  primaryCta: "Conversemos por WhatsApp",
  secondaryCta: "Ver casos de éxito",
  supportText: "Web · Automatización · Software a medida",
  whatsappMessage: "Hola, quiero conversar sobre una solución digital para mi negocio.",
} as const;

export type HeroProjectSlide = {
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  href: string;
};

export const heroBenefits = [
  "Diseño a medida para tu negocio",
  "Contacto directo por WhatsApp",
  "Mantenimiento técnico mensual",
] as const;

export const heroProjectSlides: HeroProjectSlide[] = [
  {
    name: "Klipp",
    category: "Página web para servicios",
    image: "/images/projects/project-klipp-landing-2.png",
    imageAlt: "Captura de la página web del proyecto Klipp",
    width: 1254,
    height: 1254,
    href: "/casos-de-exito/klipp",
  },
  {
    name: "SMS Fortuna",
    category: "Landing de servicio digital",
    image: "/images/projects/project-sms-fortuna-landing.webp",
    imageAlt: "Captura de la landing del proyecto SMS Fortuna",
    width: 1883,
    height: 959,
    href: "/casos-de-exito/sms-fortuna",
  },
  {
    name: "El Pueblo",
    category: "Sistema administrativo",
    image: "/images/projects/project-botica-landing-3.png",
    imageAlt: "Captura del sistema administrativo del proyecto El Pueblo",
    width: 1402,
    height: 1122,
    href: "/casos-de-exito/el-pueblo",
  },
] as const;
