import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  quote?: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  accent?: "egg" | "deep" | "cream";
  visual: ReactNode;
};

export default function ValueSection({ title, quote, description, ctaLabel, ctaHref, accent = "cream", visual }: Props) {
  const bg = accent === "egg" ? "bg-brand-egg/20" : accent === "deep" ? "bg-brand-deep/10" : "bg-cream";
  return (
    <section className={`rounded-3xl ${bg} p-6 sm:p-8 ring-1 ring-neutral-200`}>
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <h2 className="display text-2xl sm:text-3xl font-extrabold text-ink">{title}</h2>
          {quote && <p className="mt-2 italic text-neutral-700">“{quote}”</p>}
          <p className="mt-4 text-neutral-700">{description}</p>
          {ctaLabel && ctaHref && (
            <Link href={ctaHref} className="mt-6 inline-flex rounded-full bg-brand-deep text-white px-5 py-2 font-semibold">
              {ctaLabel}
            </Link>
          )}
        </div>
        <div className="lg:col-span-6">
          {visual}
        </div>
      </div>
    </section>
  );
}

