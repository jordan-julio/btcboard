// src/app/[locale]/layout.js - Fixed version
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
    "PVC Board",
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
};

export default async function LocaleLayout({children, params}) {
  const { locale } = await params; // Add await if using Next.js 15+

  // Let next-intl handle the locale validation via i18n.js
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
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