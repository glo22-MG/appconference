'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation'; // Remplacez useRouter par usePathname
import { useState, useEffect } from 'react';

export default function DesktopNavigation() {
  const { t, i18n } = useTranslation('navigation');
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const pathname = usePathname(); // Utilisez usePathname au lieu de useRouter

  // Fonction pour changer de langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  // Récupérer la langue au chargement du composant
  useEffect(() => {
    // Utilisez un état local pour éviter les erreurs d'hydratation
    if (typeof window !== 'undefined') {
      setCurrentLanguage(i18n.language || 'fr');
    }
  }, [i18n.language]);

  return (
    <div className="hidden md:block">
      <ul className="ml-10 flex items-baseline space-x-4">
        {[
          { href: '/', label: t('home') },
          { href: '/programme', label: t('program') },
          { href: '/speaker', label: t('speakers') },
          { href: '/sponsors', label: t('sponsors') },
          { href: '/contact', label: t('contact') },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/register"
            className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            {t('register')}
          </Link>
        </li>

        {/* Sélecteur de langue */}
        <li className="ml-4">
          <button
            onClick={() => changeLanguage('fr')}
            className={`px-2 ${currentLanguage === 'fr' ? 'font-bold text-primary' : 'text-gray-700'}`}
          >
            FR
          </button>
          |
          <button
            onClick={() => changeLanguage('en')}
            className={`px-2 ${currentLanguage === 'en' ? 'font-bold text-primary' : 'text-gray-700'}`}
          >
            EN
          </button>
        </li>
      </ul>
    </div>
  );
}
