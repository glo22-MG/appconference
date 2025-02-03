import { Calendar } from "lucide-react";

export default function CalendarReminder() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-muted">
      <Calendar className="w-8 h-8 text-primary" />
      <div>
        <h3 className="font-semibold">Ajouter à votre agenda</h3>
        <p className="text-sm text-muted-foreground">
          Synchronisez l'événement avec votre calendrier
        </p>
      </div>
    </div>
  );
}