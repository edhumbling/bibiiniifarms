import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Press",
  description: "Latest news, press releases, and media resources from Bibinii Farms.",
};

const pressReleases = [
  {
    id: 1,
    title: "Bibinii Farms Expands Sustainable Egg Production Network",
    date: "March 20, 2024",
    excerpt: "Company announces partnership with 15 new family farms, increasing sustainable egg production capacity by 40%.",
    category: "Expansion"
  },
  {
    id: 2,
    title: "New Regenerative Agriculture Initiative Launched",
    date: "March 10, 2024",
    excerpt: "Bibinii Farms introduces comprehensive soil health program across all partner farms, targeting carbon sequestration goals.",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Award Recognition for Animal Welfare Excellence",
    date: "February 28, 2024",
    excerpt: "Bibinii Farms receives prestigious Humane Farm Animal Care certification for outstanding animal welfare practices.",
    category: "Awards"
  },
  {
    id: 4,
    title: "Direct-to-Consumer Platform Reaches 10,000 Customers",
    date: "February 15, 2024",
    excerpt: "Online ordering platform celebrates milestone with expanded delivery areas and new subscription options.",
    category: "Business"
  }
];

const mediaKit = [
  {
    title: "Company Logos",
    description: "High-resolution logos in various formats",
    fileType: "ZIP (PNG, SVG, EPS)"
  },
  {
    title: "Product Images",
    description: "Professional photos of our egg products",
    fileType: "ZIP (JPG, PNG)"
  },
  {
    title: "Farm Photos",
    description: "Images of our sustainable farming operations",
    fileType: "ZIP (JPG)"
  },
  {
    title: "Executive Headshots",
    description: "Professional photos of leadership team",
    fileType: "ZIP (JPG)"
  },
  {
    title: "Company Fact Sheet",
    description: "Key statistics and company information",
    fileType: "PDF"
  },
  {
    title: "Sustainability Report",
    description: "Annual environmental impact report",
    fileType: "PDF"
  }
];

const awards = [
  {
    year: "2024",
    award: "Humane Farm Animal Care Certification",
    organization: "Certified Humane"
  },
  {
    year: "2023",
    award: "Sustainable Agriculture Leadership Award",
    organization: "National Sustainable Agriculture Coalition"
  },
  {
    year: "2023",
    award: "Best New Food Product",
    organization: "Regional Food Awards"
  },
  {
    year: "2022",
    award: "Environmental Excellence Award",
    organization: "State Department of Agriculture"
  }
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-happy-orange py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Latest news, press releases, and media resources from Bibinii Farms.
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Martinez</p>
                    <p className="text-gray-600">Director of Communications</p>
                  </div>
                  <div>
                    <p className="text-gray-600">📧 press@bibiiniifarms.com</p>
                    <p className="text-gray-600">📞 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Available Monday-Friday, 9 AM - 5 PM EST
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Founded:</span> 2015</p>
                  <p><span className="font-semibold">Headquarters:</span> Rural Valley, State</p>
                  <p><span className="font-semibold">Partner Farms:</span> 50+</p>
                  <p><span className="font-semibold">Employees:</span> 150+</p>
                  <p><span className="font-semibold">Products:</span> Heritage, Pasture Raised, Organic, Free Range Eggs</p>
                  <p><span className="font-semibold">Distribution:</span> Regional (5 states)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Press Releases */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Press Releases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest company news and announcements.
            </p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release) => (
              <article key={release.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {release.category}
                      </span>
                      <span className="text-sm text-gray-500">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <Link
                      href={`/press/${release.id}`}
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Read Full Release →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/press/archive"
              className="inline-flex items-center justify-center rounded-full border border-orange-600 text-orange-600 px-8 py-3 font-semibold hover:bg-orange-50 transition-colors"
            >
              View All Press Releases
            </Link>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Kit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets and company information for your stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.fileType}</span>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-orange-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognition for our commitment to sustainable farming and animal welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold">{award.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{award.award}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">In the News</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recent media coverage and mentions of Bibinii Farms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <span className="text-sm text-gray-500">Farm & Food Weekly</span>
                <p className="text-sm text-gray-400">March 25, 2024</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                "The Future of Sustainable Egg Production"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Feature article highlighting Bibinii Farms' innovative approach to regenerative agriculture...
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Read Article →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <span className="text-sm text-gray-500">Local Business Journal</span>
                <p className="text-sm text-gray-400">March 18, 2024</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                "Regional Company Leads in Animal Welfare"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Profile of Bibinii Farms' commitment to ethical farming practices and community impact...
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Read Article →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <span className="text-sm text-gray-500">Sustainable Food Network</span>
                <p className="text-sm text-gray-400">March 12, 2024</p>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                "Farm-to-Table Success Story"
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                How Bibinii Farms is revolutionizing the connection between farmers and consumers...
              </p>
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Read Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Working on a Story?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're happy to provide additional information, arrange interviews, or connect you with our farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:press@bibiiniifarms.com"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 text-white px-8 py-3 font-semibold hover:bg-orange-700 transition-colors"
            >
              Contact Press Team
            </a>
            <button className="inline-flex items-center justify-center rounded-full border border-orange-600 text-orange-600 px-8 py-3 font-semibold hover:bg-orange-50 transition-colors">
              Schedule Interview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
