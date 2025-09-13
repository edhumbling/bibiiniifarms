"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { computeTotals, formatGhs } from "@/app/utils/pricing";

export default function CheckoutPage() {
  const [qtyById, setQtyById] = useState<Record<string, number>>({});
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [placing, setPlacing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_cart");
      if (raw) setQtyById(JSON.parse(raw));
    } catch {}
  }, []);

  const items = useMemo(() => Object.entries(qtyById).filter(([, q]) => q > 0), [qtyById]);
  const totalQty = useMemo(() => items.reduce((a, [, q]) => a + q, 0), [items]);
  const totals = useMemo(() => computeTotals(totalQty), [totalQty]);

  function placeOrder() {
    setPlacing(true);
    // demo: write order to localStorage and clear cart
    const id = `BF-${Math.floor(100000 + Math.random() * 899999)}`;
    const order = {
      id,
      date: new Date().toISOString().slice(0, 10),
      status: "Processing" as const,
      items: items.map(([id, qty]) => ({ id, qty })),
      address,
      note,
    };
    try {
      const raw = localStorage.getItem("bf_orders");
      const orders = raw ? JSON.parse(raw) : [];
      orders.unshift(order);
      localStorage.setItem("bf_orders", JSON.stringify(orders));
      localStorage.removeItem("bf_cart");
    } catch {}
    window.location.href = `/account/orders/${id}`;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Checkout</h1>
        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-neutral-700">Your cart is empty.</p>
            <div className="mt-4">
              <Link href="/order" className="inline-flex items-center rounded-full bg-brand-egg text-ink px-6 py-2 font-semibold ring-1 ring-black/10 hover:brightness-95">Browse products</Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-ink mb-3">Delivery address</h2>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Street, City, Region" />
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-ink mb-3">Note (optional)</h2>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="w-full rounded-xl border border-neutral-300 px-3 py-2" placeholder="Delivery notes, entrance, etc." />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
                <h2 className="text-lg font-semibold text-ink mb-3">Order summary</h2>
                <div className="space-y-2 text-sm">
                  {items.map(([id, q]) => (
                    <div key={id} className="flex items-center justify-between">
                      <span>{id}</span>
                      <span className="font-semibold">x{q}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm"><span className="text-neutral-700">Total crates</span><span className="text-ink font-bold">{totalQty}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-neutral-700">Subtotal (GH₵55 x {totalQty})</span><span className="text-ink font-bold">{formatGhs(totals.subtotal)}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-neutral-700">Delivery (GH₵1.50 x {totalQty})</span><span className="text-ink font-bold">{formatGhs(totals.delivery)}</span></div>
                  <div className="border-t pt-2 flex items-center justify-between"><span className="text-ink font-semibold">Total</span><span className="text-ink font-extrabold">{formatGhs(totals.total)}</span></div>
                </div>
                <button onClick={placeOrder} disabled={placing || !address} className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-emerald-600 text-white px-6 py-2 font-semibold hover:brightness-110 disabled:opacity-60">Place order</button>
                <p className="mt-2 text-xs text-neutral-500">Demo flow. No payment required.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


