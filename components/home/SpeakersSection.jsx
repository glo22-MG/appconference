
"use client";
import speakersData from "@/public/json/speakers.json";
import DisplaySpeaker from "./DisplaySpeaker";

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Speakers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les experts qui partageront leur vision et leur expérience
            lors de TechConf 2025.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakersData.speakers.map((speaker) => (
            <DisplaySpeaker key={`${speaker.name}-${speaker.role}`} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}