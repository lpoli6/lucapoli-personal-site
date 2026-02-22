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
  const visibleEntries = import.meta.env.PROD ? entries.filter((entry) => !entry.data.draft) : entries;

  return visibleEntries.sort((a, b) => {
    const dateDifference = b.data.date.getTime() - a.data.date.getTime();

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return a.id.localeCompare(b.id);
  });
}
