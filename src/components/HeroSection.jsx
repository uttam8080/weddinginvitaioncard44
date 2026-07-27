import React from 'react';
import { motion } from 'motion/react';

import marriageCeremonyImg from '../assets/marriage_ceremony.png';
import lanternImg from '../assets/lantern.png';

export const HeroSection = () => {

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={marriageCeremonyImg} 
          alt="Marriage Ceremony" 
          className="w-full h-full object-cover"
        />
        {/* Decorative Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fbf9f4]/10 via-transparent to-[#f3e5ab]/40 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fcfaf7]/50 pointer-events-none" />
        
        {/* Decorative Lanterns */}
        <motion.img 
          src={lanternImg} 
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: 'top center' }}
          className="absolute top-0 -left-8 sm:-left-12 lg:-left-16 w-32 sm:w-48 lg:w-64 mix-blend-screen pointer-events-none"
          alt="Decorative Lantern"
        />
        <motion.img 
          src={lanternImg} 
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: 'top center' }}
          className="absolute top-0 -right-8 sm:-right-12 lg:-right-16 w-32 sm:w-48 lg:w-64 mix-blend-screen pointer-events-none"
          alt="Decorative Lantern"
        />
      </motion.div>
    </section>
  );
};
