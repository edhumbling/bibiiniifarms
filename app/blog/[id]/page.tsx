import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "../data";

type RouteParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  return {
    title: post ? `Bibinii Farms • ${post.title}` : "Bibinii Farms • Blog",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: RouteParams }) {
  const { id } = await params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-2">Post not found</h1>
          <Link href="/blog" className="text-emerald-glow hover:brightness-110">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image src={post.imageUrl} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow mb-3">{post.title}</h1>
            <p className="text-white/90">{post.category} • {post.readTime} • {post.date}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          {/* Top logo */}
          <div className="not-prose mb-6 flex justify-center">
            <Image
              src="/bibinii logo text white.svg"
              alt="Bibinii Farms"
              width={140}
              height={40}
              className="invert"
              priority
            />
          </div>
          
          {/* Author */}
          <div className="not-prose mb-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-white ring-1 ring-black/10 flex items-center justify-center">
                <Image
                  src="/bibinii logo text white.svg"
                  alt="Bibinii Farms logo"
                  width={28}
                  height={28}
                  className="invert"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">Written by Bibinii Farms Team</p>
              </div>
            </div>
          </div>

          {post.sections.map((s, idx) => (
            <section key={idx}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {/* Inline visual between sections */}
              {idx < post.sections.length - 1 ? (
                <div className="not-prose my-8">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1513815977113-29e7d27cb117?q=80&w=1600&auto=format&fit=crop&ixid=MnwyODQ3Nzd8MHwxfHNlYXJjaHwxfHxoZW4lMjBjaGlja2Vuc3xlbnwwfDB8fHwy`}
                      alt="Hen on pasture"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              ) : null}
            </section>
          ))}

          {post.sources.length ? (
            <section>
              <h3>Sources</h3>
              <ul>
                {post.sources.map((s) => (
                  <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                ))}
              </ul>
            </section>
          ) : null}

          <hr />
          <p>
            <Link href="/blog" className="text-emerald-glow hover:brightness-110">← Back to Blog</Link>
          </p>
        </div>
      </article>
    </div>
  );
}


