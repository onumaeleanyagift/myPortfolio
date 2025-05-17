import React, { useState } from "react";
import image from '../assets/images/Onuma.jpg';
import { ArrowRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const handleScroll = () => {
    document.getElementById('about')?.scrollIntoView({ behaviour: 'smooth' });
  };

    return (
      <div className="bg-[#161616] w-full">
        <div className="flex items-center justify-around py-64">
          <div className="text-left space-y-8">
            <p className="text-[#2CCEB9] text-xl font-medium">
              FRONT-END DEVELOPER
            </p>
            <h1 className="font-bold text-6xl">
              Hi, I'm Onuma<span className="text-[#14B8A6]">.</span>
            </h1>
            <p className="text-3xl py-4">
              I craft responsive websites where technologies meet creativity
            </p>
            <button
              onClick={() => Navigate("/ProjectSection")}
              className="inline-flex items-center bg-[#2CCEB9] gap-1 hover:bg-[#14B8A6] hover:border-[#14B8A6] text-lg"
            >
              View My Work<ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => Navigate("/ContactSection")}
              className="bg-[#161616] border-[#4B5563] hover:border-[#14B8A6] mx-4 text-lg"
            >
              Contact Me
            </button>
          </div>
          <div>
            <img
              src={image}
              alt="Photo of Onuma"
              className="w-[20em] h-[20em] rounded-full border-4 border-[#14B8A6]"
            />
          </div>
        </div>
        <div onClick={handleScroll} className="flex justify-center py-8">
          <ChevronDown className="w-10 h-10 text-gray-500 animate-bounce cursor-pointer hover:text-[#14B8A6]" />
        </div>
      </div>
    );
};

export default HeroSection;