"use client";
import { useEffect, useState } from "react";

export default function ShareBar({ title }: { title: string }) {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const items = [
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      bg: "#EA4335",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2l8 5 8-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      bg: "#25D366",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.18 0 6.167 1.24 8.413 3.488a11.82 11.82 0 013.49 8.404c-.003 6.653-5.284 11.934-11.94 11.934a11.9 11.9 0 01-6.004-1.62L.057 24zm6.597-3.807c1.735.995 3.276 1.591 5.392 1.593 5.448 0 9.886-4.434 9.889-9.877.003-5.466-4.415-9.89-9.881-9.893-5.452 0-9.887 4.434-9.89 9.885a9.86 9.86 0 001.599 5.362l-.999 3.648 3.89-.718zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.29.173-1.411z"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "#1877F2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/>
        </svg>
      ),
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bg: "#000000",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2H21l-6.56 7.494L22 22h-6.157l-4.81-6.256L5.6 22H3l7.026-8.02L2 2h6.32l4.36 5.77L18.244 2zm-1.08 18h1.68L7.935 4h-1.68L17.165 20z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bg: "#0A66C2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7 0h3.83v2.18h.05C12.1 8.74 13.63 8 15.46 8 20 8 21 10.94 21 15.23V24h-4v-7.73c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8z"/>
        </svg>
      ),
    },
    {
      label: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bg: "#229ED9",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.036 15.803l-.375 5.295c.537 0 .769-.231 1.049-.51l2.517-2.413 5.217 3.827c.957.526 1.64.25 1.9-.885l3.44-16.095h.001c.306-1.422-.513-1.977-1.45-1.63L1.12 9.773c-1.386.539-1.365 1.315-.236 1.667l5.21 1.626L19.27 5.77c.58-.38 1.107-.17.673.21"/>
        </svg>
      ),
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // Optional: toast/feedback can be added
    } catch (_) {}
  };

  return (
    <div className="py-4 sm:py-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-800">Share:</span>
          <div className="flex items-center gap-2 sm:gap-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex items-center justify-center rounded-full w-9 h-9 shadow-sm hover:opacity-90 transition"
                style={{ backgroundColor: item.bg }}
              >
                {item.icon}
              </a>
            ))}
            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy link"
              className="inline-flex items-center justify-center rounded-full w-9 h-9 bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
              title="Copy link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z" stroke="#111" strokeWidth="2"/>
                <path d="M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="#111" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


