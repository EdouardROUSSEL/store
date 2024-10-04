import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/ui/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col justify-between min-h-screen px-3 sm:px-6 bg-[#efefef]">
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
