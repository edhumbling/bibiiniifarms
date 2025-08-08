
import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Bibinii Farms — Building Wealth with Integrity",
  description:
    "Sourcing fresh eggs directly from Ghanaian farmers. Home delivery, subscriptions, and crate tracking.",
  metadataBase: new URL("https://bibiniifarms.com"),
  icons: { icon: "/bibinii logo white text.svg", shortcut: "/bibinii logo white text.svg", apple: "/bibinii logo white text.svg" },
  openGraph: {
    title: "Bibinii Farms — Building Wealth with Integrity",
    description:
      "Sourcing fresh eggs directly from Ghanaian farmers. Home delivery, subscriptions, and crate tracking.",
    type: "website",
    url: "https://bibiniifarms.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibinii Farms",
    description:
      "Fresh, traceable eggs delivered. Empowering farmers, serving Ghana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-egg-sheen`}>
        <div className="min-h-dvh flex flex-col">
          {/* Header */}
          <Header />
          {/* Main */}
          <main className="flex-1">
            {children}
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
