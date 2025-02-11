"use client";

import TrackCard  from "@/components/programme/programmeBlocks/TrackCard";

export default function TrackList({ tracks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {tracks.map((track) => (
        <TrackCard key={track.title} {...track} />
      ))}
    </div>
  );
}