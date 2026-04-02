import "./globals.css";

export const metadata = {
  title: "La Cabina Eventos",
  description: "Cabina de fotos, plataforma 360, memory phone y fotoimanes para eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}