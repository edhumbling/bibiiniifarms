import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Farms",
  description: "Discover the sustainable farms where our happy chickens roam free and produce the finest eggs.",
};

export default function FarmsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-luminous-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Farms
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the sustainable farms where our happy chickens roam free and produce the finest eggs.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Network */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Farm Network</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with carefully selected family farms that share our commitment to ethical, sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Practices</h3>
              <p className="text-gray-600 mb-6">
                Our farms implement regenerative agriculture practices that improve soil health, 
                support biodiversity, and create a natural ecosystem where chickens can thrive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-glow rounded-full mr-3"></span>
                  <span className="text-gray-700">Rotational grazing systems</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-glow rounded-full mr-3"></span>
                  <span className="text-gray-700">Chemical-free pastures</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-glow rounded-full mr-3"></span>
                  <span className="text-gray-700">Solar-powered facilities</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-glow rounded-full mr-3"></span>
                  <span className="text-gray-700">Water conservation systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-green-700 text-lg font-semibold">Farm Landscape Image</span>
            </div>
          </div>

          {/* Farm Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Pastures</h3>
              <p className="text-gray-600">
                Spacious fields where chickens can roam freely, forage naturally, and express their natural behaviors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfortable Coops</h3>
              <p className="text-gray-600">
                Well-ventilated, spacious coops that provide safety and comfort while maintaining natural lighting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Water</h3>
              <p className="text-gray-600">
                Fresh, clean water sources available throughout the farm to ensure optimal chicken health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Standards */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Standards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every farm in our network must meet strict standards for animal welfare, environmental sustainability, and product quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Animal Welfare</h3>
              <p className="text-gray-600 text-sm">
                Certified humane practices ensuring chickens live stress-free, natural lives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental Care</h3>
              <p className="text-gray-600 text-sm">
                Sustainable farming methods that protect and enhance the local ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">
                Regular inspections and testing to ensure the highest quality standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm">
                Supporting local farming communities and rural economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Farms</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our sustainable farming practices firsthand. Schedule a farm tour and see where your eggs come from.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
