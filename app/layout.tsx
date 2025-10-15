import type { Metadata } from "next";
import { Berkshire_Swash, Lora, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "./components/ConditionalHeader";
import Footer from "./components/Footer";

const berkshireSwash = Berkshire_Swash({
  variable: "--font-berkshire-swash",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Notre Crêperie - Crampous Mad",
  description:
    "Découvrez l'histoire du restaurant la crêperie Crampous Mad de ses origines à sa rénovation. La tradition d'un savoir-faire breton qui se perpétue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body
        className={`${berkshireSwash.variable} ${lora.variable} ${openSans.variable} ${roboto.variable} antialiased`}
      >
        <ConditionalHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
