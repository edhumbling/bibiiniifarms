"use client";
import { useEffect, useState } from "react";

export default function OrderDetailPage({ params }: any) {
  const { id } = params || {};
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_orders");
      const list = raw ? JSON.parse(raw) : [];
      const found = list.find((o: any) => o.id === id);
      setOrder(found || null);
    } catch {
      setOrder(null);
    }
  }, [id]);

  if (!order) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Order {id}</h1>
          <p className="mt-2 text-neutral-600">Order not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Order {order.id}</h1>
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-700' : order.status === 'Processing' ? 'bg-yellow-50 text-yellow-700' : 'bg-neutral-100 text-neutral-700'}`}>{order.status}</span>
        </div>
        <div className="mt-2 text-neutral-600 text-sm">Placed on {order.date}</div>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-ink mb-3">Items</h2>
          <div className="space-y-2 text-sm">
            {order.items.map((it: any, i: number) => (
              <div key={i} className="flex items-center justify-between">
                <span>{it.id}</span>
                <span className="font-semibold">x{it.qty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-ink mb-2">Delivery</h2>
          <div className="text-sm text-neutral-700 whitespace-pre-line">{order.address || '—'}</div>
          {order.note ? <div className="mt-2 text-sm text-neutral-500">Note: {order.note}</div> : null}
        </div>

        <div className="mt-6 flex gap-2">
          <a href="/order" className="inline-flex items-center rounded-full bg-brand-egg text-ink px-5 py-2 font-semibold ring-1 ring-black/10 hover:brightness-95">Reorder</a>
          <a href="/account" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 font-semibold hover:bg-neutral-50">Back to orders</a>
        </div>
      </div>
    </div>
  );
}


