
import type { Metadata } from "next";
import { Geist_Mono, Marcellus, Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingFindButton from "./components/FloatingFindButton";

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

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-text",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVMQG76N');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DG69TPH7LF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DG69TPH7LF');
            `,
          }}
        />
        {/* End Google tag (gtag.js) */}
        
        <link rel="preconnect" href="https://ik.imagekit.io" />

      </head>
      <body className={`${interSans.variable} ${geistMono.variable} ${dmSerifText.variable} antialiased bg-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVMQG76N"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="min-h-dvh flex flex-col">
          {/* Header */}
          <Header />
          {/* Main */}
          <main className="flex-1 bg-white">
            {children}
          </main>
          {/* Footer */}
          <Footer />
          {/* Floating Find Bibinii Button */}
          <FloatingFindButton />
        </div>
      </body>
    </html>
  );
}
