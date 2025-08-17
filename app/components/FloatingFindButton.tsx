"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FloatingFindButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide button when footer is visible (when footer top is less than window height)
      setIsVisible(footerRect.top > windowHeight - 100); // Hide 100px before footer appears
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[60] lg:hidden">
      <Link
        href="/store-locator"
        className="inline-flex items-center justify-center px-10 py-3 bg-luminous-green text-white rounded-full font-semibold text-base shadow-lg hover:brightness-110 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Find Bibinii
      </Link>
    </div>
  );
}
