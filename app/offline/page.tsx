import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
        Offline
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-ink mb-3">
        You're offline
      </h1>
      <p className="text-ink-muted max-w-md mb-6">
        Check your connection and try again. Previously visited pages may still
        be available from cache.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-5 py-2.5 rounded-sm text-sm hover:bg-bronze-dark transition"
      >
        Back to home
      </a>
    </div>
  );
}
