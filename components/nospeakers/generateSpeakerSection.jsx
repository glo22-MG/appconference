import React from 'react';
import speakersData from '@/public/json/speakers.json';
import DisplayNoSpeakers from '@/components/nospeakers/DisplayNoSpeakers';

const generateSpeakerSection = (index) => {
  const speaker = speakersData.speakers[index];

  return (
    <DisplayNoSpeakers
      key={index}
      speakerName={speaker.name}
      speakerAbout={speaker.about}
      speakerData={speaker}
    />
  );
};

export default generateSpeakerSection;
