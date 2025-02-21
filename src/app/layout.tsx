import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from 'next/script';
// Importa los estilos de slick-carousel

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
        <Script src="https://code.jquery.com/jquery-2.1.4.min.js" strategy="beforeInteractive" />
      </head>
      <body className="antialiased bg-white h-full">
        <NavBar /> {/* Utiliza el componente NavBar */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
