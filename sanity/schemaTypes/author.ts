import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author (About page)",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "object",
      fields: [
        { name: "youtube", type: "url", title: "YouTube" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "X / Twitter" },
        { name: "tiktok", type: "url", title: "TikTok" },
        { name: "spotify", type: "url", title: "Spotify" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "facebook", type: "url", title: "Facebook" },
      ],
    }),
    defineField({
      name: "interviewsSiteUrl",
      title: "kafuideyinterviews.com URL",
      type: "url",
      initialValue: "https://kafuideyinterviews.com",
    }),
  ],
});
