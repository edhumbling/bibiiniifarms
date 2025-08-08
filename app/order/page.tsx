import type { Metadata } from "next";
import OrderForm from "@/app/components/OrderForm";

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

      <OrderForm />
    </div>
  );
}

