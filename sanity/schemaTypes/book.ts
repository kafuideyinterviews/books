import { defineField, defineType } from "sanity";

export default defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      description:
        "List every author in credit order. Leave empty to show Kafui Dey only. For co-authored titles, add each name (e.g. Victor Kwasi Dey, then Kafui Dey).",
      initialValue: ["Kafui Dey"],
    }),
    defineField({
      name: "cover",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "priceGhs",
      title: "Price (in GHS)",
      type: "number",
      description:
        "Base price in Ghana Cedis. Prices in USD, EUR, and GBP are converted live.",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "priceDisplay",
      title: "Price label (optional override)",
      type: "string",
      description:
        "Optional free-form label shown instead of the converted price (e.g. 'From GHS 80').",
    }),
    defineField({
      name: "selarUrl",
      title: "Selar purchase URL",
      type: "url",
      description: "Leave empty to hide the Selar button on this book.",
    }),
    defineField({
      name: "amazonUrl",
      title: "Amazon purchase URL",
      type: "url",
      description: "Leave empty to hide the Amazon button on this book.",
    }),
    defineField({
      name: "relatedInterviewUrl",
      title: "Related kafuideyinterviews.com URL",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "cover",
      authors: "authors",
    },
    prepare({ title, media, authors }) {
      const names = (authors || []).filter(Boolean);
      return {
        title,
        media,
        subtitle:
          names.length > 0 ? names.join(" · ") : "Kafui Dey",
      };
    },
  },
});
