import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="display text-5xl font-extrabold">404 - Page Not Found</h1>
      <p className="mt-4 text-neutral-700 text-lg">We couldn't find the page you're looking for. It may have been moved or doesn't exist.</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="inline-flex rounded-full bg-luminous-green text-white px-6 py-3 font-semibold hover:brightness-95 transition-all">
          Back to Home
        </Link>
        <Link href="/products" className="inline-flex rounded-full border-2 border-luminous-green text-luminous-green px-6 py-3 font-semibold hover:bg-luminous-green hover:text-white transition-all">
          View Products
        </Link>
      </div>
      <div className="mt-8">
        <p className="text-sm text-neutral-500">Or try one of these popular pages:</p>
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="text-luminous-green hover:underline">About Us</Link>
          <Link href="/farms" className="text-luminous-green hover:underline">Our Farms</Link>
          <Link href="/blog" className="text-luminous-green hover:underline">Blog</Link>
          <Link href="/contact" className="text-luminous-green hover:underline">Contact</Link>
        </div>
      </div>
    </div>
  );
}

