import Link from "next/link";
import Reveal from "@/app/components/Reveal";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-brand-egg/40 blur-3xl" />
          <div className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-[50%_50%_60%_40%] bg-brand-deep/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-3 py-1 text-xs font-semibold ring-1 ring-black/5">
                  Fresh • Traceable • Farmer-first
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-ink">
                  Building Wealth with Integrity.
                  <br />
                  <span className="text-brand-deep">Feeding Ghana with Purpose.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
                  We source eggs directly from vetted local farmers and deliver them straight to your door. No middlemen. No stale stock. Just clean, safe, traceable eggs—always fresh.
                </p>
              </Reveal>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-brand-deep text-white px-6 py-3 font-semibold shadow-sm hover:opacity-95">
                  Order Eggs
                </Link>
                <Link href="/track" className="inline-flex items-center justify-center rounded-full bg-white text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:bg-cream">
                  Track Your Crate
                </Link>
                <Link href="/culture" className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95">
                  Our Culture
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <div className="text-3xl font-extrabold text-ink">30–60%</div>
                  <div className="text-sm text-neutral-600">Typical farmer underpayment we eliminate</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-ink">40%</div>
                  <div className="text-sm text-neutral-600">Supply lost to poor storage—we fix the cold chain</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-ink">24–48h</div>
                  <div className="text-sm text-neutral-600">From farm to doorstep freshness</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[44%_56%_50%_50%/60%_52%_48%_40%] bg-cream egg-shadow ring-1 ring-neutral-200">
                <div className="absolute inset-6 rounded-[44%_56%_50%_50%/60%_52%_48%_40%] bg-white ring-1 ring-neutral-200" />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/95 p-4 ring-1 ring-neutral-200 backdrop-blur shadow-sm">
                  <p className="text-sm text-neutral-700">
                    “We pay farmers fairly and deliver fresher eggs to homes. That’s how we build wealth with integrity.”
                  </p>
                  <p className="mt-2 text-xs text-neutral-500">— The Bibinii Farms Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bibinii */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Farmer-first pricing",
                desc:
                  "We cut out predatory middlemen so farmers earn what they deserve—creating a stronger, more resilient local supply.",
              },
              {
                title: "Fresher, safer eggs",
                desc:
                  "Direct sourcing plus better storage and distribution means your eggs arrive clean, safe, and truly fresh.",
              },
              {
                title: "Flexible ordering",
                desc:
                  "Set-and-forget subscriptions or on‑demand delivery when you need it. You choose what works for you.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-deep text-white p-10 sm:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready for fresher eggs?</h2>
                <p className="mt-2 text-white/80 max-w-xl">Order today and taste the difference in 24–48 hours. Traceable, farmer‑fair, delivered to your door.</p>
              </div>
              <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-brand-egg text-ink px-6 py-3 font-semibold ring-1 ring-black/10 hover:brightness-95">
                Start an Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
