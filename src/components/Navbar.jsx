import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiCloseLine, RiMenLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(LINKS);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <nav className=" border-b-2 border-secondary/20 h-18 sm:h-20 md:h-24 bg-white/20  backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={160} height={100} className="aspect-auto " />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleOpen}
            className="text-2xl pr-2 focus:outline-none text-primary cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex  space-x-8 md:space-x-4 pr-2 pl-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href="link.link"
              className="uppercase text-sm font-medium text-primary hover:text-secondary"
            >
              {" "}
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-neutral-50 border-b-2 border-secondary/20 
         transform  transition-all duration-500 ease-in-out
      ${isOpen ? " max-h-60 opacity-100 scale-y-100 " : " max-h-0 opacity-0 scale-90 "}
  `}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="pl-6 uppercase block py-3 tracking-wide text-sm font-medium text-primary hover:text-secondary"
          >
            {" "}
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
