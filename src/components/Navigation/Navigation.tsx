"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex space-between">
      <ul
        className={`flex flex-col justify-center md:opacity-100 items-center gap-3 text-white absolute right-0 top-0 bg-purple-600/80 w-full h-screen md:flex-row md:h-auto md:bg-transparent md:relative md:translate-x-0 transition-all duration-[800ms]
        ${showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
      >
        <button onClick={() => setShowMenu(false)} className="absolute top-6 right-6 md:hidden">
          <IoMdClose className="w-7 h-7 text-white" />
        </button>
        <li>
          <a
            className="text-2xl md:text-[1.05rem] py-3 px-2 md:py-1 cursor-pointer hover:text-gray-300 transition-colors"
            href="#home-banner"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            className="text-2xl md:text-[1.05rem] py-3 px-2 md:py-1 cursor-pointer hover:text-gray-300 transition-colors"
            href="#servicios"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            className="text-2xl md:text-[1.05rem] py-3 px-2 md:py-1 cursor-pointer hover:text-gray-300 transition-colors"
            href="#testimonios"
          >
            Testimonios
          </a>
        </li>
        <li>
          <a className="text-2xl md:text-[1.05rem] py-3 px-2 md:py-1 cursor-pointer hover:text-gray-300 transition-colors" href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
      <button className="md:hidden" onClick={() => setShowMenu(true)}>
        <HiMenuAlt3 className="w-7 h-7 text-white" />
      </button>
    </nav>
  );
}

export default Navigation;
