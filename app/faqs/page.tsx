"use client";
import { useState } from "react";
import Link from "next/link";

type FAQItem = { q: string; a: React.ReactNode };
type FAQSection = { title: string; items: FAQItem[] };

const sections: FAQSection[] = [
  {
    title: "Customer FAQs",
    items: [
      {
        q: "What is Bibinii Farms?",
        a: (
          <p>
            Bibinii Farms is a Ghanaian agribusiness dedicated to making fresh, affordable, and high quality
            food easily accessible. We partner with trusted farmers and operate our own farms. Every product—starting
            with eggs and expanding into chicken, vegetables, and grains—is graded, sorted, packaged, and delivered so
            you always get consistent quality.
          </p>
        ),
      },
      {
        q: "How do I place an order?",
        a: (
          <div>
            <p className="mb-3">It’s simple:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Place your order on our website, WhatsApp, or call our customer line.</li>
              <li>Confirm your order (number of crates or other farm products).</li>
              <li>Choose a delivery day and location.</li>
              <li>Pay via mobile money, cash on delivery, or bank transfer.</li>
              <li>Subscribe on our website for recurring orders.</li>
            </ul>
          </div>
        ),
      },
      {
        q: "How fresh are the products?",
        a: (
          <p>
            All Bibinii Farms products are collected from farms within 24–48 hours of delivery, then graded, cleaned,
            packaged, and sealed in branded cartons or crates to ensure freshness, hygiene, and food safety.
          </p>
        ),
      },
      {
        q: "Do you offer subscriptions?",
        a: (
          <div>
            <p className="mb-3">Yes. Customers can subscribe for weekly or monthly deliveries. Subscribers enjoy:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Locked-in prices (protection from market fluctuations).</li>
              <li>Priority delivery slots.</li>
              <li>Convenient automatic supply without worrying about shortages.</li>
            </ul>
          </div>
        ),
      },
      {
        q: "What are your prices?",
        a: (
          <div>
            <p className="mb-3">
              Our prices are transparent and competitive. Because we grade and package directly, customers get better value for money.
              Discounts are available for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Subscription customers</li>
              <li>Bulk orders</li>
            </ul>
          </div>
        ),
      },
      {
        q: "Where do you deliver?",
        a: (
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li>Households: Accra and surrounding areas (with plans to expand).</li>
              <li>Bulk buyers (restaurants, schools, hotels, shops, supermarkets): nationwide supply.</li>
            </ul>
            <p className="mt-3 mb-2">Delivery timeframes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Households: next-day or same-week delivery</li>
              <li>Bulk orders: scheduled weekly or monthly supply contracts</li>
            </ul>
          </div>
        ),
      },
      {
        q: "Why should I choose Bibinii Farms?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Farm-fresh food, professionally graded and packaged.</li>
            <li>Safe & hygienic handling, in line with food safety standards.</li>
            <li>Reliable supply, even during market shortages.</li>
            <li>Fair pricing, no long middleman chains.</li>
            <li>Sustainability impact: supports Ghanaian farmers, reduces waste, creates jobs.</li>
            <li>Customer guarantee: damaged or unsatisfactory orders will be replaced or refunded.</li>
          </ul>
        ),
      },
    ],
  },
  {
    title: "Farmer FAQs",
    items: [
      {
        q: "Who can supply to Bibinii Farms?",
        a: (
          <p>
            We partner with smallholder, medium to large-scale farmers producing eggs, chicken, vegetables, or grains.
            Farmers who meet our quality and safety standards can become partner suppliers.
          </p>
        ),
      },
      {
        q: "What happens to my produce once I supply it?",
        a: (
          <p>
            Your produce is graded, sorted, and packaged under the Bibinii Farms brand. This increases value and ensures
            it meets the expectations of households, retailers, schools, hotels, and supermarkets across Ghana.
          </p>
        ),
      },
      {
        q: "What are the benefits for farmers?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Guaranteed buyers with strong and growing demand.</li>
            <li>Prompt payments (mobile money, bank transfer, or cash).</li>
            <li>Nationwide market access through our logistics and distribution.</li>
            <li>Value addition: grading, packaging, and branding under Bibinii Farms.</li>
            <li>Training & support to help farmers meet quality and food safety standards.</li>
          </ul>
        ),
      },
      {
        q: "How do I become a Bibinii Farmer?",
        a: (
          <p>
            Fill out the Bibinii Farmer Partnership form <Link href="/become-farmer" className="text-emerald-glow underline">online</Link> or in person.
            Our team will review your farm, confirm production capacity, and guide you through onboarding.
          </p>
        ),
      },
      {
        q: "Will Bibinii Farms compete with me when you start your own farms?",
        a: (
          <p>
            No. Our farms stabilize supply and guarantee food security, not replace farmers. Demand in Ghana far exceeds what one farm can produce—partner farmers remain at the heart of our model.
          </p>
        ),
      },
    ],
  },
  {
    title: "Business, Safety & Vision FAQs",
    items: [
      {
        q: "How does Bibinii Farms ensure food safety?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Grading & sorting every product for consistency.</li>
            <li>Sealed, branded packaging for hygiene and professionalism.</li>
            <li>Storage & transport systems that keep produce fresh.</li>
            <li>Compliance with Ghana FDA and food safety standards.</li>
          </ul>
        ),
      },
      {
        q: "Can businesses and institutions work with Bibinii Farms?",
        a: (
          <div>
            <p className="mb-3">Yes. We supply restaurants, hotels, schools, shops, and supermarkets. Bulk buyers benefit from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nationwide delivery.</li>
              <li>Scheduled weekly/monthly supply contracts.</li>
              <li>Flexible payment terms (cash, mobile money, bank transfers, or invoicing for institutions).</li>
              <li>Consistent quality, thanks to our grading and packaging system.</li>
            </ul>
          </div>
        ),
      },
      {
        q: "What type of packaging do you use?",
        a: (
          <p>
            All Bibinii Farms products are packaged in clean, sealed, and branded crates or cartons. This ensures hygiene,
            makes handling easier, and gives customers confidence in the product.
          </p>
        ),
      },
      {
        q: "What is Bibinii Farms’ long-term vision?",
        a: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Combine produce from partner farmers with Bibinii’s own farms.</li>
            <li>Use digital platforms for easy ordering, tracking, and payments.</li>
            <li>Expand retail outlets and cold-chain logistics to serve every region.</li>
            <li>Strengthen Ghana’s self-sufficiency in food production.</li>
            <li>Reduce food waste, support smallholder farmers, and create jobs across the country.</li>
          </ul>
        ),
      },
    ],
  },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Bibinii Farms – Frequently Asked Questions (FAQs)</h1>
          <p className="mt-2 text-gray-700">Everything you need to know as a customer, farmer, or business.</p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section, sIdx) => (
            <div key={section.title}>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand-egg" />
                  {section.title}
                </span>
              </h2>
              <div className="space-y-3">
                {section.items.map((item, iIdx) => {
                  const key = `${sIdx}-${iIdx}`;
                  const isOpen = !!open[key];
                  return (
                    <div key={key} className="rounded-xl border border-gray-200 bg-white shadow-sm">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${key}`}
                        onClick={() => toggle(key)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl"
                      >
                        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{item.q}</span>
                        <span
                          className={`ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-black/10 text-2xl leading-none transition-colors ${
                            isOpen ? "bg-emerald-glow text-white" : "bg-white text-emerald-glow"
                          }`}
                          aria-hidden
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <div id={`faq-panel-${key}`} className={`${isOpen ? "block" : "hidden"} px-5 pb-5 text-gray-700 leading-relaxed`}>
                        {item.a}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-700 mb-6">We’re here to help you with orders, partnerships, and more.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:info@bibiniifarms.com" className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-6 py-3 font-semibold hover:brightness-110 transition-colors">
              Email Support
            </a>
            <a href="tel:+233543474770" className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-6 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
