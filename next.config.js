const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    // Keep Sanity Studio out of the service worker
    navigateFallbackDenylist: [/^\/studio/],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  transpilePackages: ["next-sanity", "sanity", "@sanity/vision"],
};

module.exports = withPWA(nextConfig);
