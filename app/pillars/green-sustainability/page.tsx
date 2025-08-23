import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import BackToProductsButton from "@/app/components/BackToProductsButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Green Sustainability • Bibinii Farms",
  description: "Committed to sustainable farming practices that protect the environment while producing high-quality food for Ghana.",
};

export default function GreenSustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <BackToProductsButton />

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🌍</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Green Sustainability
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Feeding people should never come at the expense of our planet. Bibinii Farms is committed to a sustainable farming and delivery system.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Protecting Our Planet for Future Generations</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                At Bibinii Farms, sustainability isn't just a buzzword—it's a commitment to ensuring that our food system nurtures both people and the planet. We're building practices today that will preserve Ghana's natural resources for tomorrow's farmers.
              </p>
            </div>
          </Reveal>

          {/* Sustainability Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">

            {/* Eco-Friendly Packaging */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 sm:p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">📦</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Eco-Friendly Packaging</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We use reusable crates and reduce plastics where possible, minimizing our environmental footprint while maintaining product quality and safety.
                </p>
              </div>
            </Reveal>

            {/* Composting & Recycling */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-6 sm:p-8 border border-amber-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">♻️</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Composting & Recycling</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Broken eggs and organic waste are converted into organic fertilizer for farms, creating a circular economy that turns waste into valuable resources.
                </p>
              </div>
            </Reveal>

            {/* Climate Responsibility */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 sm:p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">🌱</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Climate Responsibility</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Route-optimized logistics cut fuel waste, and renewable energy integration is part of our future roadmap to minimize our carbon footprint.
                </p>
              </div>
            </Reveal>

            {/* Future Generations */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 sm:p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">👶</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Future Generations</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We are building a food system that protects Ghana's land, people, and future farmers, ensuring sustainability for generations to come.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Sustainability Journey */}
          <Reveal delay={0.5}>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Our Sustainability Journey</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Reduce Waste</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Minimize packaging waste and convert organic waste into valuable resources</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Optimize Operations</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Use route optimization and efficient logistics to reduce fuel consumption</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Renewable Energy</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Integrate renewable energy sources into our operations and partner farms</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Protect Future</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Build sustainable practices that preserve Ghana's resources for future generations</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Environmental Impact Stats */}
          <Reveal delay={0.6}>
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16 text-center">
              <div className="text-3xl sm:text-4xl mb-4">🌍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Environmental Commitment</h3>
              <p className="text-white/90 text-base sm:text-lg mb-6">
                Every sustainable practice we implement today is an investment in Ghana's environmental future.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                  <div className="text-xs sm:text-sm">Reusable Crate System</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">0</div>
                  <div className="text-xs sm:text-sm">Organic Waste to Landfill</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">∞</div>
                  <div className="text-xs sm:text-sm">Generations Protected</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={0.7}>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Join Our Green Mission</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                When you choose Bibinii Farms, you're supporting sustainable practices that protect Ghana's environment and ensure a healthy planet for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
                >
                  Choose Sustainable Food
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-all duration-200 text-base sm:text-lg border border-gray-300 w-full sm:w-auto"
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
