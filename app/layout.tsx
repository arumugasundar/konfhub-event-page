import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/themes/theme-provider"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/ico" href="https://media.konfhub.com/default-icons/favicon.ico" />
      </head>
      
      <body className={cn("bg-background font-sans antialiased", fontSans.variable )} > 
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
