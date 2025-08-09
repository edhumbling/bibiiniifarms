import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Pure Image Only */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/reve_images_2025-08-05_03-59-11/4811dfb5-4d98-4ba5-9088-236d082bca94.png"
            alt="Bibinii Farms Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content Section - Hero Content Moved Here */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 text-ink">
                Fresh eggs from{" "}
                <span className="text-green-600">happy chickens</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Sourced directly from Ghanaian farmers. Traceable, farmer‑fair, delivered fresh to your door in 24–48 hours.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center rounded-full bg-brand-deep text-white px-8 py-4 font-semibold hover:bg-opacity-90 transition-all text-lg"
                >
                  Order Fresh Eggs
                </Link>
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center rounded-full border-2 border-brand-deep text-brand-deep px-8 py-4 font-semibold hover:bg-brand-deep hover:text-white transition-all text-lg"
                >
                  Track Your Crate
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Why Bibinii */}
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                Why choose Bibinii?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                We're revolutionizing Ghana's egg supply chain by connecting farmers directly with consumers.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.2}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Direct Delivery</h3>
                <p className="text-neutral-600">
                  From farm to your door in 24-48 hours. No middlemen, no delays.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Farmer Fair</h3>
                <p className="text-neutral-600">
                  We pay farmers 40-60% more than traditional buyers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Fully Traceable</h3>
                <p className="text-neutral-600">
                  Know exactly which farm your eggs came from with our QR tracking.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-deep text-white p-10 sm:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready for fresher eggs?</h2>
                <p className="mt-2 text-white/80 max-w-xl">Order today and taste the difference in 24–48 hours. Traceable, farmer‑fair, delivered to your door.</p>
              </div>
              <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95">
                Start an Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
