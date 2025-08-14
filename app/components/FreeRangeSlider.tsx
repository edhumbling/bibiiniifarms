"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const freeRangeImages: string[] = [
  "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
  "https://ik.imagekit.io/spj5u0tzx/58d50bc1-9375-4845-a900-7cacf14f8d5e.png",
  "https://ik.imagekit.io/spj5u0tzx/93b8d1a9-f6cd-4855-80c9-f2672736f107.png",
  "https://ik.imagekit.io/spj5u0tzx/c4cbec47-f40c-4200-b7f8-341b44337812.png",
];

export default function FreeRangeSlider() {
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
    <div className="embla h-48 bg-gradient-to-br from-rose-50 to-red-100 rounded-lg overflow-hidden relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {freeRangeImages.map((src, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`Free range eggs ${index + 1}`}
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
          Free Range
        </span>
      </div>
    </div>
  );
}


