
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
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-24 grid grid-cols-3 items-center">
          {/* Left: hamburger */}
          <div className="flex">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center h-11 w-11 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
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
              className="inline-flex items-center justify-center rounded-full bg-brand-deep text-white h-11 px-5 font-semibold hover:bg-brand-deep/90 transition-colors"
            >
              Find Bibinii
            </Link>
          </div>
        </div>
      </div>

      {/* Clean dropdown menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg border-b border-neutral-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-neutral-600">Menu</span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center h-8 w-8 hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <nav className="grid gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={
                        "block px-4 py-3 rounded-lg font-medium transition-colors " +
                        (active
                          ? "text-brand-deep bg-brand-egg/10"
                          : "text-neutral-700 hover:bg-neutral-100"
                        )
                      }
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}