"use client";

//Le composant principal qui inclut tous les autres composants.

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./headercomponents/Logo";
import DesktopNavigation from "./headercomponents/DesktopNavigation";
import MobileNavigation from "./headercomponents/MobileNavigation";
import MenuButton from "./headercomponents/MenuButton";
//import NavBar from "./NavBar";

export default function Header({ changePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-headerBg backdrop-blur-md z-50 border-b border-borderColor">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNavigation changePage={changePage} />

          {/* Mobile menu button */}
          <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <MobileNavigation changePage={changePage} setIsMenuOpen={setIsMenuOpen} />}
        
      </nav>
    </header>
  );
}