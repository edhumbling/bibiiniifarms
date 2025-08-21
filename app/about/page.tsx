import Link from "next/link";
import Image from "next/image";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • About",
  description: "Our Story — Digital-first platform connecting Ghanaian farmers to families, schools, restaurants, and businesses. Dignity for farmers, fresher food for Ghana.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/spj5u0tzx/Bibinii%20Hen%20House%20Video%203-8_14_2025,%2011_53%E2%80%AFAM.mp4"
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
              About Us – Bibinii Farms
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4 font-semibold">
              Fresh Eggs. Ghana Grown. Farmer Powered.
            </p>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              We deliver fresh, Ghana-grown eggs directly from local poultry farmers to your home or business — fighting imports, feeding communities, and protecting livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Bibinii Farms */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Bibinii Farms?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="text-3xl">🥚</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Freshness Guaranteed</h3>
                <p className="text-gray-600">
                  Collected, graded, and delivered or ready for pickup within hours.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="text-3xl">🤝</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair to Farmers</h3>
                <p className="text-gray-600">
                  Transparent pricing and reliable weekly payments.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="text-3xl">🚚</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Access</h3>
                <p className="text-gray-600">
                  Doorstep delivery or convenient pickup hubs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="text-3xl">♻</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainably Minded</h3>
                <p className="text-gray-600">
                  Eco-friendly crates, zero-waste practices, and community composting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story – Bibinii Farms</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
            <p className="text-lg font-semibold text-gray-900">
              Black man, feed yourself. Ghana, feed yourself.
            </p>

            <p className="text-lg">
              For too long, Ghana has depended on imports to fill our plates — eggs, rice, corn, chicken, tomatoes, and vegetables that travel thousands of miles before reaching our tables. Cheaper on the surface, but costly for our people:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Farmers can’t compete with heavily subsidized imports.</li>
              <li>Youth see no future in agriculture.</li>
              <li>Ghana loses billions of cedis to foreign producers.</li>
              <li>Up to 30–50% of Ghana’s fruits and vegetables rot after harvest because of poor logistics and lack of buyers.</li>
            </ul>

            <p className="text-lg font-semibold text-gray-900">
              This is not just about food. It’s about dignity, pride, and national security.
            </p>

            <h3 className="text-2xl font-bold text-brand-deep mt-4">Our Solution</h3>
            <p className="text-lg">
              Bibinii Farms is building a digital-first farming platform that transforms how Ghanaians grow, sell, and consume food:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                <span className="font-semibold text-gray-900">For Farmers –</span> Farmers across the country can post their produce directly to the platform, reaching customers without middlemen and reducing waste from unsold goods.
              </li>
              <li>
                <span className="font-semibold text-gray-900">For Customers –</span> Families, schools, restaurants, and businesses buy fresh, traceable food conveniently, with doorstep delivery or pickup hubs.
              </li>
              <li>
                <span className="font-semibold text-gray-900">For Communities –</span> Bibinii Farms aggregates and buys directly from farmers, grading, packaging, and redistributing food before it spoils. We also run our own farm to guarantee supply where demand outpaces production.
              </li>
            </ul>

            <p className="text-lg">
              This is more than logistics.
            </p>
            <p className="text-lg">It is <span className="font-semibold text-gray-900">Ubuntu</span>: we rise together when our farmers rise.</p>
            <p className="text-lg">It is <span className="font-semibold text-gray-900">Sankofa</span>: reclaiming traditional wisdom while embracing innovation.</p>
            <p className="text-lg">It is <span className="font-semibold text-gray-900">Sustainability</span>: protecting our land, our people, and our future generations.</p>

            <h3 className="text-2xl font-bold text-gray-900 mt-6">Why Choose Bibinii Farms?</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><span className="font-semibold text-gray-900">Pride in Ghana –</span> Every meal supports our farmers and celebrates food grown on Ghanaian soil.</li>
              <li><span className="font-semibold text-gray-900">Strength for Farmers –</span> Transparent pricing, prompt payments, and reduced post-harvest waste.</li>
              <li><span className="font-semibold text-gray-900">Security for the Nation –</span> Less dependence on imports, more jobs for youth, and stronger local food systems.</li>
              <li><span className="font-semibold text-gray-900">Choice & Convenience –</span> Doorstep delivery or pickup hubs tailored for families and institutions.</li>
              <li><span className="font-semibold text-gray-900">Modern Innovation –</span> Digital payments, traceable supply chains, and smart logistics that ensure food is sold before it spoils.</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-deep mt-6">Impact – Today</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li><span className="font-semibold text-gray-900">Post-Harvest Waste Reduction –</span> Bibinii Farms directly tackles Ghana’s 30–50% food loss problem by creating fast, reliable market access.</li>
              <li><span className="font-semibold text-gray-900">Technology Advantage –</span> Our platform integrates farmer listings, aggregation, and logistics so produce doesn’t sit unsold.</li>
              <li><span className="font-semibold text-gray-900">Value Alignment –</span> Our mission supports Ghana’s national priorities: food security, youth employment, and import reduction.</li>
            </ul>

            <h3 className="text-2xl font-bold text-brand-deep mt-6">Impact – Tomorrow</h3>
            <p className="text-lg">By 2026, Bibinii Farms will:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Partner with 100+ farmers nationwide to stabilize markets.</li>
              <li>Deliver 100,000 discounted food baskets to schools and NGOs.</li>
              <li>Train 500 youth in agritech and logistics to future-proof Ghana’s workforce.</li>
            </ul>

            <p className="text-lg font-semibold text-brand-deep">
              Every crate, every basket, every delivery is a statement: Ghana can feed itself.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values in Action */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values in Action</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-brand-egg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Ubuntu</h3>
              <p className="text-gray-600 text-center">
                We rise together with farmers, customers, and our team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-brand-egg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Sankofa</h3>
              <p className="text-gray-600 text-center">
                Honoring tradition while embracing innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-brand-egg rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                Protecting our environment and supporting community health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact – Today & Tomorrow</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-deep mb-4">Today</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤝</span>
                  <p className="text-gray-600">Partnering with 25+ poultry farmers across 4 regions</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📦</span>
                  <p className="text-gray-600">Delivering over 8,000 crates a month</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-brand-deep mb-4">By 2026</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌍</span>
                  <p className="text-gray-600">Partner with 100+ poultry farmers nationwide</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🏫</span>
                  <p className="text-gray-600">Deliver 100,000 discounted crates to schools and NGOs</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">👨‍🎓</span>
                  <p className="text-gray-600">Train 500 youth in agritech and logistics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-egg/20 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We produce and partner</h3>
                  <p className="text-gray-600">
                    Our own farm, plus a trusted network of poultry farmers, ensures a steady, year-round egg supply.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-egg/20 p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We give customers choice</h3>
                  <p className="text-gray-600">
                    Doorstep delivery or pickup from local hubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luminous-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            When you choose Bibinii Farms, you're supporting local farmers, strengthening food security, and keeping Ghana's agricultural heritage alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-8 py-3 font-semibold hover:brightness-95 transition-all"
            >
              Order Fresh Eggs
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-brand-deep transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
