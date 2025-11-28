import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import LayoutClient from "./LayoutClient" // 👈 new client wrapper

// Load Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})



export const metadata: Metadata = {
  title: "XL1 Super Sports | Sports Gear & Equipment Online",
  description:
    "Shop at XL1 Super Sports for the latest sports gear, apparel, shoes, and fitness equipment. Explore premium quality products for running, gym, cricket, football, and more.",
  keywords: [
    "sports shop online",
    "buy sports gear",
    "fitness equipment",
    "running shoes",
    "gym accessories",
    "cricket bat",
    "football",
    "sportswear",
    "XL1 Super Sports",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Providers>
          <LayoutClient>{children}</LayoutClient>
        </Providers>
      </body>
    </html>
  )
}
