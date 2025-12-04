// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { CartProvider } from "@/context/cart-context"
import Link from "next/link"
import Image from "next/image"
import FeedbackPopup from "@/components/feedback-popup"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artisan Haven - Handcrafted Treasures & Unique Crafts",
  description:
    "Discover unique, handcrafted treasures made with love and care. Each piece tells a story of tradition and creativity. Shop artisan crafts worldwide.",
  keywords:
    "handmade crafts, artisan products, unique gifts, handcrafted items, traditional crafts, artisan haven, handmade treasures, craft store, artisanal goods",
  openGraph: {
    title: "Artisan Haven - Handcrafted Treasures & Unique Crafts",
    description:
      "Discover unique, handcrafted treasures made with love and care. Each piece tells a story of tradition and creativity.",
    type: "website",
    url: "https://artisanhaven.online",
    images: [
      {
        url: "https://artisanhaven.online/logo.png",
        width: 300,
        height: 300,
        alt: "Artisan Haven Logo",
      },
      {
        url: "https://artisanhaven.online/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Artisan Haven Site Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Haven - Handcrafted Treasures & Unique Crafts",
    description:
      "Discover unique, handcrafted treasures made with love and care. Each piece tells a story of tradition and creativity.",
    images: ["https://artisanhaven.online/logo.png"],
  },
  icons: {
    icon: "https://artisanhaven.online/logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1277123347467021');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1277123347467021&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>
              {children}
              <FeedbackPopup />

              {/* Microphone Button */}
              <button
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Microphone"
              >
                <svg
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                </svg>
              </button>

              <Toaster />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
