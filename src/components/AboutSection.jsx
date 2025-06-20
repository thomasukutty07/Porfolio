import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-32 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1A1A1A] rounded-3xl p-12 shadow-2xl"
      >
        <h2 className="text-5xl font-bold mb-8 text-[#A855F7]">
          About Me
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed">
          I am a passionate MERN Stack developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions. My goal is to build scalable and
          maintainable applications that solve real-world problems.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection; 