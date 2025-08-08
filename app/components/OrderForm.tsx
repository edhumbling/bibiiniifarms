"use client";

export default function OrderForm() {
  return (
    <form
      className="mt-8 grid gap-6 rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-sm"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We’ll confirm by SMS/WhatsApp.");
      }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="name">Full name</label>
          <input id="name" required className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10" />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="phone">Phone (WhatsApp)</label>
          <input id="phone" required className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10" />
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="location">Location/Area</label>
          <input id="location" required className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10" />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="quantity">Quantity (crates)</label>
          <input type="number" min={1} id="quantity" required className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10" />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="method">Delivery method</label>
          <select id="method" className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10">
            <option>Home delivery</option>
            <option>Pickup</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="notes">Notes (optional)</label>
          <textarea id="notes" className="mt-2 w-full rounded-xl px-4 py-3 ring-1 ring-black/10 min-h-28" />
        </div>
        <div className="rounded-2xl bg-cream p-4 ring-1 ring-black/5">
          <h4 className="font-semibold text-ink">Bulk & B2B</h4>
          <p className="mt-1 text-sm text-neutral-700">Need crates at volume? We supply retailers and kitchens at fair prices.</p>
          <a className="mt-3 inline-flex rounded-full bg-white px-4 py-2 font-medium ring-1 ring-black/10" href="#">Contact Sales</a>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="inline-flex rounded-full bg-brand-deep text-white px-6 py-3 font-semibold">Submit Order Request</button>
      </div>
    </form>
  );
}

