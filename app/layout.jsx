'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { appWithTranslation } from 'next-i18next';
import '../i18next'; // Import du fichier de configuration i18next
import MyContextProvider from '@/provider/MyContextProvider';
import Body from '@/components/Body';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <title>TechConf 2025</title>
        <meta
          name="description"
          content="Bienvenue à TechConf 2025, la conférence technologique de l'année. Découvrez les dernières innovations et rencontrez des experts du secteur."
        />
      </head>
      <MyContextProvider>
        <Body>{children}</Body>
      </MyContextProvider>
    </html>
  );
}

export default appWithTranslation(RootLayout);
