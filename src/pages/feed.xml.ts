import rss from "@astrojs/rss";
import type { APIContext } from "astro";

import { SITE_DESCRIPTION, SITE_NAME, toAbsoluteUrl } from "../lib/site";
import { getEntrySlug, getPublishedWritingEntries } from "../lib/writing";

export async function GET(context: APIContext) {
  const posts = await getPublishedWritingEntries();

  return rss({
    title: `${SITE_NAME} Writing`,
    description: SITE_DESCRIPTION,
    site: context.site ?? new URL(toAbsoluteUrl("/")),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt ?? post.data.description ?? "",
      link: `/writing/${getEntrySlug(post)}`
    }))
  });
}
