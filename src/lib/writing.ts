import { getCollection, type CollectionEntry } from "astro:content";

export type WritingEntry = CollectionEntry<"writing">;

export function getEntrySlug(entry: WritingEntry): string {
  const candidate = entry as WritingEntry & { slug?: string };

  if (typeof candidate.slug === "string" && candidate.slug.length > 0) {
    return candidate.slug;
  }

  return entry.id.replace(/\\/g, "/").replace(/\.mdx?$/, "").replace(/\/index$/, "");
}

export async function getAllWritingEntries(): Promise<WritingEntry[]> {
  const entries = await getCollection("writing");

  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
