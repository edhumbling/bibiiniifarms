import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import SimpleImageSlider from "@/app/components/SimpleImageSlider";
import { Metadata } from "next";

// Fallback image data for simple sliders
const heritageImages = [
  "https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png",
  "https://ik.imagekit.io/spj5u0tzx/e59d3863-a25b-44e5-b25e-7d7b26d4bd47.png",
  "https://ik.imagekit.io/spj5u0tzx/b1d02124-c55b-4a68-9e47-e0a1b83c934a.png",
  "https://ik.imagekit.io/spj5u0tzx/3d7e14c1-f5f7-48c4-bf46-41b920b9c853.png",
];

const pastureImages = [
  "https://ik.imagekit.io/spj5u0tzx/ecec0f4c-6899-4e0d-be4d-704c992e444a.png",
  "https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png",
  "https://ik.imagekit.io/spj5u0tzx/01e09a5a-34c5-4f73-87db-e71b8e417b9a.png",
  "https://ik.imagekit.io/spj5u0tzx/36e9f18e-af3f-4142-afae-c82367a4c9d2.png",
];

const organicImages = [
  "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
  "https://ik.imagekit.io/spj5u0tzx/7bb1da60-e133-431d-98fe-3e848c1d9d7d.png",
  "https://ik.imagekit.io/spj5u0tzx/3ce750cc-6daf-47e3-a0be-6882e0b99e8d.png",
  "https://ik.imagekit.io/spj5u0tzx/08736235-50b1-4b81-967e-0859062b469e.png",
];

const freeRangeImages = [
  "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
  "https://ik.imagekit.io/spj5u0tzx/58d50bc1-9375-4845-a900-7cacf14f8d5e.png",
  "https://ik.imagekit.io/spj5u0tzx/93b8d1a9-f6cd-4855-80c9-f2672736f107.png",
  "https://ik.imagekit.io/spj5u0tzx/c4cbec47-f40c-4200-b7f8-341b44337812.png",
];

export const metadata: Metadata = {
  title: "Bibinii Farms • Products",
  description: "Fresh products from Ghanaian farmers — Premium eggs available now, with catfish and vegetables coming soon. Delivered or ready for pickup.",
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
              Fresh, quality products from Ghanaian farmers. Premium eggs available now, with more products coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh, quality products from Ghanaian farmers. We're starting with exceptional eggs and expanding our offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Eggs - Available */}
            <Link href="/products/fresh-bibinii-eggs" className="group block bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-transparent transition-all duration-300 hover:ring-yellow-400 hover:shadow-[0_0_32px_#FDE04780] hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <SimpleImageSlider
                  images={[
                    ...heritageImages.slice(0, 1),
                    ...pastureImages.slice(0, 1),
                    ...organicImages.slice(0, 1),
                    ...freeRangeImages.slice(0, 1)
                  ]}
                  label="Fresh Bibinii Eggs"
                  gradientFrom="from-yellow-50"
                  gradientTo="to-amber-100"
                  autoplayDelay={2500}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh Bibinii Eggs</h3>
                <p className="text-gray-600 mb-4">
                  Premium eggs from Ghanaian farmers, available in Heritage, Pasture Raised, Organic, and Free Range varieties.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Heritage</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">Pasture Raised</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Organic</span>
                  <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-medium">Free Range</span>
                </div>
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md transition-shadow">
                  Explore Varieties →
                </span>
              </div>
            </Link>

            {/* Catfish - Coming Soon */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-gray-200 opacity-60 cursor-not-allowed">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🐟</div>
                    <span className="text-blue-600 text-lg font-semibold bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
                      Fresh Catfish
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fresh Catfish
                  <sup className="text-yellow-400 text-sm ml-1 font-normal">Coming Soon</sup>
                </h3>
                <p className="text-gray-500 mb-4">
                  Premium fresh catfish from local Ghanaian fish farms. Sustainably raised and delivered fresh to your door.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium opacity-60">Farm Fresh</span>
                  <span className="px-2 py-1 bg-cyan-100 text-cyan-600 rounded-full text-xs font-medium opacity-60">Sustainable</span>
                </div>
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-300 text-gray-500 font-semibold cursor-not-allowed">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Vegetables - Coming Soon */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-gray-200 opacity-60 cursor-not-allowed">
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥬</div>
                    <span className="text-green-600 text-lg font-semibold bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
                      Fresh Vegetables
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Fresh Vegetables
                  <sup className="text-yellow-400 text-sm ml-1 font-normal">Coming Soon</sup>
                </h3>
                <p className="text-gray-500 mb-4">
                  Locally grown fresh vegetables from Ghanaian farmers. Organic and pesticide-free produce delivered fresh.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium opacity-60">Organic</span>
                  <span className="px-2 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-medium opacity-60">Local</span>
                </div>
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-300 text-gray-500 font-semibold cursor-not-allowed">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bibinii Farms */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Bibinii Farms?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the freshest, highest-quality products from Ghanaian farmers. Starting with exceptional eggs and expanding to serve all your fresh food needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Every product is carefully inspected and meets our strict quality standards for freshness and nutrition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Locally Sourced</h3>
              <p className="text-gray-600">
                Supporting Ghanaian farmers and communities while providing you with the freshest products possible.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                Our products are collected daily and delivered fresh to ensure maximum quality and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
