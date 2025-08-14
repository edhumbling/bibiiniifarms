import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Pasture Raised",
  description: "Pasture raised eggs from hens that roam freely on open Ghanaian pastures.",
};

export default function PastureRaisedProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png"
          alt="Pasture raised eggs hero"
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
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">Pasture Raised</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why <strong>pasture</strong> matters</h2>
          <p>
            Pasture-raised hens spend most of their day outside, foraging and expressing natural behaviors.
            This active lifestyle contributes to firm whites, bright yolks, and nuanced flavor.
          </p>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="https://ik.imagekit.io/spj5u0tzx/4f78c028-f6a9-474e-bd9b-caacf48b406e.png"
                alt="Pasture detail 1"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="https://ik.imagekit.io/spj5u0tzx/bd9a7edf-0f8b-47c9-af6c-76820da5f78b.png"
                alt="Pasture detail 2"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <h3>Our approach</h3>
          <p>
            We rotate flocks across fresh ground, protect pasture health, and supplement with quality feed.
            Shade, clean water, and careful flock management ensure comfort and consistency year-round.
          </p>
          <p>
            Movement and sunlight are part of the recipe. By designing for natural behaviors, we reduce stress
            and support resilience—qualities that translate into dependable egg quality week after week.
          </p>
          <h3>Nutritional and culinary notes</h3>
          <p>
            Pasture access can influence yolk color and fatty acid profile. In the kitchen, expect standout
            performance in frying, poaching, and baking where structure and flavor both matter.
          </p>
          <p>
            Movement and sunlight are part of the recipe. By designing for natural behaviors, we reduce stress
            and support resilience—qualities that translate into dependable egg quality week after week.
          </p>
          <h3>Kitchen inspiration</h3>
          <ul>
            <li>Fried in a hot pan with shea or coconut oil for lacy edges.</li>
            <li>Shakshuka or stews where the egg is the star.</li>
            <li>Protein-rich bowls with roasted vegetables and grains.</li>
          </ul>
          <h3>Buying and storing</h3>
          <p>
            Look for intact shells and store chilled. For the best texture, let eggs sit at room temperature
            for 10–15 minutes before cooking.
          </p>
          <hr />
          <div className="not-prose mt-8">
            <h3 className="text-xl font-semibold mb-3">Share this article</h3>
            {(() => {
              const url = encodeURIComponent("https://bibiniifarms.com/products/pasture-raised/");
              const text = encodeURIComponent("Pasture Raised eggs from Bibinii Farms—sun, space, and natural behavior.");
              const title = encodeURIComponent("Pasture Raised Eggs by Bibinii Farms");
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


