import { client } from "./sanity/client";
import { type SanityDocument } from "next-sanity";

export const dynamic = 'force-static';

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]{slug}`;

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
    "/pillars/quality-standards",
    "/pillars/farmer-empowerment",
    "/pillars/national-impact",
    "/pillars/green-sustainability",
    "/pillars/technology-innovation",
  ];

  try {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
    const blogRoutes = posts.map((post) => `/blog/${post.slug.current}`);
    const allRoutes = [...staticRoutes, ...blogRoutes];

    return allRoutes.map((route) => ({
      url: `https://bibiniifarms.com${route}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    // Fallback to static routes only if Sanity query fails
    return staticRoutes.map((route) => ({
      url: `https://bibiniifarms.com${route}`,
      lastModified: new Date(),
    }));
  }
}

