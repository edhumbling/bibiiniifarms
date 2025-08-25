"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client";

// Metadata will be handled by layout or parent component

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
  author->{
    name,
    image,
    position
  },
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

export default function BlogPage() {
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<SanityDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  const handleCategoryChange = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
  };
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

      {/* Categories Filter - Mobile Optimized */}
      <section className="py-6 sm:py-8 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                    category.value === selectedCategory
                      ? "bg-emerald-glow text-white shadow-sm"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Desktop: Centered Grid */}
          <div className="hidden sm:flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  category.value === selectedCategory
                    ? "bg-emerald-glow text-white shadow-sm"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center space-x-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-glow"></div>
                <span className="text-gray-600">Loading blog posts...</span>
              </div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedCategory === "all" ? "No blog posts yet" : `No posts in ${categories.find(c => c.value === selectedCategory)?.label} category`}
              </h3>
              <p className="text-gray-600">
                {selectedCategory === "all" 
                  ? "Check back soon for exciting content from Bibinii Farms!" 
                  : "Try selecting a different category or check back later."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => {
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

                const authorImageUrl = post.author?.image
                  ? urlFor(post.author.image)?.width(32).height(32).url()
                  : null;

                return (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="block">
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                      {/* Mobile: Two-column layout, Desktop: Standard */}
                      <div className="md:block">
                        {/* Desktop Layout */}
                        <div className="hidden md:block">
                          <div className="relative h-48 w-full">
                            <Image 
                              src={postImageUrl} 
                              alt={post.title} 
                              fill 
                              className="object-cover" 
                              sizes="(max-width: 768px) 50vw, 33vw" 
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
                            <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                              {excerpt}
                            </p>
                            
                            {/* Author & Date Section - Compact */}
                            <div className="flex items-center space-x-3">
                              {authorImageUrl && (
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                  <Image
                                    src={authorImageUrl}
                                    alt={post.author.name}
                                    width={32}
                                    height={32}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-medium text-gray-900 truncate">
                                  {post.author?.name || 'Bibinii Farms Team'}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Mobile Layout - Two Column Design */}
                        <div className="md:hidden flex h-32">
                          {/* Left: Image */}
                          <div className="relative w-32 flex-shrink-0">
                            <Image 
                              src={postImageUrl} 
                              alt={post.title} 
                              fill 
                              className="object-cover rounded-l-lg" 
                              sizes="128px" 
                            />
                          </div>
                          
                          {/* Right: Content */}
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow capitalize mb-2">
                                {post.category?.replace('-', ' ') || 'Blog'}
                              </span>
                              <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-1">
                                {post.title}
                              </h2>
                            </div>
                            
                            {/* Author & Date - Mobile Compact */}
                            <div className="flex items-center space-x-2 mt-auto">
                              {authorImageUrl && (
                                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                  <Image
                                    src={authorImageUrl}
                                    alt={post.author.name}
                                    width={24}
                                    height={24}
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                              )}
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-gray-600 truncate">
                                  {post.author?.name || 'Bibinii Farms Team'}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                    month: 'short', 
                                    day: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
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


    </div>
  );
}
