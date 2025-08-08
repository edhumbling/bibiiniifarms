import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Culture — Bibinii Farms",
  description:
    "Our values: integrity, transparency, farmer empowerment, and excellence in cold-chain logistics.",
};

export default function CulturePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">Our Culture</h1>
      <p className="mt-4 text-neutral-700 max-w-3xl">
        We believe wealth is built with integrity. We pay farmers fairly, keep our products traceable, and
        operate with radical transparency. Our work is to feed Ghana with purpose—supporting smallholder
        to mid-size farms and delivering fresh, safe eggs to families and businesses.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "Integrity",
            desc: "Fair contracts and clear pricing, always. We win when farmers win.",
          },
          {
            title: "Transparency",
            desc: "From farm to crate, we make quality and timelines visible.",
          },
          {
            title: "Operational excellence",
            desc: "We invest in storage, routing, and tracking to reduce waste.",
          },
          {
            title: "Community",
            desc: "We prioritize Ghanaian families, restaurants, and local economies.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
            <h3 className="text-lg font-semibold text-ink">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-700">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

