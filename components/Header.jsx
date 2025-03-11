'use client';
import { useState } from 'react';
import Logo from './headercomponents/Logo';
import DesktopNavigation from './headercomponents/DesktopNavigation';
import MobileNavigation from './headercomponents/MobileNavigation';
import MenuButton from './headercomponents/MenuButton';
import { Moon, Sun } from 'lucide-react';
import { useMyContext } from '@/provider/MyContextProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useMyContext();

  // Déterminer si on est en mode sombre pour l'affichage de l'icône
  const isDarkMode = theme === 'dark';

  return (
    <header
      className={`fixed w-full backdrop-blur-md z-50 border-b ${
        theme === 'light'
          ? 'bg-headerBg border-borderColor'
          : 'bg-gray-900 border-gray-700'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Navigation bureau */}
          <DesktopNavigation />

          {/* Bouton thème */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2 ${
              theme === 'light'
                ? 'text-gray-500 hover:text-gray-700'
                : 'text-gray-400 hover:text-gray-200'
            }`}
            aria-label={
              isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'
            }
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Bouton menu mobile */}
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && <MobileNavigation setIsMenuOpen={setIsMenuOpen} />}
      </nav>
    </header>
  );
}
