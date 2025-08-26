"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  // Minimal layout without site Header/Footer for auth pages
  const [isLightBg, setIsLightBg] = useState(true);

  useEffect(() => {
    // Detect background from computed body background color
    if (typeof window !== "undefined") {
      const bg = getComputedStyle(document.body).backgroundColor;
      // crude check: if luminance is high -> light
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) {
        const r = parseInt(m[1], 10), g = parseInt(m[2], 10), b = parseInt(m[3], 10);
        const luma = 0.2126*r + 0.7152*g + 0.0722*b;
        setIsLightBg(luma > 160);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="pt-8 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-neutral-100 ring-1 ring-black/10 overflow-hidden flex items-center justify-center">
          <Image
            src={isLightBg ? "/bibinii svg logo black text.svg" : "/bibinii logo text white.svg"}
            alt="Bibinii Farms"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}


