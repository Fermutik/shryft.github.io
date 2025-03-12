import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import { ThemeProvider } from "@/components/theme-provider";
import LanguageSwitcher from "@/components/language-switcher";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className="flex flex-col items-center justify-center min-h-screen bg-secondary">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="relative w-full">
            <div className="absolute right-4 z-50 hidden xl:block">
              <LanguageSwitcher />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}