import { client } from "@/lib/sanity.client";
import { allBooksQuery } from "@/lib/queries";
import SavedBooks from "@/components/SavedBooks";

export const revalidate = 30;

export default async function SavedPage() {
  const books = await client.fetch(allBooksQuery).catch(() => []);

  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            Your shortlist
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
            Saved for later
          </h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            Titles you&apos;ve shortlisted on this device. No account needed —
            they stay in your browser only.
          </p>
        </div>
      </div>

      <div className="container-narrow py-12">
        <SavedBooks books={books} />
      </div>
    </div>
  );
}
