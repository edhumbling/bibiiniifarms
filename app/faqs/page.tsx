"use client";
import { useState } from "react";
import Image from "next/image";
import FooterBackground from "../footer background.svg";
import { Metadata } from "next";

// Note: metadata export not available in client components, handled in layout
// Title: "Bibinii Farms • FAQs"

const faqs = [
  {
    id: 1,
    category: "Products",
    question: "What's the difference between your egg types?",
    answer: "Our Heritage eggs come from heritage breed chickens with rich, flavorful yolks. Pasture Raised eggs are from chickens that roam freely on open pastures. Organic eggs are certified organic with non-GMO feed. Free Range eggs are from chickens with outdoor access."
  },
  {
    id: 2,
    category: "Products",
    question: "How long do your eggs stay fresh?",
    answer: "Our eggs stay fresh for 4-5 weeks from the pack date when stored properly in the refrigerator. We recommend using them within 3 weeks of purchase for best quality and taste."
  },
  {
    id: 3,
    category: "Farming",
    question: "How do you ensure chicken welfare?",
    answer: "Our chickens have access to outdoor pastures, natural lighting, and spacious coops. They're fed high-quality, natural feed and receive regular veterinary care. We follow strict animal welfare standards that exceed industry requirements."
  },
  {
    id: 4,
    category: "Farming",
    question: "Are your farms really sustainable?",
    answer: "Yes! We use regenerative agriculture practices including rotational grazing, chemical-free pastures, solar power, and water conservation. Our farming methods actually improve soil health and support biodiversity."
  },
  {
    id: 5,
    category: "Ordering",
    question: "Can I order eggs directly from you?",
    answer: "Yes, we offer direct ordering through our website with home delivery in select areas. You can also find our eggs at partner retailers using our store locator."
  },
  {
    id: 6,
    category: "Ordering",
    question: "Do you offer subscription services?",
    answer: "Yes! Our subscription service delivers fresh eggs to your door on a weekly, bi-weekly, or monthly schedule. You can customize your order and pause or cancel anytime."
  },
  {
    id: 7,
    category: "Nutrition",
    question: "Are your eggs more nutritious than regular eggs?",
    answer: "Studies show that pasture-raised eggs typically contain higher levels of Omega-3 fatty acids, Vitamin E, and beta-carotene compared to conventional eggs. The nutritional content can vary based on the chickens' diet and living conditions."
  },
  {
    id: 8,
    category: "Nutrition",
    question: "Are your eggs safe to eat raw?",
    answer: "While our eggs are produced under strict safety standards, we recommend cooking eggs thoroughly to eliminate any risk of foodborne illness. If you choose to consume raw eggs, use the freshest eggs possible and store them properly."
  },
  {
    id: 9,
    category: "Partnership",
    question: "How can I become a partner farmer?",
    answer: "We're always looking for passionate farmers who share our values. You'll need suitable land (minimum 5 acres), commitment to our standards, and a business mindset. Contact us to learn about our partnership program."
  },
  {
    id: 10,
    category: "Partnership",
    question: "Do you provide training for new farmers?",
    answer: "Absolutely! We provide comprehensive training on sustainable farming practices, animal welfare, business management, and our quality standards. Ongoing support is available throughout your partnership."
  }
];

const categories = ["All", "Products", "Farming", "Ordering", "Nutrition", "Partnership"];

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our products, farming practices, and services.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-emerald-glow text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <svg className="w-5 h-5 text-gray-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@bibiiniifarms.com"
              className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick links to our most frequently asked about topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Info</h3>
              <p className="text-gray-600 text-sm">
                Learn about our different egg types and their unique characteristics.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ordering</h3>
              <p className="text-gray-600 text-sm">
                Information about ordering, delivery, and subscription services.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Details about our farming practices and environmental commitment.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Information about becoming a farmer partner or retail partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
