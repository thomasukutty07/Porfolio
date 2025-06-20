import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = ({ formData, formStatus, handleChange, handleSubmit }) => (
  <section id="contact" className="py-16 sm:py-24 md:py-32 relative">
    <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-8">
      {/* Support badge */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1 bg-[#18181B]/80 border border-[#2D2D2D] rounded-full text-xs sm:text-sm text-gray-300 shadow-sm">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 text-[#A855F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6a2 2 0 012-2h2a2 2 0 012 2v13" /></svg>
            4 Support online
          </span>
          <span className="mx-2">·</span>
          <a href="#" className="text-[#A855F7] hover:underline font-medium">Join us</a>
        </div>
      </div>
      {/* Heading and subheading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-2 sm:mb-4">Lets Have a Chat <span className="inline-block">👋</span></h2>
      <p className="text-center text-gray-400 text-base sm:text-lg mb-6 sm:mb-12 max-w-2xl mx-auto">Questions about our products/services, orders, or just want to say hello? We're here to help</p>
      {/* Contact Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative bg-[#18181B]/80 backdrop-blur-lg rounded-3xl p-4 sm:p-8 md:p-12 shadow-2xl border border-[#2D2D2D] overflow-hidden"
      >
        <AnimatePresence>
          {formStatus.success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg mb-4 flex items-center gap-3 z-10 justify-center"
            >
              <svg className="w-6 h-6 text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {formStatus.error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-4 flex items-center gap-3 z-10 justify-center"
            >
              <svg className="w-6 h-6 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              Failed to send message. Please try again later.
            </motion.div>
          )}
        </AnimatePresence>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-4">
          {/* First Name */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="firstName" className="text-gray-400 text-xs sm:text-sm">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName || ''}
              onChange={e => handleChange(e)}
              required
              placeholder="Jonathan"
              className="px-3 sm:px-4 py-2 sm:py-3 bg-[#23232B] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition-all placeholder-gray-500"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="email" className="text-gray-400 text-xs sm:text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={e => handleChange(e)}
              required
              placeholder="Jonathan2718@gmail.com"
              className="px-3 sm:px-4 py-2 sm:py-3 bg-[#23232B] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition-all placeholder-gray-500"
            />
          </div>
          {/* Phone Number */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <label htmlFor="subject" className="text-gray-400 text-xs sm:text-sm">Phone number</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject || ''}
              onChange={e => handleChange(e)}
              required
              placeholder="Phone number"
              className="px-3 sm:px-4 py-2 sm:py-3 bg-[#23232B] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition-all placeholder-gray-500"
            />
          </div>
          {/* Message (full width) */}
          <div className="flex flex-col gap-1 sm:gap-2 md:col-span-2">
            <label htmlFor="message" className="text-gray-400 text-xs sm:text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={e => handleChange(e)}
              required
              rows="3"
              placeholder="Hey I have some issues activating my account..."
              className="px-3 sm:px-4 py-2 sm:py-3 bg-[#23232B] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#A855F7] transition-all placeholder-gray-500 resize-none"
            ></textarea>
          </div>
          {/* Send Button (full width) */}
          <div className="md:col-span-2 mt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formStatus.submitting}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-full font-bold text-base sm:text-lg bg-gradient-to-r from-[#23232B] to-[#353542] text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${formStatus.submitting ? "opacity-50 cursor-not-allowed" : "hover:from-[#353542] hover:to-[#23232B]/80"}`}
            >
              {formStatus.submitting ? (
                <>
                  <svg className="w-6 h-6 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4" className="opacity-25" /><path d="M4 12a8 8 0 018-8" stroke="#fff" strokeWidth="4" className="opacity-75" /></svg>
                  Sending...
                </>
              ) : (
                <>Send message</>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  </section>
);

export default ContactSection; 