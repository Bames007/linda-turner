import type { Metadata } from "next";
import { bebasNeue, poppins } from "./utils/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Linda Initiative | Igniting Hope Through Powerful Words",
    template: "%s | The Linda Initiative",
  },
  description:
    "Linda Turner is a renowned inspirational speaker transforming lives through messages of hope, resilience, and personal growth. Book Linda for your next event.",
  keywords: [
    "Linda Turner",
    "inspirational speaker",
    "motivational speaker",
    "hope speaker",
    "public speaking",
    "personal growth",
    "resilience",
    "transformation",
    "keynote speaker",
    "The Linda Initiative",
  ],
  authors: [{ name: "Linda Turner" }],
  creator: "Linda Turner",
  publisher: "The Linda Initiative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lindainitiative.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lindainitiative.com",
    siteName: "The Linda Initiative",
    title: "The Linda Initiative | Igniting Hope Through Powerful Words",
    description:
      "Transform your life through inspirational speaking by Linda Turner. Messages of hope, resilience, and personal growth.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linda Turner - Inspirational Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Linda Initiative | Igniting Hope Through Powerful Words",
    description:
      "Transform your life through inspirational speaking by Linda Turner.",
    images: ["/images/twitter-image.jpg"],
    creator: "@lindaturner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/BebasNeue-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Linda Turner",
              jobTitle: "Inspirational Speaker",
              description:
                "Linda Turner transforms lives through inspirational speaking that awakens hope, empowers change, and creates lasting impact.",
              url: "https://lindainitiative.com",
              sameAs: [
                "https://www.youtube.com/@lindaturner",
                "https://www.linkedin.com/in/lindaturner",
                "https://www.instagram.com/lindaturner",
              ],
              knowsAbout: [
                "Public Speaking",
                "Motivational Speaking",
                "Personal Development",
                "Hope and Resilience",
                "Life Transformation",
              ],
              award: [
                "Inspiring Speaker Award 2023",
                "Hope Advocate Recognition",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${bebasNeue.className} ${poppins.className} ${poppins.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* Background gradient for entire site */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-50/20 via-white to-blue-50/10 -z-10" />

        {/* Subtle grid pattern for entire site */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] -z-10" />

        {children}

        {/* EBCom Technologies Watermark */}
        <div className="fixed bottom-4 right-4 z-40 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-purple-100">
            <p className="text-xs text-gray-600 font-medium">
              Built by{" "}
              <span className="text-purple-600 font-semibold">
                EBCom Technologies
              </span>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
