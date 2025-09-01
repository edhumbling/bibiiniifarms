import { Metadata } from "next";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";

export const metadata: Metadata = {
  title: "Bibinii Farms • Press",
  description: "Latest news, press releases, and media resources from Bibinii Farms.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_15_2025,%206_34%E2%80%AFPM.mp4"
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Latest news, press releases, and media resources from Bibinii Farms.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Working on a Story?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're happy to provide additional information, arrange interviews, or connect you with our farmers.
          </p>
          <div className="mb-6">
            <p className="text-lg text-gray-700">
              Media contact: <span className="font-semibold">Pearl</span> —
              {" "}
              <a href="mailto:info@bibiniifarms.com" className="underline">info@bibiniifarms.com</a>
              {" "}·{" "}
              <a href="tel:+233543474770" className="underline">+233 54 347 4770</a>
              {" "}
              <span className="text-gray-600">(Call & WhatsApp)</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@bibiniifarms.com"
              className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-8 py-3 font-semibold hover:brightness-95 transition-all"
            >
              Email Pearl
            </a>
            <a
              href="tel:+233543474770"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
            >
              Call Pearl
            </a>
            <a
              href="https://wa.me/233543474770?text=Hello%20Bibinii%20Farms!%20I%27d%20like%20to%20place%20an%20order%20and%20get%20pricing%2C%20availability%2C%20and%20delivery%20options.%20Thank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-8 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
              aria-label="WhatsApp"
            >
              WhatsApp Pearl
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full bg-black text-[#fdc700] px-8 py-3 font-semibold hover:bg-black/90 transition-colors"
            >
              Read our blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
