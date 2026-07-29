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
    <footer className="bg-[#2c3527] text-[#fbf9f4] pt-20 pb-12 px-4 relative overflow-hidden">

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">

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
