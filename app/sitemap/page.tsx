import Link from "next/link";

export const dynamic = "force-static";

export default function HumanSitemapPage() {
  const topLevel = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/products", label: "Products" },
    { href: "/farms", label: "Our Farms" },
    { href: "/store-locator", label: "Store Locator" },
    { href: "/order", label: "Order" },
    { href: "/track", label: "Track" },
  ];

  const productPages = [
    { href: "/products/fresh-bibinii-eggs", label: "Fresh Bibinii Eggs" },
    { href: "/products/heritage", label: "Heritage (Educational)" },
    { href: "/products/pasture-raised", label: "Pasture Raised (Educational)" },
    { href: "/products/organic", label: "Organic (Educational)" },
    { href: "/products/free-range", label: "Free Range (Educational)" },
  ];

  const company = [
    { href: "/become-farmer", label: "Become a Bibinii Farmer" },
    { href: "/careers", label: "Careers" },
    { href: "/press", label: "Press" },
    { href: "/culture", label: "Culture" },
    { href: "/contact", label: "Contact" },
    { href: "/find", label: "Find Bibinii" },
  ];

  const support = [
    { href: "/faqs", label: "FAQs" },
  ];

  const legal = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const utility = [
    { href: "/sitemap", label: "Sitemap (Human Readable)" },
    { href: "/sitemap.xml", label: "Sitemap (XML)" },
    { href: "/sentry-example-page", label: "Sentry Example Page" },
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">Site Map</h1>
          <p className="mt-3 text-neutral-600">A structured, human-readable directory of every page on Bibinii Farms.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Top-level</h2>
            <ul className="space-y-2">
              {topLevel.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Products</h2>
            <ul className="space-y-2">
              {productPages.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Company</h2>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Support</h2>
            <ul className="space-y-2">
              {support.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Legal</h2>
            <ul className="space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Utility</h2>
            <ul className="space-y-2">
              {utility.map((l) => (
                <li key={l.href}>
                  {l.href.endsWith(".xml") ? (
                    <a href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="text-emerald-glow hover:brightness-110">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-neutral-900 mb-3">Blog Posts</h2>
          <p className="text-neutral-600 mb-4">Browse articles published on our blog.</p>
          <p className="mt-4">
            Visit the <Link href="/blog" className="text-emerald-glow hover:brightness-110">Blog index</Link> to read our latest posts and filter by category.
          </p>
        </section>
      </div>
    </div>
  );
}

