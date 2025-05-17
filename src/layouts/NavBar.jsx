import React, { useState } from 'react';
import logo from '../assets/icons/logo.png'

const NavBar = () => {


    return (
      <nav className="bg-[#121212] shadow-md fixed w-full z-10 px-20">
        <div className="flex items-center justify-between px-4 py-2">
          <div>
            <a href="#">
              <img src={logo} alt="Logo" className="h-20" />
            </a>
          </div>

          <ul className="flex space-x-24">
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
        </div>
      </nav>
    );
};

export default NavBar;