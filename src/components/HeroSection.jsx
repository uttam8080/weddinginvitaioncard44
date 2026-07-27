import React from 'react';
import { motion } from 'motion/react';
import { HERO_DATA } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';
import marriageImage from '../assets/marriage_ceremony.png';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[75vh] sm:min-h-screen flex items-center justify-center py-20 px-4 bg-[#627254] overflow-hidden">
      {/* Background Soft Subtle Watermark Overlay */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <img
          src={marriageImage}
          alt="Marriage Ceremony Background"
          className="w-full h-full object-cover filter brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#627254] via-transparent to-[#627254]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Save The Date Pill */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fbf9f4]/15 text-[#f3e5ab] text-xs font-sans-body uppercase tracking-[0.25em] border border-[#f3e5ab]/30 font-medium">
            Save The Date
          </span>

          {/* Calligraphic Couple Names */}
          <div>
            <h1 className="font-script text-6xl sm:text-8xl lg:text-9xl text-[#fbf9f4] leading-tight drop-shadow-sm my-2">
              {HERO_DATA.names}
            </h1>
            <p className="font-serif-display text-lg sm:text-xl tracking-[0.3em] uppercase text-[#f3e5ab] font-medium">
              {HERO_DATA.dateFormatted}
            </p>
          </div>

          <p className="font-serif-body text-base sm:text-lg italic text-[#e8dfd1] max-w-md mx-auto">
            {HERO_DATA.locationName} &bull; {HERO_DATA.locationRegion}
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#scratch-reveal"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fbf9f4] text-[#3d3226] font-sans-body text-xs tracking-[0.2em] uppercase hover:bg-[#f3e5ab] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group font-semibold"
            >
              <span>{HERO_DATA.buttonText}</span>
              <ChevronDown className="w-4 h-4 text-[#8a6a27] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

