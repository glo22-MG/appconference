'use client';
import HeroImage from '@/components/home/homeBlocks/heroBlocks/HeroImg';
import ContentHero from '@/components/home/homeBlocks/heroBlocks/ContentHero';
import { useMyContext } from '@/provider/MyContextProvider';

export default function HeroSection() {
  const { theme } = useMyContext();

  return (
    <div
      className={`relative overflow-hidden ${
        theme === 'light'
          ? 'bg-gradient-to-r from-primary/80 to-secondary/80' // Opacité réduite pour laisser l'image apparaître
          : 'bg-gradient-to-r from-primary/90 to-secondary'
      }`}
    >
      <HeroImage />
      <ContentHero />
    </div>
  );
}
