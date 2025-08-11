import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Stores",
  description: "Find Bibinii Farms eggs at stores near you. Fresh, sustainable, and ethically produced.",
};

const stores = [
  {
    id: 1,
    name: "Fresh Market Downtown",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 7AM-9PM, Sun: 8AM-8PM",
    distance: "0.5 miles",
    products: ["Heritage", "Pasture Raised", "Organic"]
  },
  {
    id: 2,
    name: "Green Grocer West",
    address: "456 Oak Avenue, West Side",
    phone: "(555) 234-5678",
    hours: "Daily: 6AM-10PM",
    distance: "1.2 miles",
    products: ["Pasture Raised", "Organic", "Free Range"]
  },
  {
    id: 3,
    name: "Neighborhood Market",
    address: "789 Pine Street, Midtown",
    phone: "(555) 345-6789",
    hours: "Mon-Fri: 7AM-9PM, Weekends: 8AM-8PM",
    distance: "2.1 miles",
    products: ["Heritage", "Free Range"]
  },
  {
    id: 4,
    name: "Organic Foods Co-op",
    address: "321 Elm Drive, North End",
    phone: "(555) 456-7890",
    hours: "Daily: 8AM-9PM",
    distance: "2.8 miles",
    products: ["Organic", "Pasture Raised"]
  },
  {
    id: 5,
    name: "Farm Fresh Market",
    address: "654 Maple Lane, South Hills",
    phone: "(555) 567-8901",
    hours: "Mon-Sat: 6AM-10PM, Sun: 7AM-9PM",
    distance: "3.5 miles",
    products: ["Heritage", "Pasture Raised", "Organic", "Free Range"]
  }
];

export default function StoreLocatorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-luminous-green py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Store Locator
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find Bibinii Farms eggs at stores near you. Fresh, sustainable, and ethically produced.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Find Stores Near You</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter your location
                  </label>
                  <input
                    type="text"
                    id="location"
                    placeholder="City, State or ZIP code"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="radius" className="block text-sm font-medium text-gray-700 mb-2">
                      Search radius
                    </label>
                    <select
                      id="radius"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
                    >
                      <option>5 miles</option>
                      <option>10 miles</option>
                      <option>25 miles</option>
                      <option>50 miles</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                      Product type
                    </label>
                    <select
                      id="product"
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-glow focus:border-transparent"
                    >
                      <option>All Products</option>
                      <option>Heritage</option>
                      <option>Pasture Raised</option>
                      <option>Organic</option>
                      <option>Free Range</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-luminous-green text-white py-3 rounded-lg font-semibold hover:brightness-110 transition-colors">
                  Search Stores
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-600 text-lg font-semibold">Interactive Map</span>
              </div>
            </div>

            {/* Store List */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Stores ({stores.length})</h2>
              <div className="space-y-4">
                {stores.map((store) => (
                  <div key={store.id} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                       <span className="text-sm text-emerald-glow font-medium">{store.distance}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{store.address}</p>
                    <p className="text-gray-600 mb-2">{store.phone}</p>
                    <p className="text-sm text-gray-500 mb-3">{store.hours}</p>
                    
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-1">Available Products:</p>
                      <div className="flex flex-wrap gap-1">
                        {store.products.map((product) => (
                          <span
                            key={product}
                             className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-luminous-green text-white py-2 px-4 rounded text-sm font-medium hover:brightness-110 transition-colors">
                        Get Directions
                      </button>
                      <button className="flex-1 border border-emerald-glow text-emerald-glow py-2 px-4 rounded text-sm font-medium hover:bg-emerald-glow/10 transition-colors">
                        Call Store
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Features */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our retail partners are carefully selected to ensure the best shopping experience and product quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proper Storage</h3>
              <p className="text-gray-600">
                All our retail partners maintain proper refrigeration to ensure eggs stay fresh and safe.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Delivery</h3>
              <p className="text-gray-600">
                Regular deliveries ensure you always find the freshest eggs with clear expiration dates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏷️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clear Labeling</h3>
              <p className="text-gray-600">
                Easy-to-understand labels help you choose the right product for your needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Store?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking to partner with new retailers. Contact us to learn about carrying Bibinii Farms products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
