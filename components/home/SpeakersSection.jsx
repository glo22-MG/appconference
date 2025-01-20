import Image from "next/image";

const speakers = [
  {
    name: "Marie Dubois",
    role: "CTO @ TechCorp",
    image: "/images/speakers/speaker2.webp",
    topic: "L'avenir de l'IA",
  },
  {
    name: "Thomas Martin",
    role: "Lead Developer @ StartupXYZ",
    image: "/images/speakers/speaker1.webp",
    topic: "Architecture Cloud Native",
  },
  {
    name: "Sophie Bernard",
    role: "Product Manager @ BigTech",
    image: "/images/speakers/speaker3.webp",
    topic: "Design System à grande échelle",
  },
 
];

export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Speakers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les experts qui partageront leur vision et leur expérience
            lors de TechConf 2024.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{speaker.name}</h3>
                <p className="text-gray-600 mb-2">{speaker.role}</p>
                <p className="text-primary font-medium">{speaker.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}