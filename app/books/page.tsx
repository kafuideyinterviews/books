import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { allBooksQuery, allCategoriesQuery } from "@/lib/queries";
import BooksCatalog from "@/components/BooksCatalog";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Shop All Books — Public Speaking, Interviews & MC Titles",
  description:
    "Browse the full Kafui Dey Books collection. Find public speaking guides, interview collections, and MC craft — buy direct, on Selar, or Amazon. Signed copies available.",
  keywords: [
    "buy Kafui Dey books",
    "public speaking books Ghana",
    "interview books",
    "MC books Accra",
    "signed books Ghana",
    "Selar bookstore",
    "African author shop",
  ],
  alternates: { canonical: "/books" },
  openGraph: {
    title: "Shop All Books · Kafui Dey Books",
    description:
      "Explore captivating titles by Kafui Dey — stories, speaking craft, and conversations in print.",
    url: "/books",
  },
};

export default async function BooksPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; q?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const [books, categories] = await Promise.all([
    client.fetch(allBooksQuery).catch(() => []),
    client.fetch(allCategoriesQuery).catch(() => []),
  ]);

  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-12">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            The Collection
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
            All books
          </h1>
          <p className="text-ink-muted max-w-2xl">
            Titles by Kafui Dey — and co-authors where noted. Buy directly, on
            Selar, or on Amazon. Or shortlist a title and decide later — no
            account needed.
          </p>
        </div>
      </div>

      <BooksCatalog
        books={books}
        categories={categories}
        initialCategory={params.cat}
        initialQuery={params.q}
      />
    </div>
  );
}
