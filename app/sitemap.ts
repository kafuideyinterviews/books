import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity.client";
import { SITE_URL } from "@/lib/seo";
import { groq } from "next-sanity";

const bookSlugsQuery = groq`
  *[_type == "book" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/books`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/copyright`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  let bookRoutes: MetadataRoute.Sitemap = [];
  try {
    const books: { slug: string; _updatedAt?: string }[] = await client.fetch(
      bookSlugsQuery
    );
    bookRoutes = books
      .filter((b) => b?.slug)
      .map((b) => ({
        url: `${SITE_URL}/books/${b.slug}`,
        lastModified: b._updatedAt ? new Date(b._updatedAt) : now,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      }));
  } catch {
    // Sanity unavailable — still publish static routes
  }

  return [...staticRoutes, ...bookRoutes];
}
