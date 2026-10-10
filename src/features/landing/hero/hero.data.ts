export const heroContent = {
  eyebrow: "DISEÑO Y DESARROLLO WEB · AREQUIPA",
  description:
    "Presenta tus servicios, muestra tus productos y facilita que tus clientes te contacten. Diseñamos tu página web y te acompañamos después del lanzamiento con mantenimiento técnico mensual.",
  primaryCta: "Cotizar mi página web",
  secondaryCta: "Ver proyectos",
  supportText: "Implementación inicial + mantenimiento mensual",
  whatsappMessage: "Hola, quiero cotizar una página web para mi negocio.",
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
