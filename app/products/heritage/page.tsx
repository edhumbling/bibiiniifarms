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
      {/* Back button fixed below header */}
      <div className="fixed z-30 top-24 left-4">
        <Link href="/products" className="inline-flex items-center gap-2 rounded-md bg-white text-deep-green px-3 py-2 shadow ring-1 ring-black/10 hover:shadow-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="font-medium">Back</span>
        </Link>
      </div>
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
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#1877F2]"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/></svg>
                    <span>Facebook</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/></svg>
                    <span>X</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#0A66C2]"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.3V24h-5V16.1c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24h-5V8z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#25D366]"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6A12 12 0 1 0 20.5 3.5zM12 21.3c-1.9 0-3.7-.5-5.2-1.6l-.4-.2-3.1.8.8-3-.2-.4A9.3 9.3 0 1 1 21.3 12 9.3 9.3 0 0 1 12 21.3zm5.4-6.9c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.7-.7-3-2.5-3.1-2.6-.2-.3-.2-.4 0-.6.1-.2.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-.8-2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3.7.3 1.3.5 1.8.6.8.3 1.6.3 2.2.2.7-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4z"/></svg>
                    <span>WhatsApp</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://t.me/share/url?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="h-5 w-5 fill-[#229ED9]"><path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm57.2 82.4l-19.3 91.1c-1.5 6.6-5.5 8.2-11.2 5.1l-31-22.9-15 14.4c-1.7 1.7-3.1 3.1-6.3 3.1l2.2-31.7 57.7-52c2.5-2.2-.5-3.4-3.9-1.2l-71.4 45-30.7-9.6c-6.7-2.1-6.8-6.7 1.4-9.9l120.2-46.3c5.5-2 10.3 1.3 8.7 9.6z"/></svg>
                    <span>Telegram</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`https://www.reddit.com/submit?url=${url}&title=${title}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-[#FF4500]"><path d="M24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zM7.5 13.3c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2-.6 1.2-1.2.1-.6-.5-1.2-1.2-1.2zm9 0c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2.7 0 1.2-.6 1.2-1.2 0-.6-.5-1.2-1.2-1.2zM12 18.8c2 0 3.8-.9 4.9-2.2.2-.2.2-.6 0-.8-.2-.2-.6-.2-.8 0-1 1.1-2.6 1.8-4.1 1.8s-3.1-.7-4.1-1.8c-.2-.2-.6-.2-.8 0-.2.2-.2.6 0 .8 1.1 1.3 2.9 2.2 4.9 2.2zm8.1-6.6c0-1-.8-1.8-1.8-1.8-.5 0-1 .2-1.3.5-1.2-.8-2.8-1.4-4.5-1.5l.8-3.8 2.6.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8S19.7 6 18.7 6c-.8 0-1.5.5-1.9 1.1l-3.1-.7L12 9.3c-3.5.1-6.4 1.6-7.7 3.5-.3-.3-.7-.5-1.2-.5-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.6 0 1.1-.4 1.4-.9C5.8 17.8 8.7 19.2 12 19.2s6.2-1.4 8-3.5c.3.4.8.6 1.3.6 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/></svg>
                    <span>Reddit</span>
                  </a>
                  <a className="inline-flex items-center gap-2 px-3 py-2 rounded-full ring-1 ring-neutral-300 hover:bg-neutral-100" href={`mailto:?subject=${title}&body=${text}%20${url}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 0l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>Email</span>
                  </a>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
    </div>
  );
}


