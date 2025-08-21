import { blogPosts } from "./blog/data";

export const dynamic = 'force-static';

export default async function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/become-farmer",
    "/blog",
    "/careers",
    "/contact",
    "/culture",
    "/faqs",
    "/farms",
    "/find",
    "/press",
    "/products",
    "/products/fresh-bibinii-eggs",
    "/products/heritage",
    "/products/pasture-raised",
    "/products/organic",
    "/products/free-range",
    "/store-locator",
    "/order",
    "/track",
    "/sentry-example-page",
    "/privacy",
    "/terms",
    "/sitemap",
  ];

  const blogRoutes = blogPosts.map((post) => `/blog/${post.id}`);

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `https://bibiniifarms.com${route}`,
    lastModified: new Date(),
  }));
}

