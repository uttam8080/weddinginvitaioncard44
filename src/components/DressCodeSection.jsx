import React from 'react';
import { motion } from 'motion/react';
import { DRESS_CODE_DATA } from '../data/weddingData';
import { Shirt, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';


export const DressCodeSection = () => {
  if (!DRESS_CODE_DATA) return null;

  return (
    <section id="dress-code" className="py-24 px-4 bg-[#3d3226] text-[#fbf9f4] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c5a059]/15 text-[#f7e7ce] text-xs font-sans-body uppercase tracking-widest mb-3 border border-[#c5a059]/30 font-semibold">
            <Shirt className="w-3.5 h-3.5 text-[#d4af37]" /> Western Wedding Attire
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#f7e7ce] font-medium mb-3">
            {DRESS_CODE_DATA.sectionTitle || "Dress Code"}
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#e3d4c1] max-w-xl mx-auto italic">
            "{DRESS_CODE_DATA.subtitle || "Help us create a beautiful celebration by following our dress code."}"
          </p>

        </div>

        {/* Theme Badge */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#4b3832] border border-[#c5a059]/50 px-8 py-4 rounded-2xl shadow-xl">
            <span className="font-sans-body text-xs tracking-[0.25em] uppercase text-[#c5a059] block mb-1">
              Requested Theme
            </span>
            <span className="font-serif-display text-2xl sm:text-3xl text-[#fbf9f4] font-bold tracking-wide">
              {DRESS_CODE_DATA.theme || "Elegant Formal Attire"}
            </span>
          </div>
        </div>

        {/* Gentlemen & Ladies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Gentlemen Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#4b3832] border border-[#c5a059]/30 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#c5a059]/20 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#f7e7ce] font-serif-display text-lg font-bold">
                  G
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7e7ce] font-semibold">
                  Gentlemen
                </h3>
              </div>
              <ul className="space-y-3 font-serif-body text-base sm:text-lg text-[#e3d4c1]">
                {DRESS_CODE_DATA.gentlemen?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ladies Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#4b3832] border border-[#c5a059]/30 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#c5a059]/20 pb-4">
                <div className="w-10 h-10 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#f7e7ce] font-serif-display text-lg font-bold">
                  L
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#f7e7ce] font-semibold">
                  Ladies
                </h3>
              </div>
              <ul className="space-y-3 font-serif-body text-base sm:text-lg text-[#e3d4c1]">
                {DRESS_CODE_DATA.ladies?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Preferred Colors Palette */}
        <div className="bg-[#4b3832] border border-[#c5a059]/30 rounded-3xl p-8 text-center shadow-2xl mb-12">
          <h4 className="font-serif-display text-2xl text-[#f7e7ce] font-semibold mb-2">
            Preferred Colors Palette
          </h4>
          <p className="font-serif-body text-sm text-[#e3d4c1] mb-8 italic">
            Neutral, earthy, and soft Western tones are encouraged
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            {DRESS_CODE_DATA.preferredColors?.map((swatch) => (
              <div key={swatch.name} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-12 h-12 rounded-full shadow-lg border-2 border-[#fbf9f4]/80 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: swatch.color }}
                />
                <span className="font-sans-body text-xs tracking-wider uppercase text-[#f7e7ce] font-medium">
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Please Avoid List */}
        <div className="bg-[#5c2e2e]/40 border border-[#e57373]/30 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#ffb4ab]">
            <AlertCircle className="w-5 h-5" />
            <h4 className="font-serif-display text-xl font-semibold uppercase tracking-wider">
              Please Avoid
            </h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {DRESS_CODE_DATA.avoidColors?.map((item, idx) => (
              <span
                key={idx}
                className="bg-[#2c1b1b] border border-[#ffb4ab]/30 px-4 py-2 rounded-full text-xs font-sans-body uppercase tracking-wider text-[#ffdadd]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
