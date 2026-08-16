"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  { label: "Saved for later", href: "/saved" },
];

const mobileSocials = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kafuideymc",
    path: "M21.6 7.2a2.7 2.7 0 00-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 00-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 001.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 001.9-1.9C22 15.1 22 12 22 12s0-3.1-.4-4.8zm-11.1 7.7V9.1l5.1 2.9-5.1 2.9z",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/KafuiDeyHost/",
    path: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kafuidey/",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.3 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.1 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9-.2-4.4-2.6-6.8-7-7C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z",
  },
  {
    label: "X",
    href: "https://twitter.com/KafuiDey",
    path: "M18.9 2h3.1l-6.8 7.8L23 22h-6.3l-4.9-6.4L5.9 22H2.8l7.3-8.3L2 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L6.3 3.7H4.5L17.8 20z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kafuidey7",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7DcdeDekO7fOF08IlIWNkY",
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kafuidey",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const pathOnly = href.split("?")[0];
  if (pathOnly !== "/books") return pathname.startsWith(pathOnly);
  return pathname === "/books" || pathname.startsWith("/books/");
}

export default function Header() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { currency, setCurrency, supported, source } = useCurrency();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/books?q=${encodeURIComponent(query.trim())}`;
    }
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-line">
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
            className="hidden lg:flex flex-1 max-w-2xl items-stretch border border-line rounded-sm bg-white focus-within:border-ink transition"
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
              className="hidden lg:inline-flex items-center gap-2 bg-ink text-cream text-sm font-medium px-4 py-2 rounded-sm hover:bg-bronze-dark transition"
            >
              Interviews
              <ExternalLinkIcon size={13} />
            </a>

            {/* Animated hamburger — interviews site pattern */}
            <button
              type="button"
              className="lg:hidden -mr-1 p-2 text-ink"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`mt-[5px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`mt-[5px] block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="lg:hidden container-narrow pb-3"
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

        {/* Desktop nav only */}
        <nav className="hidden lg:block border-t border-line bg-white">
          <div className="container-narrow flex flex-row items-center justify-start gap-10 lg:gap-12 py-3 text-[14px]">
            {primaryNav
              .filter((l) => l.href !== "/saved")
              .map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`whitespace-nowrap py-1 hover:text-copper-dark ${
                    isActive(pathname, link.href)
                      ? "text-copper-dark font-medium"
                      : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </nav>
      </header>

      {/* Full-screen mobile menu — kafuideyinterviews.com structure */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[55] flex flex-col bg-navy transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-4 sm:px-8 md:px-10">
          <Link
            href="/"
            aria-label="Kafui Dey Books — Home"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Kafui Dey Books"
              width={160}
              height={56}
              className="h-14 md:h-16 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="-mr-1 p-2 text-white/60 hover:text-white"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col overflow-y-auto px-8 sm:px-10 md:px-14 py-6 md:py-10 max-w-2xl md:max-w-3xl w-full mx-auto">
          {primaryNav.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/10 py-4 md:py-5 font-display text-2xl md:text-3xl italic transition-colors ${
                  active ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <a
            href="https://kafuideyinterviews.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 md:py-4 text-center font-sans text-sm md:text-base font-semibold uppercase tracking-widest text-navy transition-all duration-200 hover:bg-[#a8893e] hover:text-white"
          >
            Kafui Dey Interviews
            <ExternalLinkIcon size={14} />
          </a>
        </nav>

        <div className="shrink-0 border-t border-white/10 px-8 sm:px-10 md:px-14 pt-5 pb-4 max-w-2xl md:max-w-3xl w-full mx-auto">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${
                source === "live" ? "bg-emerald-500" : "bg-copper"
              }`}
            />
            <span className="text-xs uppercase tracking-widest text-white/40">
              Currency
            </span>
            <select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value as SupportedCurrency)
              }
              className="bg-transparent border border-white/20 rounded-sm px-3 py-2 text-sm text-white focus:outline-none focus:border-gold"
              aria-label="Display currency"
            >
              {supported.map((c) => (
                <option key={c} value={c} className="text-ink">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-center md:justify-start gap-5 px-8 sm:px-10 md:px-14 pb-6 max-w-2xl md:max-w-3xl w-full mx-auto">
          {mobileSocials.map(({ label, href, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/40 transition-colors hover:text-gold"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="shrink-0 px-8 sm:px-10 md:px-14 pb-8 font-sans text-xs text-white/20 max-w-2xl md:max-w-3xl w-full mx-auto">
          &copy; {new Date().getFullYear()} Kafui Dey Books
        </p>
      </div>
    </>
  );
}
