import type { Metadata } from "next"
import { Cinzel, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Oracle of Hiring - The Scale of Anubis",
  description: "Let the ancient scales of Ma'at reveal your chosen candidate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
