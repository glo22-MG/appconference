import HeroImage from "@/components/home/homeBlocks/heroBlocks/HeroImg";
import ContentHero from "@/components/home/homeBlocks/heroBlocks/ContentHero";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-secondary overflow-hidden">

      <HeroImage/>

      <ContentHero/>

    </div>
  );
}