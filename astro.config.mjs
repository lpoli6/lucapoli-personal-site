import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const rawSiteUrl = process.env.PUBLIC_SITE_URL ?? "https://lpoli6.github.io";
const rawBasePath = process.env.PUBLIC_BASE_PATH ?? "/lucapoli-personal-site";

const site = rawSiteUrl.replace(/\/$/, "");
const base =
  rawBasePath === "/"
    ? "/"
    : `/${rawBasePath.replace(/^\/+/, "").replace(/\/+$/, "")}`;

export default defineConfig({
  site,
  base,
  integrations: [mdx(), tailwind({ applyBaseStyles: false }), sitemap()]
});
