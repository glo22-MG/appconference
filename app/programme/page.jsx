import ProgrammeHero from '@/components/programme/ProgrammeHero';
import ProgrammeOverView from '@/components/programme/ProgrammeOverView';
import ProgrammeSchedule from '@/components/programme/ProgrammeSchedule';
import ProgrammeCTA from '@/components/programme/ProgrammeCTA';

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
