import React, { useState } from "react";
import { HardDriveDownload } from "lucide-react";
import icon1 from "../assets/icons/html5.svg";
import icon2 from "../assets/icons/css3.svg";
import icon3 from "../assets/icons/js.svg";
import icon4 from "../assets/icons/react.svg";
import icon5 from "../assets/icons/git.svg";
import icon6 from "../assets/icons/python.png";
import icon7 from "../assets/icons/tailwind.png";
import icon8 from "../assets/icons/next.png";

const AboutSection = () => {
  return (
    <div id="about" className="bg-[#161616] py-20">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <h2 className="font-bold text-4xl mb-2">About Me</h2>
          <div className="w-20 h-1 bg-[#2DD4BF] mx-auto"></div>
        </div>
        <div className="flex flex-col gap-12 text-justify">
          <div>
            <h2 className="text-2xl text-[#2DD4BF] font-semibold pb-8">
              Who I am
            </h2>
            <p className="text-justify max-w- pb-8 font-medium">
              Software Engineer with experience building fullstack web
              applications, backend APIs, and automation systems. I work with
              React, TypeScript, JavaScript, Node.js, Express, Python, and Flask
              to build reliable, responsive applications that solve real
              problems.
              <br />
              <br />I have experience integrating APIs, managing application
              data, and improving system workflows. I enjoy collaborating with
              cross-functional teams, writing clean and maintainable code, and
              building user interfaces that are responsive, accessible, and
              performant.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-center text-[#2DD4BF] font-semibold pb-8 lg:text-left md:text-left">
              My Skills & Technologies
            </h2>
            <div className=" grid grid-rows-2 gap-4 lg:grid-rows-1 md:grid-rows-1">
              <div className="flex flex-col items-justify bg-[#1D1D1D] rounded-lg p-6">
                <div className="font-semibold pb-4">Frontend</div>
                <div className="grid grid-cols-2 gap-2 text-center items-center lg:grid-cols-7 md:grid-cols-5 text-[#2DD4BF]">
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    HTML5
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    CSS3
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    JavaScript
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    React
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Next.js
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Tailwind CSS
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Bootstrap
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Styled Components
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-justify bg-[#1D1D1D] rounded-lg p-6">
                <div className="font-semibold pb-4">Backend</div>
                <div className="grid grid-cols-2 gap-2 text-center lg:grid-cols-7 md:grid-cols-5 text-[#2DD4BF]">
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Node.js
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Express.js
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Flask
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Python
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-justify bg-[#1D1D1D] rounded-lg p-6">
                <div className="font-semibold pb-4">Databases</div>
                <div className="grid grid-cols-2 gap-2 text-center lg:grid-cols-7 md:grid-cols-5 text-[#2DD4BF]">
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    SQL
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Supabase
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-justify bg-[#1D1D1D] rounded-lg p-6">
                <div className="font-semibold pb-4">Tools</div>
                <div className="grid grid-cols-2 gap-2 text-center lg:grid-cols-7 md:grid-cols-5 text-[#2DD4BF]">
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Git
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    GitHub
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    REST APIs
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Postman
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    VS code
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    Figma
                  </span>
                  <span className="bg-[#252525] text-sm rounded-full px-3 py-1">
                    OWS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
