"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const organicImages: string[] = [
  "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
  "https://ik.imagekit.io/spj5u0tzx/7bb1da60-e133-431d-98fe-3e848c1d9d7d.png",
  "https://ik.imagekit.io/spj5u0tzx/3ce750cc-6daf-47e3-a0be-6882e0b99e8d.png",
  "https://ik.imagekit.io/spj5u0tzx/08736235-50b1-4b81-967e-0859062b469e.png",
];

export default function OrganicSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      // Optional future hooks
    }
  }, [emblaApi]);

  return (
    <div className="embla h-48 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg overflow-hidden relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {organicImages.map((src, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`Organic eggs ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-lg font-semibold bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          Organic
        </span>
      </div>
    </div>
  );
}


