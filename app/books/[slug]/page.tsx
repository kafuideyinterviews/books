import type { Metadata } from "next";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity.client";
import { bookBySlugQuery } from "@/lib/queries";
import SaveForLaterButton from "@/components/SaveForLaterButton";
import Price from "@/components/Price";
import { ExternalLinkIcon, OpenBookVector } from "@/components/icons";
import { BookJsonLd } from "@/components/JsonLd";
import { SITE_NAME } from "@/lib/seo";
import { bookAuthors, formatAuthorList } from "@/lib/authors";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = await client
    .fetch(bookBySlugQuery, { slug })
    .catch(() => null);

  if (!book) {
    return {
      title: "Book not found",
      robots: { index: false, follow: true },
    };
  }

  const authors = bookAuthors(book.authors);
  const authorLine = formatAuthorList(authors);
  const description =
    book.blurb?.slice(0, 160) ||
    `Buy “${book.title}” by ${authorLine} — available direct, on Selar, or Amazon.`;
  const image = book.cover
    ? urlFor(book.cover).width(1200).height(630).url()
    : "/icons/icon-512.png";
  const keywords = [
    book.title,
    ...authors,
    "buy book Ghana",
    ...(book.categories || []),
    "signed books",
    "Selar",
    "Amazon",
  ];

  return {
    title: `${book.title} by ${authorLine}`,
    description,
    keywords,
    alternates: { canonical: `/books/${slug}` },
    openGraph: {
      type: "book",
      title: `${book.title} · ${SITE_NAME}`,
      description,
      url: `/books/${slug}`,
      images: [{ url: image, alt: book.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${book.title} · ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export default async function BookDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const book = await client
    .fetch(bookBySlugQuery, { slug })
    .catch(() => null);

  if (!book) {
    return (
      <div className="container-narrow py-20 text-center">
        <p className="font-display text-2xl text-ink mb-2">Book not found.</p>
        <p className="text-ink-muted mb-6">
          The title you're looking for isn't here.
        </p>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-5 py-2.5 rounded-full hover:bg-bronze-dark transition"
        >
          Back to books
        </Link>
      </div>
    );
  }

  const coverUrl = book.cover
    ? urlFor(book.cover).width(1200).height(1600).url()
    : undefined;

  return (
    <div className="bg-white">
      <BookJsonLd
        title={book.title}
        description={book.blurb}
        slug={book.slug}
        image={coverUrl}
        priceGhs={book.priceGhs}
        authors={book.authors}
      />

      <div className="container-narrow pt-6 text-xs text-ink-muted flex items-center gap-2">
        <Link href="/" className="hover:text-copper-dark">
          Home
        </Link>
        <span>/</span>
        <Link href="/books" className="hover:text-copper-dark">
          Books
        </Link>
        <span>/</span>
        <span className="text-ink truncate">{book.title}</span>
      </div>

      <div className="container-narrow py-10 grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12">
        <div>
          <div className="sticky top-32 bg-white border border-line rounded-2xl overflow-hidden shadow-cardHover">
            <div className="aspect-[3/4] bg-ivory flex items-center justify-center">
              {book.cover ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={urlFor(book.cover).width(720).height(960).url()}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <OpenBookVector size={220} className="text-bronze" />
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {book.categories?.map((c: string) => (
              <span
                key={c}
                className="text-[10px] tracking-widest uppercase font-semibold bg-ivory text-bronze-dark px-2.5 py-1 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink mb-3">
            {book.title}
          </h1>

          <p className="text-sm text-ink-muted mb-6">
            by{" "}
            <span className="text-ink font-medium">
              {formatAuthorList(book.authors)}
            </span>
          </p>

          {typeof book.priceGhs === "number" ? (
            <Price
              amountGhs={book.priceGhs}
              showBase
              className="font-display text-3xl text-ink mb-8 block"
            />
          ) : book.priceDisplay ? (
            <p className="font-display text-3xl text-ink mb-8">
              {book.priceDisplay}
            </p>
          ) : null}

          {book.blurb && (
            <p className="text-ink-muted leading-relaxed mb-8 text-[15px]">
              {book.blurb}
            </p>
          )}

          <div className="flex flex-wrap gap-3 mb-4">
            {book.selarUrl && (
              <a
                href={book.selarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line bg-white text-ink font-medium px-6 py-3 rounded-sm hover:border-ink transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/selar.png" alt="" className="h-6 w-auto" />
                Buy on Selar
                <ExternalLinkIcon size={13} />
              </a>
            )}
            {book.amazonUrl && (
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line bg-white text-ink font-medium px-6 py-3 rounded-sm hover:border-ink transition"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/amazon-logo.svg" alt="" className="h-5 w-auto" />
                Buy on Amazon
                <ExternalLinkIcon size={13} />
              </a>
            )}
          </div>

          <div className="mb-8">
            <SaveForLaterButton slug={book.slug} />
          </div>

          <div className="border-t border-line pt-6 grid grid-cols-2 gap-y-3 text-sm">
            <span className="text-ink-muted">Format</span>
            <span className="text-ink">Paperback</span>
            <span className="text-ink-muted">Language</span>
            <span className="text-ink">English</span>
            <span className="text-ink-muted">Publisher</span>
            <span className="text-ink">Kafui Dey</span>
            {book.categories?.length ? (
              <>
                <span className="text-ink-muted">Category</span>
                <span className="text-ink">{book.categories.join(", ")}</span>
              </>
            ) : null}
          </div>

          {book.relatedInterviewUrl && (
            <div className="mt-8 p-5 bg-ivory border border-line rounded-xl">
              <p className="text-xs tracking-widest uppercase text-copper-dark font-semibold mb-2">
                Watch alongside
              </p>
              <a
                href={book.relatedInterviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-lg text-ink hover:text-copper-dark transition"
              >
                Related interview on kafuideyinterviews.com
                <ExternalLinkIcon size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
