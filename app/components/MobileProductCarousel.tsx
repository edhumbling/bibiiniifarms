"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    href: "/products/fresh-bibinii-eggs",
    name: "Fresh Bibinii Eggs",
    subtitle: "Heritage Variety",
    image: "https://ik.imagekit.io/spj5u0tzx/1.png"
  },
  {
    href: "/products/fresh-bibinii-eggs",
    name: "Fresh Bibinii Eggs",
    subtitle: "Organic Variety",
    image: "https://ik.imagekit.io/spj5u0tzx/3.png"
  },
  {
    href: "/products/fresh-bibinii-eggs",
    name: "Fresh Bibinii Eggs",
    subtitle: "Pasture Raised Variety",
    image: "https://ik.imagekit.io/spj5u0tzx/2.png"
  },
  {
    href: "/products/fresh-bibinii-eggs",
    name: "Fresh Bibinii Eggs",
    subtitle: "Free Range Variety",
    image: "https://ik.imagekit.io/spj5u0tzx/4.png"
  }
];

interface MobileProductCarouselProps {
  onProductClick: () => void;
}

export default function MobileProductCarousel({ onProductClick }: MobileProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <div className="relative">
        <div className="flex justify-center">
          <Link 
            href={currentProduct.href} 
            onClick={onProductClick} 
            className="group flex flex-col items-center gap-3 transition-all duration-500"
          >
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <img 
                src={currentProduct.image} 
                alt={currentProduct.name} 
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105" 
                loading="lazy" 
              />
            </div>
            <div className="text-center">
              <span className="text-white text-lg font-medium group-hover:text-brand-egg transition-colors block">
                {currentProduct.name}
              </span>
              <span className="text-white/80 text-sm font-normal">
                {currentProduct.subtitle}
              </span>
            </div>
          </Link>
        </div>
        
        {/* Dot indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to ${products[index].name}`}
            />
          ))}
        </div>
      </div>
  );
}
