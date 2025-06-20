import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ sections, activeSection, scrollToSection }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#2D2D2D]"
  >
    <div className="container mx-auto px-8 py-6">
      <div className="flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#4F46E5]">
            Thomasukutty Reji
          </span>
        </motion.h1>
        <div className="hidden md:flex space-x-12">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(section.id)}
              className={`text-gray-400 hover:text-white transition-colors cursor-pointer ${
                activeSection === section.id ? "text-white font-bold" : ""
              }`}
            >
              {section.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar; 