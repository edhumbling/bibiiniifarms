import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Sustainability • Bibinii Farms",
  description: "Committed to sustainable farming practices that protect the environment while producing high-quality food for Ghana.",
};

export default function GreenSustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed z-30 top-24 left-4">
        <Link href="/" className="inline-flex items-center gap-2 rounded-md bg-white text-deep-green px-3 py-2 shadow ring-1 ring-black/10 hover:shadow-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">🌍</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Green Sustainability
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Committed to sustainable farming practices that protect the environment while producing high-quality food for Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-green-50 border border-green-200 rounded-xl p-12">
              <div className="text-4xl mb-6">🚧</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're working on detailed content about our green sustainability initiatives. This page will showcase our commitment to environmentally responsible farming practices.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-green-600 text-white font-semibold shadow-sm hover:shadow-md transition-shadow"
              >
                Return Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
