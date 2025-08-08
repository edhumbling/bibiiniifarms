import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Track Your Crate — Bibinii Farms",
  description: "Enter your crate ID to see sourcing, freshness, and delivery status.",
};

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Track Your Crate</h1>
      <p className="mt-4 text-neutral-700 max-w-3xl">
        Use the unique ID on your crate to view farm origin, pack date, and current delivery status.
      </p>

      <div className="mt-8 grid gap-4 max-w-md">
        <label className="text-sm font-medium text-ink" htmlFor="crate">Crate ID</label>
        <input
          id="crate"
          placeholder="e.g. BF-AC-2025-000123"
          className="rounded-xl px-4 py-3 ring-1 ring-neutral-300 bg-white placeholder:text-neutral-400 focus:outline-none focus:ring-brand-deep"
        />
        <div className="flex gap-3">
          <button className="inline-flex items-center justify-center rounded-full bg-brand-deep text-white px-5 py-2 font-semibold hover:bg-brand-deep/90 transition-colors">
            Track
          </button>
          <Link href="#" className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-2 font-semibold ring-1 ring-neutral-200 text-ink hover:bg-cream/80 transition-colors">
            Where to find Crate ID?
          </Link>
        </div>
      </div>

      <div className="mt-12 text-sm text-neutral-600">
        Coming soon: live tracking, freshness score, and delivery ETA.
      </div>
    </div>
  );
}

