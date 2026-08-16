/** Default when a book has no authors set in Sanity. */
export const DEFAULT_AUTHOR = "Kafui Dey";

export function bookAuthors(authors?: string[] | null): string[] {
  const cleaned = (authors || [])
    .map((name) => name.trim())
    .filter(Boolean);
  return cleaned.length > 0 ? cleaned : [DEFAULT_AUTHOR];
}

/** "A", "A & B", or "A, B & C" */
export function formatAuthorList(authors?: string[] | null): string {
  const names = bookAuthors(authors);
  if (names.length === 1) return names[0];
  if (names.length === 2) return `${names[0]} & ${names[1]}`;
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
}

export function formatByline(authors?: string[] | null): string {
  return `by ${formatAuthorList(authors)}`;
}
