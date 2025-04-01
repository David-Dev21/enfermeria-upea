import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // Protege el acceso a directorios internos
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate", // Evita el almacenamiento en caché
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Previne ataques MIME-sniffing
          },
          {
            key: "X-Frame-Options",
            value: "DENY", // Evita incrustaciones en iframes
          },
          {
            key: "Pragma",
            value: "no-cache", // Asegura que no se almacenen respuestas en caché
          },
          {
            key: "Expires",
            value: "0", // Indica que el contenido expira inmediatamente
          },
        ],
      },
      {
        source: "/(.*)", // Aplica a todas las rutas
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              connect-src 'self' https://serviciopagina.upea.bo; 
              style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; 
              font-src 'self' https://fonts.gstatic.com data:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://code.jquery.com;              
              img-src 'self' data: https://serviciopagina.upea.bo;
              object-src 'none'; 
              frame-src 'self' https://www.youtube.com https://serviciopagina.upea.bo https://www.google.com;
              frame-ancestors 'self' https://serviciopagina.upea.bo;
              upgrade-insecure-requests; 
              block-all-mixed-content;
            `.replace(/\s{2,}/g, " "), // Limpia espacios adicionales
          },
        ],
      },
    ];
  },
};

export default nextConfig;