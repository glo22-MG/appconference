import React from 'react';
import generateSpeakerSection from '@/components/nospeakers/generateSpeakerSection';

export default function Speakers() {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-white relative">
      {/* Titre avec positionnement pour ne pas repousser les sections */}
      <h1 className="text-5xl font-bold absolute top-16">
        Speakers TechConf 2025
      </h1>

      {/* Sections des speakers */}
      <div className="mt-12">
        {generateSpeakerSection(0)}
        {generateSpeakerSection(1)}
        {generateSpeakerSection(2)}
        {generateSpeakerSection(3)}
      </div>
    </div>
  );
}
