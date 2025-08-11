export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="display text-5xl font-extrabold">Page not found</h1>
      <p className="mt-4 text-neutral-700">We couldn’t find that page. Try going back home.</p>
      <a href="/" className="mt-6 inline-flex rounded-full bg-luminous-green text-white px-6 py-3 font-semibold hover:brightness-95 transition-all">Back to Home</a>
    </div>
  );
}

