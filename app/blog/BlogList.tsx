"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const categories = [
  { label: "All", value: "all" },
  { label: "Nutrition", value: "nutrition" },
  { label: "Sustainability", value: "sustainability" },
  { label: "Farmers", value: "farmers" },
  { label: "Animal Welfare", value: "animal-welfare" },
  { label: "Education", value: "education" },
  { label: "Recipes", value: "recipes" },
];

export default function BlogList({ initialPosts }: { initialPosts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return initialPosts;
    return initialPosts.filter((p) => p.category === selectedCategory);
  }, [initialPosts, selectedCategory]);

  return (
    <>
      {/* Categories Filter - Mobile Optimized */}
      <section className="py-6 sm:py-8 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden">
            <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
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
                onClick={() => setSelectedCategory(category.value)}
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
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {selectedCategory === "all" ? "No blog posts yet" : `No posts in ${categories.find((c) => c.value === selectedCategory)?.label} category`}
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

                if (!postImageUrl) return null;

                const excerpt =
                  post.excerpt ||
                  (post.body && Array.isArray(post.body)
                    ? post.body
                        .find((block: any) => block._type === "block" && block.children)
                        ?.children?.map((child: any) => child.text)
                        ?.join("")
                        ?.substring(0, 150) + "..."
                    : "Click to read this blog post...");

                const authorImageUrl = post.author?.image
                  ? urlFor(post.author.image)?.width(32).height(32).url()
                  : null;

                return (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="block">
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="relative h-48 w-full">
                          <Image src={postImageUrl} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow capitalize">
                              {post.category?.replace("-", " ") || "Blog Post"}
                            </span>
                            <span className="text-sm text-gray-500">5 min read</span>
                          </div>
                          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h2>
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{excerpt}</p>
                          <div className="flex items-center space-x-3">
                            {authorImageUrl && (
                              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                <Image src={authorImageUrl} alt={post.author?.name || "Author"} width={32} height={32} className="object-cover w-full h-full" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-medium text-gray-900 truncate">{post.author?.name || "Bibinii Farms Team"}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile Layout - Two Column */}
                      <div className="md:hidden flex h-32">
                        <div className="relative w-32 flex-shrink-0">
                          <Image src={postImageUrl} alt={post.title} fill className="object-cover rounded-l-lg" sizes="128px" />
                        </div>
                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-glow/10 text-emerald-glow capitalize mb-2">
                              {post.category?.replace("-", " ") || "Blog"}
                            </span>
                            <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight mb-1">{post.title}</h2>
                          </div>
                          <div className="flex items-center space-x-2 mt-auto">
                            {authorImageUrl && (
                              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                <Image src={authorImageUrl} alt={post.author?.name || "Author"} width={24} height={24} className="object-cover w-full h-full" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="text-xs text-gray-600 truncate">{post.author?.name || "Bibinii Farms Team"}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </p>
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
    </>
  );
}


