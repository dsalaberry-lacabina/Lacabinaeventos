import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "La Cabina Eventos",
  description: "Cabina de fotos, plataforma 360, memory phone y fotoimanes para eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-34SXPRZ7QV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-34SXPRZ7QV');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}