export const dynamic = 'force-static';

export default async function sitemap() {
  const routes = ["", "/culture", "/order", "/track"].map((route) => ({
    url: `https://bibiniifarms.com${route}`,
    lastModified: new Date(),
  }));
  return [...routes];
}

