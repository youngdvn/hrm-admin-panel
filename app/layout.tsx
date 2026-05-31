import type { Metadata } from "next"
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "HRM Panel",
    template: "%s | HRM Panel",
  },
  description: "Human resource managerment web application built with Next.js",
  keywords: ["Next.js", "React", "TypeScript"],
  authors: [{ name: "YoungD" }],
  creator: "YoungD",
  metadataBase: new URL("https://your-domain.com"),

  // openGraph: {
  //   title: "My App",
  //   description: "Human resource managerment web application built with Next.js",
  //   url: "https://your-domain.com",
  //   siteName: "My App",
  //   locale: "en_US",
  //   type: "website",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "My App",
  //   description: "Human resource managerment web application built with Next.js",
  // },

  // icons: {
  //   icon: "/favicon.ico",
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        ibmPlexSans.variable
      )}
    >
      <body>
        <ThemeProvider>
          <Toaster richColors position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}