import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Heritage Eggs",
  description: "Our Heritage eggs come from time-honored breeds with deep golden yolks and rich flavor.",
};

export default function HeritageProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png"
          alt="Heritage eggs hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
        <div className="absolute top-4 left-4">
          <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-black/40 text-white px-4 py-2 backdrop-blur-md ring-1 ring-white/20 hover:bg-black/50 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to products
          </Link>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">Heritage Eggs</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What makes <strong>Heritage</strong> eggs special?</h2>
          <p>
            Heritage breeds are traditional, slow-growing chickens cherished for their robustness and
            exceptional egg quality. Their eggs often feature deeply pigmented yolks and a fuller, more
            nuanced taste thanks to varied diets and gentle husbandry.
          </p>
          <p>
            At Bibinii Farms, our approach centers on patience and respect for natural rhythms. Heritage hens
            are allowed to mature at their own pace, which leads to eggs with satisfying structure: firm whites
            and yolks that hold together when poached or soft-boiled. Chefs love them for classic techniques,
            home cooks for Sunday breakfasts that feel like a celebration.
          </p>
          <p>
            We steward this lineage by maintaining healthy genetics, prioritizing welfare, and honoring time-tested
            methods. The result is an egg that tells a story—from the flock to your table—with character in every bite.
          </p>
          <h3>Breeds, feed, and welfare</h3>
          <p>
            We focus on balanced, high-quality feed and generous access to outdoor space. The result is a
            nutrient-dense egg with standout color and flavor. Welfare drives every decision—from housing and
            shade to clean water access—because healthy hens lay better eggs.
          </p>
          <p>
            Sustainability is built into our daily routines: rotational access to pasture, careful manure
            management that feeds the soil, and water conservation that respects our environment. Better land
            care yields better eggs.
          </p>
          <h3>Nutrition and kitchen performance</h3>
          <p>
            The firm albumen and richer yolks of heritage eggs lend themselves to techniques where structure and
            flavor matter: poaching, soft-boiling, and baking. Expect well-domed poached eggs and custards with
            excellent set and aroma.
          </p>
          <h3>How to enjoy</h3>
          <ul>
            <li>Poached over buttered toast to showcase that golden yolk.</li>
            <li>Soft-scrambled with chives—low and slow to preserve creaminess.</li>
            <li>For baking, expect richer custards and more aromatic cakes.</li>
          </ul>
          <h3>Storage and freshness</h3>
          <p>
            Keep refrigerated in their carton and enjoy within three weeks for peak flavor and texture. Bring
            to room temperature before cooking for more even results.
          </p>

          <hr />
          <div className="not-prose mt-8">
            <h3 className="text-xl font-semibold mb-3">Share this article</h3>
            {(() => {
              const url = encodeURIComponent("https://bibiniifarms.com/products/heritage/");
              const text = encodeURIComponent("Heritage eggs from Bibinii Farms—time-honored breeds, exceptional flavor.");
              const title = encodeURIComponent("Heritage Eggs by Bibinii Farms");
              return (
                <div className="flex flex-wrap gap-3">
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">X / Twitter</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://t.me/share/url?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">Telegram</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.reddit.com/submit?url=${url}&title=${title}`} target="_blank" rel="noopener noreferrer">Reddit</a>
                  <a className="inline-flex items-center px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`mailto:?subject=${title}&body=${text}%20${url}`} target="_blank" rel="noopener noreferrer">Email</a>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}


