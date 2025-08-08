export default function QRMockup() {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-neutral-200 shadow-sm">
      <div className="aspect-square rounded-xl bg-[radial-gradient(circle_at_center,_#000,_#333)] grid place-items-center">
        <div className="w-24 h-24 bg-white" />
      </div>
      <p className="mt-3 text-sm text-neutral-700">Scan to track your crate — mockup</p>
    </div>
  );
}

