import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
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
              <div className="bg-blue-500 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Heritage</span>
              </div>
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
              <div className="h-48 relative overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" id="pasture-slider">
                  <div className="min-w-full h-48 relative">
                    <Image
                      src="https://ik.imagekit.io/spj5u0tzx/ecec0f4c-6899-4e0d-be4d-704c992e444a.png"
                      alt="Pasture Raised Eggs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-48 relative">
                    <Image
                      src="https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png"
                      alt="Pasture Raised Eggs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-48 relative">
                    <Image
                      src="https://ik.imagekit.io/spj5u0tzx/01e09a5a-34c5-4f73-87db-e71b8e417b9a.png"
                      alt="Pasture Raised Eggs"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-full h-48 relative">
                    <Image
                      src="https://ik.imagekit.io/spj5u0tzx/36e9f18e-af3f-4142-afae-c82367a4c9d2.png"
                      alt="Pasture Raised Eggs"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Pasture Raised</span>
                </div>
                {/* Slider Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <button 
                    className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors pasture-dot active" 
                    data-slide="0"
                    onClick={() => showSlide(0)}
                  ></button>
                  <button 
                    className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors pasture-dot" 
                    data-slide="1"
                    onClick={() => showSlide(1)}
                  ></button>
                  <button 
                    className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors pasture-dot" 
                    data-slide="2"
                    onClick={() => showSlide(2)}
                  ></button>
                  <button 
                    className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors pasture-dot" 
                    data-slide="3"
                    onClick={() => showSlide(3)}
                  ></button>
                </div>
              </div>
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
              <div className="bg-green-500 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Organic</span>
              </div>
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
              <div className="bg-red-500 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Free Range</span>
              </div>
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

      {/* Slider JavaScript */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function showSlide(index) {
              const slider = document.getElementById('pasture-slider');
              const dots = document.querySelectorAll('.pasture-dot');
              
              if (slider && dots.length > 0) {
                slider.style.transform = \`translateX(-\${index * 100}%)\`;
                
                // Update active dot
                dots.forEach((dot, i) => {
                  dot.classList.toggle('active', i === index);
                  dot.classList.toggle('bg-white', i === index);
                  dot.classList.toggle('bg-white/50', i !== index);
                });
              }
            }

            // Auto-advance slider every 3 seconds
            let currentSlide = 0;
            const totalSlides = 4;
            
            function nextSlide() {
              currentSlide = (currentSlide + 1) % totalSlides;
              showSlide(currentSlide);
            }

            // Start auto-advance when page loads
            if (typeof window !== 'undefined') {
              setInterval(nextSlide, 3000);
            }
          `
        }}
      />
    </div>
  );
}
