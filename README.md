# kafuideybooks.com

Next.js + Sanity scaffold. Selar + Amazon purchase links only — no on-site
checkout, no login (save-for-later uses localStorage).

## Setup
1. `npm install`
2. Copy `.env.local.example` to `.env.local` and fill in your Sanity
   project ID (create one free at sanity.io).
3. `npm run dev` — site at http://localhost:3000
4. Sanity Studio is embedded via `sanity.config.ts` — run
   `npx sanity dev` separately, or deploy Studio to a subpath later.

## Structure
- `app/` — Next.js App Router pages (Home, Books, Book detail, About, Saved)
- `components/` — Header (search beside logo, AbeBooks-style), Footer,
  BookCard, SaveForLaterButton
- `sanity/schemaTypes/` — Book, Category, Author document schemas
- `lib/` — Sanity client, GROQ queries, save-for-later hook

## Header layout
Logo + search bar sit side by side on one row (matching the AbeBooks
reference), with the nav (Books / About / Interviews) and currency
switcher below/beside it.

## Save for later
No login. Saved book slugs are stored in the browser's localStorage
only — per device, no backend. See `lib/useSavedBooks.ts`.

## Branding
- Navy `#0a1628` + gold accent, matching kafuideyinterviews.com
- Open-book vector icon used in the header logo, save icon, and empty states
