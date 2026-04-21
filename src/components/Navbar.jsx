import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }
  return (
    <nav className="border-b-2 h-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={100} className="aspect-auto " />
          </a>
        </div>

        <div className="md:hidden">
          <button></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
