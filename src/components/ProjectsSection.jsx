import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-16 sm:py-24 md:py-32 relative">
    {/* Minimalist Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#0A0A0A]"></div>
      {/* Geometric Lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF3366]/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4F46E5]/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FF3366]/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#4F46E5]/20 to-transparent"></div>
      </div>
      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 sm:top-20 sm:left-20 sm:w-32 sm:h-32 border-l-2 border-t-2 border-[#FF3366]/30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 sm:bottom-20 sm:right-20 sm:w-32 sm:h-32 border-r-2 border-b-2 border-[#4F46E5]/30"></div>
    </div>
    <div className="max-w-6xl mx-auto relative z-10 px-2 sm:px-4 md:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 sm:mb-24 md:mb-32"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-4 sm:mb-8"
        >
          <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-[#FF3366] to-transparent mx-auto mb-2 sm:mb-4"></div>
          <div className="text-xs sm:text-sm text-[#FF3366] font-medium tracking-wider uppercase">Portfolio</div>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-8">
          Selected
          <span className="text-[#FF3366] font-normal"> Work</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A curated collection of projects that showcase my expertise in modern web development
        </p>
      </motion.div>
      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.25 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Project Image */}
              <div className="flex-1 w-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2D2D2D]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </motion.div>
              </div>
              {/* Project Details */}
              <div className="flex-1 w-full space-y-4 sm:space-y-8 bg-[#18181B] rounded-2xl p-4 sm:p-8 shadow-lg border border-[#2D2D2D]">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs sm:text-sm text-[#FF3366] font-medium mb-1 sm:mb-2"
                  >
                    Project {String(index + 1).padStart(2, '0')}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 sm:mb-6 group-hover:text-[#FF3366] transition-colors duration-300"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 leading-relaxed text-base sm:text-lg"
                  >
                    {project.description}
                  </motion.p>
                </div>
                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2 sm:space-y-4"
                >
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Technologies</div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 sm:px-4 py-1 sm:py-2 bg-[#1A1A1A] text-xs sm:text-sm text-gray-300 border border-[#2D2D2D] hover:border-[#FF3366] hover:text-[#FF3366] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4"
                >
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/thomasukutty07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-8 py-2 sm:py-4 bg-transparent text-white border border-[#2D2D2D] hover:border-[#FF3366] hover:text-[#FF3366] transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <FaGithub className="text-lg sm:text-xl" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-8 py-2 sm:py-4 bg-[#FF3366] text-white hover:bg-[#FF3366]/90 transition-all duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
            {/* Separator */}
            {index < projects.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full h-px bg-gradient-to-r from-transparent via-[#2D2D2D] to-transparent mt-12 sm:mt-24"
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
      {/* Featured Project, Stats, and CTA sections can be added here as in App.jsx if needed */}
    </div>
  </section>
);

export default ProjectsSection; 