import React, { useState } from 'react';
import { FOOTER_DATA } from '../data/weddingData';
import { Heart, Sparkles, Copy, Check, ChevronUp } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';

export const FooterSection = () => {
  const [copied, setCopied] = useState(false);

  const copyHashtag = () => {
    navigator.clipboard.writeText(FOOTER_DATA.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c3527] text-[#fbf9f4] pt-20 pb-12 px-4 relative overflow-hidden border-t border-[#8a9a86]/30">
      {/* Decorative top border floral motif */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8a9a86] via-[#f3e5ab] to-[#8a9a86]" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        {/* Scroll Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-3 rounded-full bg-[#3f4a39] text-[#f3e5ab] hover:bg-[#f3e5ab] hover:text-[#2c3527] transition-all shadow-md transform hover:-translate-y-1 inline-flex items-center justify-center border border-[#8a9a86]/30"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        {/* Section 7 Heading */}
        <div className="space-y-4">
          <span className="font-serif-display text-xs tracking-[0.3em] uppercase text-[#f3e5ab] block font-medium">
            7. Footer Section
          </span>

          <h2 className="font-script text-6xl sm:text-7xl text-[#f3e5ab]">
            {FOOTER_DATA.names}
          </h2>

          <p className="font-serif-display text-xl sm:text-2xl tracking-widest text-[#e8dfd1]">
            {FOOTER_DATA.date}
          </p>

          <p className="font-serif-body text-lg italic text-[#d8ccbc]">
            "{FOOTER_DATA.tagline}"
          </p>

          <FlourishDivider light={true} />
        </div>

        {/* Final Footer Block */}
        <div className="space-y-4">
          <p className="font-script text-3xl sm:text-4xl text-[#f3e5ab] whitespace-pre-line">
            {FOOTER_DATA.finalMessage}
          </p>

          {/* Hashtag with copy option */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3f4a39] border border-[#8a9a86]/40 text-xs font-sans-body uppercase tracking-widest text-[#f3e5ab]">
            <span>{FOOTER_DATA.hashtag}</span>
            <button
              onClick={copyHashtag}
              className="p-1 hover:text-white transition-colors"
              title="Copy Hashtag"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#3f4a39] text-xs font-sans-body text-[#a8b8a0] tracking-wider">
          <p>{FOOTER_DATA.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
