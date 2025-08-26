import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO_POSTER } from "@/app/constants/media";
import OrderForm from "@/app/components/OrderForm";
import OrderProducts from "@/app/components/OrderProducts";
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full w-full flex flex-col items-center justify-center text-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-8 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95 transition-all"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-brand-deep transition-all"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products to add to cart */}
      <section className="py-10 sm:py-12">
        <OrderProducts />
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <OrderForm />
        </div>
      </section>
    </div>
  );
}

