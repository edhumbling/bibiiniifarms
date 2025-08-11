import Link from "next/link";
import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import ImageCarousel from "@/app/components/ImageCarousel";
import FooterBackground from "./footer background.svg";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Full-screen Video */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/humbling/Bibinii%20Promo%20Vid%20final.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/reve_images_2025-08-05_03-59-11/4811dfb5-4d98-4ba5-9088-236d082bca94.png"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        {/* Hero content moved to next section */}
      </section>

      {/* Separator */}
      <div className="relative">
        <Image src="/separator.png" alt="" width={1920} height={50} className="w-full h-auto" />
      </div>

      {/* Why Bibinii */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Former hero heading and CTAs */}
          <div className="mb-12 text-center">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink">
                Fresh Eggs. Ghana Grown. Farmer Powered.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg text-neutral-700 max-w-3xl mx-auto">
                We deliver fresh, Ghana-grown eggs directly from local poultry farmers to your home or business — fighting imports, feeding communities, and protecting livelihoods.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95"
                >
                  Order Fresh Eggs
                </Link>
                <Link
                  href="/track"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink text-ink px-6 py-3 font-semibold hover:bg-ink hover:text-white transition-all"
                >
                  Track Your Crate
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                Why Choose Bibinii Farms?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
                We unite poultry farmers across Ghana into one strong network, delivering fresh eggs straight from farm to table.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.2}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">🥚</span>
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
                  <span className="text-2xl">🤝</span>
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
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Flexible Access</h3>
                <p className="text-neutral-600">
                  Doorstep delivery or convenient pickup hubs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-egg rounded-2xl mb-4">
                  <span className="text-2xl">♻</span>
                </div>
                <h3 className="text-xl font-bold text-ink mb-2">Sustainably Minded</h3>
                <p className="text-neutral-600">
                  Eco-friendly crates, zero-waste practices, and community composting.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative">
        <Image src="/separator.png" alt="" width={1920} height={50} className="w-full h-auto" />
      </div>

      {/* Image Carousel */}
      <ImageCarousel />

      {/* Separator */}
      <div className="relative">
        <Image src="/separator.png" alt="" width={1920} height={50} className="w-full h-auto" />
      </div>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl relative text-white p-10 sm:p-12 overflow-hidden">
            <div className="absolute inset-0">
              <Image 
                src={FooterBackground} 
                alt="" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="relative">
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
        </div>
      </section>
    </div>
  );
}
