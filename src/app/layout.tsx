import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DentalCare | Clínica Odontológica",
  description: "Odontología estética, ortodoncia y cuidado integral en CDMX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-dvh antialiased text-neutral-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 to-white">
        {children}
      </body>
    </html>
  );
}