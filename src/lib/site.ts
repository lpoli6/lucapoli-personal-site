export const SITE_NAME = "Luca Poli";
export const SITE_DOMAIN = "lucapoli.com";
export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? "https://lucapoli.com").replace(/\/$/, "");
export const SITE_DESCRIPTION =
  "AI & enterprise technology. Executive Director at CBRE. Former Palantir. Building things that work at scale.";
export const SITE_OG_IMAGE = "/og-default.png";

export const EXTERNAL_LINKS = {
  linkedin: "https://linkedin.com/in/lucapoli",
  email: "mailto:luca@lucapoli.com"
} as const;
