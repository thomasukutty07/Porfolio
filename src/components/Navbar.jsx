import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ sections, activeSection, scrollToSection }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-[#0A0A0A]/90 backdrop-blur-lg z-50 border-b border-[#2D2D2D]"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl sm:text-2xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#4F46E5]">
              Thomasukutty Reji
            </span>
          </motion.h1>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setShowMobileMenu((prev) => !prev)} className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-8 sm:space-x-12">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(section.id)}
                className={`text-gray-400 hover:text-white transition-colors cursor-pointer ${activeSection === section.id ? "text-white font-bold" : ""}`}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {showMobileMenu && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => { scrollToSection(section.id); setShowMobileMenu(false); }}
                className={`text-gray-400 hover:text-white transition-colors cursor-pointer text-left px-2 py-2 rounded ${activeSection === section.id ? "text-white font-bold bg-[#18181B]" : ""}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 