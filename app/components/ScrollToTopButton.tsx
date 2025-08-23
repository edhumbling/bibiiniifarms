"use client";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const halfway = Math.max(0, scrollable * 0.5);
      setIsVisible(window.scrollY > halfway);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[70]">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleClick}
        className="h-12 w-12 rounded-full bg-black text-[#fdc700] shadow-lg ring-1 ring-white/10 hover:bg-black/90 transition-colors flex items-center justify-center"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#fdc700]"
          aria-hidden="true"
        >
          <path d="M12 5l-7 7h4v7h6v-7h4z" />
        </svg>
      </button>
    </div>
  );
}


