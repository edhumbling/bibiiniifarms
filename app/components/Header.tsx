"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="inline-block w-8 h-8 rounded-full bg-brand-egg shadow-[0_4px_0_0_rgba(0,0,0,0.08)] ring-1 ring-black/5" />
            <span className="font-semibold tracking-tight text-xl group-hover:text-brand-deep transition-colors">
              Bibinii Farms
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
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

          <div className="md:hidden">
            {/* Future: mobile menu */}
          </div>
        </div>
      </div>
    </header>
  );
}

