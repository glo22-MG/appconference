import HeroSection from "@/components/home/HeroSection";
import KeySection from "@/components/home/KeySection";
import SpeakersSection from "@/components/home/SpeakersSection";
import  AboutSection  from "@/components/home/AboutSection";
import ScheduleSection from "@/components/home/ScheduleSection";

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'app Conference | Accueil',
  description: 'Site web présentant une conférence technologique',
  openGraph: {
    title: 'app Conference | Accueil',
    description: 'Site web présentant une conférence technologique',
    images: [
      './techimage.webp',
      '/speaker1.webp',
      '/speaker2.webp',
      '/speaker3.webp',
      '/speaker4.webp',
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeySection/>
      <SpeakersSection />
      <AboutSection/>
      <ScheduleSection />
    </>
  );
}