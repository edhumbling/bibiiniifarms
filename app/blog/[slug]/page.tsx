import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../../sanity/client";
import { portableTextComponents } from "../../components/PortableTextComponents";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShareBar from "../ShareBar";
import BlogNavigation from "../BlogNavigation";

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
    openGraph: {
      title: post?.title ? `${post.title} • Bibinii Farms Blog` : "Blog Post • Bibinii Farms",
      description: post?.excerpt || "Explore more insights from Bibinii Farms.",
      type: "article",
      url: `https://bibiniifarms.com/blog/${post?.slug?.current ?? ""}`,
      siteName: "Bibinii Farms",
      images: post?.image
        ? [
            {
              url: urlFor(post.image)?.width(1200).height(630).url() || "",
              width: 1200,
              height: 630,
              alt: post?.title || "Bibinii Farms Blog",
            },
          ]
        : [
            {
              url: "https://bibiniifarms.com/icon-1200x630.png",
              width: 1200,
              height: 630,
              alt: "Bibinii Farms",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title ? `${post.title} • Bibinii Farms Blog` : "Bibinii Farms Blog",
      description: post?.excerpt || "Explore more insights from Bibinii Farms.",
      images: post?.image
        ? [urlFor(post.image)?.width(1200).height(630).url() || ""]
        : ["https://bibiniifarms.com/icon-1200x630.png"],
    },
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
          
          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="border-t border-orange-500/30 border-dashed my-3" />
            {/* Meta line: Date | Author */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <time className="text-gray-800" dateTime={new Date(post.publishedAt).toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="text-gray-400">|</span>
              <p className="text-gray-800">
                <span className="text-gray-700">Written by:</span>{' '}
                <span className="font-semibold">{post.author?.name || 'Bibinii Farms Team'}</span>
                {post.author?.position ? <span className="text-gray-600">, {post.author.position}</span> : null}
              </p>
            </div>
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

      {/* About the Author */}
      {post.author?.bio && Array.isArray(post.author.bio) && post.author.bio.length > 0 ? (
        <section className="py-4 sm:py-6">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white border rounded-lg p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">About the author</h3>
              <div className="flex items-start gap-4">
                {post.author?.image ? (
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={urlFor(post.author.image)?.width(56).height(56).url() || ''}
                      alt={post.author?.name || 'Author'}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : null}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {post.author?.name || 'Bibinii Farms Team'}
                  </p>
                  {post.author?.position ? (
                    <p className="text-sm text-gray-600 mb-2">{post.author.position}</p>
                  ) : null}
                  <div className="text-gray-700 text-sm leading-relaxed">
                    <PortableText value={post.author.bio} components={portableTextComponents} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Share Bar */}
      <ShareBar title={post.title} />

      {/* Blog Navigation - Previous/Next Posts */}
      <BlogNavigation
        currentPostSlug={post.slug.current}
        currentPostPublishedAt={post.publishedAt}
      />

      {/* Back to Blog CTA - redesigned */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">Enjoyed this post?</h2>
                <p className="mt-1 text-gray-700">Check out more stories and insights from Bibinii Farms.</p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95 transition-all"
              >
                Read More Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
