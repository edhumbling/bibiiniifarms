import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Pure Image Only - Starts from top */}
      <section className="relative h-screen overflow-hidden -mt-32">
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
                Ghana-grown eggs directly from local poultry farmers. Fighting imports, feeding communities, protecting livelihoods.
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
                We unite poultry farmers across Ghana into one strong network, delivering fresh eggs straight from farm to table.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.2}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Freshness Guaranteed</h3>
                <p className="text-neutral-600">
                  Collected, graded, and delivered or ready for pickup within hours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Fair to Farmers</h3>
                <p className="text-neutral-600">
                  Transparent pricing and reliable weekly payments to our partner farmers.
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
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Support Ghana's Farmers</h2>
                <p className="mt-2 text-white/80 max-w-xl">Order fresh, Ghana-grown eggs and make a choice that strengthens food security and keeps our agricultural heritage alive.</p>
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
