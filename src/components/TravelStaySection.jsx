import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Car, Accessibility, Cloud, ExternalLink } from 'lucide-react';
import { VENUE_DETAILS } from '../data/weddingData';

export const TravelStaySection = () => {
  const venue = VENUE_DETAILS;

  const infoCards = [
    {
      icon: '',
      title: 'Arrival Time',
      detail: venue.arrivalTime,
    },
    {
      icon: '',
      title: 'Parking',
      detail: venue.parkingNote,
    },
  ];

  return (
    <section id="travel-stay" className="pt-32 sm:pt-40 lg:pt-48 pb-24 px-4 bg-[#4a0213] text-[#fbf9f4] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="font-serif-display text-sm sm:text-base tracking-[0.25em] uppercase text-[#d4af37] mb-2 block font-medium">
            Our Special Place
          </span>
          <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[#fbf9f4] font-medium">
            Wedding Venue
          </h2>
          <p className="font-serif-body text-lg sm:text-xl lg:text-2xl text-[#e3d4c1] max-w-xl mx-auto italic mt-3">
            "Where our forever begins"
          </p>
        </div>

        {/* MAIN GRID: left info, right location image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Venue Info */}
          <div className="space-y-8">

            {/* Venue Name & Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#3a010c]/60 border border-[#c5a059]/30 rounded-2xl p-6 space-y-3"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-serif-display text-xl text-[#f7e7ce] font-bold leading-snug">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-[#e3d4c1] mt-1">{venue.address}</p>
                  <p className="text-xs text-[#c5a059] mt-0.5 tracking-wide uppercase">{venue.city}</p>
                </div>
              </div>

              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-[#d4af37] text-[#3a2206] text-xs font-semibold font-sans-body uppercase tracking-widest hover:bg-[#f3e5ab] transition-colors"
              >
                View on Google Maps
              </a>
            </motion.div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#3a010c]/50 border border-[#c5a059]/20 rounded-2xl p-5 flex gap-3"
                >
                  <div>
                    <h4 className="font-serif-display text-sm text-[#d4af37] font-bold uppercase tracking-wider mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#e3d4c1] leading-relaxed">{card.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT — Location Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[420px] sm:h-[520px] lg:h-full min-h-[420px]"
          >
            {/* Main location photo */}
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/30">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                alt="Atlantis The Palm, Dubai"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Gold gradient overlay at bottom */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#3a010c]/70 via-transparent to-transparent pointer-events-none" />

            {/* Venue label badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-serif-display text-[#d4af37] text-xs uppercase tracking-widest font-semibold">
                  Venue Location
                </p>
                <p className="font-serif-display text-[#fbf9f4] text-lg font-bold leading-tight mt-0.5">
                  Atlantis The Palm
                </p>
                <p className="text-[#e3d4c1] text-xs mt-0.5 flex items-center gap-1">
                  Palm Jumeirah, Dubai
                </p>
              </div>
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-[#3a2206] hover:bg-[#f3e5ab] transition-colors shadow-lg"
                title="View on map"
              >
                Map
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TravelStaySection;
