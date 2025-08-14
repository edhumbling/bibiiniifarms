import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Free Range",
  description: "Free range eggs from hens with outdoor access and space to explore.",
};

export default function FreeRangeProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/spj5u0tzx/c4cbec47-f40c-4200-b7f8-341b44337812.png"
          alt="Free range eggs hero"
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
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">Free Range</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2><strong>Freedom</strong> and flavor</h2>
          <p>
            Free range means hens have regular outdoor access with space to scratch, peck, and socialize. This
            natural movement supports strong shells, consistent whites, and a satisfying bite.
          </p>
          <h3>Our standards</h3>
          <p>
            We focus on safe housing, clean yards, and predictable routines. When birds are comfortable, egg
            quality follows.
          </p>
          <p>
            Seasonal weather and forage change the experience, so we adapt housing, shade, and nutrition to keep
            birds thriving across the year while protecting pasture health.
          </p>
          <h3>Cooking guidance</h3>
          <p>
            From crispy fried eggs to soups finished with a poached egg, free range eggs offer dependable set
            and flavor. For hard-boiled, start in simmering water and cool quickly for easy peeling.
          </p>
          <h3>Serving ideas</h3>
          <ul>
            <li>Hearty breakfasts—eggs, plantains, and greens.</li>
            <li>Soups and porridges finished with a poached egg.</li>
            <li>Everyday omelets packed with market vegetables.</li>
          </ul>
          <h3>Freshness cues</h3>
          <p>
            A compact white and slightly domed yolk indicate freshness. For boiling, start from room temperature
            for fewer cracks and more consistent centers.
          </p>

          <hr />
          <div className="not-prose mt-8">
            <h3 className="text-xl font-semibold mb-3">Share this article</h3>
            {(() => {
              const url = encodeURIComponent("https://bibiniifarms.com/products/free-range/");
              const text = encodeURIComponent("Free Range eggs from Bibinii Farms—room to roam, great eggs.");
              const title = encodeURIComponent("Free Range Eggs by Bibinii Farms");
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


