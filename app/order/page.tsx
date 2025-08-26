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
      {/* Top actions */}
      <section className="bg-white pt-6 sm:pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/login/signup"
              className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-semibold shadow-md ring-1 ring-black/10 bg-gradient-to-b from-[#ffe28a] to-[#ffd75e] text-ink border border-[#d1a54a] hover:brightness-95 transition-all"
            >
              Sign up
            </Link>
            <Link
              href="/login/signin"
              className="inline-flex items-center justify-center rounded-full px-6 sm:px-8 py-2.5 sm:py-3 font-semibold shadow-md ring-1 ring-black/10 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white border border-emerald-700 hover:brightness-110 transition-all"
            >
              Login
            </Link>
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs sm:text-sm text-neutral-700">
              Create an account for faster checkout and order tracking
            </p>
            <div className="mt-2">
              <Link
                href="#order-form"
                className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 px-5 py-2 font-semibold ring-1 ring-emerald-200 hover:bg-emerald-50 transition-colors"
              >
                Continue as guest
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

