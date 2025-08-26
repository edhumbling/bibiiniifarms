import Image from "next/image";
import { PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Helper function to get video embed URL
function getVideoEmbedUrl(url: string): string | null {
  // YouTube URLs
  const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const youtubeMatch = url.match(youtubeRegex);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo URLs
  const vimeoRegex = /(?:vimeo\.com\/)([0-9]+)/;
  const vimeoMatch = url.match(vimeoRegex);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  // Direct video URLs
  if (url.match(/\.(mp4|webm|ogg)$/i)) {
    return url;
  }

  return null;
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(800).height(600).url();
      
      if (!imageUrl) return null;

      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || "Blog image"}
            width={800}
            height={600}
            className="rounded-lg w-full h-auto"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
    videoEmbed: ({ value }) => {
      const embedUrl = getVideoEmbedUrl(value.url);
      
      if (!embedUrl) {
        return (
          <div className="my-8 p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-gray-600">
              Video URL not supported. Please use YouTube, Vimeo, or direct video file URLs.
            </p>
            <a 
              href={value.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-glow hover:brightness-110"
            >
              View Video
            </a>
          </div>
        );
      }

      // Check if it's a direct video file
      if (value.url.match(/\.(mp4|webm|ogg)$/i)) {
        return (
          <div className="my-8">
            {value.title && (
              <h4 className="text-lg font-semibold mb-4 text-center">
                {value.title}
              </h4>
            )}
            <video
              controls
              className="w-full rounded-lg"
              preload="metadata"
            >
              <source src={embedUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }

      // YouTube/Vimeo embed
      return (
        <div className="my-8">
          {value.title && (
            <h4 className="text-lg font-semibold mb-4 text-center">
              {value.title}
            </h4>
          )}
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              src={embedUrl}
              title={value.title || "Video"}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-glow pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through">{children}</span>
    ),
    lead: ({ children }) => (
      <span className="text-lg font-medium">{children}</span>
    ),
    small: ({ children }) => (
      <span className="text-sm">{children}</span>
    ),
    spanStyle: ({ children, value }) => {
      const { color, size } = value || {};
      const sizeClass = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : size === 'xl' ? 'text-xl' : '';
      const style: React.CSSProperties = {};
      if (color) style.color = color;
      return (
        <span className={`${sizeClass}`} style={style}>
          {children}
        </span>
      );
    },
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-glow hover:brightness-110 underline"
      >
        {children}
      </a>
    ),
  },
};
