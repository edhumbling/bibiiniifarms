export default function Certifications() {
  const items = ["GSA", "FDA", "Local Permits"];
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((i) => (
        <div key={i} className="rounded-xl bg-white px-4 py-2 ring-1 ring-black/10 text-sm font-medium">
          {i}
        </div>
      ))}
    </div>
  );
}

