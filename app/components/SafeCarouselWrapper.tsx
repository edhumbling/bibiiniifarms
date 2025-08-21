"use client";
import { Suspense, lazy, useState, useEffect } from "react";
import SimpleImageSlider from "./SimpleImageSlider";

// Lazy load the Embla carousel components
const HeritageEggsSlider = lazy(() => import("./HeritageEggsSlider"));
const PastureRaisedSlider = lazy(() => import("./PastureRaisedSlider"));
const OrganicSlider = lazy(() => import("./OrganicSlider"));
const FreeRangeSlider = lazy(() => import("./FreeRangeSlider"));

interface SafeCarouselWrapperProps {
  type: "heritage" | "pasture" | "organic" | "freerange";
}

const imageData = {
  heritage: {
    images: [
      "https://ik.imagekit.io/spj5u0tzx/e4c0ee8d-c0e0-4116-b9c2-ecd52c99fa74.png",
      "https://ik.imagekit.io/spj5u0tzx/e59d3863-a25b-44e5-b25e-7d7b26d4bd47.png",
      "https://ik.imagekit.io/spj5u0tzx/b1d02124-c55b-4a68-9e47-e0a1b83c934a.png",
      "https://ik.imagekit.io/spj5u0tzx/3d7e14c1-f5f7-48c4-bf46-41b920b9c853.png",
    ],
    label: "Heritage",
    gradientFrom: "from-amber-50",
    gradientTo: "to-orange-100",
    delay: 3000
  },
  pasture: {
    images: [
      "https://ik.imagekit.io/spj5u0tzx/ecec0f4c-6899-4e0d-be4d-704c992e444a.png",
      "https://ik.imagekit.io/spj5u0tzx/ffd9ba1f-da29-4d49-83c4-32f9c5e026b2.png",
      "https://ik.imagekit.io/spj5u0tzx/01e09a5a-34c5-4f73-87db-e71b8e417b9a.png",
      "https://ik.imagekit.io/spj5u0tzx/36e9f18e-af3f-4142-afae-c82367a4c9d2.png",
    ],
    label: "Pasture Raised",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-green-100",
    delay: 3500
  },
  organic: {
    images: [
      "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
      "https://ik.imagekit.io/spj5u0tzx/7bb1da60-e133-431d-98fe-3e848c1d9d7d.png",
      "https://ik.imagekit.io/spj5u0tzx/3ce750cc-6daf-47e3-a0be-6882e0b99e8d.png",
      "https://ik.imagekit.io/spj5u0tzx/08736235-50b1-4b81-967e-0859062b469e.png",
    ],
    label: "Organic",
    gradientFrom: "from-green-50",
    gradientTo: "to-emerald-100",
    delay: 4000
  },
  freerange: {
    images: [
      "https://ik.imagekit.io/spj5u0tzx/ce2576a8-7084-45e9-99b2-2aee706561fc.png",
      "https://ik.imagekit.io/spj5u0tzx/58d50bc1-9375-4845-a900-7cacf14f8d5e.png",
      "https://ik.imagekit.io/spj5u0tzx/93b8d1a9-f6cd-4855-80c9-f2672736f107.png",
      "https://ik.imagekit.io/spj5u0tzx/c4cbec47-f40c-4200-b7f8-341b44337812.png",
    ],
    label: "Free Range",
    gradientFrom: "from-rose-50",
    gradientTo: "to-red-100",
    delay: 4500
  }
};

export default function SafeCarouselWrapper({ type }: SafeCarouselWrapperProps) {
  const [useSimpleSlider, setUseSimpleSlider] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const data = imageData[type];

  useEffect(() => {
    setIsMounted(true);
    
    // Check if we should use simple slider (e.g., on mobile or if Embla fails)
    const checkForIssues = () => {
      try {
        // Simple check for potential issues
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          // Use simple slider on mobile to avoid issues
          setUseSimpleSlider(true);
        }
      } catch (error) {
        setUseSimpleSlider(true);
      }
    };

    checkForIssues();
  }, []);

  // Fallback during SSR
  if (!isMounted) {
    return (
      <div className={`h-48 bg-gradient-to-br ${data.gradientFrom} ${data.gradientTo} rounded-lg overflow-hidden relative flex items-center justify-center`}>
        <span className="text-gray-600 text-lg font-semibold">{data.label}</span>
      </div>
    );
  }

  // Use simple slider if needed
  if (useSimpleSlider) {
    return (
      <SimpleImageSlider 
        images={data.images}
        label={data.label}
        gradientFrom={data.gradientFrom}
        gradientTo={data.gradientTo}
        autoplayDelay={data.delay}
      />
    );
  }

  // Try to use Embla carousel with Suspense
  const CarouselComponent = type === "heritage" ? HeritageEggsSlider :
                           type === "pasture" ? PastureRaisedSlider :
                           type === "organic" ? OrganicSlider :
                           FreeRangeSlider;

  return (
    <Suspense fallback={
      <SimpleImageSlider 
        images={data.images}
        label={data.label}
        gradientFrom={data.gradientFrom}
        gradientTo={data.gradientTo}
        autoplayDelay={data.delay}
      />
    }>
      <CarouselComponent />
    </Suspense>
  );
}
