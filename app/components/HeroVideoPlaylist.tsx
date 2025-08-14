"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoPlaylistProps = {
  sources: string[];
  poster?: string;
  className?: string;
  preload?: "auto" | "metadata" | "none";
};

export default function HeroVideoPlaylist({
  sources,
  poster,
  className = "",
  preload = "metadata",
}: HeroVideoPlaylistProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const maybePromise = video.play();
      if (maybePromise && typeof (maybePromise as any).catch === "function") {
        (maybePromise as Promise<void>).catch(() => {});
      }
    };

    // Reload when source changes and attempt to play
    video.load();
    const handleCanPlay = () => tryPlay();
    video.addEventListener("canplay", handleCanPlay, { once: true });
    tryPlay();
    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentIndex]);

  const handleEnded = () => {
    if (sources.length <= 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % sources.length);
  };

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      playsInline
      preload={preload}
      poster={poster}
      onEnded={handleEnded}
    >
      <source src={sources[currentIndex]} type="video/mp4" />
    </video>
  );
}


