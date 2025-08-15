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
    "/products/heritage",
    "/products/pasture-raised",
    "/products/organic",
    "/products/free-range",
    "/store-locator",
    "/order",
    "/track",
    "/sentry-example-page",
  ];

  return staticRoutes.map((route) => ({
    url: `https://bibiniifarms.com${route}`,
    lastModified: new Date(),
  }));
}

