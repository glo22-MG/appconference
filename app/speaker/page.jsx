import Speakers from "@/components/nospeakers/speakers";

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'app Conference | Speakers',
  description: 'page des intervenants',
  openGraph: {
    title: 'app Conference | Speakers',
    description: 'page des intervenants',
    images: [
      '/speaker1.webp',
      '/speaker2.webp',
      '/speaker3.webp',
      '/speaker4.webp',
    ],
  },
};

export default function Speaker(){
    return (
        <Speakers/>
    );
}