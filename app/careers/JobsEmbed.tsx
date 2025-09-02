"use client";
import { useState, useEffect } from "react";

export default function JobsEmbed() {
  const [loaded, setLoaded] = useState(false);

  // Optional safety timeout in case onLoad is delayed
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded((prev) => prev || false);
    }, 12000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-[800px] min-h-[700px]">
        {/* Loading overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            loaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={loaded}
        >
          <div className="flex items-center gap-3 rounded-xl bg-white/85 backdrop-blur px-4 py-3 ring-1 ring-black/10">
            <span
              aria-hidden
              className="inline-block h-5 w-5 rounded-full border-2 border-emerald-glow border-t-transparent animate-spin"
            />
            <span className="text-sm font-semibold text-gray-900">
              Searching for Jobs at Bibinii Farms...
            </span>
          </div>
        </div>

        {/* Embedded Jobs iframe */}
        <iframe
          width="800px"
          height="700px"
          src="https://app.dover.com/jobs/bibiniifarms?embed=1"
          title="Bibinii Farms jobs — Dover"
          frameBorder="0"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}


