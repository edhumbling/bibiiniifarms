"use client";
import { useEffect, useState } from "react";

type Guest = {
  name?: string;
  phone?: string;
  location?: string;
  method?: string;
  notes?: string;
};

export default function OrderForm() {
  const [quantity, setQuantity] = useState<number>(1);
  const [guest, setGuest] = useState<Guest>({ method: "Home delivery" });

  // Prefill from cart
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_cart");
      if (raw) {
        const parsed = JSON.parse(raw);
        const q = parsed?.["fresh-bibinii-eggs"];
        if (typeof q === "number" && q > 0) {
          setQuantity(q);
        }
      }
    } catch {}
  }, []);

  // Sync back to cart when quantity changes
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_cart");
      const cart = raw ? JSON.parse(raw) : {};
      if (quantity > 0) {
        cart["fresh-bibinii-eggs"] = quantity;
      } else {
        delete cart["fresh-bibinii-eggs"];
      }
      localStorage.setItem("bf_cart", JSON.stringify(cart));
    } catch {}
  }, [quantity]);

  // Load guest details on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bf_guest");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setGuest((g) => ({ ...g, ...parsed }));
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist guest details when they change
  useEffect(() => {
    try {
      localStorage.setItem("bf_guest", JSON.stringify(guest));
    } catch {}
  }, [guest]);

  return (
    <form
      className="mt-8 grid gap-6 rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We’ll confirm by SMS/WhatsApp.");
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="name">Full name</label>
          <input
            id="name"
            value={guest.name || ""}
            onChange={(e) => setGuest((g) => ({ ...g, name: e.target.value }))}
            required
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="phone">Phone (WhatsApp)</label>
          <input
            id="phone"
            value={guest.phone || ""}
            onChange={(e) => setGuest((g) => ({ ...g, phone: e.target.value }))}
            required
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="location">Location/Area</label>
          <input
            id="location"
            value={guest.location || ""}
            onChange={(e) => setGuest((g) => ({ ...g, location: e.target.value }))}
            required
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="quantity">Quantity (crates)</label>
          <input
            type="number"
            min={1}
            id="quantity"
            value={quantity}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10);
              setQuantity(Number.isNaN(v) ? 1 : Math.max(1, v));
            }}
            required
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="method">Delivery method</label>
          <select
            id="method"
            value={guest.method || "Home delivery"}
            onChange={(e) => setGuest((g) => ({ ...g, method: e.target.value }))}
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none"
          >
            <option>Home delivery</option>
            <option>Pickup</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="notes">Notes (optional)</label>
          <textarea
            id="notes"
            value={guest.notes || ""}
            onChange={(e) => setGuest((g) => ({ ...g, notes: e.target.value }))}
            className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-neutral-300 focus:ring-brand-deep focus:outline-none min-h-28"
          />
        </div>
        <div className="rounded-2xl bg-cream p-4 ring-1 ring-neutral-200">
          <h4 className="font-semibold text-ink">Bulk & B2B</h4>
          <p className="mt-1 text-sm text-neutral-700">Need crates at volume? We supply retailers and kitchens at fair prices.</p>
          <a className="mt-3 inline-flex rounded-full bg-white px-4 py-2 font-medium ring-1 ring-neutral-200 hover:bg-neutral-50 transition-colors" href="#">Contact Sales</a>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="inline-flex items-center justify-center rounded-full bg-luminous-green text-white px-6 py-3 font-semibold hover:brightness-95 transition-all">Submit Order Request</button>
      </div>
    </form>
  );
}

