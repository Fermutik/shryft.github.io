import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        `}</style>
      </head>
      <body
        className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
