import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import SimpleImageSlider from "@/app/components/SimpleImageSlider";
import BackToProductsButton from "@/app/components/BackToProductsButton";
import { Metadata } from "next";

// Image data for each egg type
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
  title: "Bibinii Farms • Fresh Bibinii Eggs",
  description: "Fresh, traceable eggs from Ghanaian farmers. Choose from Heritage, Pasture Raised, Organic, and Free Range varieties.",
};

export default function FreshBibiniiEggsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema.org JSON-LD: Product (Fresh Bibinii Eggs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Fresh Bibinii Eggs",
            brand: { "@type": "Brand", name: "Bibinii Farms" },
            image: [
              "https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png",
              "https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png",
              "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
              "https://ik.imagekit.io/spj5u0tzx/c4cbec47-f40c-4200-b7f8-341b44337812.png"
            ],
            description: "Fresh, traceable eggs from Ghanaian farmers. Choose from Heritage, Pasture Raised, Organic, and Free Range varieties.",
            category: "Eggs",
            url: "https://bibiniifarms.com/products/fresh-bibinii-eggs/",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "GHS",
              url: "https://bibiniifarms.com/order",
            }
          })
        }}
      />
      
      <BackToProductsButton />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
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
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Premium eggs from Ghanaian farmers, available in four distinct varieties to suit your preferences
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            One Product, Four Ways to Enjoy
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At Bibinii Farms, we specialize in fresh, traceable eggs. Our farming methods vary to give you options 
            that match your values and taste preferences. Each variety represents a different approach to raising 
            happy, healthy chickens.
          </p>
          <Link 
            href="/order" 
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow"
          >
            Order Fresh Bibinii Eggs
          </Link>
        </div>
      </section>

      {/* Egg Types Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Preferred Farming Method</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our different farming approaches and choose the eggs that align with your preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Heritage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <SimpleImageSlider
                images={heritageImages}
                label="Heritage"
                gradientFrom="from-amber-50"
                gradientTo="to-orange-100"
                autoplayDelay={3000}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Heritage Eggs</h3>
                <p className="text-gray-600 mb-4">
                  From time-honored heritage breed chickens with rich, flavorful yolks and superior nutrition. 
                  These traditional breeds are cherished for their robustness and exceptional egg quality.
                </p>
                <Link 
                  href="/products/heritage" 
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  Learn more about Heritage →
                </Link>
              </div>
            </div>

            {/* Pasture Raised */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <SimpleImageSlider
                images={pastureImages}
                label="Pasture Raised"
                gradientFrom="from-emerald-50"
                gradientTo="to-green-100"
                autoplayDelay={3500}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pasture Raised</h3>
                <p className="text-gray-600 mb-4">
                  Chickens roam freely on open pastures, expressing natural behaviors and resulting in 
                  nutrient-dense eggs with firm whites and bright yolks.
                </p>
                <Link 
                  href="/products/pasture-raised" 
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  Learn more about Pasture Raised →
                </Link>
              </div>
            </div>

            {/* Organic */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <SimpleImageSlider
                images={organicImages}
                label="Organic"
                gradientFrom="from-green-50"
                gradientTo="to-emerald-100"
                autoplayDelay={4000}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Organic Eggs</h3>
                <p className="text-gray-600 mb-4">
                  Certified organic eggs from chickens fed only organic, non-GMO feed. A commitment to 
                  transparency, care, and responsible land stewardship.
                </p>
                <Link 
                  href="/products/organic" 
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  Learn more about Organic →
                </Link>
              </div>
            </div>

            {/* Free Range */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <SimpleImageSlider
                images={freeRangeImages}
                label="Free Range"
                gradientFrom="from-rose-50"
                gradientTo="to-red-100"
                autoplayDelay={4500}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Free Range</h3>
                <p className="text-gray-600 mb-4">
                  Chickens with access to outdoor areas and space to scratch, peck, and socialize. 
                  Natural movement supports strong shells and consistent whites.
                </p>
                <Link 
                  href="/products/free-range" 
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
                >
                  Learn more about Free Range →
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
              Regardless of farming method, every Fresh Bibinii Egg meets the highest standards of quality, 
              nutrition, and ethical farming practices.
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

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience Fresh Bibinii Eggs?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Order now for delivery or pickup. Choose your preferred farming method during checkout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/order" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-yellow-400 text-white font-semibold shadow-sm hover:shadow-md transition-shadow"
            >
              Order Now
            </Link>
            <Link 
              href="/store-locator" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-md border-2 border-yellow-400 text-yellow-600 font-semibold hover:bg-yellow-50 transition-colors"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
