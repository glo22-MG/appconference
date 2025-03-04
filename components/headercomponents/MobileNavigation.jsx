'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileNavigation({ setIsMenuOpen }) {
  const pathname = usePathname();

  // Ferme le menu automatiquement après un changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {[
          { href: '/', label: 'Accueil' },
          { href: '/programme', label: 'Programme' },
          { href: '/speakers', label: 'Speakers' },
          { href: '/sponsors', label: 'Sponsors' },
          { href: '/contact', label: 'Contact' },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/register"
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
          >
            S&apos;inscrire
          </Link>
        </li>
      </ul>
    </div>
  );
}
