"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const heritageImages = [
  "https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png",
  "https://ik.imagekit.io/spj5u0tzx/e59d3863-a25b-44e5-b25e-7d7b26d4bd47.png",
  "https://ik.imagekit.io/spj5u0tzx/b1d02124-c55b-4a68-9e47-e0a1b83c934a.png",
  "https://ik.imagekit.io/spj5u0tzx/3d7e14c1-f5f7-48c4-bf46-41b920b9c853.png",
];

export default function HeritageEggsSlider() {
  const [isMounted, setIsMounted] = useState(false);
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps'
    },
    [autoplayRef.current]
  );

  useEffect(() => {
    setIsMounted(true);

    return () => {
      // Cleanup autoplay when component unmounts
      if (autoplayRef.current) {
        autoplayRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (emblaApi && isMounted) {
      // Setup embla after component is mounted
      try {
        // Just ensure the API is ready, don't try to add error handlers
        emblaApi.reInit();
      } catch (error) {
        console.warn('Embla setup error:', error);
      }
    }
  }, [emblaApi, isMounted]);

  // Don't render carousel until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden relative flex items-center justify-center">
        <span className="text-gray-600 text-lg font-semibold">Heritage</span>
      </div>
    );
  }

  return (
    <div className="embla h-48 bg-gradient-to-br from-amber-50 to-orange-100 rounded-lg overflow-hidden relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {heritageImages.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full h-full relative"
            >
              <Image
                src={src}
                alt={`Heritage eggs ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Heritage label overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-semibold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Heritage
        </span>
      </div>
    </div>
  );
}

