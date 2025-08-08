import Image from "next/image";
import Logo from "../bibinii logo white text.svg";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image src={Logo} alt="Bibinii Farms" className="h-10 md:h-12 w-auto" />
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
            Building Wealth with Integrity. Feeding Ghana with Purpose.
          </p>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Bibinii Farms. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

