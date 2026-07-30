import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { COUNTDOWN_DATA } from '../data/weddingData';
import { Clock } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';

export const CountdownSection = () => {
  const calculateTimeLeft = () => {
    const target = new Date(COUNTDOWN_DATA?.targetDate || '2026-09-19T16:00:00');
    const now = new Date();
    const difference = target - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="pt-28 sm:pt-32 lg:pt-36 pb-24 px-4 bg-[#f4efea] text-[#3d3226] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8a6a27_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto text-center space-y-24 relative z-10">
        {/* Section Heading */}
        <div className="space-y-4">
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium tracking-wide">
            {COUNTDOWN_DATA?.sectionTitle || "Counting Down to Forever"}
          </h2>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4af37]/15 text-[#8a6a27] text-xs font-sans-body uppercase tracking-widest border border-[#d4af37]/30 font-semibold">
            Save The Date
          </span>
        </div>

        {/* Hanging Countdown Cards Area */}
        <div className="flex items-start justify-center gap-2 sm:gap-8 lg:gap-16 w-full pt-10 pb-8 px-1 relative">
          {timeBlocks.map((block, idx) => {
            const digits = String(block.value).padStart(2, '0').split('');
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="flex flex-col items-center gap-3 sm:gap-6"
              >
                {/* Cards for Digits */}
                <div className="flex gap-1 sm:gap-2 lg:gap-3">
                  {digits.map((digit, dIdx) => (
                    <div key={dIdx} className="relative flex flex-col items-center">
                      {/* Straight Vertical Thread */}
                      <div className="absolute bottom-full w-[1px] h-32 bg-[#701d29]" />
                      
                      {/* Individual Digit Card */}
                      <motion.div 
                        animate={{ rotate: [-3, 3, -3] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 4, 
                          ease: "easeInOut",
                          delay: (idx * 2 + dIdx) * 0.4
                        }}
                        style={{ transformOrigin: 'top center' }}
                        className="relative w-8 h-12 sm:w-16 sm:h-28 lg:w-24 lg:h-36 bg-[#701d29] rounded sm:rounded-xl flex flex-col items-center justify-center border border-[#701d29] shadow-xl overflow-hidden group"
                      >
                        
                        {/* Hole at the top of the tag card */}
                        <div className="absolute top-1 sm:top-2 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-[#f4efea] rounded-full z-10" />


                        {/* Number Display */}
                        <span className="font-serif-display text-2xl sm:text-5xl lg:text-7xl text-[#f4efea] font-normal tracking-tight z-0 leading-none mt-1 sm:mt-3">
                          {digit}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Typography below cards matching reference */}
                <div className="flex flex-col items-center mt-1 sm:mt-2">
                  <span className="font-serif-display text-[9px] sm:text-lg lg:text-xl uppercase tracking-[0.2em] text-[#1a1511]">
                    {block.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
