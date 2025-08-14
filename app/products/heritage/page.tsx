import Image from "next/image";
import HeritageEggsSlider from "@/app/components/HeritageEggsSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Heritage Eggs",
  description: "Our Heritage eggs come from time-honored breeds with deep golden yolks and rich flavor.",
};

export default function HeritageProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <HeritageEggsSlider />
          </div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Heritage Eggs</h1>
            <p className="text-white/90 max-w-2xl">Time-honored breeds. Deep golden yolks. Uncompromising flavor.</p>
          </div>
        </div>
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
          <h3>Breeds, feed, and welfare</h3>
          <p>
            We focus on balanced, high-quality feed and generous access to outdoor space. The result is a
            nutrient-dense egg with standout color and flavor. Welfare drives every decision—from housing and
            shade to clean water access—because healthy hens lay better eggs.
          </p>
          <h3>How to enjoy</h3>
          <ul>
            <li>Poached over buttered toast to showcase that golden yolk.</li>
            <li>Soft-scrambled with chives—low and slow to preserve creaminess.</li>
            <li>For baking, expect richer custards and more aromatic cakes.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


