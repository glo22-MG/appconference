'use client';
import { useState } from 'react';
import Logo from './headercomponents/Logo';
import DesktopNavigation from './headercomponents/DesktopNavigation';
import MobileNavigation from './headercomponents/MobileNavigation';
import MenuButton from './headercomponents/MenuButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-headerBg backdrop-blur-md z-50 border-b border-borderColor">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Navigation bureau */}
          <DesktopNavigation />

          {/* Bouton menu mobile */}
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && <MobileNavigation setIsMenuOpen={setIsMenuOpen} />}
      </nav>
    </header>
  );
}
