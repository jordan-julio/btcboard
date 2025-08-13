// src/app/[locale]/layout.js - Fixed version
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata = {
  title: "BTC Board",
  description: "PVC Board Solutions"
};

export default async function LocaleLayout({children, params}) {
  const { locale } = await params; // Add await if using Next.js 15+
  console.log(locale);
  // Let next-intl handle the locale validation via i18n.js
  const messages = await getMessages({ locale });
  console.log('message', messages);
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