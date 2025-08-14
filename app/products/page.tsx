import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import HeritageEggsSlider from "@/app/components/HeritageEggsSlider";
import PastureRaisedSlider from "@/app/components/PastureRaisedSlider";
import OrganicSlider from "@/app/components/OrganicSlider";
import FreeRangeSlider from "@/app/components/FreeRangeSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Products",
  description: "Premium eggs from happy, free-range chickens raised with care and compassion on our sustainable farms.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/spj5u0tzx/Bibinii%20Hen%20House%20Video%203-8_14_2025,%2010_42%E2%80%AFAM.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={DEFAULT_HERO_POSTER}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium eggs from happy, free-range chickens raised with care and compassion on our sustainable farms.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Heritage Eggs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <HeritageEggsSlider />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Heritage Eggs</h3>
                <p className="text-gray-600 mb-4">
                  From heritage breed chickens with rich, flavorful yolks and superior nutrition.
                </p>
                <Link 
                  href="/products/heritage"
                  className="inline-flex items-center text-emerald-glow hover:brightness-110 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Pasture Raised */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <PastureRaisedSlider />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pasture Raised</h3>
                <p className="text-gray-600 mb-4">
                  Chickens roam freely on open pastures, resulting in nutrient-dense eggs.
                </p>
                <Link 
                  href="/products/pasture-raised"
                  className="inline-flex items-center text-emerald-glow hover:brightness-110 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Organic */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <OrganicSlider />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Organic Eggs</h3>
                <p className="text-gray-600 mb-4">
                  Certified organic eggs from chickens fed only organic, non-GMO feed.
                </p>
                <Link 
                  href="/products/organic"
                  className="inline-flex items-center text-emerald-glow hover:brightness-110 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Free Range */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <FreeRangeSlider />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Range</h3>
                <p className="text-gray-600 mb-4">
                  Chickens with access to outdoor areas, producing high-quality eggs.
                </p>
                <Link 
                  href="/products/free-range"
                  className="inline-flex items-center text-emerald-glow hover:brightness-110 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Promise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every egg we produce meets the highest standards of quality, nutrition, and ethical farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Chickens</h3>
              <p className="text-gray-600">
                Our chickens live in spacious, natural environments with access to fresh air and sunshine.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Feed</h3>
              <p className="text-gray-600">
                We use only the finest natural and organic feeds, free from harmful chemicals and additives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                Our eggs are collected daily and delivered fresh to ensure maximum quality and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
