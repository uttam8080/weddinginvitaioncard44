import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Gift } from 'lucide-react';


export const GiftRegistrySection = () => {
  return (
    <section id="gift-registry" className="py-24 px-4 floral-backdrop text-[#fbf9f4] relative overflow-hidden">
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-[#1a0105]/75 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        {/* Header */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c5a059]/10 text-[#f7e7ce] text-xs font-sans-body uppercase tracking-[0.2em] mb-2 border border-[#c5a059]/25 font-semibold">
            <Gift className="w-3.5 h-3.5 text-[#d4af37]" /> Registry
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#f7e7ce] font-medium">
            Gift Registry
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#e3d4c1] italic mt-2">
            "Your presence is the greatest gift of all"
          </p>

        </div>

        {/* Postcard Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-[#fffdf6] text-[#3d3226] border border-[#e2d5c3] rounded-3xl paper-shadow card-inner-border p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle vintage postcard divider */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Postcard Note */}
            <div className="md:col-span-7 space-y-4 text-left border-b md:border-b-0 md:border-r border-[#e2d5c3] pb-6 md:pb-0 md:pr-8">
              <span className="font-serif-display text-xs uppercase tracking-widest text-[#8a6a27] font-bold block">
                Postcard
              </span>
              <p className="font-serif-body text-base text-[#3d3226] leading-relaxed">
                The most important gift to us is having you share in our special day. However, if you wish to contribute to our future home or honeymoon journey, we have set up an online registry.
              </p>
              <p className="font-script text-2xl text-[#8a6a27] pt-2">
                With Love, Emma & James
              </p>
            </div>

            {/* Right side: QR Code & Hash stamp */}
            <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
              {/* Mock Stamp */}
              <div className="absolute top-4 right-4 w-12 h-14 border-2 border-dashed border-[#c5a059]/40 flex items-center justify-center p-1 select-none">
                <span className="font-serif-display text-[9px] uppercase tracking-wider text-[#c5a059] font-bold text-center">
                  E&J 2026
                </span>
              </div>

              {/* QR Code Graphic wrapper */}
              <div className="w-32 h-32 bg-white border border-[#e2d5c3] p-3 rounded-2xl shadow-inner flex items-center justify-center relative group">
                {/* Simulated QR Code drawing */}
                <svg className="w-full h-full text-[#3d3226]" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer corners */}
                  <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="10" y="10" width="15" height="15" />
                  <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="75" y="10" width="15" height="15" />
                  <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="10" y="75" width="15" height="15" />
                  {/* Random pixels to look like QR */}
                  <rect x="40" y="10" width="10" height="20" />
                  <rect x="55" y="5" width="10" height="10" />
                  <rect x="45" y="35" width="15" height="15" />
                  <rect x="15" y="45" width="15" height="10" />
                  <rect x="70" y="45" width="25" height="10" />
                  <rect x="35" y="70" width="15" height="20" />
                  <rect x="55" y="80" width="20" height="15" />
                  <rect x="80" y="70" width="15" height="10" />
                  <rect x="70" y="85" width="10" height="10" />
                </svg>
              </div>
              <span className="font-sans-body text-[10px] uppercase tracking-wider text-[#8a6a27] font-semibold text-center">
                Scan to visit registry
              </span>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftRegistrySection;
