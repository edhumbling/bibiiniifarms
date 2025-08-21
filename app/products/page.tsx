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
  description: "Fresh Bibinii Eggs — Premium eggs from Ghanaian farmers, delivered or ready for pickup. Choose from Heritage, Pasture Raised, Organic, and Free Range varieties.",
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
              Fresh Bibinii Eggs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium eggs from Ghanaian farmers, available in four distinct varieties to suit your preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Card */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Signature Product</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in one thing: exceptional eggs. Choose from four farming methods to find the perfect match for your values and taste.
            </p>
          </div>

          {/* Single Prominent Fresh Bibinii Eggs Card */}
          <Link href="/products/fresh-bibinii-eggs" className="group block bg-white rounded-xl shadow-xl overflow-hidden ring-1 ring-transparent transition-all duration-300 hover:ring-yellow-400 hover:shadow-[0_0_32px_#FDE04780] hover:scale-[1.02]">
            <div className="relative h-80 overflow-hidden">
              {/* Combined image slider showing all egg types */}
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
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Fresh Bibinii Eggs</h3>
              <p className="text-lg text-gray-600 mb-6">
                Premium eggs from Ghanaian farmers, available in Heritage, Pasture Raised, Organic, and Free Range varieties.
                Each farming method offers unique benefits while maintaining our commitment to quality and freshness.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Heritage</span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Pasture Raised</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Organic</span>
                <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">Free Range</span>
              </div>
              <span role="button" aria-label="Explore Fresh Bibinii Eggs varieties" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md transition-shadow text-lg">
                Explore Our Egg Varieties →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Fresh Bibinii Eggs */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fresh Bibinii Eggs?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on one product and do it exceptionally well. Every Fresh Bibinii Egg meets the highest standards of quality, nutrition, and ethical farming practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Every Fresh Bibinii Egg is carefully inspected and meets our strict quality standards for freshness and nutrition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Locally Sourced</h3>
              <p className="text-gray-600">
                Supporting Ghanaian farmers and communities while providing you with the freshest eggs possible.
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
