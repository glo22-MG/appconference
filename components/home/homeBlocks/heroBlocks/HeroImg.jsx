'use client';
import Image from 'next/image';
import { useMyContext } from '@/provider/MyContextProvider';

export default function HeroImage() {
  const { theme } = useMyContext();

  return (
    <div className="absolute inset-0">
      <Image
        src="/images/techImgConf1.webp"
        alt="Conference background"
        className={`object-cover ${
          theme === 'light'
            ? 'mix-blend-multiply opacity-90'
            : 'mix-blend-overlay opacity-70'
        }`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw" // Ajoute des tailles pour différentes largeurs d'écran
      />
    </div>
  );
}
