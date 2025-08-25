import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client";

export const metadata: Metadata = {
  title: "Bibinii Farms • Blog",
  description: "Stories, insights, and updates from the world of sustainable farming and ethical egg production.",
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  image,
  category,
  excerpt,
  body[0...3]
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const categories = [
  { label: "All", value: "all" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Sustainability", value: "sustainability" },
  { label: "Farmers", value: "farmers" },
  { label: "Animal Welfare", value: "animal-welfare" },
  { label: "Education", value: "education" },
  { label: "Recipes", value: "recipes" }
];

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video 
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_14_2025,%205_23%E2%80%AFPM.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
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
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.value === "all"
                    ? "bg-emerald-glow text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600">Check back soon for exciting content from Bibinii Farms!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const postImageUrl = post.image
                  ? urlFor(post.image)?.width(400).height(300).url()
                  : "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop";
                
                if (!postImageUrl) {
                  return null; // Skip this post if no valid image URL
                }
                
                const excerpt = post.excerpt || 
                  (post.body && Array.isArray(post.body) 
                    ? post.body.find((block: any) => block._type === 'block' && block.children)?.children
                        ?.map((child: any) => child.text)
                        ?.join('')
                        ?.substring(0, 150) + '...'
                    : 'Click to read this blog post...');

                return (
                  <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative h-48 w-full">
                      <Image 
                        src={postImageUrl} 
                        alt={post.title} 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 768px) 100vw, 33vw" 
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow capitalize">
                          {post.category?.replace('-', ' ') || 'Blog Post'}
                        </span>
                        <span className="text-sm text-gray-500">5 min read</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="text-emerald-glow hover:brightness-110 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
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
              <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-luminous-green text-white rounded-lg font-semibold hover:brightness-110 transition-colors">
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
              <div className="w-12 h-12 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Nutrition</h3>
              <p className="text-gray-600 text-sm">
                Learn about the nutritional benefits of our eggs and healthy eating tips.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm">
                Discover our environmental initiatives and sustainable farming practices.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Farmer Stories</h3>
              <p className="text-gray-600 text-sm">
                Meet the dedicated farmers who are part of our sustainable network.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-glow/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
