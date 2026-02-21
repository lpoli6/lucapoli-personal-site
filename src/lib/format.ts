const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
});

export function formatDate(value: Date | string): string {
  const parsedDate =
    value instanceof Date
      ? value
      : new Date(value.includes("T") ? value : `${value}T00:00:00Z`);

  if (Number.isNaN(parsedDate.getTime())) {
    return String(value);
  }

  return dateFormatter.format(parsedDate);
}

export function estimateReadingTimeMinutes(content: string): number {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}
