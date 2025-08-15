// src/app/[locale]/layout.js - Enhanced SEO version
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata = {
  title: {
    default: "BTC Board - Premium PVC Board Solutions",
    template: "%s | BTC Board"
  },
  description: "BTC Board offers premium PVC board solutions for construction, signage, and industrial applications. High-quality, durable, and versatile PVC boards for all your project needs.",
  keywords: [
    "BTC Board",
    "btc board",
    "PVC Board",
    "pvc board",
    "PVC sheets",
    "construction materials",
    "signage boards",
    "industrial boards",
    "plastic boards",
    "building materials"
  ],
  authors: [{ name: "BTC Board" }],
  creator: "BTC Board",
  publisher: "BTC Board",
  metadataBase: new URL('https://btc-board.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'id-ID': '/id',
    },
  },
  openGraph: {
    title: "BTC Board - Premium PVC Board Solutions",
    description: "High-quality PVC boards for construction, signage, and industrial applications. Durable and versatile solutions for all your project needs.",
    url: 'https://btc-board.com',
    siteName: 'BTC Board',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'BTC Board - Premium PVC Board Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTC Board - Premium PVC Board Solutions',
    description: 'High-quality PVC boards for construction, signage, and industrial applications.',
    images: ['/twitter-image.png'], // You'll need to add this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these after setting up in Google Search Console
    // google: 'your-google-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default async function LocaleLayout({children, params}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Hreflang tags for language alternates */}
        <link rel="alternate" hrefLang="en" href="https://btc-board.com/en" />
        <link rel="alternate" hrefLang="id" href="https://btc-board.com/id" />
        <link rel="alternate" hrefLang="x-default" href="https://btc-board.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BTC Board",
              "url": "https://btc-board.com",
              "logo": "https://btc-board.com/1660210131_62f4cbd324852.jpg",
              "description": "Premium PVC board solutions for construction, signage, and industrial applications",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["English", "Indonesian"]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'id' }
  ];
}