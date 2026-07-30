import React from 'react';
import { FOOTER_DATA } from '../data/weddingData';
import { ChevronUp } from 'lucide-react';
import footerBg from '../assets/marriage_ceremony.png';

export const FooterSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c3527] text-[#fbf9f4] pt-32 sm:pt-40 lg:pt-48 pb-12 px-4 relative overflow-hidden">

      {/* Background image (low opacity) */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden="true"
      />

      {/* Black overlay to darken image */}
      <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">

        {/* Final Footer Block */}
        <div className="space-y-4">
          <p className="font-script text-3xl sm:text-4xl text-[#f3e5ab] whitespace-pre-line">
            {FOOTER_DATA.finalMessage}
          </p>

          {/* Hashtag removed */}
        </div>


        {/* Copyright */}
        <div className="pt-8 border-t border-[#3f4a39] text-xs font-sans-body text-[#a8b8a0] tracking-wider flex items-center justify-center gap-1 flex-wrap">
          <p>© 2026 Jasmine & Benjamin · Crafted By</p>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#d4af37] text-white underline transition-colors"
          >
            tekkzy
          </a>
        </div>
      </div>
    </footer>
  );
};
