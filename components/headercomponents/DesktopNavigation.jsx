'use client';
import Link from 'next/link';

export default function DesktopNavigation() {
    return (
        <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
                {[
                    { href: '/', label: 'Accueil' },
                    { href: '/programme', label: 'Programme' },
                    { href: '/speaker', label: 'Speakers' },
                    { href: '/sponsors', label: 'Sponsors' },
                    { href: '/contact', label: 'Contact' },
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
                        S&apos;inscrire
                    </Link>
                </li>
            </ul>
        </div>
    );
}
