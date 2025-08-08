import type { Metadata } from "next";
import ValueSection from "@/app/components/ValueSection";
import VideoPlaceholder from "@/app/components/VideoPlaceholder";
import Gallery from "@/app/components/Gallery";
import QRMockup from "@/app/components/QRMockup";
import Certifications from "@/app/components/Certifications";
import SustainabilityAnimated from "@/app/components/SustainabilityAnimated";

export const metadata: Metadata = {
  title: "Our Culture — Bibinii Farms",
  description:
    "Our values: integrity, transparency, farmer empowerment, and excellence in cold-chain logistics.",
};

export default function CulturePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <header>
        <h1 className="display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">Our Culture & Values</h1>
        <p className="mt-4 text-neutral-700 max-w-3xl">
          We believe wealth is built with integrity. We pay farmers fairly, make freshness traceable, and
          invest in storage and routing to reduce waste. This is how we feed Ghana with purpose.
        </p>
      </header>

      {/* 1. Ubuntu */}
      <ValueSection
        title="Ubuntu"
        quote="I am because we are."
        description="Farmer stories and real household impact. Explore testimonials from our smallholder and mid-size partners."
        ctaLabel="Meet Farmers"
        ctaHref="#ubuntu"
        accent="egg"
        visual={<Gallery />}
      />

      {/* 2. Sankofa */}
      <ValueSection
        title="Sankofa"
        quote="Return and get it."
        description="We blend traditional wisdom with modern practices—cold-chain storage, crate tracking, and fair contracts."
        ctaLabel="See Old vs New"
        ctaHref="#sankofa"
        accent="cream"
        visual={<div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">Illustrated comparison (coming soon)</div>}
      />

      {/* 3. Integrity */}
      <ValueSection
        title="Integrity"
        quote="Transparency you can verify."
        description="Track your crate with a simple QR. See origin farm, pack date, and delivery status."
        ctaLabel="Track Your Crate"
        ctaHref="/track"
        accent="deep"
        visual={<QRMockup />}
      />

      {/* 4. Black Excellence */}
      <ValueSection
        title="Black Excellence"
        quote="Leadership with purpose."
        description="A message from our founder on building wealth with integrity across Ghana’s food system."
        ctaLabel="Watch Message"
        ctaHref="#founder"
        accent="cream"
        visual={<VideoPlaceholder label="Founder Message" />}
      />

      {/* 5. Sustainability */}
      <ValueSection
        title="Sustainability"
        quote="Less waste, more nourishment."
        description="We reduce spoilage through better storage and routing. Animated metrics coming soon."
        ctaLabel="See Our Impact"
        ctaHref="#impact"
        accent="egg"
        visual={<SustainabilityAnimated />}
      />

      {/* 6. Excellence */}
      <ValueSection
        title="Excellence"
        quote="Standards you can trust."
        description="We adhere to national standards and international best practice. Our certifications and permits."
        ctaLabel="View Certifications"
        ctaHref="#certs"
        accent="cream"
        visual={<Certifications />}
      />
    </div>
  );
}

