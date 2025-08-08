"use client";

const images = [
  {
    id: 1,
    src: "https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/933c97ca-eab7-4377-93c7-d314d6094279.png",
    alt: "Farm Image 1"
  },
  {
    id: 2,
    src: "https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/59099689-ed99-45c3-bbe1-49043c7b5713.png",
    alt: "Farm Image 2"
  },
  {
    id: 3,
    src: "https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/a2008058-5df9-4ad6-8e98-284c8275c1c9.png",
    alt: "Farm Image 3"
  },
  {
    id: 4,
    src: "https://ik.imagekit.io/humbling/reve_images_2025-08-04_14-48-38/70fb9ea3-46e9-4e51-8b4d-2c6108898547.png",
    alt: "Farm Image 4"
  }
];

export default function ImageCarousel() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Bibinii and Love for Poultry</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Take a glimpse into the daily life at our sustainable farms where happy chickens roam free.
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll-horizontal items-center">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 mx-2 relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-auto object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                loading="lazy"
                onError={(e) => {
                  console.error('Image failed to load:', image.src);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Subtle overlay for better visual effect */}
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
