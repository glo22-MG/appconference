const schedule = [
    {
      time: "09:00",
      title: "Ouverture des portes",
      description: "Accueil des participants et petit-déjeuner",
      day: 1,
    },
    {
      time: "10:00",
      title: "Keynote d'ouverture",
      description: "Les tendances tech de 2024 par Marie Dubois",
      day: 1,
    },
    {
      time: "11:30",
      title: "Sessions parallèles",
      description: "IA, Cloud, Sécurité, DevOps",
      day: 1,
    },
    {
      time: "09:30",
      title: "Workshops",
      description: "Sessions pratiques en petits groupes",
      day: 2,
    },
    {
      time: "14:00",
      title: "Table ronde",
      description: "L'avenir du développement web",
      day: 2,
    },
    {
      time: "16:30",
      title: "Clôture",
      description: "Remise des prix et networking",
      day: 2,
    },
  ];
  
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
              <div key={day} className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Jour {day}</h3>
                {schedule
                  .filter((item) => item.day === day)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="text-primary font-bold w-24">
                          {item.time}
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }