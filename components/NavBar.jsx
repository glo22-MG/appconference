export default function NavBar({ changePage }) {
    return (
        <ul className="hidden md:flex justify-center gap-x-8 flex-grow">
            <li>
            <button onClick={() => changePage("home")}>Accueil</button>
            </li>
            <li>
            <button onClick={() => changePage("programme")}>Programme</button>
            </li>
            <li>
            <button onClick={() => changePage("speakers")}>Speakers</button>
            </li>
            <li>
            <button onClick={() => changePage("sponsors")}>Sponsors</button>
            </li>
            <li>
            <button onClick={() => changePage("contact")}>Contact</button>
            </li>
      </ul>
    );
   }