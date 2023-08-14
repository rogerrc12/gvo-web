import "./globals.css";

import type { Metadata } from "next";

import WhatsappBtn from "@/components/common/WahtsappBtn";
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import { comfortaa, opensans } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "GVO BPO Gold Group | Soluciones digitales",
  description: "Soluciones Digitales BPO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${comfortaa.variable} ${opensans.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsappBtn />
      </body>
    </html>
  );
}
