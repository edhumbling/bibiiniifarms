import PastureRaisedSlider from "@/app/components/PastureRaisedSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Pasture Raised",
  description: "Pasture raised eggs from hens that roam freely on open Ghanaian pastures.",
};

export default function PastureRaisedProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <PastureRaisedSlider />
          </div>
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Pasture Raised</h1>
            <p className="text-white/90 max-w-2xl">Sun, space, and natural behavior—our hens thrive outdoors.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Why pasture matters</h2>
          <p>
            Pasture-raised hens spend most of their day outside, foraging and expressing natural behaviors.
            This active lifestyle contributes to firm whites, bright yolks, and nuanced flavor.
          </p>
          <h3>Our approach</h3>
          <p>
            We rotate flocks across fresh ground, protect pasture health, and supplement with quality feed.
            Shade, clean water, and careful flock management ensure comfort and consistency year-round.
          </p>
          <h3>Kitchen inspiration</h3>
          <ul>
            <li>Fried in a hot pan with shea or coconut oil for lacy edges.</li>
            <li>Shakshuka or stews where the egg is the star.</li>
            <li>Protein-rich bowls with roasted vegetables and grains.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


