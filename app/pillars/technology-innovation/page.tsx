import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import BackToProductsButton from "@/app/components/BackToProductsButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology and Innovation • Bibinii Farms",
  description: "Leveraging cutting-edge technology and innovative solutions to revolutionize agriculture in Ghana.",
};

export default function TechnologyInnovationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <BackToProductsButton />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology & Innovation
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are building Ghana's first digital-first farm-to-table platform.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ghana's First Digital-First Farm-to-Table Platform</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing Ghana's agricultural sector through innovative technology that connects farmers directly to consumers, ensuring transparency, efficiency, and fair compensation throughout the value chain.
              </p>
            </div>
          </Reveal>

          {/* Technology Innovation Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Farmer Listings */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👨‍🌾</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Farmer Listings</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Farmers post their produce directly on our platform, ensuring visibility and fair sales without intermediaries taking unfair cuts.
                </p>
              </div>
            </Reveal>

            {/* Traceable Supply Chains */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Traceable Supply Chains</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Customers can see exactly where their food comes from, building trust and transparency in Ghana's food system.
                </p>
              </div>
            </Reveal>

            {/* Digital Payments */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Digital Payments</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Farmers receive secure, prompt mobile money payments, eliminating delays and ensuring financial security.
                </p>
              </div>
            </Reveal>

            {/* Scalable Model */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-8 border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Scalable Model</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Built for eggs today, but ready to expand into vegetables, fishery, grains, livestock and poultry products tomorrow.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Customer Promise Section */}
          <Reveal delay={0.5}>
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-8 mb-16 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Our Customer Promise</h3>
              <p className="text-xl text-white/90 mb-8">
                Our commitment is simple: fresh food, fairly priced, proudly Ghanaian.
              </p>
            </div>
          </Reveal>

          {/* Customer Promise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Freshness Guaranteed */}
            <Reveal delay={0.6}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Freshness Guaranteed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  From farm to table within hours, not weeks. Our technology ensures the shortest possible journey from harvest to your home.
                </p>
              </div>
            </Reveal>

            {/* Affordable Access */}
            <Reveal delay={0.7}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Affordable Access</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Cutting out middlemen keeps food fair for families, ensuring quality nutrition is accessible to all Ghanaians.
                </p>
              </div>
            </Reveal>

            {/* Choice & Flexibility */}
            <Reveal delay={0.8}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚚</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Choice & Flexibility</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Doorstep delivery or local pickup hubs—choose what works best for your lifestyle and location.
                </p>
              </div>
            </Reveal>

            {/* Trust in Every Bite */}
            <Reveal delay={0.9}>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-8 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🇬🇭</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Trust in Every Bite</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Proudly grown in Ghana, traceable, and farmer powered. Every purchase supports local agriculture and builds national food security.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Technology Roadmap */}
          <Reveal delay={1.0}>
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Technology Roadmap</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Platform</h4>
                  <p className="text-sm text-gray-600">Launch farm-to-table marketplace connecting farmers and consumers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Integration</h4>
                  <p className="text-sm text-gray-600">Seamless mobile money payments and farmer mobile apps</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Tech</h4>
                  <p className="text-sm text-gray-600">Advanced traceability and logistics optimization systems</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scale & Expand</h4>
                  <p className="text-sm text-gray-600">Expand to vegetables, fishery, grains, and livestock products</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={1.1}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience the Future of Food</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join Ghana's digital agricultural revolution. Fresh food, fair prices, and farmer empowerment—all powered by innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow text-lg"
                >
                  Shop Fresh Products
                </Link>
                <Link
                  href="/become-farmer"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-shadow text-lg border border-gray-300"
                >
                  Join Our Platform
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
