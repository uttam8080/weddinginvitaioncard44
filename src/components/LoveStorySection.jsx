import React from 'react';
import { motion } from 'motion/react';
import { LOVE_STORY_DATA } from '../data/weddingData';
import { Heart, Sparkles, Clock } from 'lucide-react';
import { FlourishDivider, WhiteHydrangeaGarland } from './FloralDivider';

export const LoveStorySection = () => {
  return (
    <section id="love-story" className="py-24 px-4 bg-[#f7f3ea] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#8a6a27] mb-2 block font-semibold">
            {LOVE_STORY_DATA.title}
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium">
            4. {LOVE_STORY_DATA.mainHeading}
          </h2>
          <FlourishDivider light={false} />
        </div>

        {/* Narrative Paragraphs Card */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-20 bg-[#fbf9f4] rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border shadow-2xl relative overflow-hidden">
          <WhiteHydrangeaGarland position="top" />

          <div className="p-8 sm:p-14">
            {LOVE_STORY_DATA.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="font-serif-body text-base sm:text-lg text-[#3d3226] leading-relaxed italic mb-4"
              >
                {para}
              </p>
            ))}
            <FlourishDivider />
            <p className="font-script text-3xl sm:text-4xl text-[#8a6a27] pt-2 font-bold">
              "{LOVE_STORY_DATA.quote}"
            </p>
          </div>

          <WhiteHydrangeaGarland position="bottom" />
        </div>

        {/* TIMELINE SECTION */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#627254]/10 text-[#627254] text-xs font-sans-body uppercase tracking-widest border border-[#627254]/20 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#8a6a27]" /> The Journey
            </span>
            <h3 className="font-serif-display text-3xl text-[#3d3226] mt-2 font-medium">
              Timeline
            </h3>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#f3e5ab]/40 transform -translate-x-1/2" />

            {/* Timeline Item Cards */}
            <div className="space-y-12">
              {LOVE_STORY_DATA.timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Badge Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#8a6a27] text-[#f3e5ab] items-center justify-center font-serif-display text-xs font-bold border-2 border-[#fbf9f4] shadow-md">
                      <Heart className="w-4 h-4 fill-[#f3e5ab] text-[#f3e5ab]" />
                    </div>

                    {/* Content Box */}
                    <div className="w-full md:w-1/2 p-2 sm:p-4">
                      <div
                        className={`bg-[#fbf9f4] p-6 sm:p-8 rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border hover:border-[#8a6a27] transition-all shadow-xl ${
                          isEven ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <div className="inline-block px-3 py-1 rounded-full bg-[#627254] text-[#f3e5ab] font-sans-body text-xs font-semibold uppercase tracking-wider mb-3">
                          {item.year}
                        </div>
                        <h4 className="font-serif-display text-2xl text-[#3d3226] font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="font-serif-body text-sm text-[#5c4f42] leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="overflow-hidden rounded-2xl h-48 shadow-md border border-[#e2d5c3]">
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Spacer for 2-column layout */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
