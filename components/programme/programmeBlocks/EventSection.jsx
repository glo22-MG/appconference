import { Card } from "@/components/ui/card";
import  RegistrationButtons  from "@/components/programme/programmeBlocks/RegistrationButtons";
import  CalendarReminder  from "@/components/programme/programmeBlocks/CalendarReminder";
import EventNotices  from "@/components/programme/programmeBlocks/EventNotices";

export default function EventSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-background text-foreground">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à rejoindre l'événement ?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Réservez votre place et accédez à toutes les sessions de votre choix
                </p>
                <RegistrationButtons />
              </div>
              
              <div className="space-y-4">
                <CalendarReminder />
                <EventNotices />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}