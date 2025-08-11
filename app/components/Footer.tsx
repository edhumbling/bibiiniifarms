import Image from "next/image";
import Link from "next/link";
import Logo from "../bibinii logo text white.svg";
import OrderNowLogo from "../order now.svg";
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
    <footer className="mt-24 relative text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={FooterBackground} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top area: nav columns + socials */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16 items-start">
          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/products" className="hover:underline">Products</Link></li>
                <li><Link href="/farms" className="hover:underline">Our Farms</Link></li>
                <li><Link href="/become-farmer" className="hover:underline">Become a Farmer</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/store-locator" className="hover:underline">Store Locator</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/products#heritage" className="hover:underline">Heritage</Link></li>
                <li><Link href="/products#pasture" className="hover:underline">Pasture Raised</Link></li>
                <li><Link href="/products#organic" className="hover:underline">Organic Free Range</Link></li>
                <li><Link href="/products#free-range" className="hover:underline">Free Range</Link></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-lg font-semibold">
                <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li><Link href="/press" className="hover:underline">Press</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Right sidebar: socials + Buy Now */}
          <aside className="flex flex-col items-start lg:items-end gap-6">
            {/* Logo for visual identity on small screens */}
            <Image src={Logo} alt="Bibinii Farms" className="h-12 w-auto lg:hidden" />

            <div className="flex items-center gap-3">
              {/* Minimal inline icons */}
              <SocialIcon label="Instagram" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 17.8 2.8 2.8 0 0 0 12 9.2zm5.5-.9a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z"/></svg>
              </SocialIcon>
              <SocialIcon label="Facebook" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.5 1.7-1.5h1.4V5c-.7-.1-1.6-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2V11H7v3h3v8h3.5z"/></svg>
              </SocialIcon>
              <SocialIcon label="TikTok" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M21 8.1a7 7 0 0 1-4.4-1.5v7.3a6.4 6.4 0 1 1-6.4-6.4c.3 0 .6 0 .9.1v3.5a3 3 0 1 0 2.1 2.9V2h3.3c.4 2 2 3.7 4.2 4.1v2z"/></svg>
              </SocialIcon>
              <SocialIcon label="Pinterest" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M12 2a9.9 9.9 0 0 0-3.6 19.2c-.1-.8-.1-2.1.1-3l1-4a3.7 3.7 0 0 1-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.3.7 1.3 1.5 0 .9-.6 2.1-.9 3.2-.3 1 .6 1.8 1.6 1.8 2 0 3.5-2.1 3.5-5 0-2.6-1.9-4.4-4.7-4.4-3.2 0-5 2.4-5 4.8 0 .9.3 1.8.8 2.4.1.1.1.2.1.3-.1.4-.3 1.2-.4 1.3-.1.2-.2.2-.5.1-1.7-.8-2.5-2.8-2.5-4.6 0-3.8 2.7-7.2 7.8-7.2 4.1 0 7.3 2.9 7.3 6.7 0 4.1-2.6 7.5-6.1 7.5-1.2 0-2.4-.6-2.8-1.3l-.8 3c-.3 1.1-1 2.5-1.5 3.3A9.9 9.9 0 1 0 12 2z"/></svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.7H9.4V9.6H13v1.5h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.6v5.5zM6 8.1A1.9 1.9 0 1 1 6 4.3a1.9 1.9 0 0 1 0 3.8zM4.2 20.4H7.8V9.6H4.2v10.8z"/></svg>
              </SocialIcon>
              <SocialIcon label="X" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M4 3l7.3 9.3L4.3 21H7L12 14l5 7h2l-6.6-8.7L19.8 3H17L12 9.5 7.7 3z"/></svg>
              </SocialIcon>
              <SocialIcon label="YouTube" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-yellow-400"><path d="M23 7.1a4 4 0 0 0-2.8-2.8C18.6 3.8 12 3.8 12 3.8s-6.6 0-8.2.5A4 4 0 0 0 1 7.1 41.6 41.6 0 0 0 .5 12 41.6 41.6 0 0 0 1 16.9a4 4 0 0 0 2.8 2.8c1.6.5 8.2.5 8.2.5s6.6 0 8.2-.5A4 4 0 0 0 23 16.9 41.6 41.6 0 0 0 23.5 12 41.6 41.6 0 0 0 23 7.1zM9.8 15.3V8.7l6.1 3.3-6.1 3.3z"/></svg>
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
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
          </div>
          <div className="opacity-90">
            Made by{" "}
            <a 
              href="https://www.linkedin.com/in/edhumbling" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              style={{ textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(255,255,255,0.4)' }}
            >
              AIDEL
            </a>
          </div>
        </div>

        {/* Static giant text strip */}
        <div className="mt-12 relative overflow-hidden select-none">
          <div className="flex items-center justify-center">
                       <span
             className="font-dm-serif-text tracking-tighter text-yellow-400 leading-none relative font-black whitespace-nowrap"
             style={{ fontSize: '18vw' }}
           >
             Bibinii Farms
           </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

