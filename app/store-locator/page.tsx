import { Metadata } from "next";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import StoreMap from "./StoreMap";
import { stores } from "./stores";

export const metadata: Metadata = {
  title: "Bibinii Farms • Stores",
  description: "We are currently working on partnering with stores.",
};

export default function StoreLocatorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_15_2025,%206_12%E2%80%AFPM.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={DEFAULT_HERO_POSTER}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Store Locator
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find Bibinii Farms eggs at stores near you. Fresh, sustainable, and ethically produced.
            </p>
          </div>
        </div>
      </section>

      {/* Full-page Map with overlays */}
      <StoreMap stores={stores} />
    </div>
  );
}
