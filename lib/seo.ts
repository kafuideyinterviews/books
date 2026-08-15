export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://kafuideybooks.com";
export const SITE_NAME = "Kafui Dey Books";
export const SITE_TAGLINE = "Stories that stay with you";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-Z5R9FXCGBN";

export const DEFAULT_TITLE =
  "Kafui Dey Books | Official Bookstore — Stories, Interviews & Public Speaking";

export const DEFAULT_DESCRIPTION =
  "Discover captivating books by Ghanaian broadcaster and author Kafui Dey. Shop signed copies, public speaking titles, interview collections, and MC craft — buy direct, on Selar, or Amazon.";

/** Captivating, intent-rich keywords for discovery */
export const SITE_KEYWORDS = [
  // Brand
  "Kafui Dey",
  "Kafui Dey Books",
  "Kafui Dey author",
  "Kafui Dey bookstore",
  "official Kafui Dey shop",
  // Core themes
  "Ghanaian author books",
  "African storytelling",
  "conversations that matter",
  "stories that stay with you",
  "words that travel further",
  // Categories
  "public speaking books Ghana",
  "interview books Ghana",
  "MC skills books",
  "master of ceremonies guide",
  "broadcasting books Africa",
  "communication skills books",
  "voice training books",
  // Commerce
  "buy Kafui Dey books",
  "signed books Ghana",
  "books on Selar",
  "Kafui Dey Amazon",
  "order books Accra",
  // Audience
  "Ghanaian broadcaster",
  "event host books",
  "speaker and interviewer",
  "kafuideyinterviews",
];

export const SOCIAL = {
  twitter: "@KafuiDey",
  youtube: "https://www.youtube.com/@kafuideymc",
  instagram: "https://www.instagram.com/kafuidey/",
  interviews: "https://kafuideyinterviews.com",
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
