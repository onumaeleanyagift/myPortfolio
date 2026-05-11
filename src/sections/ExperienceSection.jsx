import React, { useState } from "react";

const ExperienceSection = () => {
  return (
    <div id="experience" className="bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        <div className="pb-12">
          <h2 className="font-bold text-4xl mb-2">Experience</h2>
          <div className="w-20 h-1 bg-[#2DD4BF] mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row gap-12 text-justify">
          <div className="lg:w-1/2 md:w-1/2">
            <h2 className="text-2xl text-[#2DD4BF] font-semibold">
              Software Engineer
            </h2>
            <p className="pb-4">
              <span className="font-bold">
                Huawei Technologies, Lagos, Nigeria
              </span>{" "}
              - Mar 2025 - Dec 2025
            </p>
            <p className="text-justify max-w- pb-8 font-medium">
              - Developed TQL and JavaScript automation scripts to reduce manual
              work and improve internal operational efficiency.
              <br />- Created and managed databases in OWS (Operation Web
              Services) to support tenant data and workflow systems.
              <br />- Diagnosed and resolved workflow issues, improving system
              stability and tenant operations.
              <br />- Integrated automation and database solutions with cross
              functional teams, contributing to a 70% improvement in service
              efficiency.
            </p>
          </div>

          <div className="lg:w-1/2 md:w-1/2">
            <h2 className="text-2xl text-[#2DD4BF] font-semibold">
              Frontend Engineer
            </h2>
            <p className="pb-4">
              <span className="font-bold">TechCrush, Remote</span> - Sep 2024 -
              Jan 2025
            </p>
            <p className="text-justify max-w- pb-8 font-medium">
              - Wrote clean, efficient HTML and CSS3 code that met established
              standards and reduced rework during deployment.
              <br />- Built responsive UI components using HTML, CSS3, and
              JavaScript following design standards
              <br />- Identified and fixed UI and functional bugs before
              release, improving application stability
              <br />- Collaborated with developers and QA to debug issues and
              improve feature reliability
              <br />- Used Git for version control and participated in code
              reviews to maintain code quality and consistency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
