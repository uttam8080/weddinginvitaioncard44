import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VENUE_DETAILS } from '../data/weddingData';
import { X, MapPin, Navigation, Car, Sun, ExternalLink } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';

export const LocationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#fbf9f4] rounded-3xl paper-shadow border border-[#e2d5c3] p-6 sm:p-10 my-8 card-inner-border shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#e2d5c3]/50 text-[#3d3226] hover:bg-[#e2d5c3] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <span className="font-serif-display text-xs tracking-widest uppercase text-[#8a7b6a] font-medium">
              Venue & Directions
            </span>
            <h3 className="font-serif-display text-3xl text-[#3d3226] font-semibold mt-1">
              {VENUE_DETAILS.name}
            </h3>
            <p className="font-sans-body text-xs text-[#627254] tracking-wider uppercase mt-1 flex items-center justify-center gap-1 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#8a6a27]" /> {VENUE_DETAILS.city}
            </p>
            <FlourishDivider className="my-3" />
          </div>

          {/* Interactive Simulated Map Frame */}
          <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#e2d5c3] shadow-inner mb-6 bg-[#e2d5c3]">
            <iframe
              title="Venue Map"
              src="https://maps.google.com/maps?q=Napa%20Valley%20California&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[0.95] saturate-[0.8]"
              loading="lazy"
            />
          </div>

          <div className="space-y-3 text-left">
            <div className="p-4 rounded-2xl bg-white border border-[#e2d5c3] flex items-start gap-3 shadow-xs">
              <MapPin className="w-5 h-5 text-[#8a6a27] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif-display text-sm font-semibold text-[#3d3226]">
                  Address
                </h4>
                <p className="font-sans-body text-xs text-[#5c4f42]">
                  {VENUE_DETAILS.address}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#e2d5c3] flex items-start gap-3 shadow-xs">
              <Car className="w-5 h-5 text-[#627254] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif-display text-sm font-semibold text-[#3d3226]">
                  Parking & Valet
                </h4>
                <p className="font-sans-body text-xs text-[#5c4f42] leading-relaxed">
                  {VENUE_DETAILS.parkingNote}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#e2d5c3] flex items-start gap-3 shadow-xs">
              <Sun className="w-5 h-5 text-[#8a6a27] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif-display text-sm font-semibold text-[#3d3226]">
                  Expected Napa Valley Weather
                </h4>
                <p className="font-sans-body text-xs text-[#5c4f42] leading-relaxed">
                  {VENUE_DETAILS.weatherInfo}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href={VENUE_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#627254] text-[#fbf9f4] font-sans-body text-xs tracking-wider uppercase hover:bg-[#4d5b41] shadow-md transition-all font-semibold"
            >
              <Navigation className="w-4 h-4 text-[#f3e5ab]" />
              Open Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
