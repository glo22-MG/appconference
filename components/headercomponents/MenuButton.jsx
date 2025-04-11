import { Menu, X } from 'lucide-react';

// Affiche le bouton qui permet d'ouvrir/fermer le menu mobile.
export default function MenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} // Ajoute un aria-label dynamique
      >
        {isMenuOpen ? (
          <X className="block h-6 w-6" />
        ) : (
          <Menu className="block h-6 w-6" />
        )}
      </button>
    </div>
  );
}
