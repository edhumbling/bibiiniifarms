import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Blog",
  description: "Stories, insights, and updates from the world of sustainable farming and ethical egg production.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Pasture-Raised Eggs",
    excerpt: "Discover why pasture-raised eggs are not only better for chickens but also more nutritious for you.",
    date: "March 15, 2024",
    category: "Nutrition",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Farming: Our Regenerative Practices",
    excerpt: "Learn about the regenerative agriculture techniques we use to improve soil health and biodiversity.",
    date: "March 10, 2024",
    category: "Sustainability",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Meet Our Farmers: The Johnson Family Farm",
    excerpt: "Get to know the passionate farmers who are part of our network and their commitment to ethical farming.",
    date: "March 5, 2024",
    category: "Farmers",
    readTime: "4 min read"
  },
  {
    id: 4,
    title: "Chicken Welfare: What Free-Range Really Means",
    excerpt: "Understanding the difference between free-range, cage-free, and pasture-raised chicken farming.",
    date: "February 28, 2024",
    category: "Animal Welfare",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Seasonal Egg Production: What to Expect",
    excerpt: "How seasonal changes affect egg production and what it means for availability and quality.",
    date: "February 20, 2024",
    category: "Education",
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Recipe: Perfect Scrambled Eggs with Fresh Herbs",
    excerpt: "A simple recipe that showcases the superior taste and texture of our farm-fresh eggs.",
    date: "February 15, 2024",
    category: "Recipes",
    readTime: "2 min read"
  }
];

const categories = ["All", "Nutrition", "Sustainability", "Farmers", "Animal Welfare", "Education", "Recipes"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-happy-orange py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stories, insights, and updates from the world of sustainable farming and ethical egg production.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 h-48 flex items-center justify-center">
                  <span className="text-orange-700 text-lg font-semibold">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest stories, farming tips, and updates delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most popular content categories to learn more about sustainable farming and ethical food production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nutrition</h3>
              <p className="text-gray-600 text-sm">
                Learn about the nutritional benefits of our eggs and healthy eating tips.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Discover our environmental initiatives and sustainable farming practices.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Farmer Stories</h3>
              <p className="text-gray-600 text-sm">
                Meet the dedicated farmers who are part of our sustainable network.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recipes</h3>
              <p className="text-gray-600 text-sm">
                Delicious recipes that showcase the quality of our farm-fresh eggs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
