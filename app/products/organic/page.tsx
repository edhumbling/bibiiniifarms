import OrganicSlider from "@/app/components/OrganicSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Organic Eggs",
  description: "Certified organic eggs from hens fed organic, non-GMO feed—clean and simple.",
};

export default function OrganicProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full">
            <OrganicSlider />
          </div>
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Organic Eggs</h1>
            <p className="text-white/90 max-w-2xl">Certified organic feed. No GMOs. Just clean, delicious eggs.</p>
          </div>
        </div>
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
          <h3>Taste and texture</h3>
          <p>
            Expect clear whites and balanced yolks that shine in simple preparations—omelets, boiled eggs, and
            salads—where clean flavor matters most.
          </p>
        </div>
      </section>
    </div>
  );
}


