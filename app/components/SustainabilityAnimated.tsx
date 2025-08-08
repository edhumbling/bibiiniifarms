export default function SustainabilityAnimated() {
  return (
    <div className="relative rounded-2xl bg-cream ring-1 ring-neutral-200 overflow-hidden">
      <div className="absolute -left-10 -top-10 w-64 h-64 rounded-full bg-brand-egg animate-pulse/slow" />
      <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-brand-deep/30 animate-pulse/slow" />
      <div className="p-6 sm:p-8">
        <p className="text-neutral-700">Animated infographic placeholder (waste reduction, cold chain, CO₂ savings).</p>
      </div>
    </div>
  );
}

