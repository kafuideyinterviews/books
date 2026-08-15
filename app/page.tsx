import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/lib/sanity.client";
import { allBooksQuery, allCategoriesQuery } from "@/lib/queries";
import BookCard from "@/components/BookCard";
import HeroSlider from "@/components/HeroSlider";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BookmarkIcon,
  PenIcon,
  TruckIcon,
} from "@/components/icons";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_KEYWORDS } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
  },
};

const valueProps = [
  {
    title: "Signed by the author",
    body: "Direct orders can be signed and inscribed by Kafui himself.",
    Icon: PenIcon,
  },
  {
    title: "Delivered across Ghana",
    body: "Reliable courier delivery to every region.",
    Icon: TruckIcon,
  },
  {
    title: "Save for later",
    body: "Shortlist titles without an account — they stay on this device.",
    Icon: BookmarkIcon,
  },
];

const retailers = [
  {
    name: "Kafui Dey Books",
    tag: "Direct",
    body: "Order straight from the author. Signed copies, local delivery, and every purchase supports the work directly.",
    logo: null as string | null,
    Icon: BookOpenIcon,
    cta: { label: "Browse the shop", href: "/books" },
    highlight: true,
  },
  {
    name: "Selar",
    tag: "Digital & Print",
    body: "Instant checkout in cedis with mobile money. The easiest option for readers across West Africa.",
    logo: "/selar.png",
    Icon: null,
    cta: { label: "Find titles on Selar", href: "/books" },
    highlight: false,
  },
  {
    name: "Amazon",
    tag: "Worldwide",
    body: "Paperback and Kindle editions shipped internationally. Ideal for readers in Europe, the UK, and the Americas.",
    logo: "/amazon-logo.svg",
    Icon: null,
    cta: { label: "Find titles on Amazon", href: "/books" },
    highlight: false,
  },
];

const faqs = [
  {
    q: "How do I get a signed copy?",
    a: "Order directly through this site and leave a note at checkout with the name you'd like inscribed. Signed copies are available while stocks last.",
  },
  {
    q: "Do you deliver outside Ghana?",
    a: "Direct delivery covers Ghana. For international orders, each book links to Amazon, which ships paperback and Kindle editions worldwide.",
  },
  {
    q: "Can I pay with mobile money?",
    a: "Yes — purchases made through Selar support mobile money and card payments in cedis.",
  },
  {
    q: "What currency are the prices in?",
    a: "Base prices are in Ghana Cedis. Use the currency switcher in the header to see live-converted prices in USD, EUR, or GBP.",
  },
  {
    q: "How does 'Save for later' work?",
    a: "Tap the bookmark on any title and it's kept in your browser — no account, no sign-up. Your shortlist stays on this device only.",
  },
];

export default async function HomePage() {
  const [books, categories] = await Promise.all([
    client.fetch(allBooksQuery).catch(() => []),
    client.fetch(allCategoriesQuery).catch(() => []),
  ]);

  const featured = (books as any[]).filter((b) => b.featured);
  const featuredBooks =
    featured.length > 0 ? featured : (books as any[]).slice(0, 8);

  return (
    <>
      <HeroSlider />

      {/* Value proposition strip */}
      <section className="border-y border-line bg-white">
        <div className="container-narrow py-12 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 max-w-5xl mx-auto">
            {valueProps.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="mb-4 text-bronze-dark">
                  <Icon size={34} strokeWidth={1.75} />
                </div>
                <p className="font-display text-xl sm:text-[1.35rem] font-semibold text-ink leading-snug">
                  {title}
                </p>
                <p className="text-[15px] sm:text-base text-ink-muted leading-relaxed mt-2 max-w-[280px]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories tiles */}
      {categories.length > 0 && (
        <section className="container-narrow py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-2">
                Browse
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Explore by category
              </h2>
            </div>
            <Link
              href="/books"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-copper-dark hover:underline"
            >
              View all books
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((c: any, i: number) => (
              <Link
                key={c._id}
                href={`/books?cat=${encodeURIComponent(c.slug || c.title)}`}
                className={`group relative overflow-hidden rounded-xl border border-line p-6 h-32 flex items-end ${
                  i % 3 === 0
                    ? "bg-ivory"
                    : i % 3 === 1
                    ? "bg-copper/10"
                    : "bg-sand/25"
                } hover:shadow-cardHover transition`}
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-copper/20 group-hover:bg-copper/35 transition" />
                <div className="relative">
                  <p className="font-display text-lg text-ink group-hover:text-copper-dark transition">
                    {c.title}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                    Shop titles
                    <ArrowRightIcon size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured books — main homepage content */}
      <section className="bg-white border-y border-line">
        <div className="container-narrow py-14">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-2">
                Featured
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink">
                Featured books
              </h2>
            </div>
            <Link
              href="/books"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-copper-dark hover:underline"
            >
              View all books
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          {featuredBooks.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {featuredBooks.map((b: any) => (
                <BookCard key={b._id} book={b} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-6 py-3 rounded-full hover:bg-bronze-dark transition"
            >
              View all books
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Where to buy */}
      <section className="border-y border-line">
        <div className="container-narrow py-16">
          <div className="text-center mb-10">
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-2">
              Where to buy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Three ways to get your copy
            </h2>
            <p className="text-ink-muted mt-3 max-w-xl mx-auto">
              Every title lists its available channels — choose whichever suits
              you best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {retailers.map(({ name, tag, body, Icon, logo, cta, highlight }) => (
              <div
                key={name}
                className={`rounded-sm p-7 flex flex-col ${
                  highlight
                    ? "bg-ink text-cream shadow-cardHover"
                    : "bg-white border border-line"
                }`}
              >
                <div
                  className={`h-11 flex items-center mb-5 ${
                    highlight ? "text-white" : "text-ink"
                  }`}
                >
                  {logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={logo} alt={name} className="h-8 w-auto" />
                  ) : Icon ? (
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center ${
                        highlight
                          ? "bg-bronze text-white"
                          : "bg-[#f5f5f5] text-copper-dark"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                  ) : null}
                </div>
                <p
                  className={`text-[10px] tracking-[0.24em] uppercase font-semibold mb-1 ${
                    highlight ? "text-copper-light" : "text-copper-dark"
                  }`}
                >
                  {tag}
                </p>
                <h3
                  className={`font-display text-xl mb-2 ${
                    highlight ? "text-cream" : "text-ink"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    highlight ? "text-cream/75" : "text-ink-muted"
                  }`}
                >
                  {body}
                </p>
                <Link
                  href={cta.href}
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${
                    highlight
                      ? "text-copper-light hover:text-cream"
                      : "text-copper-dark hover:text-bronze-dark"
                  } transition`}
                >
                  {cta.label}
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-narrow py-16">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-2">
              Good to know
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink mb-4">
              Frequently asked questions
            </h2>
            <p className="text-ink-muted leading-relaxed text-sm">
              Can't find what you're looking for? Write to{" "}
              <a
                href="mailto:info@kafuideybooks.com"
                className="text-copper-dark hover:underline"
              >
                info@kafuideybooks.com
              </a>{" "}
              and we'll get back to you.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-line rounded-xl px-6 py-4 open:shadow-card"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink text-[15px]">
                  {f.q}
                  <span className="text-copper-dark transition-transform group-open:rotate-180">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-sm text-ink-muted leading-relaxed mt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
