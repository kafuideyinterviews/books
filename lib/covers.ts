/** Local cover art for category tiles and book-card fallbacks. */
export type BrowseCategory = {
  title: string;
  slug: string;
  image: string;
  /** Use contain (e.g. logo) instead of cover crop */
  contain?: boolean;
};

/** Always show these six browse cards (matches shop nav). */
export const BROWSE_CATEGORIES: BrowseCategory[] = [
  {
    title: "Public Speaking",
    slug: "public-speaking",
    image: "/sanity-books/public-speaking.webp",
    contain: true,
  },
  {
    title: "Interviews",
    slug: "interviews",
    image: "/sanity-books/interviews.jpg",
  },
  {
    title: "MC",
    slug: "mc",
    image: "/sanity-books/mc-kafui.jpg",
    contain: true,
  },
  {
    title: "Stage",
    slug: "stage",
    image: "/sanity-books/own-the-stage.png",
    contain: true,
  },
  {
    title: "Career",
    slug: "career",
    image: "/sanity-books/from-talent-to-career.jpg",
    contain: true,
  },
  {
    title: "Language",
    slug: "language",
    image: "/sanity-books/dey-english.png",
    contain: true,
  },
];

/** Match a book slug/title to a local cover when Sanity has none. */
export function localCoverForBook(
  slug?: string | null,
  title?: string | null
): string | null {
  const key = `${slug || ""} ${title || ""}`.toLowerCase();
  if (key.includes("public speaking") || key.includes("public-speaking")) {
    return "/sanity-books/public-speaking.webp";
  }
  if (key.includes("own the stage") || key.includes("own-the-stage")) {
    return "/sanity-books/own-the-stage.png";
  }
  if (key.includes("talent") || key.includes("career")) {
    return "/sanity-books/from-talent-to-career.jpg";
  }
  if (
    key.includes("english") ||
    key.includes("ewe") ||
    key.includes("dey-english")
  ) {
    return "/sanity-books/dey-english.png";
  }
  if (
    key.includes("mc") ||
    key.includes("master of ceremonies") ||
    key.includes("any event")
  ) {
    return "/sanity-books/mc-kafui.jpg";
  }
  return null;
}
