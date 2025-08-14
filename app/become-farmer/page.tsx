import Link from "next/link";
import { Metadata } from "next";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";

export const metadata: Metadata = {
  title: "Bibinii Farms • Become a Bibinii Farmer",
  description: "Join our network of passionate farmers committed to sustainable agriculture and ethical egg production.",
};

export default function BecomeFarmerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={DEFAULT_HERO_POSTER}
          >
            <source src="https://ik.imagekit.io/spj5u0tzx/Bibinii%20Hen%20House%20Video%203-8_14_2025,%2010_25%E2%80%AFAM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a Bibinii Farmer
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our network of passionate farmers committed to sustainable agriculture and ethical egg production.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help you build a successful, sustainable farming operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Income</h3>
              <p className="text-gray-600">
                Secure contracts with fair pricing that ensures stable income for your farming operation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Training & Support</h3>
              <p className="text-gray-600">
                Comprehensive training programs and ongoing support from our agricultural experts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Practices</h3>
              <p className="text-gray-600">
                Learn and implement cutting-edge sustainable farming techniques that benefit the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Land Requirements</h3>
                    <p className="text-gray-600">Minimum 5 acres of suitable land for pasture-based farming</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Commitment to Standards</h3>
                    <p className="text-gray-600">Dedication to our animal welfare and sustainability standards</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Mindset</h3>
                    <p className="text-gray-600">Entrepreneurial spirit and commitment to running a successful operation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-glow rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Community</h3>
                    <p className="text-gray-600">Located within our distribution network for efficient logistics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-green-700 text-lg font-semibold">Farmer Partnership Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process helps you transition from application to successful farming operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600 text-sm">
                Submit your application with details about your land and farming goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-gray-600 text-sm">
                Our team visits your property to assess suitability and discuss partnership terms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Train</h3>
              <p className="text-gray-600 text-sm">
                Complete our comprehensive training program on sustainable farming practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600 text-sm">
                Start your farming operation with our ongoing support and guaranteed contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-luminous-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards building a sustainable farming business with our support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-ink px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
