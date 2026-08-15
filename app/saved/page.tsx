"use client";

import Link from "next/link";
import { useSavedBooks } from "@/lib/useSavedBooks";
import { ArrowRightIcon, BookmarkIcon } from "@/components/icons";

export default function SavedPage() {
  const { saved } = useSavedBooks();

  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            Your shortlist
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
            Saved for later
          </h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            Titles you've shortlisted on this device. No account needed —
            they stay in your browser only.
          </p>
        </div>
      </div>

      <div className="container-narrow py-12">
        {saved.length === 0 ? (
          <div className="border border-dashed border-line rounded-2xl p-12 text-center bg-white">
            <div className="mx-auto w-14 h-14 rounded-full bg-ivory flex items-center justify-center text-copper-dark mb-4">
              <BookmarkIcon size={24} />
            </div>
            <p className="font-display text-2xl text-ink mb-2">
              No books saved yet.
            </p>
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
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {saved.map((slug) => (
              <li
                key={slug}
                className="bg-white border border-line rounded-xl p-4 flex items-center justify-between hover:shadow-cardHover transition"
              >
                <Link
                  href={`/books/${slug}`}
                  className="font-display text-lg text-ink hover:text-copper-dark transition"
                >
                  {slug.replace(/-/g, " ")}
                </Link>
                <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                  Tap to view
                  <ArrowRightIcon size={12} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
