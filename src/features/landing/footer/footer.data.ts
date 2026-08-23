import { contactConfig } from "@shared/config/contact.config";

export const footerLinks = [
  { label: "LinkedIn", href: contactConfig.linkedin, icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "GitHub", href: "#", icon: "github" },
] as const;
