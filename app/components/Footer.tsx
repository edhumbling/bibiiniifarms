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
      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white hover:bg-gray-100 transition-colors"
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
        {/* Top area: nav columns + socials */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 items-start">
          {/* Link columns */}
          <div className="order-1 col-span-2 lg:order-none lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/products" className="hover:underline">Products</Link></li>
                <li><Link href="/farms" className="hover:underline">Our Farms</Link></li>
                <li><Link href="/become-farmer" className="hover:underline">Become a Bibinii Farmer</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/store-locator" className="hover:underline">Store Locator</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/products/heritage" className="hover:underline">Heritage</Link></li>
                <li><Link href="/products/pasture-raised" className="hover:underline">Pasture Raised</Link></li>
                <li><Link href="/products/organic" className="hover:underline">Organic Free Range</Link></li>
                <li><Link href="/products/free-range" className="hover:underline">Free Range</Link></li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/press" className="hover:underline">Press</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile-first FAQs column to mirror socials/order on the opposite side */}
          <div className="order-2 lg:hidden">
            <ul className="space-y-3 text-lg font-semibold">
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/press" className="hover:underline">Press</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Right sidebar: socials + Buy Now */}
          <aside className="order-2 col-span-1 flex flex-col items-end lg:items-end gap-6 lg:order-none">
            {/* Logo for visual identity on small screens */}
            <Image src={Logo} alt="Bibinii Farms" className="h-12 w-auto lg:hidden" />

            <div className="flex items-center gap-3">
              {/* Minimal inline icons */}
              <SocialIcon label="Instagram" href="https://www.instagram.com/bibiniifarms?igsh=eHRrOGpicHU0MmRk&utm_source=qr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zm5.5-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="https://www.facebook.com/share/19oMNhe5z3/?mibextid=wwXIfr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/></svg>
              </SocialIcon>
              <SocialIcon label="TikTok" href="https://www.tiktok.com/@bibinii.farms?_t=ZM-8yve1mnk2TN&_r=1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M21 8.1a7 7 0 0 1-4.4-1.5v7.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.5a3 3 0 1 0 2.1 2.9V2h3.3c.4 2 2 3.7 4.2 4.1v2z"/></svg>
              </SocialIcon>
            </div>

            <Link href="/order" className="inline-flex items-center justify-center">
              <Image src={OrderNowLogo} alt="Order Now" className="h-12 w-auto" />
            </Link>
          </aside>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/90">
          <div className="flex items-center gap-3">
            <Image src={Logo} alt="Bibinii Farms" className="h-8 w-auto hidden md:block" />
            <span>© {new Date().getFullYear()} Bibinii Farms. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
          <div className="opacity-90 text-center md:text-right w-full">
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
        <div className="mt-12 relative select-none marquee">
          <div className="marquee__track">
            <div className="marquee__group">
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12"
                style={{ fontSize: '54vw' }}
              >
                Bibinii Farms
              </span>
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12"
                style={{ fontSize: '54vw' }}
              >
                Bibinii Farms
              </span>
            </div>
            <div className="marquee__group">
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12"
                style={{ fontSize: '54vw' }}
              >
                Bibinii Farms
              </span>
              <span
                className="font-rogbold tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap pr-12"
                style={{ fontSize: '54vw' }}
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

