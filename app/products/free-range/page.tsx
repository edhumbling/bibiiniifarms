import FreeRangeSlider from "@/app/components/FreeRangeSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Free Range",
  description: "Free range eggs from hens with outdoor access and space to explore.",
};

export default function FreeRangeProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <FreeRangeSlider />
          </div>
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Free Range</h1>
            <p className="text-white/90 max-w-2xl">Room to roam. Better welfare. Great eggs.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Freedom and flavor</h2>
          <p>
            Free range means hens have regular outdoor access with space to scratch, peck, and socialize. This
            natural movement supports strong shells, consistent whites, and a satisfying bite.
          </p>
          <h3>Our standards</h3>
          <p>
            We focus on safe housing, clean yards, and predictable routines. When birds are comfortable, egg
            quality follows.
          </p>
          <h3>Serving ideas</h3>
          <ul>
            <li>Hearty breakfasts—eggs, plantains, and greens.</li>
            <li>Soups and porridges finished with a poached egg.</li>
            <li>Everyday omelets packed with market vegetables.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


