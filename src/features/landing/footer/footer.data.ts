import { contactConfig } from "@shared/config/contact.config";

type FooterLink = { label: string; href: string; icon: "linkedin" | "instagram" | "github" };

export const footerLinks: readonly FooterLink[] = contactConfig.isPlaceholder
  ? []
  : [{ label: "LinkedIn", href: contactConfig.linkedin, icon: "linkedin" }];
