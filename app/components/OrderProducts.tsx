"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  note?: string;
};

const PRODUCTS: Product[] = [
  {
    id: "fresh-bibinii-eggs",
    name: "Bibinii Fresh Eggs",
    imageUrl: "https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png",
    note: "Fresh, Ghana-grown eggs direct from our farmers",
  },
];

export default function OrderProducts() {
  const [qtyById, setQtyById] = useState<Record<string, number>>({});
  const [pendingById, setPendingById] = useState<Record<string, number>>({});

  const totalItems = useMemo(
    () => Object.values(qtyById).reduce((a, b) => a + (b || 0), 0),
    [qtyById]
  );

  const inc = (id: string) =>
    setPendingById((s) => ({ ...s, [id]: Math.max(1, (s[id] || 1) + 1) }));
  const dec = (id: string) =>
    setPendingById((s) => ({ ...s, [id]: Math.max(1, (s[id] || 1) - 1) }));
  const add = (id: string) =>
    setQtyById((s) => ({ ...s, [id]: (s[id] || 0) + (pendingById[id] || 1) }));
  const clear = (id: string) =>
    setQtyById((s) => ({ ...s, [id]: 0 }));

  // Load persisted cart on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setQtyById(parsed);
        }
      }
    } catch {}
  }, []);

  // Persist cart when it changes
  useEffect(() => {
    try {
      localStorage.setItem("bf_cart", JSON.stringify(qtyById));
    } catch {}
  }, [qtyById]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Choose your eggs</h2>
          <p className="text-gray-600">Tap a product and add how many crates you want.</p>
        </div>

        <div className="max-w-sm mx-auto grid grid-cols-1 sm:max-w-md md:max-w-none md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => {
            const selected = qtyById[p.id] || 0;
            const pending = pendingById[p.id] || 1;
            return (
              <div key={p.id} className="group rounded-2xl border shadow-sm hover:shadow-md transition overflow-hidden bg-white">
                <div className="relative aspect-square bg-white">
                  <Image src={p.imageUrl} alt={p.name} fill className="object-contain p-4" sizes="(max-width:768px) 50vw, 25vw" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-ink">{p.name}</h3>
                    {selected > 0 ? (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">{selected} in cart</span>
                    ) : null}
                  </div>
                  {p.note ? (
                    <p className="text-xs text-neutral-600 mt-1">{p.note}</p>
                  ) : null}

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center rounded-full ring-1 ring-neutral-300">
                      <button
                        type="button"
                        className="px-3 py-1.5 text-sm font-semibold"
                        onClick={() => dec(p.id)}
                        aria-label={`Decrease ${p.name}`}
                      >
                        −
                      </button>
                      <span className="min-w-[2ch] text-center text-sm font-medium">{pending}</span>
                      <button
                        type="button"
                        className="px-3 py-1.5 text-sm font-semibold"
                        onClick={() => inc(p.id)}
                        aria-label={`Increase ${p.name}`}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => add(p.id)}
                      className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-3 sm:px-4 py-1.5 font-semibold ring-1 ring-black/10 hover:brightness-95"
                    >
                      Add to cart
                    </button>
                  </div>

                  {selected > 0 ? (
                    <button
                      type="button"
                      onClick={() => clear(p.id)}
                      className="mt-2 text-xs text-neutral-500 hover:text-neutral-700"
                    >
                      Remove from cart
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky proceed bar (mobile) */}
        <div className="sm:hidden fixed bottom-4 inset-x-0 px-4 pointer-events-none">
          <div className="max-w-7xl mx-auto">
            <div className="pointer-events-auto rounded-full bg-emerald-600 text-white shadow-lg flex items-center justify-between px-4 py-3">
              <span className="text-sm font-semibold">{totalItems} crates selected</span>
              <a href="/cart" className="inline-flex items-center rounded-full bg-white text-emerald-700 px-4 py-1.5 font-semibold">
                Checkout
              </a>
            </div>
          </div>
        </div>

        {/* Inline proceed (desktop) */}
        <div className="hidden sm:flex items-center justify-end mt-6">
          <a href="/cart" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-5 py-2 font-semibold hover:brightness-110">
            Checkout ({totalItems})
          </a>
        </div>
      </div>
    </div>
  );
}


