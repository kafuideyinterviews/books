import Link from "next/link";
import { urlFor } from "@/lib/sanity.client";
import Price from "@/components/Price";
import { OpenBookVector } from "@/components/icons";
import { formatByline } from "@/lib/authors";
import { localCoverForBook } from "@/lib/covers";

type Book = {
  _id: string;
  title: string;
  slug: string;
  authors?: string[];
  cover?: any;
  categories?: string[];
  priceGhs?: number;
  priceDisplay?: string;
  selarUrl?: string;
  amazonUrl?: string;
};

export default function BookCard({ book }: { book: Book }) {
  const hasPrice =
    typeof book.priceGhs === "number" && Number.isFinite(book.priceGhs);
  const hasLabel =
    typeof book.priceDisplay === "string" && book.priceDisplay.length > 0;
  const coverUrl = book.cover
    ? urlFor(book.cover).width(500).height(680).url()
    : localCoverForBook(book.slug, book.title);

  return (
    <article className="group bg-white border border-line overflow-hidden hover:shadow-card transition-shadow">
      <Link href={`/books/${book.slug}`} className="block">
        <div className="relative aspect-[2/3] bg-[#f3eee6] overflow-hidden">
          {coverUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={coverUrl}
              alt={book.title}
              className="h-full w-full object-contain p-1.5 group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-[#fafafa] to-[#eee]">
              <OpenBookVector
                size={148}
                className="text-bronze group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          {book.categories?.[0] && (
            <span className="absolute top-3 left-3 bg-white text-[10px] tracking-widest uppercase font-semibold text-ink px-2 py-1 border border-line">
              {book.categories[0]}
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/books/${book.slug}`}>
          <h3 className="font-display text-[17px] leading-snug text-ink group-hover:text-copper-dark transition line-clamp-2">
            {book.title}
          </h3>
        </Link>
        <p className="text-xs text-ink-muted mt-1">{formatByline(book.authors)}</p>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div>
            {hasPrice ? (
              <Price
                amountGhs={book.priceGhs}
                className="font-semibold text-ink"
              />
            ) : hasLabel ? (
              <p className="font-semibold text-ink">{book.priceDisplay}</p>
            ) : (
              <p className="text-xs text-ink-soft">Multiple retailers</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {book.selarUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/selar.png"
                alt="Available on Selar"
                className="h-6 w-auto"
              />
            )}
            {book.amazonUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/amazon-logo.svg"
                alt="Available on Amazon"
                className="h-5 w-auto"
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
