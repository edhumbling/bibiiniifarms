import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • About",
  description: "We're passionate about producing the finest eggs while caring for our chickens, our farmers, and our planet.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-happy-orange py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Bibinii Farms
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're passionate about producing the finest eggs while caring for our chickens, our farmers, and our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Bibinii Farms began with a simple mission: to revolutionize egg production 
                by putting animal welfare, environmental sustainability, and community support at the heart 
                of everything we do.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a small family farm has grown into a network of passionate farmers across 
                the region, all united by our commitment to ethical farming practices and producing the 
                highest quality eggs.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be a leader in sustainable agriculture, setting new standards for 
                how eggs should be produced and distributed.
              </p>
            </div>
            <div className="bg-orange-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-orange-700 text-lg font-semibold">Farm Story Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To create a sustainable food system that benefits chickens, farmers, consumers, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Animal Welfare</h3>
              <p className="text-gray-600">
                Ensuring our chickens live happy, healthy lives in natural environments where they can express their natural behaviors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Care</h3>
              <p className="text-gray-600">
                Implementing regenerative farming practices that improve soil health and support biodiversity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Supporting local farmers and rural communities through fair partnerships and sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency about our farming practices, from how we raise our chickens 
                to how we support our farmers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring every egg meets our high standards for nutrition, 
                taste, and freshness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to improve our farming practices, reduce our environmental impact, 
                and enhance animal welfare.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and integrity in all our relationships with farmers, customers, 
                and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals leading our mission to transform egg production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-700 text-lg font-semibold">CEO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-orange-600 mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                20+ years in sustainable agriculture, passionate about ethical farming practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-700 text-lg font-semibold">CTO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Chen</h3>
              <p className="text-orange-600 mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Expert in agricultural technology and sustainable farming innovations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-700 text-lg font-semibold">COO</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Emily Rodriguez</h3>
              <p className="text-orange-600 mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Specialist in supply chain management and farmer partnership programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a consumer, farmer, or partner, there are many ways to be part of our sustainable food movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-8 py-3 font-semibold hover:bg-orange-700 transition-colors"
            >
              Shop Our Products
            </Link>
            <Link
              href="/become-farmer"
              className="inline-flex items-center justify-center rounded-full border border-orange-600 text-orange-600 px-8 py-3 font-semibold hover:bg-orange-50 transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
