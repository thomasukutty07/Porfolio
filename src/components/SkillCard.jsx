import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-[#1E293B]/50 backdrop-blur-lg p-6 rounded-xl overflow-hidden group border border-[#334155]/30"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#60A5FA]/10 to-[#34D399]/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
      
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="relative text-4xl mb-4"
      >
        <div className="text-[#60A5FA]">
          <Icon />
        </div>
      </motion.div>
      
      <h3 className="relative text-xl font-bold mb-4 text-[#34D399]">{title}</h3>
      
      <div className="relative h-2 bg-[#0F172A] rounded-full overflow-hidden border border-[#334155]/30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#60A5FA] to-[#34D399]"
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative text-sm text-[#94A3B8] mt-2 font-medium"
      >
        {level}%
      </motion.p>
    </motion.div>
  );
};

export default SkillCard; 