"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

const pastureImages: string[] = [
  "https://ik.imagekit.io/spj5u0tzx/ecec0f4c-6899-4e0d-be4d-704c992e444a.png",
  "https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png",
  "https://ik.imagekit.io/spj5u0tzx/01e09a5a-34c5-4f73-87db-e71b8e417b9a.png",
  "https://ik.imagekit.io/spj5u0tzx/36e9f18e-af3f-4142-afae-c82367a4c9d2.png",
];

export default function PastureRaisedSlider() {
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
    <div className="embla h-48 bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg overflow-hidden relative">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {pastureImages.map((src, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full h-full relative">
              <Image
                src={src}
                alt={`Pasture raised eggs ${index + 1}`}
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
          Pasture Raised
        </span>
      </div>
    </div>
  );
}


