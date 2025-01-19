import Image from "next/image";
import logo from "@/public/img/web_conf.webp"; //imports and saves micro.webp in logo
import { IoMdMenu } from "react-icons/io"; //icon hamburger

export default function Header() {
 return (
  <header className="bg-blue-950 text-white p-4">
   <nav>
    <Image src={logo} alt="Logo micro" width={50} height={50} className="pt-8" />
    <IoMdMenu className="md:hidden" />
    <ul className="hidden md:flex justify-center gap-x-8">
     <li>
      <a href="#">Accueil</a>
     </li>
     <li>
      <a href="#">Documents</a>
     </li>
     <li>
      <a href="#">Contact</a>
     </li>
     <li>
      <a href="#">Connexion</a>
     </li>
    </ul>
   </nav>
  </header>
 );
}
