import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Organic Eggs",
  description: "Certified organic eggs from hens fed organic, non-GMO feed—clean and simple.",
};

export default function OrganicProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png"
          alt="Organic eggs hero"
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
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">Organic Eggs</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What <strong>“organic”</strong> means to us</h2>
          <p>
            Organic is a commitment to transparency and care: certified organic feed, no GMOs, and responsible
            land stewardship. We go beyond the checklist to prioritize hen welfare and soil health.
          </p>
          <h3>Feed and farming</h3>
          <p>
            Our hens enjoy organic grains supplemented by pasture time where possible. Clean water, ample shade,
            and attentive flock management keep stress low and quality high.
          </p>
          <p>
            Organic practices also support biodiversity—from the soil microbiome to the hedgerows that shelter
            pollinators. Healthier ecosystems yield more resilient flocks.
          </p>
          <h3>Standards and verification</h3>
          <p>
            Certification is more than a label—it’s a system of audits, traceability, and record keeping that
            protects integrity and builds trust. From feed sourcing to on-farm practices, we maintain
            documentation that can be reviewed at any time.
          </p>
          <h3>Taste and texture</h3>
          <p>
            Expect clear whites and balanced yolks that shine in simple preparations—omelets, boiled eggs, and
            salads—where clean flavor matters most.
          </p>
          <h3>Certifications and trust</h3>
          <p>
            We maintain meticulous records and transparent sourcing. If you have questions, we’re happy to share
            details about our feed, flock care, and verification.
          </p>

          <hr />
          <div className="not-prose mt-8">
            <h3 className="text-xl font-semibold mb-3">Share this article</h3>
            {(() => {
              const url = encodeURIComponent("https://bibiniifarms.com/products/organic/");
              const text = encodeURIComponent("Organic eggs from Bibinii Farms—certified organic feed, clean and delicious.");
              const title = encodeURIComponent("Organic Eggs by Bibinii Farms");
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


