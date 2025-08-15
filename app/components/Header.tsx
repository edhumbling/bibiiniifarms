
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

  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold by route so header appears after hero on blog page
      const baseThreshold = Math.max(160, window.innerHeight * 0.6);
      const blogThreshold = 120;
      const threshold = pathname.startsWith('/blog') ? blogThreshold : baseThreshold;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

                 {/* Right: Order Now Logo - positioned very near right edge */}
         <div className="flex justify-end">
           <Link
             href="/order"
             className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-200"
           >
             <Image src={OrderNowLogo} alt="Order Now" className="h-10 sm:h-12 w-auto" />
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
           <div className="relative h-full flex flex-col">
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
                                     <div className="flex justify-end">
                     <Link href="/order" onClick={() => setOpen(false)} className="inline-flex items-center justify-center hover:scale-105 transition-transform duration-200">
                       <Image src={OrderNowLogo} alt="Order Now" className="h-10 sm:h-12 w-auto" />
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
                  <nav className="space-y-4">
                    {mainNav.map((item, index) => {
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                           className={`block text-white hover:text-brand-egg transition-colors text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${active ? 'text-white/80' : ''} ${item.href === '/become-farmer' ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl' : ''}`}
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
                  <nav className="space-y-4">
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
                      <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
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