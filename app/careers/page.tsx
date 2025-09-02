import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const JobsEmbed = dynamic(() => import("./JobsEmbed"), { ssr: false });

export const metadata: Metadata = {
  title: "Bibinii Farms • Careers",
  description: "Careers — Build Ghana’s food independence with digital innovation, smart logistics, and farmer-first impact.",
};

// Content below the hero is replaced by an embedded jobs iframe.

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_15_2025,%207_08%E2%80%AFPM.mp4"
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
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Build a meaningful career powering Ghana’s food independence — with digital innovation, smart logistics, and farmer-first impact.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Values & Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-2">
              We’re farmer-first, customer-obsessed, and mission-driven. At Bibinii Farms, we value integrity,
              quality, sustainability, and growth. We collaborate across operations, tech, and logistics to build
              a modern food system for Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Farmer-First</h3>
              <p className="text-gray-600">We partner deeply with farmers, improving livelihoods while ensuring supply.</p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Quality & Safety</h3>
              <p className="text-gray-600">Grading, packaging, and traceability standards that customers can trust.</p>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Sustainability</h3>
              <p className="text-gray-600">We reduce waste, respect the environment, and build resilient food systems.</p>
            </div>
          </div>

          <div className="text-center mt-2 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Available Positions</h3>
            <p className="text-gray-600 mt-1">Browse open roles below. If none are listed, <span className="font-semibold">No positions available at this time</span>.</p>
          </div>

          <JobsEmbed />

          <div className="text-center mt-6">
            <a
              href="https://app.dover.com/jobs/bibiniifarms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-110 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
