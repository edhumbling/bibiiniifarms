
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "../bibinii logo text white.svg";
import OrderNowLogo from "../order now.svg";
import HeaderBackground from "../header bar background.png";
import MobileProductCarousel from "./MobileProductCarousel";

const mainNav = [
  { href: "/products", label: "Products" },
  { href: "/farms", label: "Our Farms" },
  { href: "/become-farmer", label: "Become a\nBibinii Farmer" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/store-locator", label: "Store Locator" },
];

const secondaryNav = [
  { href: "/faqs", label: "FAQs" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Force header to show immediately on specific routes
    const shouldForceHeader = pathname.startsWith('/privacy') || pathname.startsWith('/terms') || pathname.startsWith('/order');

    if (shouldForceHeader) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      // Original behavior: threshold-based reveal, with mobile blog-post exception
      const isMobile = window.innerWidth < 768;
      const isBlogPost = pathname.startsWith('/blog/');

      if (isMobile && isBlogPost) {
        setIsScrolled(true);
        return;
      }

      const baseThreshold = Math.max(160, window.innerHeight * 0.6);
      setIsScrolled(window.scrollY > baseThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const computeFromStorage = () => {
      try {
        const raw = localStorage.getItem("bf_cart");
        if (!raw) { setCartCount(0); return; }
        const parsed = JSON.parse(raw) as Record<string, number> | null;
        if (!parsed || typeof parsed !== "object") { setCartCount(0); return; }
        const total = Object.values(parsed).reduce((a, b) => a + (b || 0), 0);
        setCartCount(total);
      } catch { setCartCount(0); }
    };

    computeFromStorage();

    const onCustom = (e: any) => {
      if (e && e.detail && typeof e.detail.total === "number") {
        setCartCount(e.detail.total);
      } else {
        computeFromStorage();
      }
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === "bf_cart") computeFromStorage();
    };
    window.addEventListener("bf_cart_updated", onCustom as EventListener);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("bf_cart_updated", onCustom as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || open ? '' : 'bg-transparent-force'}`}>
      {isScrolled || open ? (
        <div className="absolute inset-0">
          <Image 
            src={HeaderBackground} 
            alt="" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      ) : null}
      <div className="relative h-24 grid grid-cols-3 items-center px-2 sm:px-3">
        {/* Left: hamburger - positioned very near left edge */}
        <div className="flex justify-start">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center h-12 w-12 hover:bg-white/10 rounded transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out translate-y-2.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out translate-y-5 ${open ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'}`}></span>
            </div>
          </button>
        </div>

        {/* Centered logo - 3x size */}
        <div className="flex justify-center">
          <Link href="/" className="block">
            <Image src={Logo} alt="Bibinii Farms" className="h-16 w-auto" priority />
          </Link>
        </div>

                 {/* Right: Cart + Order Now - positioned very near right edge */}
         <div className="flex justify-end items-center gap-2">
           <Link href="/order" aria-label="Cart" className="relative inline-flex items-center justify-center rounded-full bg-white/90 text-[#050000] hover:bg-white transition-colors h-9 w-9 sm:h-10 sm:w-10">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6 8h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" fill="#47ff2f" stroke="#050000" strokeWidth="2"/>
               <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#050000" strokeWidth="2" strokeLinecap="butt"/>
             </svg>
             {cartCount > 0 ? (
               <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] leading-[18px] text-center font-bold border-2 border-white">
                 {cartCount}
               </span>
             ) : null}
           </Link>
           <Link
             href="/order"
             className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-200"
           >
             <Image src={OrderNowLogo} alt="Order Now" className="h-8 sm:h-10 w-auto" />
           </Link>
         </div>
      </div>

             {/* Full-screen mobile menu */}
       <div className={`fixed inset-0 z-40 transition-all duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <div className={`absolute inset-0 transition-transform duration-500 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
           <div className="absolute inset-0">
             <Image 
               src={HeaderBackground} 
               alt="" 
               fill 
               className="object-cover"
               priority
             />
           </div>
           <div className="relative h-full flex flex-col font-redhawk">
            {/* Overlay top bar: X left, logo center, CTA right - same positioning as main header */}
            <div className="h-20 flex items-center">
              <div className="w-full px-2 sm:px-3">
                <div className="grid grid-cols-3 items-center">
                  <div className="flex justify-start">
                    <button aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex items-center justify-center h-12 w-12 hover:bg-white/10 rounded transition-all duration-300">
                      <div className="relative w-6 h-6">
                        <span className="absolute block h-0.5 w-6 bg-white transform rotate-45 translate-y-2.5"></span>
                        <span className="absolute block h-0.5 w-6 bg-white transform -rotate-45 translate-y-2.5"></span>
                      </div>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <Image src={Logo} alt="Bibinii Farms" className="h-10 w-auto" priority />
                  </div>
                                     <div className="flex justify-end items-center gap-2">
                    <Link href="/order" aria-label="Cart" onClick={() => setOpen(false)} className="relative inline-flex items-center justify-center rounded-full bg-white/90 text-[#050000] hover:bg-white transition-colors h-9 w-9 sm:h-10 sm:w-10">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 8h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" fill="#47ff2f" stroke="#050000" strokeWidth="2"/>
                        <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#050000" strokeWidth="2" strokeLinecap="butt"/>
                      </svg>
                      {cartCount > 0 ? (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] leading-[18px] text-center font-bold border-2 border-white">
                          {cartCount}
                        </span>
                      ) : null}
                    </Link>
                    <Link href="/order" onClick={() => setOpen(false)} className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-200">
                      <Image src={OrderNowLogo} alt="Order Now" className="h-8 sm:h-10 w-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 px-6 pb-8 overflow-y-auto overscroll-contain">
              {/* Mobile Product Carousel - at top of scrollable content */}
              <div className="lg:hidden mb-8 pt-4">
                <MobileProductCarousel onProductClick={() => setOpen(false)} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full">
                {/* Main Navigation - Left Column */}
                <div>
                  <nav className="space-y-4 font-redhawk">
                    {mainNav.map((item, index) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                           className={`block text-white hover:text-brand-egg transition-colors text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${active ? 'text-white/80' : ''} ${item.href === '/become-farmer' ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl !text-[#fdc700] hover:!text-[#fdc700] hover-glow-soft-white' : ''}`}
                        >
                          {item.href === '/become-farmer' ? (
                            <>
                              <span className="lg:hidden whitespace-pre-line">{item.label}</span>
                              <span className="hidden lg:block">
                                <span className="whitespace-nowrap">Become a</span>
                                <br />
                                <span className="whitespace-nowrap">Bibinii Farmer</span>
                              </span>
                            </>
                          ) : (
                            item.label
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Secondary Navigation - Middle Column */}
                <div>
                  <nav className="space-y-4 font-redhawk">
                    {secondaryNav.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                           className={`block text-white hover:text-brand-egg transition-colors text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight ${active ? 'text-white/80' : ''}`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Contact Section - Right Column */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-white text-xl font-semibold">Questions?</h3>
                    <p className="text-white/90 text-base">We're happy to help!</p>
                    <a href="mailto:info@bibiniifarms.com" className="text-white/90 text-base hover:text-white transition-colors block">
                      info@bibiniifarms.com
                    </a>

                    {/* Social Icons */}
                    <div className="flex space-x-4 pt-4">
                      <a href="https://www.facebook.com/share/15Ap6uHpB8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors" aria-label="Facebook">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/bibiniifarms?igsh=eHRrOGpicHU0MmRk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors" aria-label="Instagram">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zm5.5-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/>
                        </svg>
                      </a>
                      <a href="https://www.tiktok.com/@bibinii.farms?_t=ZM-8yve1mnk2TN&_r=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors" aria-label="TikTok">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 8.1a7 7 0 0 1-4.4-1.5v7.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.5a3 3 0 1 0 2.1 2.9V2h3.3c.4 2 2 3.7 4.2 4.1v2z"/>
                        </svg>
                      </a>
                      <a href="https://wa.me/233543474770?text=Hello%20Bibinii%20Farms!%20I%27d%20like%20to%20place%20an%20order%20and%20get%20pricing%2C%20availability%2C%20and%20delivery%20options.%20Thank%20you." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors" aria-label="WhatsApp">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.83L0 24l6.35-1.67A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.1-3.48-8.52zM12 21.6c-1.71 0-3.3-.46-4.67-1.26l-.34-.2-3.77 1 1.01-3.67-.22-.37A9.6 9.6 0 012.4 12c0-5.29 4.3-9.6 9.6-9.6 2.57 0 4.95 1 6.76 2.8A9.54 9.54 0 0121.6 12c0 5.3-4.31 9.6-9.6 9.6zm5.51-7.15c-.3-.15-1.78-.88-2.05-.98-.27-.1-.45-.15-.63.15-.18.3-.72.98-.88 1.18-.17.2-.32.22-.6.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.02-.17-.27-.02-.42.13-.57.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.35-.28.28-1.05 1.04-1.05 2.5 0 1.46 1.08 2.86 1.23 3.05.15.2 2.09 3.18 5.06 4.47.71.3 1.27.49 1.7.63.72.23 1.36.19 1.87.12.58-.08 1.76-.72 2.02-1.42.26-.7.26-1.29.18-1.42-.08-.13-.29-.21-.59-.36z"/>
                        </svg>
                      </a>
                    </div>

                    {/* Sales Support Text */}
                    <div className="mt-6">
                      <p className="text-white/90 text-base">
                        For sales support and inquiries: Call
                        <br className="hidden lg:block" />
                        <a 
                          href="tel:+233543474770" 
                          className="text-[#fdc700] hover:text-yellow-300 transition-colors font-semibold lg:inline-block"
                        >
                          +233 54 347 4770
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product images block for desktop only */}
              <div className="hidden lg:block mt-40 lg:-mx-6">
                <div className="flex items-end gap-6 overflow-x-auto lg:overflow-visible lg:justify-between lg:gap-0 w-full">
                  {/* Heritage */}
                  <Link href="/products/heritage" onClick={() => setOpen(false)} className="group flex flex-col items-center gap-3">
                    <img src="https://ik.imagekit.io/spj5u0tzx/1.png" alt="Heritage" className="h-28 md:h-32 w-auto object-contain" loading="lazy" />
                    <span className="text-white text-base font-medium group-hover:text-brand-egg transition-colors">Heritage</span>
                  </Link>

                  {/* Organic */}
                  <Link href="/products/organic" onClick={() => setOpen(false)} className="group flex flex-col items-center gap-3">
                    <img src="https://ik.imagekit.io/spj5u0tzx/3.png" alt="Organic" className="h-28 md:h-32 w-auto object-contain" loading="lazy" />
                    <span className="text-white text-base font-medium group-hover:text-brand-egg transition-colors">Organic</span>
                  </Link>

                  {/* Pasture Raised */}
                  <Link href="/products/pasture-raised" onClick={() => setOpen(false)} className="group flex flex-col items-center gap-3">
                    <img src="https://ik.imagekit.io/spj5u0tzx/2.png" alt="Pasture Raised" className="h-28 md:h-32 w-auto object-contain" loading="lazy" />
                    <span className="text-white text-base font-medium group-hover:text-brand-egg transition-colors">Pasture</span>
                  </Link>

                  {/* Range (new 4th) */}
                  <Link href="/products/free-range" onClick={() => setOpen(false)} className="group flex flex-col items-center gap-3">
                    <img src="https://ik.imagekit.io/spj5u0tzx/4.png" alt="Range" className="h-28 md:h-32 w-auto object-contain" loading="lazy" />
                    <span className="text-white text-base font-medium group-hover:text-brand-egg transition-colors">Range</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}