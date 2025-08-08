
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../bibinii logo white text.svg";

const nav = [
  { href: "/culture", label: "Our Culture" },
  { href: "/order", label: "Order Eggs" },
  { href: "/track", label: "Track Your Crate" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5 dark:bg-[#0b0b09]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-24 grid grid-cols-3 items-center">
          {/* Left: hamburger */}
          <div className="flex">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="h-11 w-11"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Centered logo (doubled size) */}
          <div className="flex justify-center">
            <Link href="/" className="block">
              <Image src={Logo} alt="Bibinii Farms" className="h-20 md:h-24 lg:h-28 w-auto" />
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <Link
              href="/find"
              className="rounded-full bg-brand-deep text-white h-11 px-5"
            >
              Find Bibinii
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile/Overlay menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bg-white rounded-b-3xl p-6">
            <nav className="mt-4 grid gap-2">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 ring-1">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}



