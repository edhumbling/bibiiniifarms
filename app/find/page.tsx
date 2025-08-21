import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bibinii Farms • Find",
  description: "Find — Discover pickup hubs and delivery coverage for Bibinii Farms.",
};

export default function FindPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Find Bibinii</h1>
      <p className="mt-4 text-neutral-700 max-w-3xl">
        Coming soon: a map and list of pickup points, partner retailers, and delivery coverage areas.
      </p>
    </div>
  );
}

