export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-block w-6 h-6 rounded-full bg-brand-egg ring-1 ring-black/5" />
              <span className="font-semibold tracking-tight">Bibinii Farms</span>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 max-w-lg">
              Building Wealth with Integrity. Feeding Ghana with Purpose.
            </p>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Bibinii Farms. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

