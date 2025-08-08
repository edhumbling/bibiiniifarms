import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Eggs — Bibinii Farms",
  description: "Fresh, traceable eggs delivered to your door across Accra and beyond.",
};

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Order Eggs</h1>
      <p className="mt-4 text-neutral-700 max-w-3xl">
        Choose a one-time delivery or set up a weekly subscription. We’ll confirm availability and
        delivery window by SMS/WhatsApp. Payment on delivery available.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">One-time Order</h3>
          <p className="mt-2 text-sm text-neutral-700">Perfect for trying us out or ad‑hoc needs.</p>
          <Link href="#" className="mt-4 inline-flex rounded-full bg-brand-deep text-white px-5 py-2 font-semibold">
            Start One-time Order
          </Link>
        </div>
        <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
          <h3 className="text-lg font-semibold text-ink">Subscription</h3>
          <p className="mt-2 text-sm text-neutral-700">Weekly drop-offs with flexible pause/skip.</p>
          <Link href="#" className="mt-4 inline-flex rounded-full bg-brand-egg text-ink ring-1 ring-black/10 px-5 py-2 font-semibold">
            Set Up Subscription
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-3xl bg-cream p-6 ring-1 ring-black/5">
        <h4 className="font-semibold text-ink">Bulk & B2B (Retailers/Restaurants)</h4>
        <p className="mt-1 text-sm text-neutral-700">
          Need crates at volume? We supply retailers and kitchens at fair prices. Contact our team for a
          tailored plan.
        </p>
        <Link href="#" className="mt-3 inline-flex rounded-full bg-white px-4 py-2 font-medium ring-1 ring-black/10">
          Contact Sales
        </Link>
      </div>
    </div>
  );
}

