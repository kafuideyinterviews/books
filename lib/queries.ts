import { groq } from "next-sanity";

export const allBooksQuery = groq`
  *[_type == "book"] | order(featured desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    cover,
    "categories": categories[]->title,
    blurb,
    priceGhs,
    priceDisplay,
    selarUrl,
    amazonUrl,
    featured
  }
`;

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
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
