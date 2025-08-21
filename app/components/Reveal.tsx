"use client";
import { ReactNode } from "react";

export default function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  // Simplified version without framer-motion to avoid dependency issues
  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
}

