import React from 'react';
import { motion } from 'motion/react';

import { hero } from '../data/weddingData';
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
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/n0c7bqpd/video/upload/v1785415105/Create_a_highly_realistic_cine_online-video-cutter.com_tmhzzb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 pb-24 sm:pb-32 lg:pb-48">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white text-base sm:text-lg md:text-xl font-serif tracking-widest uppercase mb-2 sm:mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
          >
            {hero.subtitle}
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#fcfaf7] text-6xl sm:text-7xl md:text-8xl font-script tracking-wide mb-4 sm:mb-6"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            <div className="flex flex-col items-center leading-none">
              <span>{hero.names[0]}</span>
              <span className="text-4xl sm:text-5xl md:text-6xl my-1 sm:my-2 text-[#d4af37]">&</span>
              <span>{hero.names[1]}</span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-white text-sm sm:text-base md:text-lg font-serif tracking-wider"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}
          >
            Welcome To Our Wedding Celebration
          </motion.p>
        </div>
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
