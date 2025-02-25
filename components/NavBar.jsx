import { Link } from "react-router-dom";

export default function NavBar({ changePage }) {
 return (
  <ul className="hidden md:flex justify-center gap-x-8 flex-grow">
   <li>
    <Link to="/" onClick={() => changePage("home")}>
     Accueil
    </Link>
   </li>
   <li>
    <Link to="/programme" onClick={() => changePage("programme")}>
     Programme
    </Link>
   </li>
  </ul>
 );
}
