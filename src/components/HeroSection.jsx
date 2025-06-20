import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="min-h-screen relative bg-[#0A0A0A] overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF3366] to-[#4F46E5] opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#4F46E5] to-[#FF3366] opacity-5 blur-3xl"></div>
    </div>
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
    <div className="container mx-auto px-8 relative z-10">
      <div className="min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-2 h-24 bg-gradient-to-b from-[#FF3366] to-[#4F46E5]"></div>
              <h1 className="text-8xl font-black mb-6 leading-none">
                <span className="text-white">Hi, I'm</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] to-[#4F46E5]">
                  Thomasukutty
                </span>
                <br />
                <span className="text-white">Reji</span>
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-gray-400 mb-12 max-w-2xl"
            >
              A passionate Full Stack Developer crafting exceptional digital experiences with modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden"
                onClick={e => { e.preventDefault(); scrollToSection('contact'); }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                onClick={e => { e.preventDefault(); scrollToSection('projects'); }}
              >
                View Projects
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-8 mt-12"
            >
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/thomasukutty07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#FF3366] transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/thomasukutty-reji-431b9027b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#4F46E5] transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:thomasmern007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#FF3366] transition-colors"
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 relative hidden lg:block"
          >
            <div className="relative w-[600px] h-[500px] flex items-center justify-center">
              {/* Floating Terminal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[500px] h-[400px] bg-[#1A1A1A] rounded-2xl shadow-2xl border border-[#2D2D2D] overflow-hidden"
              >
                {/* Terminal Header */}
                <div className="h-12 bg-[#252526] flex items-center px-4 border-b border-[#3C3C3C]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="ml-4 text-sm text-[#858585]">Terminal - Portfolio</div>
                </div>
                {/* Terminal Content */}
                <div className="p-6 h-[calc(100%-48px)] bg-[#0A0A0A] font-mono text-sm">
                  <div className="space-y-4">
                    {/* Welcome Message */}
                    <div className="text-[#4EC9B0]">
                      Welcome to Thomasukutty's Portfolio Terminal
                    </div>
                    {/* Command Line */}
                    <div className="flex items-center">
                      <span className="text-[#569CD6] mr-2">$</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="w-2 h-4 bg-[#569CD6]"
                      ></motion.span>
                    </div>
                    {/* Typing Animation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="space-y-2"
                    >
                      <div className="text-[#9CDCFE]">npm install thomasukutty-portfolio</div>
                      <div className="text-[#4EC9B0]">✓ Installed successfully!</div>
                      <div className="text-[#9CDCFE]">npm start</div>
                      <div className="text-[#4EC9B0]">🚀 Starting development server...</div>
                      <div className="text-[#4EC9B0]">📱 Local: http://localhost:3000</div>
                      <div className="text-[#4EC9B0]">🌐 Network: http://192.168.1.100:3000</div>
                    </motion.div>
                    {/* Tech Stack Display */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="mt-6 p-4 bg-[#1A1A1A] rounded-lg border border-[#2D2D2D]"
                    >
                      <div className="text-[#569CD6] mb-3">Tech Stack:</div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <FaReact className="text-[#61DAFB]" />
                          <span className="text-[#9CDCFE]">React</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaNodeJs className="text-[#68A063]" />
                          <span className="text-[#9CDCFE]">Node.js</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaDatabase className="text-[#4DB33D]" />
                          <span className="text-[#9CDCFE]">MongoDB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaJs className="text-[#F7DF1E]" />
                          <span className="text-[#9CDCFE]">JavaScript</span>
                        </div>
                      </div>
                    </motion.div>
                    {/* Status Indicators */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                      className="flex gap-4 text-xs"
                    >
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#27C93F] rounded-full"></div>
                        <span className="text-[#858585]">Online</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#FFBD2E] rounded-full animate-pulse"></div>
                        <span className="text-[#858585]">Building</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-[#4F46E5] rounded-full"></div>
                        <span className="text-[#858585]">Ready</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              {/* Floating Code Blocks */}
              {[
                { code: "const portfolio = 'awesome';", delay: 0.5, x: -250, y: -150 },
                { code: "npm run deploy", delay: 1, x: 250, y: -180 },
                { code: "git commit -m 'feat: amazing updates'", delay: 1.5, x: -200, y: 200 },
                { code: "docker build -t portfolio .", delay: 2, x: 220, y: 180 },
              ].map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: block.delay }}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(${block.x}px, ${block.y}px)`,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: block.delay,
                    }}
                    className="px-4 py-2 bg-[#1A1A1A]/90 backdrop-blur-sm border border-[#2D2D2D] rounded-lg shadow-lg"
                  >
                    <div className="text-xs text-[#9CDCFE] font-mono">{block.code}</div>
                  </motion.div>
                </motion.div>
              ))}
              {/* Animated Dots */}
              {[...Array(12)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-[#FF3366] to-[#4F46E5] rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(${Math.cos(index * 30) * 200}px, ${Math.sin(index * 30) * 200}px)`,
                  }}
                ></motion.div>
              ))}
              {/* Connection Lines */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute w-32 h-0.5 bg-gradient-to-r from-[#FF3366] to-transparent"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg)`,
                    transformOrigin: "left center",
                  }}
                ></motion.div>
              ))}
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[600px] h-[500px] bg-gradient-to-br from-[#FF3366]/10 to-[#4F46E5]/10 rounded-full blur-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    {/* Scroll Indicator (optional, add if needed) */}
  </section>
);

export default HeroSection; 