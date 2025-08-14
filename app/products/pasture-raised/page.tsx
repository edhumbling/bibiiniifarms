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
      {/* Back button fixed below header */}
      <div className="fixed z-30 top-24 left-4">
        <Link href="/products" className="inline-flex items-center gap-2 rounded-md bg-white text-deep-green px-3 py-2 shadow ring-1 ring-black/10 hover:shadow-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="font-medium">Back</span>
        </Link>
      </div>
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


