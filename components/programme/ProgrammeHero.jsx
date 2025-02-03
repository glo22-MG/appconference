"use client";

import KeyBlock from "@/components/home/homeBlocks/KeyBlock";

export default function ProgrammeHero() {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Programme TechConf 2025</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Trois jours intenses de conférences, workshops et networking avec les meilleurs experts du secteur
          </p>
          
          <div className="container mx-auto px-4">
                  <KeyBlock/>
          </div>
        </div>
      </div>
    </section>
  );
}