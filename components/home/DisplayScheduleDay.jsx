export default function DisplayScheduleDay({ day, events }) {
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold mb-6">Jour {day}</h3>
        {events.map((event) => (
          <div
            key={`${day}-${event.time}-${event.title}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start">
              <div className="text-primary font-bold w-24">
                {event.time}
              </div>
              <div>
                <h4 className="font-bold mb-2">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }