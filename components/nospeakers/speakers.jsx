import SpeakerSection1 from "@/components/nospeakers/speakerSection1";
import SpeakerSection2 from "@/components/nospeakers/speakerSection2";
import SpeakerSection3 from "@/components/nospeakers/speakerSection3";
import SpeakerSection4 from "@/components/nospeakers/speakerSection4";

export default function Speakers() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white relative">
      {/* Titre responsive */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold absolute top-16 px-4 sm:px-8 md:px-12 text-center">
        Speakers TechConf 2025
      </h1>

      {/* Sections des speakers */}
      <div className="mt-32 sm:mt-24 md:mt-28">
        <SpeakerSection1 />
        <SpeakerSection2 />
        <SpeakerSection3 />
        <SpeakerSection4 />
      </div>
    </div>
  );
}
