import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { ExternalLinkIcon } from "@/components/icons";

const shopLinks = [
  { label: "All Books", href: "/books" },
  { label: "Public Speaking", href: "/books?cat=public-speaking" },
  { label: "Interviews", href: "/books?cat=interviews" },
  { label: "MC", href: "/books?cat=mc" },
  { label: "Saved for later", href: "/saved" },
];

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About the Author", href: "/about" },
  {
    label: "Kafui Dey Interviews",
    href: "https://kafuideyinterviews.com",
    external: true,
  },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Copyright Policy", href: "/copyright" },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kafuideymc",
    path: "M21.6 7.2a2.7 2.7 0 00-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 00-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 001.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 001.9-1.9C22 15.1 22 12 22 12s0-3.1-.4-4.8zm-11.1 7.7V9.1l5.1 2.9-5.1 2.9z",
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
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kafuidey",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7DcdeDekO7fOF08IlIWNkY",
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kafuidey7",
    path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z",
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/KafuiDeyHost/",
    path: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/kafuidey",
    // Classic Patreon mark: vertical stem + circle
    path: "M4 3.5h3.2v17H4V3.5zm10.3.2a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-navy text-white/60">
      {/* Newsletter */}
      <div className="border-b border-white/10 bg-bronze">
        <div className="container-narrow py-10 grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80 mb-2">
              Newsletter
            </p>
            <p className="font-display text-2xl sm:text-3xl text-white leading-tight">
              Join the reading list
            </p>
            <p className="text-sm text-white/85 mt-2 max-w-md leading-relaxed">
              New books, reading notes, and interview picks — a few times a year.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" aria-label="Kafui Dey Books — Home">
              <Image
                src="/logo.png"
                alt="Kafui Dey Books"
                width={400}
                height={160}
                className="h-28 sm:h-32 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-center md:text-left text-sm leading-relaxed text-white/50 max-w-sm">
              The official bookshop of author and broadcaster Kafui Dey —
              stories, conversations, and craft in print.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:justify-start">
              {socialLinks.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/50 transition-colors hover:text-gold"
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
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Shop
            </p>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore + contact */}
          <div>
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {exploreLinks.map((l) =>
                "external" in l && l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {l.label}
                      <ExternalLinkIcon size={12} />
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <a
              href="mailto:info@kafuideybooks.com"
              className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 transition-colors hover:border-white/20 hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 7l10 7 10-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              info@kafuideybooks.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-sm text-white/30">
              &copy; {year} Kafui Dey Books. All rights reserved.
            </p>
            <p className="text-sm text-white/50">
              Website Developed &amp; Designed by{" "}
              <a
                href="https://celestialwebsolutions.net/portfolio/kafui-dey-books"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
              >
                Celestial Web Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
