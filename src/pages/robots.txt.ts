export function GET(): Response {
  const siteOrigin = (import.meta.env.SITE ?? "https://lpoli6.github.io").replace(/\/$/, "");
  const baseUrl = import.meta.env.BASE_URL ?? "/";
  const basePath = baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
  const sitemapUrl = `${siteOrigin}${basePath}/sitemap-index.xml`;

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
