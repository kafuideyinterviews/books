import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { ExternalLinkIcon, MailIcon } from "@/components/icons";

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
  { label: "Contact", href: "mailto:info@kafuideybooks.com" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Copyright Policy", href: "/copyright" },
];

/** Social profiles linked from kafuideyinterviews.com */
const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@kafuideymc",
    icon: YouTubeIcon,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/7DcdeDekO7fOF08IlIWNkY",
    icon: SpotifyIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kafuidey/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/KafuiDeyHost/",
    icon: FacebookIcon,
  },
  {
    label: "X",
    href: "https://twitter.com/KafuiDey",
    icon: XIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@kafuidey7",
    icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kafuidey",
    icon: LinkedInIcon,
  },
  {
    label: "Patreon",
    href: "https://www.patreon.com/kafuidey",
    icon: PatreonIcon,
  },
];

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12c0-2.4-.3-4.1-.3-4.1-.3-1.1-1.1-1.9-2.2-2.2C18.5 5.4 12 5.4 12 5.4s-6.5 0-8.5.3c-1.1.3-1.9 1.1-2.2 2.2C1 9.9 1 12 1 12s0 2.1.3 4.1c.3 1.1 1.1 1.9 2.2 2.2 2 .3 8.5.3 8.5.3s6.5 0 8.5-.3c1.1-.3 1.9-1.1 2.2-2.2.3-2 .3-4.1.3-4.1ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function SpotifyIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.3-.9-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.6-.8 6.7-.4 9.2 1.1.3.1.4.5.2.7Zm1.2-2.7c-.2.3-.6.5-1 .3-2.5-1.5-6.4-2-9.4-1.1-.4.1-.8-.1-.9-.5-.1-.4.1-.8.5-.9 3.4-1 7.7-.5 10.6 1.2.4.2.5.6.2 1Zm.1-2.8c-3-1.8-8-2-10.9-1.1-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.3-1 8.8-.8 12.3 1.2.4.2.5.8.2 1.2-.2.3-.8.5-1.2.3Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.53 7.46L22 22h-6.828l-4.77-6.24L4.8 22H2l7-8L2 2h6.914l4.36 5.77L18.244 2Zm-2.4 18h1.594L7.22 4H5.52l10.324 16Z" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 7.2A5.6 5.6 0 0 1 16.3 4h-2.7v11.1a2.7 2.7 0 1 1-1.9-2.6V9.6a5.4 5.4 0 1 0 4.6 5.3V9.7a8.2 8.2 0 0 0 4.8 1.5V8.4a5.6 5.6 0 0 1-1.5-1.2Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.3 20h-2.8v-5.6c0-1.6-.6-2.4-1.7-2.4-1.1 0-1.7.8-1.7 2.5V20H11V9.5h2.7v1.3c.5-.9 1.5-1.6 3-1.6 2.2 0 3.6 1.4 3.6 4.4V20Z" />
    </svg>
  );
}

function PatreonIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="14.5" cy="10" r="5.5" />
      <rect x="3.5" y="4" width="3.5" height="16" rx="0.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-cream/75">
      {/* Newsletter */}
      <div className="border-b border-cream/10 bg-bronze">
        <div className="container-narrow py-10 grid gap-6 md:grid-cols-[1.2fr_auto] md:items-center">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/80 font-semibold mb-2">
              Newsletter
            </p>
            <p className="font-display text-2xl sm:text-3xl text-white leading-tight">
              Join the reading list
            </p>
            <p className="text-sm text-white/85 mt-2 max-w-md">
              New books, reading notes, and interview picks — a few times a year.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main columns */}
      <div className="container-narrow py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Kafui Dey Books"
                width={112}
                height={112}
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
              />
              <div className="leading-tight">
                <span className="font-display text-xl text-cream block">
                  Kafui Dey
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase text-copper-light">
                  Books
                </span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              The official bookshop of author and broadcaster Kafui Dey —
              stories, conversations, and craft in print.
            </p>
            <a
              href="mailto:info@kafuideybooks.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-copper-light transition"
            >
              <MailIcon size={15} />
              info@kafuideybooks.com
            </a>

            {/* Social */}
            <div className="mt-7">
              <p className="text-[11px] tracking-[0.2em] uppercase text-cream/50 font-semibold mb-3">
                Follow Kafui
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="h-10 w-10 inline-flex items-center justify-center rounded-sm border border-cream/15 text-cream/80 hover:border-copper-light hover:text-copper-light hover:bg-cream/5 transition"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-cream text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-cream/70 hover:text-copper-light transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-cream text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((l) =>
                (l as { external?: boolean }).external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cream/70 hover:text-copper-light transition"
                    >
                      {l.label}
                      <ExternalLinkIcon size={12} />
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-cream/70 hover:text-copper-light transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream text-xs font-semibold tracking-[0.18em] uppercase mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-cream/70 hover:text-copper-light transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-narrow py-5 flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-between sm:text-left gap-3 text-xs text-cream/50">
          <p>
            © {new Date().getFullYear()} Kafui Dey Books. All rights reserved.
          </p>
          <p>
            Website Development by{" "}
            <a
              href="https://celestialwebsolutions.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper-light hover:underline"
            >
              Celestial Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
