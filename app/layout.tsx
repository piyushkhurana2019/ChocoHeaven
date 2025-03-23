import type React from "react"
import "@/app/globals.css"
import { Inter, Pacifico } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" })

export const metadata = {
  title: "Choco Heaven - Artisan Chocolates, Cakes & Pastries",
  description: "Discover our handcrafted chocolates, cakes, and pastries made with the finest ingredients and passion.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${pacifico.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'