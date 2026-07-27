import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS_DATA, DRESS_CODE_DATA } from '../data/weddingData';
import { MapPin, Clock, Shirt, ChevronDown, ChevronUp, Navigation, Calendar } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';

export const WeddingEventsSection = ({ onOpenLocation }) => {
  const [activeAccordion, setActiveAccordion] = useState('ceremony');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const getEventById = (id) => {
    return EVENTS_DATA.events.find(evt => evt.id === id);
  };

  const ceremony = getEventById('ceremony') || EVENTS_DATA.events[0];
  const reception = getEventById('reception') || EVENTS_DATA.events[2];

  const accordionItems = [
    {
      id: 'ceremony',
      title: 'Ceremony',
      icon: '💍',
      content: (
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <Calendar className="w-3.5 h-3.5" /> Saturday, September 19, 2026
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <Clock className="w-3.5 h-3.5" /> {ceremony.time}
          </div>
          <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <MapPin className="w-3.5 h-3.5 mt-0.5" /> {ceremony.location}
          </div>
          <p className="font-serif-body text-sm text-[#e3d4c1] leading-relaxed pt-2">
            {ceremony.description}
          </p>
        </div>
      )
    },
    {
      id: 'reception',
      title: 'Reception',
      icon: '🍽️',
      content: (
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <Clock className="w-3.5 h-3.5" /> {reception.time}
          </div>
          <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
            <MapPin className="w-3.5 h-3.5 mt-0.5" /> {reception.location}
          </div>
          <p className="font-serif-body text-sm text-[#e3d4c1] leading-relaxed pt-2">
            {reception.description}
          </p>
        </div>
      )
    },
    {
      id: 'dress-code',
      title: 'Dress Code',
      icon: '👔',
      content: (
        <div className="space-y-4 text-left">
          <p className="font-serif-body text-sm text-[#e3d4c1] leading-relaxed">
            <strong>Theme:</strong> {DRESS_CODE_DATA?.theme || "Elegant Formal Attire"}
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs font-sans-body">
            <div>
              <span className="font-bold text-[#d4af37] block mb-1 uppercase tracking-wider">Gentlemen</span>
              <ul className="list-disc pl-4 space-y-1 text-[#e3d4c1]">
                {DRESS_CODE_DATA?.gentlemen?.slice(0, 4).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div>
              <span className="font-bold text-[#d4af37] block mb-1 uppercase tracking-wider">Ladies</span>
              <ul className="list-disc pl-4 space-y-1 text-[#e3d4c1]">
                {DRESS_CODE_DATA?.ladies?.slice(0, 4).map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="events" className="py-24 px-4 bg-[#4a0213] text-[#fbf9f4] relative overflow-hidden">
      {/* Subtle floral watermark overlays */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#d4af37] mb-2 block font-medium">
            {EVENTS_DATA.title}
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#fbf9f4] font-medium mb-3">
            The Wedding
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#e3d4c1] max-w-xl mx-auto italic">
            "Join us as we begin our forever..."
          </p>
          <FlourishDivider light={true} className="mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Overlapping Collage of Venue / Landscape images */}
          <div className="lg:col-span-6 relative h-[360px] sm:h-[450px]">
            {/* Top Back Image */}
            <div className="absolute top-0 left-0 w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/30">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                alt="Venue Landscape"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Front Image */}
            <div className="absolute bottom-0 right-0 w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/50 translate-y-4">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
                alt="Garden Path"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Accordion dropdowns */}
          <div className="lg:col-span-6 space-y-4">
            {accordionItems.map((item) => {
              const isOpen = activeAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#3a010c]/80 border border-[#c5a059]/30 rounded-3xl overflow-hidden shadow-xl"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#3a010c] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-serif-display text-xl sm:text-2xl text-[#f7e7ce] font-semibold">
                        {item.title}
                      </span>
                    </div>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#d4af37]" /> : <ChevronDown className="w-5 h-5 text-[#d4af37]" />}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-[#c5a059]/10">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CTA Button */}
            <div className="pt-6 text-center lg:text-left">
              <button
                onClick={onOpenLocation}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f7e7ce] text-[#2c1f1f] font-sans-body text-xs tracking-widest uppercase hover:bg-[#fffdf6] shadow-md hover:shadow-lg transition-all transform hover:scale-105 font-bold"
              >
                <Navigation className="w-4 h-4 text-[#8a6a27]" />
                {EVENTS_DATA.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
