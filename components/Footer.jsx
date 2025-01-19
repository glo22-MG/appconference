import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer(){
    return(
        <footer className="bg-blue-950 text-white p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                <div>
                    <h2 className="text-lg font-bold mb-4">Apropos de nous</h2>
                    <p className="text-white-300">
                    Lorem Ipsum is simply <br /> dummy text of the printing <br /> and typesetting industry.
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Liens rapides</h2>
                    <ul>
                        <li><a href="" className="hover:underline text-white-300">Accueil</a></li>
                        <li><a href="" className="hover:underline text-white-300">Document</a></li>
                        <li><a href="" className="hover:underline text-white-300">Contact</a></li>
                        <li><a href="" className="hover:underline text-white-300">Connexion</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4">Suivez-Nous</h2>
                    <ul className="flex space-x-4">
                        <li>
                            <FaFacebook className="text-blue-500" />
                            <a href="" className="hover:underline text-white-300">Facebook</a>
                        </li>
                        <li>
                            <FaTwitter className="text-sky-500" />
                            <a href="" className="hover:underline text-white-300">Twitter</a>
                        </li>
                        <li>
                            <FaInstagram className="text-orange-500" />
                            <a href="" className="hover:underline text-white-300">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white-600 p-4 text-white-300 flex justify-center">
                <p className="text-center">copyright 2025. All rights reserved</p>
            </div>
        </footer>
    );
}
