import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import BackToProductsButton from "@/app/components/BackToProductsButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Impact • Bibinii Farms",
  description: "Creating positive impact across Ghana through job creation, economic development, and strengthening local food systems.",
};

export default function NationalImpactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <BackToProductsButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-red-600 to-rose-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">🇬🇭</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              National Impact
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bibinii Farms is more than a business — we are part of Ghana's fight for food independence.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Ghana's Food Independence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every product we deliver, every farmer we partner with, and every job we create contributes to Ghana's journey toward food sovereignty and economic independence. We're not just feeding families—we're feeding the nation.
              </p>
            </div>
          </Reveal>

          {/* National Impact Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Reducing Imports */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-8 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Reducing Imports</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Every crate we deliver reduces Ghana's reliance on imported eggs and food products. By strengthening local production, we keep Ghana's food dollars at home.
                </p>
              </div>
            </Reveal>

            {/* Job Creation */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Job Creation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  From riders and packers to IT developers and logistics staff, Bibinii creates jobs across the value chain, building Ghana's economy from the ground up.
                </p>
              </div>
            </Reveal>

            {/* Food Security */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Food Security</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A strong local supply means Ghana controls its own food destiny. We're building resilient food systems that can weather any storm.
                </p>
              </div>
            </Reveal>

            {/* Pride & Patriotism */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-8 border border-yellow-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Pride & Patriotism</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Every purchase strengthens Ghana's farmers and builds national dignity: "Black man, feed yourself. Ghana, feed yourself."
                </p>
              </div>
            </Reveal>

          </div>

          {/* National Impact Process */}
          <Reveal delay={0.5}>
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Path to Food Independence</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Local Production</h4>
                  <p className="text-sm text-gray-600">Partner with Ghanaian farmers to increase local food production capacity</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Value Chain Jobs</h4>
                  <p className="text-sm text-gray-600">Create employment opportunities across the entire agricultural value chain</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Import Substitution</h4>
                  <p className="text-sm text-gray-600">Replace imported food products with high-quality local alternatives</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Food Sovereignty</h4>
                  <p className="text-sm text-gray-600">Build Ghana's capacity to feed itself with dignity and independence</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Patriotic Quote Section */}
          <Reveal delay={0.6}>
            <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl p-8 mb-16 text-center">
              <div className="text-4xl mb-4">🇬🇭</div>
              <blockquote className="text-2xl font-bold text-white mb-4">
                "Black man, feed yourself. Ghana, feed yourself."
              </blockquote>
              <p className="text-white/90 text-lg">
                Every purchase from Bibinii Farms is a vote for Ghana's food independence and a step toward national self-reliance.
              </p>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.7}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Ghana's Food Independence Movement</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                When you choose Bibinii Farms, you're not just buying food—you're investing in Ghana's future, supporting local farmers, and building national food security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow text-lg"
                >
                  Support Local Farmers
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-shadow text-lg border border-gray-300"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
