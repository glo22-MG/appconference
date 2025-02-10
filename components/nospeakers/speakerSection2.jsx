"use client";

import speakersData from "@/public/json/speakers.json";
import DisplayNoSpeakers from "./DisplayNoSpeakers";

export default function speakerSection2() {
  // Récupérer uniquement les informations de l'intervenant 1
  const speaker = speakersData.speakers[1]; // L'intervenant 1 est le premier de la liste

  return (
    <DisplayNoSpeakers
      speakerName={speaker.name}
      speakerAbout={speaker.about}
      speakerData={speaker}  // Passer l'objet complet
    />
  );
}