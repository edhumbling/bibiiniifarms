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
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🛒</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
              Technology & Innovation
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
              We are building Ghana's first digital-first farm-to-table platform.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Ghana's First Digital-First Farm-to-Table Platform</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing Ghana's agricultural sector through innovative technology that connects farmers directly to consumers, ensuring transparency, efficiency, and fair compensation throughout the value chain.
              </p>
            </div>
          </Reveal>

          {/* Technology Innovation Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">

            {/* Farmer Listings */}
            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 sm:p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">👨‍🌾</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Farmer Listings</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Farmers post their produce directly on our platform, ensuring visibility and fair sales without intermediaries taking unfair cuts.
                </p>
              </div>
            </Reveal>

            {/* Traceable Supply Chains */}
            <Reveal delay={0.2}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 sm:p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">🔍</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Traceable Supply Chains</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Customers can see exactly where their food comes from, building trust and transparency in Ghana's food system.
                </p>
              </div>
            </Reveal>

            {/* Digital Payments */}
            <Reveal delay={0.3}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 sm:p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">📱</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Digital Payments</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Farmers receive secure, prompt mobile money payments, eliminating delays and ensuring financial security.
                </p>
              </div>
            </Reveal>

            {/* Scalable Model */}
            <Reveal delay={0.4}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-6 sm:p-8 border border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">🚀</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Scalable Model</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Built for eggs today, but ready to expand into vegetables, fishery, grains, livestock and poultry products tomorrow.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Customer Promise Section */}
          <Reveal delay={0.5}>
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16 text-center">
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-4">Our Customer Promise</h3>
              <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8">
                Our commitment is simple: fresh food, fairly priced, proudly Ghanaian.
              </p>
            </div>
          </Reveal>

          {/* Customer Promise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">

            {/* Freshness Guaranteed */}
            <Reveal delay={0.6}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 sm:p-8 border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">⚡</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Freshness Guaranteed</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  From farm to table within hours, not weeks. Our technology ensures the shortest possible journey from harvest to your home.
                </p>
              </div>
            </Reveal>

            {/* Affordable Access */}
            <Reveal delay={0.7}>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 sm:p-8 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">💰</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Affordable Access</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Cutting out middlemen keeps food fair for families, ensuring quality nutrition is accessible to all Ghanaians.
                </p>
              </div>
            </Reveal>

            {/* Choice & Flexibility */}
            <Reveal delay={0.8}>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 sm:p-8 border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">🚚</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Choice & Flexibility</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Doorstep delivery or local pickup hubs—choose what works best for your lifestyle and location.
                </p>
              </div>
            </Reveal>

            {/* Trust in Every Bite */}
            <Reveal delay={0.9}>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-6 sm:p-8 border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-white text-lg sm:text-xl">🇬🇭</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Trust in Every Bite</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Proudly grown in Ghana, traceable, and farmer powered. Every purchase supports local agriculture and builds national food security.
                </p>
              </div>
            </Reveal>

          </div>

          {/* Technology Roadmap */}
          <Reveal delay={1.0}>
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">Our Technology Roadmap</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Digital Platform</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Launch farm-to-table marketplace connecting farmers and consumers</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Mobile Integration</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Seamless mobile money payments and farmer mobile apps</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Supply Chain Tech</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Advanced traceability and logistics optimization systems</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg sm:text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Scale & Expand</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Expand to vegetables, fishery, grains, and livestock products</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Call to Action */}
          <Reveal delay={1.1}>
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Experience the Future of Food</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join Ghana's digital agricultural revolution. Fresh food, fair prices, and farmer empowerment—all powered by innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-200 text-base sm:text-lg w-full sm:w-auto"
                >
                  Shop Fresh Products
                </Link>
                <Link
                  href="/become-farmer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white text-gray-900 font-semibold shadow-sm hover:shadow-md transition-all duration-200 text-base sm:text-lg border border-gray-300 w-full sm:w-auto"
                >
                  Join Our Platform
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Social Media Section */}
          <Reveal delay={1.2}>
            <div className="text-center mt-12 sm:mt-16">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Connect With Us</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Follow our journey as we revolutionize Ghana's agricultural sector through technology and innovation.
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/bibiniifarms?igsh=eHRrOGpicHU0MmRk&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zm5.5-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/share/15Ap6uHpB8/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/></svg>
                </a>
                <a
                  aria-label="TikTok"
                  href="https://www.tiktok.com/@bibinii.farms?_t=ZM-8yve1mnk2TN&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400"><path d="M21 8.1a7 7 0 0 1-4.4-1.5v7.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.5a3 3 0 1 0 2.1 2.9V2h3.3c.4 2 2 3.7 4.2 4.1v2z"/></svg>
                </a>
                <a
                  aria-label="WhatsApp"
                  href="https://wa.me/233543474770?text=Hello%20Bibinii%20Farms!%20I%27d%20like%20to%20place%20an%20order%20and%20get%20pricing%2C%20availability%2C%20and%20delivery%20options.%20Thank%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400"><path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.83L0 24l6.35-1.67A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.1-3.48-8.52zM12 21.6c-1.71 0-3.3-.46-4.67-1.26l-.34-.2-3.77 1 1.01-3.67-.22-.37A9.6 9.6 0 012.4 12c0-5.29 4.3-9.6 9.6-9.6 2.57 0 4.95 1 6.76 2.8A9.54 9.54 0 0121.6 12c0 5.3-4.31 9.6-9.6 9.6zm5.51-7.15c-.3-.15-1.78-.88-2.05-.98-.27-.1-.45-.15-.63.15-.18.3-.72.98-.88 1.18-.17.2-.32.22-.6.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.02-.17-.27-.02-.42.13-.57.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.35-.28.28-1.05 1.04-1.05 2.5 0 1.46 1.08 2.86 1.23 3.05.15.2 2.09 3.18 5.06 4.47.71.3 1.27.49 1.7.63.72.23 1.36.19 1.87.12.58-.08 1.76-.72 2.02-1.42.26-.7.26-1.29.18-1.42-.08-.13-.29-.21-.59-.36z"/></svg>
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
