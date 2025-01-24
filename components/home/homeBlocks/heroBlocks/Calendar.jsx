import { Calendar, MapPin } from "lucide-react";

export default function MyCalendar(){
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              <span>15-17 Juin 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>Paris Expo Porte de Versailles</span>
            </div>
          </div>
    );
}