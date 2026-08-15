import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Copyright Policy",
  description:
    "Copyright Policy for Kafui Dey Books — ownership of content, permitted use, licensing, and how to report infringement.",
  alternates: { canonical: "/copyright" },
  robots: { index: true, follow: true },
};

export default function CopyrightPage() {
  const lastUpdated = "August 2026";

  return (
    <div className="bg-white">
      <div className="bg-[#f5f5f5] border-b border-line">
        <div className="container-narrow py-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-copper-dark font-semibold mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
            Copyright Policy
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
            Kafui Dey Books respects the intellectual property of others and
            expects the same of visitors to this Site. This Copyright Policy
            explains what is protected, how you may use it, and how to submit
            a takedown notice if you believe material on{" "}
            <span className="text-ink font-medium">kafuideybooks.com</span>{" "}
            infringes your rights.
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
              Copyright questions or takedown notices:{" "}
              <a
                href="mailto:info@kafuideybooks.com"
                className="text-copper-dark hover:underline"
              >
                info@kafuideybooks.com
              </a>
              . See also our{" "}
              <Link href="/terms" className="text-copper-dark hover:underline">
                Terms &amp; Conditions
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
    id: "ownership",
    title: "1. Ownership of content",
    body: (
      <p>
        All text, book covers, cover art, author photography, illustrations,
        the Kafui Dey monogram, the "Kafui Dey Books" wordmark, and the
        overall look and feel of this Site are the copyrighted property of
        Kafui Dey and Kafui Dey Books, or of the respective licensors and
        contributors, and are protected under Ghanaian and international
        copyright and trademark laws.
      </p>
    ),
  },
  {
    id: "books",
    title: "2. The books themselves",
    body: (
      <>
        <p>
          Each book sold or referenced on this Site — including its full text,
          cover art, and interior design — is protected by copyright. When you
          purchase a book you acquire that individual copy; you do not acquire
          the underlying copyright in the work.
        </p>
        <p>
          You may not reproduce, scan, upload, translate, or distribute the
          contents of any book, in whole or in part, in any medium, without
          the prior written permission of the copyright holder, except as
          permitted by fair-use / fair-dealing provisions in your jurisdiction
          (typically brief quotations for review, criticism, or scholarship
          with attribution).
        </p>
      </>
    ),
  },
  {
    id: "permitted-use",
    title: "3. Permitted use of Site content",
    body: (
      <>
        <p>You may:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            View, download, and print pages from the Site for your personal,
            non-commercial use.
          </li>
          <li>
            Share links to Site pages on social media and in reviews or
            articles, with appropriate attribution.
          </li>
          <li>
            Quote short excerpts (of the Site copy, not the books) with a
            visible credit to Kafui Dey Books and a link back to the source
            page.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "prohibited",
    title: "4. Prohibited use",
    body: (
      <>
        <p>Without prior written permission, you may not:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Republish or mirror substantial portions of the Site.</li>
          <li>
            Modify or adapt the Kafui Dey logo, wordmark, or brand colours.
          </li>
          <li>
            Use Site content to train, fine-tune, or evaluate machine-learning
            models.
          </li>
          <li>Sell, license, or commercially exploit any Site content.</li>
          <li>
            Use book covers, marketing imagery, or excerpts to imply
            endorsement of any third-party product or service.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "user-content",
    title: "5. Content you submit",
    body: (
      <p>
        If you submit reviews, comments, or other content to the Site, you
        retain ownership of your content but grant Kafui Dey Books a
        non-exclusive, royalty-free, perpetual, worldwide licence to use,
        reproduce, display, and adapt it in connection with the Site and
        related marketing. You represent that you have the right to grant
        this licence and that your submission does not infringe any third
        party's rights.
      </p>
    ),
  },
  {
    id: "takedown",
    title: "6. Reporting infringement (takedown notice)",
    body: (
      <>
        <p>
          If you believe that material on this Site infringes a copyright you
          own or control, please send a written notice to{" "}
          <a
            href="mailto:info@kafuideybooks.com"
            className="text-copper-dark hover:underline"
          >
            info@kafuideybooks.com
          </a>{" "}
          that includes:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Your name, address, telephone number, and email.</li>
          <li>
            A description of the copyrighted work you claim has been infringed.
          </li>
          <li>
            The URL(s) on this Site where the allegedly infringing material
            appears.
          </li>
          <li>
            A statement, made in good faith, that the use of the material is
            not authorised by the copyright owner, its agent, or the law.
          </li>
          <li>
            A statement that the information in your notice is accurate and
            that you are the copyright owner or authorised to act on the
            owner's behalf.
          </li>
          <li>Your physical or electronic signature.</li>
        </ol>
        <p>
          On receipt of a valid notice, we will investigate promptly and, where
          appropriate, remove or disable access to the material. We may share
          the notice with the party who uploaded the content.
        </p>
      </>
    ),
  },
  {
    id: "counter-notice",
    title: "7. Counter-notice",
    body: (
      <p>
        If content you submitted was removed and you believe the removal was
        in error, you may send a counter-notice to the same address, including
        your contact details, identification of the removed material, a
        statement under penalty of perjury that the removal was mistaken, and
        your consent to jurisdiction in Ghana.
      </p>
    ),
  },
  {
    id: "repeat",
    title: "8. Repeat-infringer policy",
    body: (
      <p>
        Accounts and contributors that repeatedly infringe copyright will be
        removed and may be reported to the relevant authorities. Kafui Dey
        Books reserves the right to take any additional action it considers
        appropriate.
      </p>
    ),
  },
  {
    id: "licensing",
    title: "9. Licensing enquiries",
    body: (
      <p>
        To licence a book cover, extract, interview clip, or brand asset for
        editorial, academic, or commercial use, please write to{" "}
        <a
          href="mailto:info@kafuideybooks.com"
          className="text-copper-dark hover:underline"
        >
          info@kafuideybooks.com
        </a>{" "}
        with a description of the intended use, the audience, and the
        territory. We are usually happy to grant reasonable requests.
      </p>
    ),
  },
];
