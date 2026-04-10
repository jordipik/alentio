import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALENTIO | Innovación real para empresas de verdad",
  description:
    "Consultoría y acompañamiento en innovación aplicada: proyectos tecnológicos realistas, eficientes y escalables.",
  keywords: [
    "consultoría de innovación",
    "dirección de proyectos tecnológicos",
    "digitalización empresarial",
    "innovación aplicada",
    "ALENTIO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
