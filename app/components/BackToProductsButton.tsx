"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackToProductsButton() {
  const [hiddenNearFooter, setHiddenNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHiddenNearFooter(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fixed z-30 top-24 left-4 transition-opacity duration-200 ${hiddenNearFooter ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <Link href="/products" className="inline-flex items-center gap-2 rounded-md bg-white text-deep-green px-3 py-2 shadow ring-1 ring-black/10 hover:shadow-md">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        <span className="font-medium">Back</span>
      </Link>
    </div>
  );
}



