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
    "/store-locator",
    "/order",
    "/track",
  ];

  return staticRoutes.map((route) => ({
    url: `https://bibiniifarms.com${route}`,
    lastModified: new Date(),
  }));
}

