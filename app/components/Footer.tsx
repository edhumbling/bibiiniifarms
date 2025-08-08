import Image from "next/image";
import Logo from "../bibinii logo white text.svg";

export default function Footer() {
  return (
    <footer className="mt-24 bg-happy-orange">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Image src={Logo} alt="Bibinii Farms" className="h-16 w-auto" />
          <p className="mt-1 text-sm text-white/90 max-w-xl">
            Building Wealth with Integrity. Feeding Ghana with Purpose.
          </p>
          <div className="text-sm text-white/80">
            © {new Date().getFullYear()} Bibinii Farms. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

