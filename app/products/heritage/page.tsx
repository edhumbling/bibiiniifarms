import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Heritage Eggs",
  description: "Our Heritage eggs come from time-honored breeds with deep golden yolks and rich flavor.",
};

export default function HeritageProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png"
          alt="Heritage eggs hero"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>What makes Heritage eggs special?</h2>
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
        </div>
      </section>
    </div>
  );
}


