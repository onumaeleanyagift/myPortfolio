import React from "react";
import logo from "../assets/icons/logo.png";

const Footer = () => {

    return (
      <div className="bg-[#0f0f0f] py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <a href="#">
                <img src={logo} alt="Logo" className="h-12" />
              </a>
            </div>
            <div className="text-gray-400 font-semibold text-center md:text-right">
              <p>© 2025 Onuma Eleanya. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    );
};


export default Footer;