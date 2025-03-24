'use client';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import { useMyContext } from '@/provider/MyContextProvider';

export default function Body({ children }) {
  const { theme } = useMyContext();

  return (
    <body
      className={`flex flex-col min-h-screen ${
        theme === 'light' ? 'bg-white' : 'bg-gray-900' // Utiliser une couleur plus foncée que noir pour permettre à l'image d'être visible
      } text-${theme === 'light' ? 'black' : 'white'}`}
    >
      <Header />
      <main className="flex-1 relative">{children}</main>
      <Footer />
    </body>
  );
}
