// Composant AboutBlock

import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutBlock() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6">
            <Calendar className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Date</h3>
            <p className="text-muted-foreground">15-17 Juin 2025</p>
          </Card>
          <Card className="p-6">
            <MapPin className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Lieu</h3>
            <p className="text-muted-foreground">Paris Expo Porte de Versailles</p>
          </Card>
          <Card className="p-6">
            <Users className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Participants</h3>
            <p className="text-muted-foreground">+2000 professionnels</p>
          </Card>
          <Card className="p-6">
            <Clock className="w-10 h-10 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Durée</h3>
            <p className="text-muted-foreground">3 jours intenses</p>
          </Card>
        </div>
    );
}