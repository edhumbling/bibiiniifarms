import Image from "next/image";
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
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What “organic” means to us</h2>
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
        </div>
      </section>
    </div>
  );
}


