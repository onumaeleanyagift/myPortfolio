import React, { useState } from "react";
import image1 from "../assets/images/Headphones.png";
import image2 from "../assets/images/Jobfinder.png";
import image3 from "../assets/images/churchwebapp.png";
import { SquareArrowOutUpRight } from "lucide-react";
import { Code } from "lucide-react";

const ProjectSection = () => {
  return (
    <div id="project" className="bg-[#161616] py-20">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <h2 className="font-bold text-4xl mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-[#2DD4BF] mx-auto mb-3"></div>
          <span className="font-semibold text-lg">
            A selection of my recent work. Each project reflects my commitment
            to clean code and <br className="hidden" />
            engaging user experiences.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-2">
          {/* Project 4 */}
          <div className="bg-[#1A1A1A] rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-[#2DD4BF]/20 shadow-lg">
            <div className=" p-5">
              <h2 className="text-xl font-semibold mb-2">
                Church Web App -{" "}
                <span className="text-red-500 italic">In Development</span>
              </h2>
              <span className="text-gray-400 ">
                A modern church platform with sermon streaming, daily
                devotionals, and community engagement features.
              </span>
            </div>

            <div className="flex flex-wrap gap-2 px-5 font-medium">
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                React
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                TypeScript
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Python
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                JavaScript
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Flask
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Styled Components
              </span>
            </div>

            <div className="flex px-5 py-5 gap-4 font-medium text-[#2DD4BF]">
              <a
                href="https://github.com/dominioncityalapere/dcalapere_webapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <Code className="w-5 h-5" /> Code
                </span>
              </a>
              <a
                // href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <SquareArrowOutUpRight className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-[#1A1A1A] rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-[#2DD4BF]/20 shadow-lg">
            <div className=" p-5">
              <h2 className="text-xl font-semibold mb-2">
                Stock Analysis Dashboard
              </h2>
              <span className="text-gray-400 ">
                Personal website with a stock dashboard feature for displaying
                and analyzing basic stock data.
              </span>
            </div>

            <div className="flex flex-wrap gap-2 px-5 font-medium">
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                React
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                TypeScript
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Python
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                JavaScript
              </span>
            </div>

            <div className="flex px-5 py-5 gap-4 font-medium text-[#2DD4BF]">
              <a
                href="https://github.com/onumaeleanyagift/personal-website-simvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <Code className="w-5 h-5" /> Code
                </span>
              </a>
              <a
                href="https://onumaeleanyagift.github.io/personal-website-simvo/personal-website/dist/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <SquareArrowOutUpRight className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-[#1A1A1A] rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-[#2DD4BF]/20 shadow-lg">
            <div className=" p-5">
              <h2 className="text-xl font-semibold mb-2">Text Analysis Tool</h2>
              <span className="text-gray-400 ">
                Simple Python tool that reads text files and performs basic text
                analysis such as word frequency and text statistics.
              </span>
            </div>

            <div className="flex flex-wrap gap-2 px-5 font-medium">
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Python
              </span>
            </div>

            <div className="flex px-5 py-5 gap-4 font-medium text-[#2DD4BF]">
              <a
                href="https://github.com/onumaeleanyagift/text-analysis-tool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <Code className="w-5 h-5" /> Code
                </span>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              ></a>
            </div>
          </div>

          {/* Project 1 */}
          <div className="bg-[#1A1A1A] rounded-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-[#2DD4BF]/20 shadow-lg">
            <div className=" p-5">
              <h2 className="text-xl font-semibold mb-2">Job Finder App</h2>
              <span className="text-gray-400 ">
                A job search web app using Adzuna API with real-time listings,
                Zustand state management, and a user-friendly interface.
              </span>
            </div>

            <div className="flex flex-wrap gap-2 px-5 font-medium">
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                React
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                JavaScript
              </span>
              <span className="bg-[#252525] text-sm rounded-full px-3 py-1 text-gray-300 ">
                Tailwind
              </span>
            </div>

            <div className="flex px-5 py-5 gap-4 font-medium">
              <a
                href="https://github.com/onumaeleanyagift/alx-capstone-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <Code className="w-5 h-5" /> Code
                </span>
              </a>
              <a
                href="https://job-finder-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2DD4BF]"
              >
                <span className="inline-flex gap-1 items-center cursor-pointer hover:text-[#5FE3D2]">
                  <SquareArrowOutUpRight className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <a
            href="https://github.com/onumaeleanyagift?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex bg-[#161616] text-[#2DD4BF] text-sm md:text-lg border-[#2DD4BF] border-2 gap-1 hover:bg-[#2DD4BF] hover:border-[#2DD4BF] hover:text-[#000]">
              See More on GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
