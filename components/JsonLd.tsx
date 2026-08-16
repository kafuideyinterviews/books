import {
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/lib/seo";
import { bookAuthors } from "@/lib/authors";

/** Sitewide JSON-LD for Google rich results */
export default function JsonLd() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/books?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-GH",
    },
    {
      "@type": ["Organization", "BookStore"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icons/icon-512.png`,
      },
      image: `${SITE_URL}/icons/icon-512.png`,
      description: DEFAULT_DESCRIPTION,
      email: "info@kafuideybooks.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Accra",
        addressCountry: "GH",
      },
      sameAs: [
        SOCIAL.interviews,
        SOCIAL.youtube,
        SOCIAL.instagram,
        "https://twitter.com/KafuiDey",
        "https://www.facebook.com/KafuiDeyHost/",
        "https://www.linkedin.com/in/kafuidey",
        "https://www.tiktok.com/@kafuidey7",
        "https://open.spotify.com/show/7DcdeDekO7fOF08IlIWNkY",
        "https://www.patreon.com/kafuidey",
      ],
      founder: {
        "@type": "Person",
        name: "Kafui Dey",
        url: SOCIAL.interviews,
        jobTitle: "Author, Broadcaster, Interviewer, Event Host",
      },
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BookJsonLd({
  title,
  description,
  slug,
  image,
  priceGhs,
  authors,
}: {
  title: string;
  description?: string;
  slug: string;
  image?: string;
  priceGhs?: number;
  authors?: string[];
}) {
  const names = bookAuthors(authors);
  const authorSchema =
    names.length === 1
      ? { "@type": "Person", name: names[0] }
      : names.map((name) => ({ "@type": "Person", name }));

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    description: description || undefined,
    url: `${SITE_URL}/books/${slug}`,
    image: image || undefined,
    author: authorSchema,
    publisher: {
      "@type": "Person",
      name: "Kafui Dey",
    },
    inLanguage: "en",
  };

  if (typeof priceGhs === "number") {
    data.offers = {
      "@type": "Offer",
      priceCurrency: "GHS",
      price: priceGhs,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/books/${slug}`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
