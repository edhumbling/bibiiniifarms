import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Stores",
  description: "We are currently working on partnering with stores.",
};

export default function StoreLocatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Stores</h1>
          <p className="text-lg text-gray-700">We are currently working on partnering with stores. In the meantime, you can order online.</p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
            >
              Order online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
