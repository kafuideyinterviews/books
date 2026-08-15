import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

const heroBooks = [
  {
    src: "/sanity-books/public-speaking.webp",
    alt: "Public Speaking A to Z by Kafui Dey",
    href: "/books?cat=public-speaking",
    position:
      "left-[8%] sm:left-[12%] md:left-[6%] -rotate-[11deg] z-10",
    float: "hero-book-float",
  },
  {
    src: "/sanity-books/mc-kafui.jpg",
    alt: "How to MC Any Event by Kafui Dey",
    href: "/books?cat=mc",
    position:
      "right-[6%] sm:right-[10%] md:right-[4%] rotate-[8deg] z-20",
    float: "hero-book-float-delayed",
  },
] as const;

export default function HeroSlider() {
  return (
    <section className="relative overflow-hidden border-b border-line hero-paper">
      <div className="relative container-narrow py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center gap-10 lg:gap-8">
        <div className="relative z-10 max-w-xl">
          <p className="text-sm sm:text-[15px] tracking-[0.32em] uppercase text-ink-soft font-semibold mb-4 sm:mb-5">
            Kafui Dey Books
          </p>
          <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.06] text-ink mb-7 sm:mb-8">
            If Knowledge Is Power,
            <br />
            Reading Is
            <br />
            Your Superpower!
          </h1>
          <Link
            href="/books"
            className="inline-flex items-center gap-2.5 bg-ink text-cream font-semibold tracking-[0.12em] uppercase text-[15px] px-9 py-4 hover:bg-bronze-dark transition-colors"
          >
            Buy now
            <ArrowRightIcon size={15} />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none h-[340px] sm:h-[400px] lg:h-[460px]">
          <div
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[78%] h-10 rounded-[100%] bg-ink/10 blur-2xl"
          />

          {heroBooks.map((book) => (
            <Link
              key={book.src}
              href={book.href}
              className={`absolute bottom-8 w-[46%] sm:w-[44%] max-w-[240px] aspect-[2/3] origin-bottom transition-transform duration-500 ease-out hover:-translate-y-2 ${book.position}`}
              aria-label={book.alt}
            >
              <span className={`block h-full w-full ${book.float}`}>
                <span className="relative block h-full w-full rounded-[3px] overflow-hidden bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45),0_8px_16px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
                  <Image
                    src={book.src}
                    alt={book.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 240px"
                    className="object-cover"
                    priority
                  />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
