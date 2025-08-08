export default function Gallery() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-[4/3] rounded-xl bg-white ring-1 ring-black/5" />
      ))}
    </div>
  );
}

