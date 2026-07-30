import React from 'react';
import { VENUE_DETAILS } from '../data/weddingData';
import { MapPin, Clock, Car, ShieldCheck, Home, Navigation } from 'lucide-react';


export const VenueSection = ({ onOpenModal }) => {
  if (!VENUE_DETAILS) return null;

  return (
    <section id="venue" className="py-24 px-4 bg-[#f7f3ea] text-[#3d3226] relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#627254]/10 text-[#627254] text-xs font-sans-body uppercase tracking-widest mb-3 border border-[#627254]/20 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#8a6a27]" /> Location Details
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium mb-3">
            Wedding Venue
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#5c4f42] max-w-xl mx-auto italic">
            "We can't wait to celebrate with you at this beautiful location."
          </p>

        </div>

        {/* Venue Name & Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Ceremony Card */}
          <div className="bg-[#fbf9f4] border border-[#e2d5c3] rounded-3xl p-8 paper-shadow card-inner-border shadow-xl flex flex-col justify-between">
            <div>
              <span className="font-sans-body text-xs uppercase tracking-widest text-[#8a6a27] font-semibold block mb-2">
                Ceremony Address
              </span>
              <h3 className="font-serif-display text-2xl text-[#3d3226] font-bold mb-3">
                {VENUE_DETAILS.name}
              </h3>
              <p className="font-serif-body text-base text-[#5c4f42] leading-relaxed mb-6">
                {VENUE_DETAILS.address}
              </p>
            </div>
            <a
              href={VENUE_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#627254] text-[#fbf9f4] font-sans-body text-xs uppercase tracking-wider hover:bg-[#4d5b41] transition-all font-semibold shadow-md"
            >
              <Navigation className="w-3.5 h-3.5 text-[#f3e5ab]" /> Get Directions
            </a>
          </div>

          {/* Reception Card */}
          <div className="bg-[#fbf9f4] border border-[#e2d5c3] rounded-3xl p-8 paper-shadow card-inner-border shadow-xl flex flex-col justify-between">
            <div>
              <span className="font-sans-body text-xs uppercase tracking-widest text-[#8a6a27] font-semibold block mb-2">
                Reception Address
              </span>
              <h3 className="font-serif-display text-2xl text-[#3d3226] font-bold mb-3">
                Grand Ballroom & Pavilion
              </h3>
              <p className="font-serif-body text-base text-[#5c4f42] leading-relaxed mb-6">
                {VENUE_DETAILS.address}
              </p>
            </div>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#8a6a27] text-[#8a6a27] hover:bg-[#8a6a27] hover:text-[#fbf9f4] font-sans-body text-xs uppercase tracking-wider transition-all font-semibold shadow-md"
            >
              <MapPin className="w-3.5 h-3.5" /> View On Map
            </button>
          </div>
        </div>

        {/* Venue Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-[#fbf9f4] p-6 rounded-2xl border border-[#e2d5c3] shadow-md space-y-2">
            <div className="flex items-center gap-2 text-[#8a6a27] font-serif-display font-bold text-base">
              <Clock className="w-4 h-4" /> Arrival Time
            </div>
            <p className="font-serif-body text-sm text-[#5c4f42]">
              {VENUE_DETAILS.arrivalTime || "Please arrive at least 30 minutes before the ceremony."}
            </p>
          </div>

          <div className="bg-[#fbf9f4] p-6 rounded-2xl border border-[#e2d5c3] shadow-md space-y-2">
            <div className="flex items-center gap-2 text-[#8a6a27] font-serif-display font-bold text-base">
              <Car className="w-4 h-4" /> Parking
            </div>
            <p className="font-serif-body text-sm text-[#5c4f42]">
              {VENUE_DETAILS.parkingNote || "Complimentary parking is available."}
            </p>
          </div>

          <div className="bg-[#fbf9f4] p-6 rounded-2xl border border-[#e2d5c3] shadow-md space-y-2">
            <div className="flex items-center gap-2 text-[#8a6a27] font-serif-display font-bold text-base">
              <ShieldCheck className="w-4 h-4" /> Accessibility
            </div>
            <p className="font-serif-body text-sm text-[#5c4f42]">
              {VENUE_DETAILS.accessibility || "The venue is wheelchair accessible."}
            </p>
          </div>

          <div className="bg-[#fbf9f4] p-6 rounded-2xl border border-[#e2d5c3] shadow-md space-y-2">
            <div className="flex items-center gap-2 text-[#8a6a27] font-serif-display font-bold text-base">
              <Home className="w-4 h-4" /> Accommodation
            </div>
            <p className="font-serif-body text-sm text-[#5c4f42]">
              {VENUE_DETAILS.accommodation || "Nearby hotels are available for out-of-town guests."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
