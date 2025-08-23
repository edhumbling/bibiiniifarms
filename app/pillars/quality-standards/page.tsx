import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Standards • Bibinii Farms",
  description: "At Bibinii Farms, quality is at the heart of everything we do. Every product passes through strict checks to guarantee freshness, safety, and traceability.",
};

export default function QualityStandardsPage() {
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
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">🌱</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quality Standards
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              At Bibinii Farms, quality is at the heart of everything we do. Our customers trust us because every product that leaves our hands has passed through strict checks designed to guarantee freshness, safety, and traceability.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every product that reaches your table has undergone rigorous quality checks. We believe that exceptional quality isn't just a standard—it's a promise we make to every customer, every farmer, and every community we serve.
              </p>
            </div>
          </Reveal>

          {/* Quality Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Grading & Candling */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-8 border border-emerald-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Grading & Candling</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Every egg is graded by size and candled to check for cracks or internal defects. Vegetables and grains are inspected for quality and freshness to ensure only the best products reach our customers.
                </p>
              </div>
            </Reveal>

            {/* Traceability */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Traceability</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Every crate and basket is traceable back to its farm of origin, ensuring transparency across our supply chain. You know exactly where your food comes from and how it was produced.
                </p>
              </div>
            </Reveal>

            {/* Hygienic Packaging */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🧼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Hygienic Packaging</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Produce is handled under food-safe conditions in line with FDA Ghana and Ghana Standards Authority guidelines. Our packaging facilities maintain the highest hygiene standards.
                </p>
              </div>
            </Reveal>

            {/* Zero Compromise */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-8 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Zero Compromise</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Anything that fails to meet our standard is rejected. If it doesn't meet Bibinii standards, it doesn't reach your table. Quality is never negotiable.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Quality Process */}
          <Reveal delay={0.5}>
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Quality Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Farm Inspection</h4>
                  <p className="text-sm text-gray-600">Regular visits to partner farms to ensure compliance with our standards</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Collection & Testing</h4>
                  <p className="text-sm text-gray-600">Products are collected and undergo immediate quality testing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Processing & Packaging</h4>
                  <p className="text-sm text-gray-600">Approved products are processed and packaged under strict hygiene conditions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Final Delivery</h4>
                  <p className="text-sm text-gray-600">Products are delivered fresh with full traceability documentation</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.6}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience the Bibinii Quality Difference</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                When you choose Bibinii Farms, you're choosing products that meet the highest standards of quality, safety, and traceability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow text-lg"
                >
                  Shop Our Products
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-shadow text-lg border border-gray-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
