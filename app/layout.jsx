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
      <MyContextProvider>
        <Body>{children}</Body>
      </MyContextProvider>
    </html>
  );
}

export default appWithTranslation(RootLayout);
