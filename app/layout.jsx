"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import SpeakersSection from "@/components/home/SpeakersSection";

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

/*
export const metadata = {
  title: "TechConf 2024 - La conférence tech de l'année",
  description:
    "Rejoignez-nous pour la plus grande conférence technologique de l'année. Découvrez les dernières innovations et rencontrez des experts du monde entier.",
};*/

export default function RootLayout({ children }) {

  const [page, setPage] = useState("home");

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header changePage={setPage}/>
        <main className="min-h-screen pt-16">

          {page === "home" ? (
            <HeroSection />
          ) : page === "programme" ? (
            <ScheduleSection />
          ) : page === "speakers" ? (
            <SpeakersSection />
          ) : null}

        </main>
        <Footer />
      </body>
    </html>
  );
}

