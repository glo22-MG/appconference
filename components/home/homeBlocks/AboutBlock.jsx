// Composant AboutBlock
export default function AboutBlock() {
    return (
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">À propos de l&apos;événement</h2>
        <p className="text-lg text-muted-foreground mb-8">
          TechConf 2025 rassemble les meilleurs experts du monde technologique
          pour trois jours de conférences, ateliers et networking. Une
          opportunité unique de découvrir les dernières innovations et
          tendances du secteur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">50+</h3>
            <p className="text-muted-foreground">Conférences</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">30+</h3>
            <p className="text-muted-foreground">Speakers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">20+</h3>
            <p className="text-muted-foreground">Ateliers pratiques</p>
          </div>
        </div>
      </div>
    );
}