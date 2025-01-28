"use client";
import scheduleData from "@/public/json/schedule.json";
import DisplayScheduleDay from "./DisplayScheduleDay";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Programme</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deux jours intenses de conférences, ateliers et networking.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((day) => (
            <DisplayScheduleDay 
              key={`day-${day}`} 
              day={day} 
              events={scheduleData.schedule.filter((item) => item.day === day)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}