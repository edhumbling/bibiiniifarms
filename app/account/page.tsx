"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Order = {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: Array<{ name: string; qty: number }>;
};

export default function AccountPage() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_session");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.phone) {
          setIsAuthed(true);
          setPhone(parsed.phone as string);
          return;
        }
      }
    } catch {}
    window.location.href = "/login";
  }, []);

  const orders: Order[] = useMemo(
    () => [
      {
        id: "BF-100128",
        date: new Date().toISOString().slice(0, 10),
        status: "Processing",
        items: [
          { name: "Fresh Bibinii Eggs — Heritage", qty: 2 },
          { name: "Fresh Bibinii Eggs — Free Range", qty: 1 },
        ],
      },
      {
        id: "BF-100113",
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString().slice(0, 10),
        status: "Delivered",
        items: [{ name: "Fresh Bibinii Eggs — Heritage", qty: 3 }],
      },
    ],
    []
  );

  if (!isAuthed) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Your Account</h1>
            <p className="text-neutral-600">Signed in as <span className="font-semibold">{phone}</span></p>
          </div>
          <div className="flex gap-3">
            <Link href="/order" className="inline-flex items-center rounded-full bg-brand-egg text-ink px-5 py-2 font-semibold ring-1 ring-black/10 hover:brightness-95">Start a new order</Link>
            <button
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 font-semibold hover:bg-neutral-50"
              onClick={() => { localStorage.removeItem("bf_session"); window.location.href = "/"; }}
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders list */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-ink mb-4">Your Orders</h2>
            <div className="space-y-4">
              {orders.map((o) => (
                <div key={o.id} className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="text-sm text-neutral-600">
                      <div><span className="text-neutral-900 font-semibold">Order:</span> {o.id}</div>
                      <div><span className="text-neutral-900 font-semibold">Date:</span> {o.date}</div>
                    </div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${o.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : o.status === 'Processing' ? 'bg-yellow-50 text-yellow-700' : 'bg-neutral-100 text-neutral-700'}`}>
                      {o.status}
                    </span>
                  </div>
                  <div className="mt-4 text-sm text-neutral-700">
                    {o.items.map((it, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1">
                        <span>{it.name}</span>
                        <span className="font-semibold">x{it.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-semibold hover:bg-neutral-50">View details</button>
                    <Link href="/order" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-4 py-1.5 text-sm font-semibold hover:brightness-110">Reorder</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account panel */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="text-base font-semibold text-ink">Account</h3>
              <div className="mt-3 text-sm text-neutral-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Phone</span>
                  <span className="font-semibold">{phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery preference</span>
                  <span className="font-semibold">Doorstep</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Location</span>
                  <span className="font-semibold">Accra</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6 shadow-sm">
              <h3 className="text-base font-semibold text-ink">Support</h3>
              <p className="mt-2 text-sm text-neutral-700">Need help with an order?</p>
              <div className="mt-3 flex gap-2">
                <a href="mailto:info@bibiniifarms.com" className="inline-flex items-center rounded-full bg-brand-egg text-ink px-4 py-1.5 text-sm font-semibold ring-1 ring-black/10 hover:brightness-95">Email</a>
                <a href="tel:+233543474770" className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-semibold hover:bg-neutral-50">Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


