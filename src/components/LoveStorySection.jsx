import React from 'react';
import { motion } from 'motion/react';
import { story, LOVE_STORY_DATA } from '../data/weddingData';
import { Heart, Sparkles, Clock } from 'lucide-react';
import { WhiteHydrangeaGarland } from './FloralDivider';
import { OrnateFrame } from './OrnateFrame';

export const LoveStorySection = () => {
  return (
    <section id="love-story" className="py-24 px-4 bg-[#f7f3ea] relative overflow-hidden">
      {/* Soft background textures */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8a6a27_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#8a6a27] mb-2 block font-semibold">
            {story.tag}
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium">
            {story.headline}
          </h2>

        </div>

        {/* Narrative Card & Ornate Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Narrative paragraphs & quote */}
          <div className="lg:col-span-7 bg-[#fffdf6] rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border p-8 sm:p-12 relative overflow-hidden space-y-6">
            <WhiteHydrangeaGarland position="top" />

            <div className="pt-6">
              <span className="font-sans-body text-xs tracking-widest uppercase text-[#8a6a27] font-bold block mb-4">
                {story.subtitle}
              </span>
              <div className="space-y-4">
                {LOVE_STORY_DATA.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="font-serif-body text-base sm:text-lg text-[#3d3226] leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
              

              
              <p className="font-script text-3xl sm:text-4xl text-[#8a6a27] pt-2 text-center font-bold">
                "{LOVE_STORY_DATA.quote}"
              </p>
            </div>

            <WhiteHydrangeaGarland position="bottom" />
          </div>

          {/* Right Column: Ornate Gold Frame with couple image */}
          <div className="lg:col-span-5 flex justify-center">
            <OrnateFrame
              src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80"
              alt="Emma and James Portrait"
              className="w-full max-w-[340px] aspect-[3/4]"
            />
          </div>
        </div>

        {/* TIMELINE SECTION */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#627254]/10 text-[#627254] text-xs font-sans-body uppercase tracking-widest border border-[#627254]/20 font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#8a6a27]" /> The Journey
            </span>
            <h3 className="font-serif-display text-3xl text-[#3d3226] mt-2 font-medium">
              Timeline
            </h3>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c5a059]/40 transform -translate-x-1/2" />

            <div className="space-y-12">
              {story.chapters.map((item, idx) => {
                const isEven = idx % 2 === 0;
                
                const imageMap = {
                  firstMeeting: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
                  firstDate: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80',
                  travels: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
                  proposal: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
                };
                
                return (
                  <motion.div
                    key={item.id}
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
                        className={`bg-[#fffdf6] p-6 sm:p-8 rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border hover:border-[#8a6a27] transition-all shadow-xl ${
                          isEven ? 'md:text-right' : 'md:text-left'
                        }`}
                      >
                        <div className="inline-block px-3 py-1 rounded-full bg-[#627254] text-[#f3e5ab] font-sans-body text-xs font-semibold uppercase tracking-wider mb-3">
                          {item.chapter} • {item.year}
                        </div>
                        <h4 className="font-serif-display text-2xl text-[#3d3226] font-semibold mb-2">
                          {item.title}
                        </h4>
                        <p className="font-serif-body text-sm text-[#5c4f42] leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="overflow-hidden rounded-2xl h-48 shadow-md border border-[#e2d5c3]">
                          <img
                            src={imageMap[item.imageKey] || imageMap.firstMeeting}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="mt-4 flex justify-end gap-2 text-xs font-sans text-[#a8b8a0]">
                          <span className="font-bold tracking-widest">{item.location}</span>
                          <span>|</span>
                          <span className="tracking-widest">{item.postmarkDate}</span>
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
