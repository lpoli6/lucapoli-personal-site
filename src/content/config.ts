import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  loader: glob({
    base: "./content/writing",
    pattern: "**/*.{md,mdx}"
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  writing
};
