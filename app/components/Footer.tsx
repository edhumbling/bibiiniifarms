import Image from "next/image";
import Link from "next/link";
import Logo from "../bibinii logo text white.svg";
import OrderNowLogo from "../order now yell.svg";
import FooterBackground from "../footer background.svg";

function SocialIcon({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black text-[#fdc700] hover:bg-black/90 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-24 relative text-white font-redhawk">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={FooterBackground} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        {/* Top area: nav columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 items-start">
          {/* Link columns */}
          <div className="order-1 col-span-1 lg:order-none lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Products Column - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block">
              <h3 className="text-lg font-bold mb-3 text-yellow-400">Products</h3>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/products" className="hover:underline">Eggs</Link></li>
                <li>
                  <span className="text-white/60 cursor-not-allowed">
                    Catfish
                    <sup className="text-yellow-400 text-xs ml-1 font-normal">Coming Soon</sup>
                  </span>
                </li>
                <li>
                  <span className="text-white/60 cursor-not-allowed">
                    Vegetables
                    <sup className="text-yellow-400 text-xs ml-1 font-normal">Coming Soon</sup>
                  </span>
                </li>
              </ul>
            </div>

            {/* Pillars of Impact - Right Column on mobile, middle on md+ */}
            <div className="hidden md:block">
              <h3 className="text-sm lg:text-lg font-bold mb-2 lg:mb-3 text-yellow-400">Pillars of Impact</h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-lg font-semibold">
                <li><Link href="/pillars/quality-standards" className="hover:underline">Quality Standards</Link></li>
                <li><Link href="/pillars/farmer-empowerment" className="hover:underline">Farmer Empowerment</Link></li>
                <li><Link href="/pillars/national-impact" className="hover:underline">National Impact</Link></li>
                <li><Link href="/pillars/green-sustainability" className="hover:underline">Green Sustainability</Link></li>
                <li><Link href="/pillars/technology-innovation" className="hover:underline">Technology and Innovation</Link></li>
              </ul>
            </div>
          </div>

          {/* Right sidebar: socials + Buy Now - Moved to bottom */}
          <aside className="order-2 col-span-1 flex flex-col items-end lg:items-end gap-6 lg:order-none">
            {/* This will be moved to bottom section */}
          </aside>
        </div>

        {/* Secondary Navigation - Mobile Only (2-column layout) */}
        <div className="mt-6 lg:hidden space-y-6">
          {/* First row: Products and Pillars of Impact */}
          <div className="grid grid-cols-2 gap-6">
            {/* Products Column - Mobile Only */}
            <div>
              <h3 className="text-xs font-bold mb-2 text-yellow-400">Products</h3>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/products" className="hover:underline">Eggs</Link></li>
                <li>
                  <span className="text-white/60 cursor-not-allowed">
                    Catfish
                    <sup className="text-yellow-400 text-[10px] ml-1 font-normal">Coming Soon</sup>
                  </span>
                </li>
                <li>
                  <span className="text-white/60 cursor-not-allowed">
                    Vegetables
                    <sup className="text-yellow-400 text-[10px] ml-1 font-normal">Coming Soon</sup>
                  </span>
                </li>
              </ul>
            </div>

            {/* Pillars of Impact - Aligned with Products */}
            <div>
              <h3 className="text-xs font-bold mb-2 text-yellow-400">Pillars of Impact</h3>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/pillars/quality-standards" className="hover:underline">Quality Standards</Link></li>
                <li><Link href="/pillars/farmer-empowerment" className="hover:underline">Farmer Empowerment</Link></li>
                <li><Link href="/pillars/national-impact" className="hover:underline">National Impact</Link></li>
                <li><Link href="/pillars/green-sustainability" className="hover:underline">Green Sustainability</Link></li>
                <li><Link href="/pillars/technology-innovation" className="hover:underline">Technology & Innovation</Link></li>
              </ul>
            </div>
          </div>

          {/* Second row: Navigation and More */}
          <div className="grid grid-cols-2 gap-6">
            {/* Main Navigation - Left Column */}
            <div>
              <h3 className="text-xs font-bold mb-2 text-yellow-400">Navigation</h3>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/products" className="hover:underline">Products</Link></li>
                <li><Link href="/farms" className="hover:underline">Our Farms</Link></li>
                <li><Link href="/become-farmer" className="hover:underline">Become a Farmer</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/store-locator" className="hover:underline">Store Locator</Link></li>
              </ul>
            </div>

            {/* Secondary Navigation - Opposite Navigation */}
            <div>
              <h3 className="text-xs font-bold mb-2 text-yellow-400">More</h3>
              <ul className="space-y-2 text-xs font-semibold">
                <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/press" className="hover:underline">Press</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Centered Logo, Social Icons, and Order Button - Before bottom bar */}
        <div className="mt-8 lg:mt-12 flex flex-col items-center gap-4 lg:gap-6">
          <div className="flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
            {/* Logo */}
            <Image src={Logo} alt="Bibinii Farms" className="h-6 w-auto sm:h-8 lg:h-10" />
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <SocialIcon label="Instagram" href="https://www.instagram.com/bibiniifarms?igsh=eHRrOGpicHU0MmRk&utm_source=qr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-yellow-400"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zm5.5-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="https://www.facebook.com/share/15Ap6uHpB8/?mibextid=wwXIfr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-yellow-400"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/></svg>
              </SocialIcon>
              <SocialIcon label="TikTok" href="https://www.tiktok.com/@bibinii.farms?_t=ZM-8yve1mnk2TN&_r=1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-yellow-400"><path d="M21 8.1a7 7 0 0 1-4.4-1.5v7.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.5a3 3 0 1 0 2.1 2.9V2h3.3c.4 2 2 3.7 4.2 4.1v2z"/></svg>
              </SocialIcon>
              <SocialIcon label="WhatsApp" href="https://wa.me/233543474770?text=Hello%20Bibinii%20Farms!%20I%27d%20like%20to%20place%20an%20order%20and%20get%20pricing%2C%20availability%2C%20and%20delivery%20options.%20Thank%20you.">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 fill-yellow-400"><path d="M20.52 3.48A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.1 1.5 5.83L0 24l6.35-1.67A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.1-3.48-8.52zM12 21.6c-1.71 0-3.3-.46-4.67-1.26l-.34-.2-3.77 1 1.01-3.67-.22-.37A9.6 9.6 0 012.4 12c0-5.29 4.3-9.6 9.6-9.6 2.57 0 4.95 1 6.76 2.8A9.54 9.54 0 0121.6 12c0 5.3-4.31 9.6-9.6 9.6zm5.51-7.15c-.3-.15-1.78-.88-2.05-.98-.27-.1-.45-.15-.63.15-.18.3-.72.98-.88 1.18-.17.2-.32.22-.6.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.75-1.63-2.02-.17-.27-.02-.42.13-.57.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.35-.28.28-1.05 1.04-1.05 2.5 0 1.46 1.08 2.86 1.23 3.05.15.2 2.09 3.18 5.06 4.47.71.3 1.27.49 1.7.63.72.23 1.36.19 1.87.12.58-.08 1.76-.72 2.02-1.42.26-.7.26-1.29.18-1.42-.08-.13-.29-.21-.59-.36z"/></svg>
              </SocialIcon>
            </div>

            {/* Order Now Button */}
            <Link href="/order" className="inline-flex items-center justify-center">
              <Image src={OrderNowLogo} alt="Order Now" className="h-6 w-auto sm:h-8 lg:h-10" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 lg:mt-8 flex flex-col md:flex-row md:flex-nowrap items-center md:justify-start gap-4 md:gap-10 text-sm text-white/90">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>© {new Date().getFullYear()} Bibinii Farms. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap md:ml-8">
            <Link href="/privacy" className="hover:underline whitespace-nowrap">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline whitespace-nowrap">Terms of Service</Link>
            <Link href="/sitemap" className="hover:underline whitespace-nowrap">Sitemap</Link>
          </div>
          <div className="opacity-90 text-center md:text-right w-full md:w-auto md:ml-auto">

            Made with Love ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/edhumbling"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors"
              style={{ color: '#fdc700', textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(255,255,255,0.4)' }}
            >
              AIDEL
            </a>
          </div>
        </div>

        {/* Scrolling marquee wordmark */}
        <div className="mt-8 lg:mt-12 relative select-none marquee">
          <div className="marquee__track">
            <div className="marquee__group">
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12 footer-marquee-text"
              >
                Bibinii Farms
              </span>
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12 footer-marquee-text"
              >
                Bibinii Farms
              </span>
            </div>
            <div className="marquee__group">
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12 footer-marquee-text"
              >
                Bibinii Farms
              </span>
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12 footer-marquee-text"
              >
                Bibinii Farms
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

