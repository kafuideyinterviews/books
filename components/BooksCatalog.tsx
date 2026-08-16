"use client";

import { useMemo, useState } from "react";
import BookCard from "@/components/BookCard";
import { ArrowRightIcon, MailIcon, TruckIcon, PenIcon } from "@/components/icons";

export type CatalogBook = {
  _id: string;
  title: string;
  slug: string;
  cover?: any;
  categories?: string[];
  categorySlugs?: string[];
  blurb?: string;
  priceGhs?: number;
  priceDisplay?: string;
  selarUrl?: string;
  amazonUrl?: string;
  featured?: boolean;
};

export type CatalogCategory = {
  _id: string;
  title: string;
  slug?: string;
};

type SortKey = "featured" | "new" | "title" | "price-asc" | "price-desc";

const PRICE_MIN = 0;
const PRICE_MAX = 500;

function formatCedi(n: number) {
  return new Intl.NumberFormat("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export default function BooksCatalog({
  books,
  categories,
  initialCategory,
  initialQuery,
}: {
  books: CatalogBook[];
  categories: CatalogCategory[];
  initialCategory?: string;
  initialQuery?: string;
}) {
  const initialSlug = (initialCategory || "").toLowerCase();
  const matchedInitial = categories.find(
    (c) =>
      c.slug?.toLowerCase() === initialSlug ||
      c.title.toLowerCase().replace(/\s+/g, "-") === initialSlug ||
      c.title.toLowerCase() === initialSlug
  );

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    matchedInitial ? [matchedInitial.title] : []
  );
  const [allCategories, setAllCategories] = useState(!matchedInitial);
  const [retailers, setRetailers] = useState({
    direct: false,
    selar: false,
    amazon: false,
  });
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>("featured");
  const [query] = useState((initialQuery || "").trim().toLowerCase());

  const pricedBooks = books.filter(
    (b) => typeof b.priceGhs === "number" && Number.isFinite(b.priceGhs)
  );
  const highestPrice = pricedBooks.reduce(
    (m, b) => Math.max(m, b.priceGhs as number),
    0
  );
  const sliderMax = Math.max(
    PRICE_MAX,
    highestPrice > 0 ? Math.ceil(highestPrice / 50) * 50 : PRICE_MAX
  );
  const effectiveMax = maxPrice ?? sliderMax;

  function toggleCategory(title: string) {
    setAllCategories(false);
    setSelectedCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }

  function selectAllCategories() {
    setAllCategories(true);
    setSelectedCategories([]);
  }

  const filtered = useMemo(() => {
    let list = [...books];

    if (query) {
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.blurb?.toLowerCase().includes(query) ||
          b.categories?.some((c) => c.toLowerCase().includes(query))
      );
    }

    if (!allCategories && selectedCategories.length > 0) {
      list = list.filter((b) =>
        b.categories?.some((c) => selectedCategories.includes(c))
      );
    }

    const anyRetailer = retailers.direct || retailers.selar || retailers.amazon;
    if (anyRetailer) {
      list = list.filter((b) => {
        const matchDirect = retailers.direct; // all listed books are on this shop
        const matchSelar = retailers.selar && Boolean(b.selarUrl);
        const matchAmazon = retailers.amazon && Boolean(b.amazonUrl);
        return (
          (retailers.direct && matchDirect) ||
          (retailers.selar && matchSelar) ||
          (retailers.amazon && matchAmazon)
        );
      });
    }

    // Price: keep books at or below maxPrice. Unpriced books stay visible.
    if (effectiveMax < sliderMax) {
      list = list.filter((b) => {
        if (typeof b.priceGhs !== "number") return true;
        return b.priceGhs <= effectiveMax;
      });
    }

    list.sort((a, b) => {
      switch (sort) {
        case "title":
          return a.title.localeCompare(b.title);
        case "price-asc":
          return (a.priceGhs ?? Infinity) - (b.priceGhs ?? Infinity);
        case "price-desc":
          return (b.priceGhs ?? -Infinity) - (a.priceGhs ?? -Infinity);
        case "new":
          return a.title.localeCompare(b.title);
        case "featured":
        default:
          return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      }
    });

    return list;
  }, [
    books,
    query,
    allCategories,
    selectedCategories,
    retailers,
    maxPrice,
    effectiveMax,
    sliderMax,
    sort,
  ]);

  const priceLabel =
    effectiveMax >= sliderMax
      ? `Up to GH₵ ${formatCedi(sliderMax)}`
      : `Up to GH₵ ${formatCedi(effectiveMax)}`;

  return (
    <div className="container-narrow py-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
      <aside className="space-y-8">
        <div>
          <p className="text-xs font-semibold tracking-wider uppercase text-ink mb-3">
            Category
          </p>
          <div className="flex flex-col gap-2 text-sm text-ink-muted">
            <label className="flex items-center gap-2 cursor-pointer hover:text-ink">
              <input
                type="checkbox"
                className="accent-copper"
                checked={allCategories}
                onChange={selectAllCategories}
              />
              All
            </label>
            {categories.map((c) => (
              <label
                key={c._id}
                className="flex items-center gap-2 cursor-pointer hover:text-ink"
              >
                <input
                  type="checkbox"
                  className="accent-copper"
                  checked={
                    !allCategories && selectedCategories.includes(c.title)
                  }
                  onChange={() => toggleCategory(c.title)}
                />
                {c.title}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wider uppercase text-ink mb-3">
            Available on
          </p>
          <div className="flex flex-col gap-2 text-sm text-ink-muted">
            {(
              [
                ["direct", "Kafui Dey Books"],
                ["selar", "Selar"],
                ["amazon", "Amazon"],
              ] as const
            ).map(([key, label]) => (
              <label
                key={key}
                className="flex items-center gap-2 cursor-pointer hover:text-ink"
              >
                <input
                  type="checkbox"
                  className="accent-copper"
                  checked={retailers[key]}
                  onChange={() =>
                    setRetailers((r) => ({ ...r, [key]: !r[key] }))
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-ink">
              Price
            </p>
            <span className="cedi text-[11px] text-copper-dark font-medium">
              {priceLabel}
            </span>
          </div>
          <input
            type="range"
            min={PRICE_MIN}
            max={sliderMax}
            step={10}
            value={effectiveMax}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-copper cursor-pointer"
            aria-label="Maximum price in Ghana cedis"
            aria-valuemin={PRICE_MIN}
            aria-valuemax={sliderMax}
            aria-valuenow={effectiveMax}
          />
          <div className="flex justify-between text-[11px] text-ink-soft mt-1">
            <span className="cedi">GH&#8373; {formatCedi(PRICE_MIN)}</span>
            <span className="cedi">GH&#8373; {formatCedi(sliderMax)}</span>
          </div>
          {effectiveMax < sliderMax && (
            <button
              type="button"
              onClick={() => setMaxPrice(sliderMax)}
              className="mt-2 text-xs text-copper-dark hover:underline"
            >
              Reset price filter
            </button>
          )}
        </div>
      </aside>

      <div>
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <p className="text-sm text-ink-muted">
            Showing{" "}
            <span className="font-semibold text-ink">{filtered.length}</span>
            {filtered.length !== books.length && (
              <>
                {" "}
                of <span className="font-semibold text-ink">{books.length}</span>
              </>
            )}{" "}
            titles
          </p>
          <div className="flex items-center gap-3 text-sm">
            <label className="text-ink-muted" htmlFor="books-sort">
              Sort:
            </label>
            <select
              id="books-sort"
              className="bg-white border border-line rounded-sm px-3 py-1.5 text-sm text-ink focus:border-copper focus:outline-none"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="featured">Featured</option>
              <option value="new">Newest</option>
              <option value="title">Title A–Z</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-line bg-[#f5f5f5] rounded-sm p-10 text-center">
            <p className="font-display text-xl text-ink mb-2">
              No books match these filters
            </p>
            <p className="text-sm text-ink-muted mb-4">
              Try raising the price limit or clearing a category.
            </p>
            <button
              type="button"
              onClick={() => {
                setMaxPrice(sliderMax);
                selectAllCategories();
                setRetailers({ direct: false, selar: false, amazon: false });
              }}
              className="text-sm text-copper-dark hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {filtered.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}

        <div className="mt-12 bg-[#f5f5f5] border border-line rounded-sm p-8 grid sm:grid-cols-[1fr_auto] items-center gap-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-11 h-11 rounded-full bg-white text-copper-dark items-center justify-center shrink-0">
              <MailIcon size={20} />
            </div>
            <div>
              <p className="font-display text-xl text-ink mb-1">
                Looking for something specific?
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Bulk orders, event copies, signed editions, or a title you
                can't find — write to us and we'll sort it out.
              </p>
            </div>
          </div>
          <a
            href="mailto:info@kafuideybooks.com"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-bronze-dark transition"
          >
            Get in touch
            <ArrowRightIcon size={14} />
          </a>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 bg-white border border-line rounded-xl px-5 py-4">
            <span className="text-copper-dark">
              <PenIcon size={20} />
            </span>
            <p className="text-sm text-ink-muted">
              <span className="text-ink font-medium">Signed copies</span> on
              direct orders, while stocks last.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white border border-line rounded-xl px-5 py-4">
            <span className="text-copper-dark">
              <TruckIcon size={20} />
            </span>
            <p className="text-sm text-ink-muted">
              <span className="text-ink font-medium">Courier delivery</span>{" "}
              across Ghana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
