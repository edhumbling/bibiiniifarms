"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { computeTotals, formatGhs } from "@/app/utils/pricing";

type Item = { id: string; name: string };

const PRODUCTS: Record<string, Item> = {
  "fresh-bibinii-eggs:heritage": { id: "fresh-bibinii-eggs:heritage", name: "Fresh Bibinii Eggs — Heritage" },
  "fresh-bibinii-eggs:free-range": { id: "fresh-bibinii-eggs:free-range", name: "Fresh Bibinii Eggs — Free Range" },
};

export default function CartPage() {
  const [qtyById, setQtyById] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_cart");
      if (raw) setQtyById(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("bf_cart", JSON.stringify(qtyById)); } catch {}
  }, [qtyById]);

  const items = useMemo(() => Object.entries(qtyById).filter(([, q]) => q > 0), [qtyById]);
  const totalQty = useMemo(() => items.reduce((a, [, q]) => a + q, 0), [items]);
  const totals = useMemo(() => computeTotals(totalQty), [totalQty]);

  function update(id: string, q: number) {
    setQtyById((s) => ({ ...s, [id]: Math.max(0, q) }));
  }

  function clear() {
    setQtyById({});
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Your Cart</h1>
        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6 text-center">
            <p className="text-neutral-700">Your cart is empty.</p>
            <div className="mt-4">
              <Link href="/order" className="inline-flex items-center rounded-full bg-brand-egg text-ink px-6 py-2 font-semibold ring-1 ring-black/10 hover:brightness-95">Browse products</Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map(([id, q]) => {
              const meta = PRODUCTS[id] || { id, name: id };
              return (
                <div key={id} className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-ink font-semibold">{meta.name}</div>
                    <div className="text-sm text-neutral-600">SKU: {id}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-neutral-300 px-3 py-1.5 font-semibold hover:bg-neutral-50" onClick={() => update(id, q - 1)}>-</button>
                    <span className="min-w-[2ch] text-center font-semibold">{q}</span>
                    <button className="rounded-full border border-neutral-300 px-3 py-1.5 font-semibold hover:bg-neutral-50" onClick={() => update(id, q + 1)}>+</button>
                    <button className="ml-2 text-sm text-neutral-500 hover:text-neutral-800" onClick={() => update(id, 0)}>Remove</button>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 space-y-2">
              <div className="flex items-center justify-between"><span className="text-neutral-700">Total crates</span><span className="text-ink font-bold">{totalQty}</span></div>
              <div className="flex items-center justify-between"><span className="text-neutral-700">Subtotal (GH₵55 x {totalQty})</span><span className="text-ink font-bold">{formatGhs(totals.subtotal)}</span></div>
              <div className="flex items-center justify-between"><span className="text-neutral-700">Delivery (GH₵1.50 x {totalQty})</span><span className="text-ink font-bold">{formatGhs(totals.delivery)}</span></div>
              <div className="border-t pt-2 flex items-center justify-between"><span className="text-ink font-semibold">Total</span><span className="text-ink font-extrabold">{formatGhs(totals.total)}</span></div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button onClick={clear} className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 font-semibold hover:bg-neutral-50">Clear cart</button>
              <Link href="/checkout" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-2 font-semibold hover:brightness-110">Proceed to checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


