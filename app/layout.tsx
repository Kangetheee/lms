import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LMS Next App",
  description: "By Mburu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={geistMono.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}