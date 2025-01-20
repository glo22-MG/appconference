import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechConf 2024 - La conférence tech de l'année",
  description:
    "Rejoignez-nous pour la plus grande conférence technologique de l'année. Découvrez les dernières innovations et rencontrez des experts du monde entier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}