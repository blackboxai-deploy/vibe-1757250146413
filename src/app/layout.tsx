import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cozy Corner Café - Artisan Coffee & Fresh Pastries",
  description: "Welcome to Cozy Corner Café, your neighborhood destination for premium coffee, fresh pastries, and warm community. Experience handcrafted beverages and delicious treats in our welcoming atmosphere.",
  keywords: "café, coffee, pastries, breakfast, lunch, artisan coffee, bakery, restaurant",
  authors: [{ name: "Cozy Corner Café" }],
  openGraph: {
    title: "Cozy Corner Café - Artisan Coffee & Fresh Pastries",
    description: "Your neighborhood destination for premium coffee and fresh pastries",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
      </head>
      <body className="font-inter antialiased bg-cream text-brown-800 min-h-screen">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}