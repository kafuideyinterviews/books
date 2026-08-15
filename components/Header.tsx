"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import type { SupportedCurrency } from "@/lib/rates";
import { ExternalLinkIcon } from "@/components/icons";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Public Speaking", href: "/books?cat=public-speaking" },
  { label: "Interviews", href: "/books?cat=interviews" },
  { label: "MC", href: "/books?cat=mc" },
  { label: "About the Author", href: "/about" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currency, setCurrency, supported, source } = useCurrency();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/books?q=${encodeURIComponent(query.trim())}`;
    }
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      {/* Main header row — AbeBooks-style */}
      <div className="container-narrow flex items-center gap-5 py-3">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Kafui Dey Books — home"
        >
          <Image
            src="/logo.png"
            alt="Kafui Dey Books"
            width={96}
            height={96}
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            priority
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[22px] font-semibold text-ink">
              Kafui Dey
            </span>
            <span className="text-[12px] tracking-[0.22em] uppercase text-copper-dark">
              Books
            </span>
          </div>
        </Link>

        <form
          onSubmit={handleSearch}
          className="hidden md:flex flex-1 max-w-2xl items-stretch border border-line rounded-sm bg-white focus-within:border-ink transition"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title, category, or keyword"
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none"
          />
          <button
            type="submit"
            className="bg-bronze text-white text-sm font-medium px-5 hover:bg-bronze-dark inline-flex items-center gap-2"
            aria-label="Search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Search
          </button>
        </form>

        <div className="ml-auto flex items-center gap-4 text-sm">
          <div className="hidden sm:flex items-center gap-1.5 relative">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${
                source === "live" ? "bg-emerald-500" : "bg-copper"
              }`}
              title={
                source === "live"
                  ? "Live exchange rates"
                  : "Using fallback exchange rates"
              }
            />
            <select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value as SupportedCurrency)
              }
              className="bg-transparent border border-line rounded-sm px-2.5 py-1.5 text-xs font-medium text-ink hover:border-ink cursor-pointer focus:outline-none focus:border-ink"
              aria-label="Display currency"
            >
              {supported.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <Link
            href="/saved"
            aria-label="Saved books"
            className="relative text-ink hover:text-copper transition"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a
            href="https://kafuideyinterviews.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-ink text-cream text-sm font-medium px-4 py-2 rounded-sm hover:bg-bronze-dark transition"
          >
            Interviews
            <ExternalLinkIcon size={13} />
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <form
        onSubmit={handleSearch}
        className="md:hidden container-narrow pb-3"
      >
        <div className="flex items-stretch border border-line rounded-sm bg-white">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search titles…"
            className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-ink-soft focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="bg-bronze text-white px-4"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* Primary nav — spaced like AbeBooks */}
      <nav
        className={`border-t border-line bg-white ${
          mobileOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="container-narrow flex flex-col md:flex-row md:items-center md:justify-start gap-3 md:gap-10 lg:gap-12 py-3 text-[14px]">
          {primaryNav.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-ink hover:text-copper-dark py-1 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://kafuideyinterviews.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center gap-2 bg-ink text-cream text-sm font-medium px-4 py-2.5 rounded-sm w-fit"
          >
            Interviews
            <ExternalLinkIcon size={13} />
          </a>
        </div>
      </nav>
    </header>
  );
}
