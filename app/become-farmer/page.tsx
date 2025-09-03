import { Metadata } from "next";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import RequestCallForm from "@/app/components/RequestCallForm";

export const metadata: Metadata = {
  title: "Bibinii Farms • Become a Bibinii Farmer",
  description: "Join our network of passionate farmers committed to sustainable agriculture and ethical egg production.",
};

export default function BecomeFarmerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={DEFAULT_HERO_POSTER}
          >
            <source src="https://ik.imagekit.io/spj5u0tzx/Bibinii%20Hen%20House%20Video%203-8_14_2025,%2010_25%E2%80%AFAM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a Bibinii Farmer
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our network of passionate farmers committed to sustainable agriculture and ethical egg production.
            </p>
          </div>
        </div>
      </section>

      {/* Request a Call */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Call</h2>
            <p className="text-gray-600 mb-6">
              Enter your details and our team will call you to set up a meeting and collect any information we need.
            </p>
            <RequestCallForm />
            <p className="text-sm text-gray-500 mt-4">We typically respond within 1 business day.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
