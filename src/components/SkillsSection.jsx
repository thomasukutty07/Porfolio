import React from "react";
import SkillSphere from "./SkillSphere";

const SkillsSection = ({ allSkills }) => (
  <section id="skills" className="py-32 relative bg-[#0A0A0A] overflow-hidden h-screen flex flex-col justify-center">
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="w-full h-[80vh]">
        <SkillSphere skills={allSkills} />
      </div>
    </div>
  </section>
);

export default SkillsSection; 