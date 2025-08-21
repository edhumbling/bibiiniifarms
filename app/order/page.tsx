import type { Metadata } from "next";
import Image from "next/image";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import OrderForm from "@/app/components/OrderForm";
import FooterBackground from "../footer background.svg";

export const metadata: Metadata = {
  title: "Bibinii Farms • Order",
  description: "Order — Fresh, traceable eggs directly from Ghanaian farmers. One-time delivery or weekly subscription.",
};

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="https://ik.imagekit.io/edhumbling/Bibinii%20Hen%20House%20Video%203-8_14_2025,%205_05%E2%80%AFPM.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={DEFAULT_HERO_POSTER}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Order Eggs</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Buy fresh, traceable eggs directly from Ghanaian farmers. Choose one-time delivery or weekly subscription — we’ll confirm availability and a delivery window by SMS/WhatsApp. Payment on delivery available.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <OrderForm />
        </div>
      </section>
    </div>
  );
}

