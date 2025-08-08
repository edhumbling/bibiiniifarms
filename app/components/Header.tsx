"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../bibinii logo white text.svg";

const nav = [
  { href: "/culture", label: "Our Culture" },
  { href: "/order", label: "Order Eggs" },
  { href: "/track", label: "Track Your Crate" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5 dark:bg-[#0b0b09]/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20 grid grid-cols-3 items-center">
          {/* Left spacer */}
          <div />

          {/* Centered logo */}
          <div className="flex justify-center">
            <Link href="/" className="block">
              <Image src={Logo} alt="Bibinii Farms" className="h-10 md:h-12 lg:h-14 w-auto" priority />
            </Link>
          </div>

          {/* Right navigation */}
          <nav className="hidden md:flex items-center justify-end gap-6">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "text-sm font-medium transition-colors hover:text-brand-deep " +
                    (active ? "text-brand-deep" : "text-neutral-700 dark:text-neutral-300")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

