import React, { useState } from "react";
import image from '../assets/images/Onuma.jpg';
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
 

    return (
      <div className="bg-[#191919]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between pt-40 lg:flex-row md:flex-row">
            <div className=" text-left space-y-6 md:w-1/2">
              <p className="text-[#2CCEB9] text-lg lg:text-xl md:text-xl font-medium">
                FRONT-END DEVELOPER
              </p>
              <h1 className="font-bold text-4xl lg:text-6xl md:text-5xl">
                Hi, I'm Onuma<span className="text-[#14B8A6]">.</span>
              </h1>
              <p className="text-xl py-2 lg:text-3xl md:text-2xl sm:text-xl">
                I craft responsive websites where technologies meet creativity
              </p>
              <button
                onClick={() => handleScroll("project")}
                className="inline-flex items-center bg-[#2CCEB9] gap-1 hover:bg-[#14B8A6] hover:border-[#14B8A6] lg:text-lg"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="bg-[#161616] border-[#4B5563] hover:border-[#14B8A6] mx-2 lg:mx-4 lg:text-lg"
              >
                Contact Me
              </button>
            </div>
            <div>
              <img
                src={image}
                alt="Photo of Onuma"
                className="w-[17em] h-[17em] lg:w-[20em] lg:h-[20em] rounded-full border-4 border-[#14B8A6] mt-16"
              />
            </div>
          </div>
          <div
            onClick={() => handleScroll("about")}
            className="flex justify-center pt-16 pb-4 lg:pt-32 lg:pb-8"
          >
            <ChevronDown className="w-10 h-10 text-gray-500 animate-bounce cursor-pointer hover:text-[#14B8A6]" />
          </div>
        </div>
      </div>
    );
};

export default HeroSection;