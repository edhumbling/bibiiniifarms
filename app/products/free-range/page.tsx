import Image from "next/image";
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
          <p>
            Seasonal weather and forage change the experience, so we adapt housing, shade, and nutrition to keep
            birds thriving across the year while protecting pasture health.
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
        </div>
      </section>
    </div>
  );
}


