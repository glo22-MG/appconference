export default function DesktopNavigation() {
    const navigation = [
      { name: "Accueil", href: "/" },
      { name: "Programme", href: "#schedule" },
      { name: "Speakers", href: "#speakers" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "Contact", href: "#contact" },
    ];
  
    //Affiche la navigation pour les écrans de bureau.

    return (
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#register"
            className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            S&apos;inscrire
          </a>
        </div>
      </div>
    );
  }
  