import type { Metadata } from "next";
import { Allura, Cinzel, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Sensai Gastrobar | Assinatura Oriental em Curitiba",
    template: "%s | Sensai Gastrobar",
  },
  description:
    "Alta gastronomia oriental, drinks autorais e noites refinadas no Sensai Gastrobar, em Curitiba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${cinzel.variable} ${allura.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="page-shell noise flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
