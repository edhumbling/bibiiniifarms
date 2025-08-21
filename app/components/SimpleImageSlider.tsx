"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SimpleImageSliderProps {
  images: string[];
  label: string;
  gradientFrom: string;
  gradientTo: string;
  autoplayDelay?: number;
}

export default function SimpleImageSlider({ 
  images, 
  label, 
  gradientFrom, 
  gradientTo, 
  autoplayDelay = 3000 
}: SimpleImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [images.length, autoplayDelay, isMounted]);

  // Show static fallback during SSR/hydration
  if (!isMounted) {
    return (
      <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg overflow-hidden relative flex items-center justify-center`}>
        <span className="text-gray-600 text-lg font-semibold">{label}</span>
      </div>
    );
  }

  return (
    <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg overflow-hidden relative`}>
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`${label} ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      
      {/* Label overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-semibold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          {label}
        </span>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to ${label} image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
