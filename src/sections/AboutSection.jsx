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
        <div className="flex flex-col lg:flex-row md:flex-row gap-12 text-justify">
          <div className="lg:w-1/2 md:w-1/2">
            <h2 className="text-2xl text-[#2DD4BF] font-semibold pb-8">
              Who I am
            </h2>
            <p className="text-justify max-w- pb-8 font-medium">
              I am a software engineer focused on frontend development,
              automation, and network systems. I build scalable web applications
              and solve complex technical problems with clean, maintainable
              code. I improve performance through automation and strong system
              design.
              <br />
              <br />
              I work well with technical teams and manage projects with
              clear structure and consistency. I focus on responsive design,
              SEO, and accessibility to deliver reliable user experiences. I use
              JavaScript and Python confidently, and I have a solid
              understanding of data structures and databases. I stay committed
              to continuous learning and apply new tools and practices to
              improve my work.
            </p>
            <a href="/ONUMA_ELEANYA_GIFT_CV_26.pdf" download>
              <button className="inline-flex bg-[#161616] text-[#2DD4BF] text-sm md:text-lg border-[#2DD4BF] border-2 gap-1 hover:bg-[#2DD4BF] hover:border-[#2DD4BF] hover:text-[#000]">
                <HardDriveDownload className="w-5 h-5" /> Download Resume
              </button>
            </a>
          </div>
          <div className="lg:w-1/2 md:w-1/2">
            <h2 className="text-2xl text-center text-[#2DD4BF] font-semibold pb-8 lg:text-left md:text-left">
              My Skills
            </h2>
            <div className=" grid grid-cols-2 gap-6 lg:grid-cols-3 md:grid-cols-3">
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon8} alt="Next Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">Next</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon4} alt="React Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">React</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon7} alt="Tailwind Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">Tailwind</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon6} alt="Python Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">Python</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon3} alt="JS Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">JavaScript</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon2} alt="CSS3 Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">CSS3</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon1} alt="HTML5 Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">HTML5</span>
              </div>
              <div className="flex flex-col items-center bg-[#1D1D1D] rounded-lg p-6 hover:bg-[#252525]">
                <img src={icon5} alt="Git Icon" className="w-8 lg:w-12" />
                <span className="font-semibold pt-4">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
