export const SITE_NAME = "Luca Poli";
export const SITE_DOMAIN = "lucapoli.com";
const SITE_ORIGIN = (import.meta.env.PUBLIC_SITE_URL ?? "https://lpoli6.github.io").replace(/\/$/, "");
const baseUrl = import.meta.env.BASE_URL ?? "/";

export const BASE_PATH = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
export const SITE_DESCRIPTION =
  "AI & enterprise technology. Executive Director at CBRE. Former Palantir. Building things that work at scale.";
export const SITE_OG_IMAGE = "/og-default.png";

export const EXTERNAL_LINKS = {
  linkedin: "https://linkedin.com/in/lucapoli",
  email: "mailto:luca@lucapoli.com"
} as const;

export function withBasePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (BASE_PATH.length === 0) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `${BASE_PATH}/` : `${BASE_PATH}${normalizedPath}`;
}

export function toAbsoluteUrl(path: string): string {
  return new URL(withBasePath(path), `${SITE_ORIGIN}/`).toString();
}
