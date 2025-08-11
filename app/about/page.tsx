import Link from "next/link";
import Image from "next/image";
import FooterBackground from "../footer background.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • About",
  description: "Fresh Eggs. Ghana Grown. Farmer Powered. We deliver fresh, Ghana-grown eggs directly from local poultry farmers to your home or business — fighting imports, feeding communities, and protecting livelihoods.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image 
            src={FooterBackground} 
            alt="" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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

      {/* Separator */}
      <div className="relative">
        <Image src="/separator.png" alt="" width={1920} height={50} className="w-full h-auto" />
      </div>

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

      {/* Separator */}
      <div className="relative">
        <Image src="/separator.png" alt="" width={1920} height={50} className="w-full h-auto" />
      </div>

      {/* Our Story */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story – Protecting Ghana's Farmers, Feeding Our Future</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-600">
            <p className="text-lg">
              Across Ghana, local poultry farmers are under threat. In 2023 alone, over 2,195 metric tons of imported eggs — often cheaper and less traceable — entered our markets. The result? Local farmers struggle to compete, food security is at risk, markets shrink, and young people turn away from agriculture.
            </p>

            <p className="text-lg font-semibold text-gray-900">
              We refuse to let that be Ghana's story.
            </p>

            <p className="text-lg">
              Bibinii Farms was founded to fight for the farmer and feed the community. We are farmers ourselves, so we know the early mornings, the sound of the hens, and the care in every egg collected. Our model is rooted in Ubuntu — "I am because we are." When our farmers thrive, our communities thrive.
            </p>

            <p className="text-lg">
              We unite poultry farmers across Ghana — from rural smallholders to large-scale producers — into one strong network. Using fair pricing, strict quality checks, and route-optimized logistics, we connect them directly to households, restaurants, schools, NGOs, and shops. No middlemen driving down prices. No weeks without sales. Just fresh, quality Ghana-grown eggs delivered or ready for pickup — straight from farm to table.
            </p>

            <p className="text-lg">
              Guided by Sankofa, we honor traditional farming wisdom while embracing innovation. Guided by Sustainability, we protect the environment and ensure a future for the next generation of Ghanaian farmers.
            </p>

            <p className="text-lg font-semibold text-brand-deep">
              When you buy from Bibinii Farms, you're not just getting fresher, safer eggs — you're making a choice that supports local jobs, strengthens food security, and keeps Ghana's agricultural heritage alive.
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
