import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions for shopping at Kafui Dey Books — orders, shipping, returns, and use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = "August 2026";

  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-ink-muted">Last updated: {lastUpdated}</p>
        </div>
      </div>

      <div className="container-narrow py-12 grid md:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden md:block">
          <nav className="sticky top-32 text-sm space-y-2 text-ink-muted">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block hover:text-copper-dark"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl space-y-10">
          <p className="text-ink-muted leading-relaxed">
            Welcome to Kafui Dey Books ("we", "us", "our"). By accessing or
            using{" "}
            <span className="text-ink font-medium">kafuideybooks.com</span> (the
            "Site") you agree to the following terms. Please read them
            carefully. If you do not agree, please do not use the Site.
          </p>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl text-ink mb-3">
                {s.title}
              </h2>
              <div className="text-ink-muted leading-relaxed space-y-3 text-[15px]">
                {s.body}
              </div>
            </section>
          ))}

          <div className="border-t border-line pt-8">
            <p className="text-ink-muted text-sm">
              Questions about these terms? Email{" "}
              <a
                href="mailto:info@kafuideybooks.com"
                className="text-copper-dark hover:underline"
              >
                info@kafuideybooks.com
              </a>
              . See also our{" "}
              <Link
                href="/copyright"
                className="text-copper-dark hover:underline"
              >
                Copyright Policy
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    body: (
      <p>
        By using the Site or purchasing books through it, you confirm that you
        are at least the age of majority in your jurisdiction, that the
        information you provide is accurate, and that you accept these Terms
        and any policies referenced within them (including our Copyright
        Policy).
      </p>
    ),
  },
  {
    id: "orders",
    title: "2. Orders and purchases",
    body: (
      <>
        <p>
          The Site lists books available directly from Kafui Dey Books and also
          links to third-party retailers such as Selar and Amazon. Purchases
          made on those third-party sites are subject to their own terms and
          policies — Kafui Dey Books is not a party to those transactions.
        </p>
        <p>
          For direct orders placed with Kafui Dey Books, we reserve the right
          to refuse or cancel any order at our discretion, including for
          reasons of stock availability, pricing errors, or suspected fraud.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "3. Pricing and payments",
    body: (
      <p>
        Prices are shown in Ghanaian Cedi (GHS) unless otherwise stated. Prices
        at retailers such as Selar and Amazon are set independently and may
        differ. We reserve the right to update prices at any time; the price
        applicable to your order is the price displayed at checkout.
      </p>
    ),
  },
  {
    id: "shipping",
    title: "4. Shipping and delivery",
    body: (
      <p>
        Direct orders are typically dispatched within 3–5 business days.
        Delivery timelines depend on the shipping option chosen and the
        destination. Risk of loss passes to you once the parcel is handed to
        the courier. For orders placed via Selar or Amazon, please refer to
        their respective shipping policies.
      </p>
    ),
  },
  {
    id: "returns",
    title: "5. Returns and refunds",
    body: (
      <>
        <p>
          Direct orders may be returned within 14 days of delivery if the book
          is in original, resalable condition. Signed and inscribed copies are
          non-returnable except where the item is defective.
        </p>
        <p>
          Refunds are issued to the original payment method within a reasonable
          time after we receive the returned book. Returns for purchases made
          on Selar or Amazon must be handled through those platforms.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "6. User content and reviews",
    body: (
      <p>
        If you submit reviews, comments, or other content to the Site, you
        grant Kafui Dey Books a non-exclusive, royalty-free, worldwide licence
        to use, display, and reproduce that content in connection with the
        Site. You are responsible for the content you post and must not
        submit anything unlawful, defamatory, or infringing.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable use",
    body: (
      <p>
        You agree not to misuse the Site, including by attempting to breach
        security, scraping content in bulk, or using automated systems to
        access it in ways that place unreasonable load on our infrastructure.
        Reverse-engineering, republishing, or reselling content from this Site
        without written permission is prohibited.
      </p>
    ),
  },
  {
    id: "ip",
    title: "8. Intellectual property",
    body: (
      <p>
        All content on this Site — including text, book covers, images, logo
        marks, and design — is owned by Kafui Dey and Kafui Dey Books or its
        licensors, and is protected by copyright and trademark laws. See our{" "}
        <Link href="/copyright" className="text-copper-dark hover:underline">
          Copyright Policy
        </Link>{" "}
        for details.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "9. Third-party links",
    body: (
      <p>
        The Site links to third-party sites (including Selar, Amazon, and
        kafuideyinterviews.com). We are not responsible for the content,
        policies, or practices of those sites. Your interactions with them are
        subject to their own terms.
      </p>
    ),
  },
  {
    id: "liability",
    title: "10. Limitation of liability",
    body: (
      <p>
        To the fullest extent permitted by law, Kafui Dey Books shall not be
        liable for any indirect, incidental, special, consequential, or
        punitive damages arising from your use of the Site or products
        purchased through it. Nothing in these terms limits liability for
        fraud or for anything that cannot be excluded by applicable law.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "11. Privacy",
    body: (
      <p>
        We collect only what is necessary to fulfil orders, respond to
        enquiries, and improve the Site. We do not sell your personal
        information. Saved-for-later titles are stored in your browser's
        localStorage on your device only.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. The "last updated" date
        at the top reflects the latest version. Continued use of the Site
        after changes are posted constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "13. Governing law",
    body: (
      <p>
        These terms are governed by the laws of Ghana. Any dispute arising
        under them shall be resolved in the competent courts of Ghana, unless
        otherwise required by mandatory local consumer law.
      </p>
    ),
  },
  {
    id: "contact",
    title: "14. Contact",
    body: (
      <p>
        Kafui Dey Books · Accra, Ghana ·{" "}
        <a
          href="mailto:info@kafuideybooks.com"
          className="text-copper-dark hover:underline"
        >
          info@kafuideybooks.com
        </a>
      </p>
    ),
  },
];
