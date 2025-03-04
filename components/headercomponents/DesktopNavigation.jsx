export default function DesktopNavigation({ changePage }) {
 const navigation = [
  { name: "Accueil", page: "home" },
  { name: "Programme", page: "programme" },
  { name: "Speakers", page: "speakers" },
  { name: "Sponsors", page: "sponsors" },
  { name: "Contact", page: "contact" },
 ];

 //Affiche la navigation pour les écrans de bureau.

 return (
  <div className="hidden md:block">
   <div className="ml-10 flex items-baseline space-x-4">
    {navigation.map((item) => (
     <button
      key={item.name}
      onClick={() => changePage(item.page)}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transform transition-all duration-200 hover:scale-110"
     >
      {item.name}
     </button>
    ))}
    <button
     onClick={() => changePage("register")}
     className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transform transition-all duration-200 hover:scale-110"
    >
     S&apos;inscrire
    </button>
   </div>
  </div>
 );
}
