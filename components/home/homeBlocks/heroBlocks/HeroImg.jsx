'use client';
// Composant HeroImage avec adaptation au thème
import Image from 'next/image';
import { useMyContext } from '@/provider/MyContextProvider';

export default function HeroImage() {
  const { theme } = useMyContext();

  return (
    <div className="absolute inset-0">
      <Image
        src="/images/techimage.webp"
        alt="Conference background"
        className={`object-cover ${
          theme === 'light'
            ? 'mix-blend-multiply opacity-90' // Changé pour être plus visible en mode clair
            : 'mix-blend-overlay opacity-70' // Conserve la visibilité en mode sombre
        }`}
        fill
        priority
      />
    </div>
  );
}
