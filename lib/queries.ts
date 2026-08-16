import { groq } from "next-sanity";

export const allBooksQuery = groq`
  *[_type == "book" && defined(slug.current)] | order(featured desc, _updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    authors,
    cover,
    "categories": categories[]->title,
    "categorySlugs": categories[]->slug.current,
    blurb,
    priceGhs,
    priceDisplay,
    selarUrl,
    amazonUrl,
    featured,
    _updatedAt
  }
`;

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    authors,
    cover,
    "categories": categories[]->title,
    blurb,
    priceGhs,
    priceDisplay,
    selarUrl,
    amazonUrl,
    relatedInterviewUrl
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`;
