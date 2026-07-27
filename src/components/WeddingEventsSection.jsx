import React from 'react';
import { motion } from 'motion/react';
import { EVENTS_DATA } from '../data/weddingData';
import { MapPin, Clock, Shirt, Sparkles, Navigation } from 'lucide-react';
import { FlourishDivider, WhiteHydrangeaGarland } from './FloralDivider';

export const WeddingEventsSection = ({ onOpenLocation }) => {
  return (
    <section id="events" className="py-24 px-4 bg-[#627254] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#f3e5ab] mb-2 block font-medium">
            {EVENTS_DATA.title}
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#fbf9f4] font-medium mb-3">
            5. {EVENTS_DATA.heading}
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#e8dfd1] max-w-xl mx-auto italic">
            "{EVENTS_DATA.subtitle}"
          </p>
          <FlourishDivider light={true} />
        </div>

        {/* EVENTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {EVENTS_DATA.events.map((evt, idx) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#fbf9f4] rounded-3xl p-8 border border-[#e2d5c3] paper-shadow card-inner-border hover:border-[#8a6a27] transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{evt.icon}</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#627254] text-[#f3e5ab] font-serif-display text-sm font-semibold border border-[#8a9a86]">
                    <Clock className="w-3.5 h-3.5" /> {evt.time}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#3d3226] font-semibold mb-2">
                  {evt.title}
                </h3>

                <p className="font-sans-body text-xs font-semibold tracking-wider text-[#627254] uppercase mb-4 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8a6a27]" /> {evt.location}
                </p>

                <p className="font-serif-body text-sm sm:text-base text-[#5c4f42] leading-relaxed mb-4">
                  {evt.description}
                </p>

                {evt.dressCode && (
                  <div className="mt-4 pt-4 border-t border-[#e2d5c3] flex items-center gap-2 text-xs font-sans-body uppercase tracking-wider text-[#7a6b5a]">
                    <Shirt className="w-4 h-4 text-[#8a6a27]" />
                    <span><strong>Dress Code:</strong> {evt.dressCode}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DRESS CODE PALETTE SWATCHES CARD */}
        <div className="bg-[#fbf9f4] rounded-3xl p-8 border border-[#e2d5c3] text-center max-w-3xl mx-auto mb-12 shadow-xl relative overflow-hidden">
          <h4 className="font-serif-display text-xl text-[#3d3226] font-semibold mb-2">
            Recommended Attire Palette
          </h4>
          <p className="font-serif-body text-xs text-[#5c4f42] mb-6 italic">
            Soft Garden Elegant — Muted earth tones, sage greens, warm champagne, & blush
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {EVENTS_DATA.dressCodeSwatches.map((swatch) => (
              <div key={swatch.name} className="flex flex-col items-center gap-1.5 group">
                <div
                  className="w-10 h-10 rounded-full shadow-md border-2 border-[#fbf9f4] transition-transform group-hover:scale-110"
                  style={{ backgroundColor: swatch.color }}
                />
                <span className="font-sans-body text-[10px] tracking-wider uppercase text-[#3d3226] font-medium">
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center">
          <button
            onClick={onOpenLocation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#fbf9f4] text-[#3d3226] font-sans-body text-xs tracking-widest uppercase hover:bg-[#f3e5ab] font-bold shadow-md transition-all transform hover:scale-105"
          >
            <Navigation className="w-4 h-4 text-[#627254]" />
            {EVENTS_DATA.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};
