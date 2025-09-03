import { Metadata } from "next";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";

export const metadata: Metadata = {
  title: "Bibinii Farms • Press",
  description: "Press and media inquiries for Bibinii Farms.",
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

      {/* Press Contact - Direct to Pearl */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Press & Media Inquiries</h2>
            <p className="text-gray-600 mb-6">
              For press or related inquiries, please reach out to <span className="font-semibold">Pearl</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@bibiniifarms.com?subject=Press%20Inquiry%20(Attn:%20Pearl)"
                className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-6 py-3 font-semibold hover:brightness-110 transition-colors"
              >
                <span className="mr-2">📧</span>
                Email
              </a>
              <a
                href="tel:+233543474770"
                className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-6 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
              >
                <span className="mr-2">📞</span>
                Call
              </a>
              <a
                href="https://wa.me/233543474770?text=Hello%20Bibinii%20Farms%20Press%20Team%20(Attn:%20Pearl).%20I%27d%20like%20to%20request%20press%20information.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-emerald-glow text-emerald-glow px-6 py-3 font-semibold hover:bg-emerald-glow/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor"><path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.83L0 24l6.35-1.67A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.1-3.48-8.52zM12 21.6c-1.71 0-3.3-.46-4.67-1.26l-.34-.2-3.77 1 1.01-3.67-.22-.37A9.6 9.6 0 012.4 12c0-5.29 4.3-9.6 9.6-9.6 2.57 0 4.95 1 6.76 2.8A9.54 9.54 0 0121.6 12c0 5.3-4.31 9.6-9.6 9.6zm5.51-7.15c-.3-.15-1.78-.88-2.05-.98-.27-.1-.45-.15-.63.15-.18.3-.72.98-.88 1.18-.17.2-.32.22-.6.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.02-.17-.27-.02-.42.13-.57.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.35-.28.28-1.05 1.04-1.05 2.5 0 1.46 1.08 2.86 1.23 3.05.15.2 2.09 3.18 5.06 4.47.71.3 1.27.49 1.7.63.72.23 1.36.19 1.87.12.58-.08 1.76-.72 2.02-1.42.26-.7.26-1.29.18-1.42-.08-.13-.29-.21-.59-.36z"/></svg>
                WhatsApp
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">info@bibiniifarms.com • +233 54 347 4770</p>
          </div>
        </div>
      </section>
    </div>
  );
}
