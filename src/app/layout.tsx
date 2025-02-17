import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enfermería",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-enfermeria.png" />
      </head>
      <body
        // bg-gradient-to-r from-red-600 to-blue-900
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <NavBar /> {/* Utiliza el componente NavBar */}
        <div className="h-24"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
