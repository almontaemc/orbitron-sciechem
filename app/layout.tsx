import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import OrbiChat from "@/components/OrbiChat";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Orbitron Sciechem Limited | Industrial Chemicals, Lab Solutions & Food Ingredients Kenya",
  description:
    "East Africa's trusted importer and distributor of industrial chemicals, food ingredients, pharmaceutical raw materials, laboratory equipment. Serving Kenya, Uganda, Tanzania & beyond.",
  keywords: [
    "industrial chemicals Kenya",
    "food ingredients supplier Kenya",
    "laboratory equipment Kenya",
    "pharmaceutical raw materials Kenya",
    "chemical distributor East Africa",
    "Orbitron Sciechem",
  ],
  openGraph: {
    title: "Orbitron Sciechem Limited | Africa's Trusted Chemical & Lab Solutions Partner",
    description:
      "Supplying world-class industrial chemicals, food ingredients, laboratory equipment and pharmaceutical raw materials across East Africa.",
    siteName: "Orbitron Sciechem Limited",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <OrbiChat />
      </body>
    </html>
  );
}
