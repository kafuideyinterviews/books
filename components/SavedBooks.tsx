"use client";

import Link from "next/link";
import BookCard from "@/components/BookCard";
import { BookmarkIcon } from "@/components/icons";
import { useSavedBooks } from "@/lib/useSavedBooks";

type CatalogBook = {
  _id: string;
  title: string;
  slug: string;
  authors?: string[];
  cover?: unknown;
  categories?: string[];
  priceGhs?: number;
  priceDisplay?: string;
  selarUrl?: string;
  amazonUrl?: string;
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function SavedBooks({ books }: { books: CatalogBook[] }) {
  const { saved } = useSavedBooks();
  const bySlug = new Map(books.map((b) => [b.slug, b]));

  const shortlist = saved.map((slug) => {
    const match = bySlug.get(slug);
    if (match) return match;
    return {
      _id: slug,
      title: titleFromSlug(slug),
      slug,
      authors: ["Kafui Dey"],
    } satisfies CatalogBook;
  });

  if (saved.length === 0) {
    return (
      <div className="border border-dashed border-line rounded-2xl p-12 text-center bg-white">
        <div className="mx-auto w-14 h-14 rounded-full bg-ivory flex items-center justify-center text-copper-dark mb-4">
          <BookmarkIcon size={24} />
        </div>
        <p className="font-display text-2xl text-ink mb-2">No books saved yet.</p>
        <p className="text-sm text-ink-muted mb-6">
          Tap the bookmark on any title to keep it here for later.
        </p>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-5 py-2.5 rounded-full hover:bg-bronze-dark transition text-sm"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {shortlist.map((book) => (
        <BookCard key={book.slug} book={book} />
      ))}
    </div>
  );
}
