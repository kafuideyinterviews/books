"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BookOpenIcon,
  OpenBookVector,
} from "@/components/icons";

type Slide = {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const slides: Slide[] = [
  {
    eyebrow: "Kafui Dey Books",
    heading: "Stories, conversations, and craft — in print.",
    body: "The official home for books by author and broadcaster Kafui Dey. Order directly, on Selar, or on Amazon.",
    ctaLabel: "Browse the collection",
    ctaHref: "/books",
  },
  {
    eyebrow: "New Release",
    heading: "A new chapter, freshly bound.",
    body: "Discover the latest title — signed copies available while stocks last.",
    ctaLabel: "Shop new arrivals",
    ctaHref: "/books?sort=new",
  },
  {
    eyebrow: "Everywhere You Read",
    heading: "Buy directly, on Selar, or on Amazon.",
    body: "Wherever you shop for books, you'll find Kafui's titles ready for you.",
    ctaLabel: "See where to buy",
    ctaHref: "/books",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative overflow-hidden bg-white border-b border-line">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 bg-[#f5f5f5] hidden md:block"
      />

      <div className="relative container-narrow py-20 sm:py-28 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-12">
        <div>
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-5">
            {slide.eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-ink mb-5">
            {slide.heading}
          </h1>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-lg mb-8">
            {slide.body}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-6 py-3 rounded-full hover:bg-bronze-dark transition"
            >
              {slide.ctaLabel}
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink font-medium px-6 py-3 rounded-full hover:border-copper hover:text-copper-dark transition"
            >
              About Kafui
            </Link>
          </div>

          {/* Available on */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-ink-muted">
            <span className="tracking-[0.18em] uppercase font-semibold text-ink-soft">
              Available on
            </span>
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-ink hover:text-copper-dark transition font-medium"
            >
              <BookOpenIcon size={15} className="text-copper-dark" />
              Buy Direct
            </Link>
            <span className="text-line" aria-hidden="true">
              |
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/selar.png" alt="Selar" className="h-7 w-auto" />
            <span className="text-line" aria-hidden="true">
              |
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/amazon-logo.svg" alt="Amazon" className="h-6 w-auto" />
          </div>

          <div className="mt-10 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-8 bg-copper-dark"
                    : "w-2 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center">
          <OpenBookVector size={420} className="text-bronze" />
        </div>
      </div>
    </section>
  );
}
