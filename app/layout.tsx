// app/layout.tsx
import { Metadata } from 'next'
import { gilroy } from '../lib/fonts';
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider";
import LanguageSwitcher from "@/components/language-switcher";
import { ScrollToTop } from '@/components/scroll-to-top';

export const metadata: Metadata = {
  title: 'Високоякісний друк малоформантої та широкоформатної поліграфічної продукції',
  description: 'Високоякісний друк для всіх ваших потреб',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={gilroy.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // English comments/logs:
                // Parse cookies in pure JS.
                var cookies = document.cookie.split('; ').reduce(function(acc, cookieStr) {
                  var parts = cookieStr.split('=');
                  acc[parts[0]] = parts[1];
                  return acc;
                }, {});
                
                // Default language is "ua" if not found.
                var lang = cookies["language"] || "ua";
                
                // Only do redirect if user is on the root path "/" (no subpath).
                if (window.location.pathname === "/") {
                  window.location.replace("/" + lang);
                }
              })();
            `,
          }}
        />
      </head>
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

            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
