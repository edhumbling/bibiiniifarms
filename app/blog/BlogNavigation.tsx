"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../sanity/client";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
};

type BlogNavigationProps = {
  currentPostSlug: string;
  currentPostPublishedAt: string;
};

export default function BlogNavigation({ currentPostSlug, currentPostPublishedAt }: BlogNavigationProps) {
  const [prevPost, setPrevPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchAdjacentPosts = async () => {
      try {
        // Query for previous post (published before current)
        const prevQuery = `*[ _type == "post" && defined(slug.current) && publishedAt < $currentPublishedAt ] | order(publishedAt desc)[0]{
          _id,
          title,
          slug,
          publishedAt
        }`;

        // Query for next post (published after current)
        const nextQuery = `*[ _type == "post" && defined(slug.current) && publishedAt > $currentPublishedAt ] | order(publishedAt asc)[0]{
          _id,
          title,
          slug,
          publishedAt
        }`;

        const [prevResult, nextResult] = await Promise.all([
          client.fetch(prevQuery, { currentPublishedAt }),
          client.fetch(nextQuery, { currentPublishedAt })
        ]);

        setPrevPost(prevResult || null);
        setNextPost(nextResult || null);
      } catch (error) {
        console.error("Error fetching adjacent posts:", error);
      }
    };

    fetchAdjacentPosts();
  }, [currentPostSlug, currentPostPublishedAt]);

  if (!prevPost && !nextPost) {
    return null; // Don't show anything if no adjacent posts
  }

  return (
    <div className="py-6 sm:py-8 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Previous Post */}
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug.current}`}
              className="group flex-1 flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Previous Reading</div>
                <div className="mt-1 text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-glow transition-colors">
                  {prevPost.title}
                </div>
              </div>
            </Link>
          ) : (
            <div className="flex-1" /> // Spacer when no previous post
          )}

          {/* Next Post */}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug.current}`}
              className="group flex-1 flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex-1 min-w-0 text-right">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Next Reading</div>
                <div className="mt-1 text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-emerald-glow transition-colors">
                  {nextPost.title}
                </div>
              </div>
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ) : (
            <div className="flex-1" /> // Spacer when no next post
          )}
        </div>
      </div>
    </div>
  );
}
