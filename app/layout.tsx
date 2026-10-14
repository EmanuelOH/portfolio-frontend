import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Profesional | Desarrollador de Software & IA",
  description: "Portafolio de proyectos de desarrollo web, videojuegos e inteligencia artificial",
};

export default function RootLayout({ 
  children, }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="es"
      className= "dark"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0f19] text-slate-200 min-h-screen selection:bg-purple-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
