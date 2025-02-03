export default function MobileNavigation({ changePage, setIsMenuOpen }) {
  const navigation = [
    { name: "Accueil", page: "home" },
    { name: "Programme", page: "programme" },
    { name: "Speakers", page: "speakers" },
    { name: "Sponsors", page: "sponsors" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavigation = (page) => {
    changePage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.page)}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
          >
            {item.name}
          </button>
        ))}
        <button
          onClick={() => handleNavigation("register")}
          className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
        >
          S&apos;inscrire
        </button>
      </div>
    </div>
  );
}