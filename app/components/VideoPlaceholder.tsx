export default function VideoPlaceholder({ label = "Promo Video" }: { label?: string }) {
  return (
    <div className="aspect-video rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 grid place-items-center">
      <div className="text-neutral-600 text-sm">{label} (embed coming soon)</div>
    </div>
  );
}

