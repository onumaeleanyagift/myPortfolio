import React, { useState } from "react";
import image1 from "../assets/images/Headphones.png";
import { SquareArrowOutUpRight } from "lucide-react";
import {Code} from "lucide-react"

const ProjectSection = () => {
    return (
      <div id="project" className="bg-[#121212] py-20">
        <div className="container mx-auto px-4">
          <div className="pb-12">
            <h2 className="font-bold text-4xl mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-[#2DD4BF] mx-auto mb-3"></div>
            <span className="font-semibold text-lg">
              A selection of my recent work. Each project reflects my commitment
              to clean code and <br />
              engaging user experiences.
            </span>
          </div>

          <div className="inline-flex text-left gap-4">
            <div className="bg-[#1A1A1A] h-60 rounded-lg">
              <img
                src={image1}
                alt="Headphones full page"
                className="w-full h-full object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">
                Headphones Landing Page
              </h2>
              <span className="text-gray-400 mb-4">
                A modern headphones landing page featuring a clean UI, product
                highlights, and a clear call-to-action.
              </span>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl w-[45vh]">
              <div className=" h-[30vh] relative overflow-hidden rounded-t-xl">
                <img
                  src={image1}
                  alt="Headphones full page"
                  className=" animate-slow-scroll z-0"
                />
              </div>
              <div className=" p-5">
                <h2 className="text-xl font-semibold mb-2">
                  Headphones Landing Page
                </h2>
                <span className="text-gray-400 ">
                  A modern headphones landing page featuring a clean UI, product
                  highlights, and a clear call-to-action.
                </span>
              </div>

              <div className="flex flex-wrap gap-2 px-5 font-medium">
                <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                  HTML
                </span>
                <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                  CSS
                </span>
              </div>

              <div className="flex px-5 py-5 gap-4 font-medium text-[#2DD4BF] hover:text-[#2DD4BF tailwind]">
                <span className="inline-flex gap-1 items-center cursor-pointer">
                  <Code className="w-5 h-5" /> Code
                </span>
                <span className="inline-flex gap-1 items-center cursor-pointer">
                  <SquareArrowOutUpRight className="w-4 h-4" />
                  Live Demo
                </span>
              </div>
            </div>

            <div className="bg-[#1A1A1A] h-[30vh] w-[60vh] rounded-lg relative overflow-hidden">
              <img
                src={image1}
                alt="Headphones full page"
                className="animate-slow-scroll z-0"
              />
              <h2 className="text-xl font-semibold mb-2">
                Headphones Landing Page
              </h2>
              <span className="text-gray-400 mb-4">
                A modern headphones landing page featuring a clean UI, product
                highlights, and a clear call-to-action.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProjectSection;
