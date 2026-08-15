import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  MailIcon,
  PlayIcon,
  BookOpenIcon,
  PenIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Kafui Dey — Broadcaster, Interviewer & Author",
  description:
    "Meet Kafui Dey — Ghanaian broadcaster, interviewer, event host, and author. Discover the voice behind conversations that matter and the books that carry them further.",
  keywords: [
    "Kafui Dey biography",
    "Ghanaian broadcaster",
    "Kafui Dey author",
    "event host Ghana",
    "interviewer Accra",
    "public speaking trainer",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kafui Dey · Kafui Dey Books",
    description:
      "Broadcaster. Storyteller. Author. The man behind conversations that matter.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            About the author
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
            Kafui Dey
          </h1>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            Broadcaster. Storyteller. Author. Kafui Dey has spent his career
            behind microphones and cameras — turning conversations into memory.
            His books gather that same warmth and curiosity onto the page.
          </p>
        </div>
      </div>

      {/* Highlights row */}
      <div className="container-narrow pt-12">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              Icon: PlayIcon,
              title: "The broadcaster",
              body: "Decades on radio and television, from morning shows to major national events.",
            },
            {
              Icon: BookOpenIcon,
              title: "The interviewer",
              body: "Over a thousand conversations with leaders, artists, and everyday newsmakers.",
            },
            {
              Icon: PenIcon,
              title: "The author",
              body: "Books that distil those years of listening into stories worth keeping.",
            },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-line rounded-2xl p-6 shadow-card"
            >
              <div className="w-10 h-10 rounded-full bg-ivory text-copper-dark flex items-center justify-center mb-4">
                <Icon size={20} />
              </div>
              <p className="font-display text-lg text-ink mb-1">{title}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-narrow py-14 grid md:grid-cols-[1fr_320px] gap-12">
        <article className="prose max-w-none text-ink-muted leading-relaxed space-y-5">
          <p>
            Kafui Dey is one of Ghana's best-known broadcasters. From
            long-running television magazine shows to on-camera interviews with
            leaders, artists, and everyday newsmakers, his voice has become
            shorthand for calm, careful, generous conversation.
          </p>
          <p>
            His writing follows the same instinct. The books on this shop are
            distillations of years of listening — stories, essays, and
            interviews put down in print so they can travel further than the
            broadcast.
          </p>
          <p>
            You can buy each title directly here, or via Selar and Amazon —
            whichever is easiest for you. Signed copies are available on direct
            orders while stocks last.
          </p>

          <h3 className="font-display text-2xl text-ink !mb-2 !mt-8">
            Elsewhere
          </h3>
          <p>
            For the on-camera companion to this shop, visit{" "}
            <a
              href="https://kafuideyinterviews.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper-dark hover:underline"
            >
              kafuideyinterviews.com
            </a>{" "}
            — a home for the interviews, features, and long conversations that
            inspire the books.
          </p>
        </article>

        <aside className="bg-white border border-line rounded-2xl p-6 h-fit sticky top-32 shadow-card">
          <p className="text-xs tracking-widest uppercase text-copper-dark font-semibold mb-3">
            Get in touch
          </p>
          <p className="text-sm text-ink-muted mb-4">
            For bulk orders, event copies, or press requests.
          </p>
          <a
            href="mailto:info@kafuideybooks.com"
            className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-4 py-2 rounded-full text-sm hover:bg-bronze-dark transition"
          >
            <MailIcon size={15} />
            info@kafuideybooks.com
          </a>
          <div className="mt-6 pt-6 border-t border-line">
            <p className="text-xs text-ink-soft leading-relaxed">
              Kafui Dey Books is the official bookshop of Kafui Dey. All
              purchases support his continued work.
            </p>
          </div>
          <Link
            href="/books"
            className="mt-6 flex items-center justify-center gap-1.5 border border-line rounded-full px-4 py-2 text-sm text-ink hover:border-copper hover:text-copper-dark transition"
          >
            Browse all books
            <ArrowRightIcon size={14} />
          </Link>
        </aside>
      </div>
    </div>
  );
}
