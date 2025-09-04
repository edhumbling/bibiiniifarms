
import type { Metadata } from "next";
import { Geist_Mono, Marcellus, Inter, DM_Serif_Text } from "next/font/google";
import "./globals.css";
import AppShell from "./components/AppShell";
import UTMTracker from "./components/UTMTracker";

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
    "Digital-first platform connecting Ghanaian farmers to families, schools, restaurants, and businesses—fresh, traceable food with smart logistics.",
  metadataBase: new URL("https://bibiniifarms.com"),
  icons: { icon: "/bibinii logo text white.svg", shortcut: "/bibinii logo text white.svg", apple: "/bibinii logo text white.svg" },
  openGraph: {
    title: "Bibinii Farms — Feed Yourself. Feed Ghana.",
    description:
      "Digital-first platform connecting Ghanaian farmers to families, schools, restaurants, and businesses—fresh, traceable food with smart logistics.",
    type: "website",
    url: "https://bibiniifarms.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibinii Farms — Feed Yourself. Feed Ghana.",
    description:
      "Connecting farmers directly to customers with traceable food, fair pricing, and smart logistics.",
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
        {/* Schema.org JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bibinii Farms",
              url: "https://bibiniifarms.com",
              logo: "https://bibiniifarms.com/bibinii%20logo%20text%20white.svg",
              description:
                "Digital-first platform connecting Ghanaian farmers to families, schools, restaurants, and businesses—fresh, traceable food with smart logistics.",
              areaServed: "GH",
              slogan: "Feed Yourself. Feed Ghana.",
            }),
          }}
        />

        {/* Schema.org JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bibinii Farms",
              url: "https://bibiniifarms.com",
              inLanguage: "en",
              publisher: {
                "@type": "Organization",
                name: "Bibinii Farms",
                logo: {
                  "@type": "ImageObject",
                  url: "https://bibiniifarms.com/bibini%20logo%20text%20white.svg",
                },
              },
            }),
          }}
        />

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
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(
              function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              }
            )(window, document, "clarity", "script", "sw2pxckqwb");`,
          }}
        />
        {/* End Microsoft Clarity */}
        <div className="min-h-dvh flex flex-col">
          {/* UTM Tracking */}
          <UTMTracker />
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
