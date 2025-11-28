"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Hide Navbar/Footer for checkout/[id]
  const hideLayout = pathname.startsWith("/checkout/")

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="min-h-screen">{children}</main>
      {!hideLayout && <Footer />}
    </>
  )
}
