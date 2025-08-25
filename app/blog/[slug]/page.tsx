import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/client";
import { portableTextComponents } from "../../components/PortableTextComponents";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  author->{
    name,
    image,
    position,
    bio
  },
  body
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  
  return {
    title: post?.title ? `${post.title} • Bibinii Farms Blog` : "Blog Post • Bibinii Farms",
    description: post?.title || "Read our latest blog post about sustainable farming and ethical egg production.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link 
            href="/blog" 
            className="text-emerald-glow hover:brightness-110 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(400).url()
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-emerald-glow hover:brightness-110 font-medium mb-8"
          >
            ← Back to Blog
          </Link>
          
          {postImageUrl && (
            <div className="relative h-64 sm:h-80 lg:h-96 w-full mb-8 rounded-xl overflow-hidden">
              <Image
                src={postImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            {/* Author Byline - CNN/WSJ Style */}
            <div className="flex items-center justify-center space-x-4 mb-4">
              {post.author?.image && (
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={urlFor(post.author.image)?.width(48).height(48).url() || ''}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Written by: <span className="font-semibold">{post.author?.name || 'Bibinii Farms Team'}</span>
                </p>
                {post.author?.position && (
                  <p className="text-xs text-gray-600">{post.author.position}</p>
                )}
              </div>
            </div>
            
            <p className="text-sm text-gray-600">
              Published on {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 leading-relaxed text-lg">
            {Array.isArray(post.body) && (
              <PortableText 
                value={post.body} 
                components={portableTextComponents}
              />
            )}
          </div>
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Enjoyed this post?
          </h2>
          <p className="text-gray-600 mb-6">
            Check out more stories and insights from Bibinii Farms.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-glow text-white rounded-full font-semibold hover:brightness-110 transition-all"
          >
            Read More Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
