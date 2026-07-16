import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

// 1. Optimized Global Metadata with Favicon Configuration
export const metadata: Metadata = {
  title: {
    default:
      "Bombay Bedding | Curtains, Bedsheets & Home Furnishings in Durgapur Since 1962 - Bombay Bedding | Premium Furnishings Showroom in Durgapur",
    template: "%s | Bombay Bedding Durgapur",
  },
  description:
    "Bombay Bedding has been Durgapur's trusted home furnishing showroom since 1962. Explore premium curtain fabrics, ready-made curtains, bedsheets, blankets, comforters, pillows, sofa covers, towels and more at honest prices. Discover premium bed sheets, ready-made curtains, luxury mattresses, comforters, and home styling transformations at Bombay Bedding. Serving Durgapur's luxury home decor needs since 1962. Visit our Station Road showroom!",

  icons: {
    icon: [
      { url: "/main-logo.jpeg", media: "(prefers-color-scheme: light)" },
      { url: "/main-logo.jpeg", media: "(prefers-color-scheme: dark)" },
      { url: "/main-logo.jpeg", type: "image/svg+xml" },
      { url: "/main-logo.jpeg", type: "image/jpeg" }, // Added high-res JPEG icon fallback
    ],
    apple: [{ url: "/main-logo.jpeg", sizes: "180x180", type: "image/png" }],
  },

  keywords: [
    "bed sheets Durgapur",
    "curtains showroom Durgapur",
    "luxury mattresses",
    "premium home furnishings West Bengal",
    "Bombay Bedding Station Road",
    "home decor store Durgapur",
    "pillows and comforters",
  ],
  metadataBase: new URL("http://bombay-bedding.vercel.app"), // Change to your live production domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bombay Bedding - Premium Luxury Home Furnishings",
    description:
      "For over six decades, Durgapur's trusted destination for luxury, comfort, and premium home styling transformations. Explore our curated collections today.",
    url: "http://bombay-bedding.vercel.app", // Change to your live production domain
    siteName: "Bombay Bedding",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Make sure to drop a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: "Bombay Bedding Premium Luxury Showroom Setup",
      },
    ],
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
    google: "CLiuOeX7kVXX7mFQV5wksvIW0EorAvp-yr8K4co_IhE",
  },
};

// 2. Next.js Managed Viewport Config
export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#b8956a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. High-Value Structured Local SEO Schema Data
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: "Bombay Bedding",
    image: "https://www.bombaybedding.com/og-image.jpg", // Change to your absolute domain image path
    "@id": "https://www.bombaybedding.com/#store",
    url: "http://bombay-bedding.vercel.app",
    telephone: "+919333041911",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Station Road",
      addressLocality: "Durgapur",
      addressRegion: "WB",
      postalCode: "713201", // Verify your exact local postal pin code
      addressCountry: "IN",
    },
    // ================= FIXED EXACT GOOGLE MAPS GEO COORDINATES =================
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.4954458,
      longitude: 87.3196569,
    },
    // ===========================================================================
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.facebook.com/your-profile", // Drop social handles here if you have any
      "https://www.instagram.com/your-profile",
    ],
  };

  return (
    <html lang="en" className="bg-neutral-50">
      <head>
        {/* Inject structured JSON-LD snippet seamlessly into head block */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
