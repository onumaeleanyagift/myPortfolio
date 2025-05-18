import React, { useState } from 'react';
import logo from '../assets/icons/logo.png'
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-[#121212] shadow-md fixed w-full z-10 sm:px-4">
        <div className="container flex items-center justify-between mx-auto py-1">
          <div>
            <a href="#">
              <img src={logo} alt="Logo" className="h-20" />
            </a>
          </div>

          <ul className="hidden space-x-16 md:flex items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="text-[#FFF] md:hidden sm:flex"
          >
            <Menu />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className="flex md:hidden bg-[#121212] shadow-lg fixed w-full"
      >
        <div
          className={`container mx-auto px-4 pt-24 pb-3 space-y-3 flex flex-col ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <span>
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </span>
          <span>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </span>
          <span>
            <a href="#project" onClick={closeMenu}>
              Projects
            </a>
          </span>
          <span>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavBar;