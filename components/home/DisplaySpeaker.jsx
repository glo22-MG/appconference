"use client";

import Image from "next/image";

export default function DisplaySpeaker({ speaker }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{speaker.name}</h3>
          <p className="text-gray-600 mb-2">{speaker.role}</p>
          <p className="text-primary font-medium">{speaker.topic}</p>
        </div>
      </div>
    );
  }