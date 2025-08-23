import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmer Empowerment • Bibinii Farms",
  description: "Empowering Ghanaian farmers through fair partnerships, training, and sustainable farming practices that benefit both farmers and communities.",
};

export default function FarmerEmpowermentPage() {
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
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">👩🌾</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Farmer Empowerment
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We believe farmers are the backbone of Ghana. Bibinii Farms exists to empower farmers, not exploit them.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Ghana's Agricultural Heroes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Farmers are the foundation of our food system and our economy. At Bibinii Farms, we're committed to creating partnerships that uplift farmers, strengthen communities, and build a more equitable agricultural sector across Ghana.
              </p>
            </div>
          </Reveal>

          {/* Empowerment Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Fair Pricing */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fair Pricing</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Farmers receive transparent and consistent payments — no middlemen driving down their income. We believe in fair compensation that reflects the true value of their hard work.
                </p>
              </div>
            </Reveal>

            {/* Market Access */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏪</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Market Access</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  From smallholder poultry keepers to women-led vegetable farms, we connect farmers directly to large buyers and households, eliminating barriers to market entry.
                </p>
              </div>
            </Reveal>

            {/* Capacity Building */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Capacity Building</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We provide training in grading, packaging, record-keeping, and digital sales tools, empowering farmers with the skills they need to succeed in modern agriculture.
                </p>
              </div>
            </Reveal>

            {/* Zero Waste */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-8 border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">♻️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Zero Waste</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  By aggregating surplus produce, we stop food from rotting in storage and turn losses into income, maximizing farmers' returns on their investment.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Impact Process */}
          <Reveal delay={0.5}>
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Farmer Partnership Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                  <p className="text-sm text-gray-600">We establish direct relationships with farmers based on mutual respect and trust</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Training</h4>
                  <p className="text-sm text-gray-600">Provide skills training and digital tools to improve farming practices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Connection</h4>
                  <p className="text-sm text-gray-600">Connect farmers directly to buyers, eliminating exploitative middlemen</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fair Payment</h4>
                  <p className="text-sm text-gray-600">Ensure transparent, timely payments that reflect true market value</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.6}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Farmer Network</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Are you a farmer looking for fair partnerships and market access? We're always looking to expand our network of empowered agricultural partners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/become-farmer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow text-lg"
                >
                  Become a Bibinii Farmer
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-shadow text-lg border border-gray-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
