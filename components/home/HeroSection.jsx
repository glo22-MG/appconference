import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-secondary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/techimage.webp"
          alt="Conference background"
          className="object-cover mix-blend-overlay"
          fill
          priority
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            TechConf 2024
            <br />
            <span className="text-accent">L'innovation en action</span>
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Rejoignez plus de 1000 experts et passionnés de technologie pour deux
            jours d'échanges, de découvertes et d'inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span>15-17 Juin 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>Paris Expo Porte de Versailles</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#register"
              className="inline-block px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              S'inscrire maintenant
            </Link>
            <Link
              href="#program"
              className="inline-block px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-center"
            >
              Voir le programme
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}