
import type { Metadata } from "next";
import { Geist_Mono, Marcellus, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const interSans = Inter({
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
  title: "Bibinii Farms • Home",
  description:
    "Sourcing fresh eggs directly from Ghanaian farmers. Home delivery, subscriptions, and crate tracking.",
  metadataBase: new URL("https://bibiniifarms.com"),
  icons: { icon: "/bibinii logo text white.svg", shortcut: "/bibinii logo text white.svg", apple: "/bibinii logo text white.svg" },
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
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link
          rel="preload"
          as="video"
          href="https://ik.imagekit.io/humbling/Bibinii%20Promo%20Video-8_11_2025,%203_03%E2%80%AFPM.mp4"
          type="video/mp4"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${interSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <div className="min-h-dvh flex flex-col">
          {/* Header */}
          <Header />
          {/* Main */}
          <main className="flex-1 bg-white">
            {children}
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
