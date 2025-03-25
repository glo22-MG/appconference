import  ProgrammeHero  from "@/components/programme/ProgrammeHero";
import  ProgrammeOverView  from "@/components/programme/ProgrammeOverView";
import  ProgrammeSchedule  from "@/components/programme/ProgrammeSchedule";
import  ProgrammeCTA  from "@/components/programme/ProgrammeCTA";

export const metadata = {
  metadataBase: new URL('http://acme.com'),
  title: 'Programme | app Conference',
  description: 'Page de Programme',
  openGraph: {
    title: 'Programme | app Conference',
    description: 'Page de Programme',
  },
};

export default function Programme() {
  return (
    <>
      <ProgrammeHero />
      <ProgrammeOverView />
      <ProgrammeSchedule />
      <ProgrammeCTA />
    </>
  );
}