"use client";

import { useSavedBooks } from "@/lib/useSavedBooks";

export default function SaveForLaterButton({ slug }: { slug: string }) {
  const { isSaved, toggle } = useSavedBooks();
  const saved = isSaved(slug);

  return (
    <button
      onClick={() => toggle(slug)}
      aria-pressed={saved}
      className={`inline-flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium transition ${
        saved
          ? "bg-ivory border-copper text-bronze-dark"
          : "bg-white border-line text-ink hover:border-copper hover:text-copper-dark"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
        aria-hidden="true"
      >
        <path
          d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {saved ? "Saved for later" : "Save for later"}
    </button>
  );
}
