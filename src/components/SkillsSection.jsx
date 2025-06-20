import React from "react";
import SkillSphere from "./SkillSphere";

const SkillsSection = ({ allSkills }) => (
  <section id="skills" className="py-16 sm:py-24 md:py-32 relative bg-[#0A0A0A] overflow-hidden flex flex-col justify-center">
    <div className="max-w-7xl mx-auto px-2 sm:px-4 w-full">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left: Title and Description */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md">
            A showcase of my core technical skills and tools, spanning frontend, backend, databases, version control, and productivity platforms. These are the technologies I use to build modern, scalable web applications.
          </p>
        </div>
        {/* Right: SkillSphere */}
        <div className="w-full lg:w-2/3 h-[500px] sm:h-[650px] md:h-[800px]">
          <SkillSphere skills={allSkills} />
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection; 