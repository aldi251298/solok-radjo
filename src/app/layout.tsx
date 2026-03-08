import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";  

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});


export const metadata: Metadata = {
  title: "Solok Radjo | Kopi Spesialti dari Lereng Gunung Talang",
  description:
    "Kopi spesialti dari Nagari Aia Dingin, Solok. Diproses dengan standar internasional dan telah menembus pasar global.",
  keywords: [
    "kopi solok",
    "kopi sumatera",
    "specialty coffee indonesia",
    "solok radjo",
  ],
  openGraph: {
    title: "Solok Radjo Coffee",
    description:
      "Kopi spesialti dari lereng Gunung Talang dengan karakter rasa khas Sumatera.",
    url: "https://solokradjo.com",
    siteName: "Solok Radjo",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Header />
        
        
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}