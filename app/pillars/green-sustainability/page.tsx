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
              Feeding people should never come at the expense of our planet. Bibinii Farms is committed to a sustainable farming and delivery system.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting Our Planet for Future Generations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Bibinii Farms, sustainability isn't just a buzzword—it's a commitment to ensuring that our food system nurtures both people and the planet. We're building practices today that will preserve Ghana's natural resources for tomorrow's farmers.
              </p>
            </div>
          </Reveal>

          {/* Sustainability Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

            {/* Eco-Friendly Packaging */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📦</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Eco-Friendly Packaging</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We use reusable crates and reduce plastics where possible, minimizing our environmental footprint while maintaining product quality and safety.
                </p>
              </div>
            </Reveal>

            {/* Composting & Recycling */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-8 border border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">♻️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Composting & Recycling</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Broken eggs and organic waste are converted into organic fertilizer for farms, creating a circular economy that turns waste into valuable resources.
                </p>
              </div>
            </Reveal>

            {/* Climate Responsibility */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Climate Responsibility</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Route-optimized logistics cut fuel waste, and renewable energy integration is part of our future roadmap to minimize our carbon footprint.
                </p>
              </div>
            </Reveal>

            {/* Future Generations */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👶</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Future Generations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We are building a food system that protects Ghana's land, people, and future farmers, ensuring sustainability for generations to come.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Sustainability Journey */}
          <Reveal delay={0.5}>
            <div className="bg-gray-50 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Sustainability Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Reduce Waste</h4>
                  <p className="text-sm text-gray-600">Minimize packaging waste and convert organic waste into valuable resources</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Optimize Operations</h4>
                  <p className="text-sm text-gray-600">Use route optimization and efficient logistics to reduce fuel consumption</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Renewable Energy</h4>
                  <p className="text-sm text-gray-600">Integrate renewable energy sources into our operations and partner farms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Protect Future</h4>
                  <p className="text-sm text-gray-600">Build sustainable practices that preserve Ghana's resources for future generations</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Environmental Impact Stats */}
          <Reveal delay={0.6}>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 mb-16 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Environmental Commitment</h3>
              <p className="text-white/90 text-lg mb-6">
                Every sustainable practice we implement today is an investment in Ghana's environmental future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Reusable Crate System</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0</div>
                  <div className="text-sm">Organic Waste to Landfill</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm">Generations Protected</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.7}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Green Mission</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                When you choose Bibinii Farms, you're supporting sustainable practices that protect Ghana's environment and ensure a healthy planet for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow text-lg"
                >
                  Choose Sustainable Food
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-shadow text-lg border border-gray-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
