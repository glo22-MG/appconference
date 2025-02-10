import DisplaySpeaker from "@/components/home/DisplaySpeaker";

export default function DisplayNoSpeakers({speakerName,speakerAbout,speakerData}) {

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-white shadow-lg mb-4">
      {/* Conteneur pour la partie gauche et droite */}
      <div className="flex flex-col md:flex-row w-4/5 gap-8 ml-10 max-h-full justify-center"> 
        {/* Partie gauche (passera en dessous sur les petits écrans) */}
        <div className="w-full md:w-3/5 p-8 flex items-center justify-center rounded-lg shadow h-full">
          <div>
            <h2 className="text-2xl font-bold mb-4">{speakerName}</h2>
            <p className="text-gray-700">
                {speakerAbout}
            </p>
          </div>
        </div>

        {/* Partie droite (image restera à droite sur grands écrans) */}
        <div className="w-full md:w-1/5 p-4 flex items-center justify-center md:ml-10 h-full ">
          {/* Affichage des informations de l'intervenant 1 uniquement */}
          <DisplaySpeaker speaker={speakerData} />
        </div>
      </div>
    </div>
  );
}
