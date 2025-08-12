// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Importe os novos componentes
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estética SF Santos - Detalhamento Automotivo",
  description: "Serviços especializados em estética automotiva em Vitória da Conquista. Polimento, vitrificação, higienização e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body className={`${inter.className} bg-gray-900`}>
        <Navbar /> {/* <-- Navbar adicionado aqui */}
        
        <main>
          {children} {/* O conteúdo da sua página (page.tsx) será renderizado aqui */}
        </main>
        
        <Footer /> {/* <-- Footer adicionado aqui */}
      </body>
    </html>
  );
}