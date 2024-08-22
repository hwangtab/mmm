import React from 'react';
import { motion } from 'framer-motion';

function LandingSection() {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-neon-pink">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-50" style={{backgroundImage: "url('/background-image.jpg')"}}></div>
      <motion.div 
        className="text-center relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-4 gradient-text"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          Mixtape Mavericks Market
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-6xl mb-8 text-purple-haze"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          공씨디의 역습
        </motion.p>
        <motion.p 
          className="text-xl mb-12 text-retro-orange"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          2024년 10월 3일 | 롱플레이어, 수원
        </motion.p>
        <motion.a 
          href="#tickets" 
          className="bg-acid-green text-purple-haze px-8 py-3 rounded-full text-lg font-subtitle hover:bg-cyber-yellow transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          참가 신청
        </motion.a>
      </motion.div>
    </section>
  );
}

export default LandingSection;