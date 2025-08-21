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
  description: "Products — Fresh, traceable eggs from Ghanaian farmers, delivered or ready for pickup. Heritage, pasture-raised, organic, and free-range.",
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
            <Link href="/products/heritage" className="group block bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-transparent transition hover:ring-yellow-400 hover:shadow-[0_0_24px_#FDE04780]">
              <SimpleImageSlider
                images={heritageImages}
                label="Heritage"
                gradientFrom="from-amber-50"
                gradientTo="to-orange-100"
                autoplayDelay={3000}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Heritage Eggs</h3>
                <p className="text-gray-600 mb-4">
                  From heritage breed chickens with rich, flavorful yolks and superior nutrition.
                </p>
                <span role="button" aria-label="Learn more about Heritage Eggs" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md">
                  Learn More
                </span>
              </div>
            </Link>

            {/* Pasture Raised */}
            <Link href="/products/pasture-raised" className="group block bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-transparent transition hover:ring-yellow-400 hover:shadow-[0_0_24px_#FDE04780]">
              <SimpleImageSlider
                images={pastureImages}
                label="Pasture Raised"
                gradientFrom="from-emerald-50"
                gradientTo="to-green-100"
                autoplayDelay={3500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pasture Raised</h3>
                <p className="text-gray-600 mb-4">
                  Chickens roam freely on open pastures, resulting in nutrient-dense eggs.
                </p>
                <span role="button" aria-label="Learn more about Pasture Raised Eggs" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md">
                  Learn More
                </span>
              </div>
            </Link>

            {/* Organic */}
            <Link href="/products/organic" className="group block bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-transparent transition hover:ring-yellow-400 hover:shadow-[0_0_24px_#FDE04780]">
              <SimpleImageSlider
                images={organicImages}
                label="Organic"
                gradientFrom="from-green-50"
                gradientTo="to-emerald-100"
                autoplayDelay={4000}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Organic Eggs</h3>
                <p className="text-gray-600 mb-4">
                  Certified organic eggs from chickens fed only organic, non-GMO feed.
                </p>
                <span role="button" aria-label="Learn more about Organic Eggs" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md">
                  Learn More
                </span>
              </div>
            </Link>

            {/* Free Range */}
            <Link href="/products/free-range" className="group block bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-transparent transition hover:ring-yellow-400 hover:shadow-[0_0_24px_#FDE04780]">
              <SimpleImageSlider
                images={freeRangeImages}
                label="Free Range"
                gradientFrom="from-rose-50"
                gradientTo="to-red-100"
                autoplayDelay={4500}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Free Range</h3>
                <p className="text-gray-600 mb-4">
                  Chickens with access to outdoor areas, producing high-quality eggs.
                </p>
                <span role="button" aria-label="Learn more about Free Range Eggs" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-yellow-400 text-white font-semibold shadow-sm group-hover:shadow-md">
                  Learn More
                </span>
              </div>
            </Link>
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
