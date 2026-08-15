import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, #a16e42 0%, transparent 55%)",
        }}
        aria-hidden
      />

      <Image
        src="/logo.png"
        alt=""
        width={88}
        height={88}
        className="h-16 w-16 object-contain mb-8 opacity-90"
      />

      <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
        Error 404
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
        Page not found
      </h1>
      <p className="text-ink-muted max-w-md mb-10 leading-relaxed">
        This page doesn&apos;t exist — or it may have moved. Head home, browse
        the books, or open the content studio if you meant to edit.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ink text-cream font-medium px-5 py-2.5 rounded-sm text-sm hover:bg-bronze-dark transition"
        >
          Back to home
        </Link>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 border border-line bg-white text-ink font-medium px-5 py-2.5 rounded-sm text-sm hover:border-ink transition"
        >
          Browse books
        </Link>
        <Link
          href="/studio"
          className="inline-flex items-center gap-2 text-copper-dark font-medium px-3 py-2.5 text-sm hover:text-ink transition"
        >
          Open studio →
        </Link>
      </div>
    </div>
  );
}
