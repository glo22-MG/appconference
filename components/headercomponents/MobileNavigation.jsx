export default function MobileNavigation({ setIsMenuOpen, changePage }) {
    const navigation = [
      { name: "Accueil", href: "home" },
      { name: "Programme", href: "programme" },
      { name: "Speakers", href: "speakers" },
      { name: "Sponsors", href: "sponsors" },
      { name: "Contact", href: "contact" },
    ];

    // Affiche la navigation pour les écrans mobiles.
  
    return (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={() => {
                setIsMenuOpen(false);
                changePage(item.href);  // Change la page active
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#register"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
            onClick={() => setIsMenuOpen(false)}
          >
            S&apos;inscrire
          </a>
        </div>
      </div>
    );
  }
  