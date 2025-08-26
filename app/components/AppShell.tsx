"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

// Lazy-load floating button only when needed (and never on /order)
const FloatingFindButton = dynamic(() => import("./FloatingFindButton"), { ssr: false });

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginRoute = pathname.startsWith("/login");

  if (isLoginRoute) {
    return (
      <div className="min-h-dvh flex flex-col">
        <main className="flex-1 bg-white font-amazon-ember">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 bg-white font-amazon-ember">{children}</main>
      <Footer />
      {!pathname.startsWith("/order") ? <FloatingFindButton /> : null}
      <ScrollToTopButton />
    </div>
  );
}


