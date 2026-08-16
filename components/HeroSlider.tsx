"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

type HeroBook = {
  src: string;
  alt: string;
  href: string;
  position: string;
  float: string;
};

type Slide = {
  id: string;
  heading: ReactNode;
  support: string;
  ctaLabel: string;
  ctaHref: string;
  books: HeroBook[];
};

const slides: Slide[] = [
  {
    id: "speaking",
    heading: (
      <>
        If Knowledge Is Power,
        <br />
        Reading Is
        <br />
        Your Superpower!
      </>
    ),
    support: "Public speaking and MC craft — signed copies available.",
    ctaLabel: "Buy now",
    ctaHref: "/books",
    books: [
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
    ],
  },
  {
    id: "craft",
    heading: (
      <>
        Own the stage.
        <br />
        Build the career.
        <br />
        Speak the language.
      </>
    ),
    support:
      "Stage hosting, career keys, and a learner’s dictionary — browse by category.",
    ctaLabel: "Explore titles",
    ctaHref: "/books",
    books: [
      {
        src: "/sanity-books/own-the-stage.png",
        alt: "Own the Stage by Kafui Dey",
        href: "/books?cat=stage",
        position:
          "left-[2%] sm:left-[4%] -rotate-[14deg] z-10 w-[38%] sm:w-[36%] max-w-[200px]",
        float: "hero-book-float",
      },
      {
        src: "/sanity-books/from-talent-to-career.jpg",
        alt: "From Talent to Career by Kafui Dey",
        href: "/books?cat=career",
        position:
          "left-1/2 -translate-x-1/2 rotate-[2deg] z-30 w-[42%] sm:w-[40%] max-w-[220px]",
        float: "hero-book-float-mid",
      },
      {
        src: "/sanity-books/dey-english.png",
        alt: "Dey English Ewe Learner’s Dictionary by Victor Kwasi Dey & Kafui Dey",
        href: "/books?cat=language",
        position:
          "right-[2%] sm:right-[4%] rotate-[12deg] z-20 w-[38%] sm:w-[36%] max-w-[200px]",
        float: "hero-book-float-delayed",
      },
    ],
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden border-b border-line hero-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative container-narrow py-14 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center gap-10 lg:gap-8">
        <div className="relative z-10 max-w-xl">
          <p className="text-sm sm:text-[15px] tracking-[0.32em] uppercase text-ink-soft font-semibold mb-4 sm:mb-5">
            Kafui Dey Books
          </p>

          {slides.map((s, i) => (
            <div
              key={s.id}
              className={i === active ? "block" : "hidden"}
              aria-hidden={i !== active}
            >
              <h1 className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.06] text-ink mb-4 sm:mb-5">
                {s.heading}
              </h1>
              <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-7 sm:mb-8 max-w-md">
                {s.support}
              </p>
              <Link
                href={s.ctaHref}
                className="inline-flex items-center gap-2.5 bg-ink text-cream font-semibold tracking-[0.12em] uppercase text-[15px] px-9 py-4 hover:bg-bronze-dark transition-colors"
              >
                {s.ctaLabel}
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          ))}

          <div
            className="flex items-center gap-2 mt-8"
            role="tablist"
            aria-label="Hero slides"
          >
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-bronze-dark"
                    : "w-2 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none h-[340px] sm:h-[400px] lg:h-[460px]">
          <div
            aria-hidden
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[78%] h-10 rounded-[100%] bg-ink/10 blur-2xl"
          />

          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== active}
            >
              {s.books.map((book) => (
                <Link
                  key={book.src}
                  href={book.href}
                  className={`absolute bottom-8 aspect-[2/3] origin-bottom transition-transform duration-500 ease-out hover:-translate-y-2 ${
                    book.position.includes("w-[")
                      ? book.position
                      : `w-[46%] sm:w-[44%] max-w-[240px] ${book.position}`
                  }`}
                  aria-label={book.alt}
                  tabIndex={i === active ? 0 : -1}
                >
                  <span className={`block h-full w-full ${book.float}`}>
                    <span className="relative block h-full w-full rounded-[3px] overflow-hidden bg-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45),0_8px_16px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
                      <Image
                        src={book.src}
                        alt={book.alt}
                        fill
                        sizes="(max-width: 768px) 40vw, 220px"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
