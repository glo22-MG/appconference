"use client";
import tracksData from "@/public/json/tracks.json";
//import  TrackCard  from "@/components/programme/programmeBlocks/TrackCard";
import TrackList  from "@/components/programme/programmeBlocks/TrackList";

export default function ProgrammeOverview() {
    const tracks = tracksData.tracks; 
    return (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Tracks thématiques</h2>
              <p className="text-muted-foreground mb-12">
                Explorez nos différents parcours thématiques pour personnaliser votre expérience
              </p>
              <TrackList tracks={tracks} />
            </div>
          </div>
        </section>
      );
    }