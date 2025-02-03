"use client";



import SessionTabs from "@/components/programme/programmeBlocks/SessionTabs";

export default function ProgrammeSchedule() {
    return (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Planning détaillé</h2>
              <p className="text-muted-foreground mb-12">
                Consultez le programme jour par jour et planifiez votre participation
              </p>
              
              <SessionTabs />
            </div>
          </div>
        </section>
      );
    }