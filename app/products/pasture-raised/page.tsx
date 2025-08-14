import Image from "next/image";
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
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why pasture matters</h2>
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
        </div>
      </section>
    </div>
  );
}


