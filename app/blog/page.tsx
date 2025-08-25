import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "../sanity/client";
import BlogList from "./BlogList";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...24]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  category,
  excerpt,
  author->{ name, image, position },
  body[0...3]
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  // Fetch on the server to avoid public dataset/read token issues
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

      <BlogList initialPosts={posts} />

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
