import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
      </head>
      <body className="antialiased bg-white h-full">
        <NavBar /> {/* Utiliza el componente NavBar */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
