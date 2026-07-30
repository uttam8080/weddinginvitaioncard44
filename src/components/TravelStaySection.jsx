import React from 'react';
import { motion } from 'motion/react';
import { Plane, Hotel, Car } from 'lucide-react';


export const TravelStaySection = () => {
  return (
    <section id="travel-stay" className="pt-32 sm:pt-40 lg:pt-48 pb-24 px-4 bg-[#4a0213] text-[#fbf9f4] relative overflow-hidden">
      {/* Soft background watermark */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-serif-display text-sm sm:text-base tracking-[0.25em] uppercase text-[#d4af37] mb-2 block font-medium">
            Accommodations
          </span>
          <h2 className="font-serif-display text-5xl sm:text-6xl lg:text-7xl text-[#fbf9f4] font-medium">
            Travel & Stay
          </h2>
          <p className="font-serif-body text-lg sm:text-xl lg:text-2xl text-[#e3d4c1] max-w-xl mx-auto italic mt-2">
            "Plan your stay with ease"
          </p>

        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stay Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Airports */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3a010c] border border-[#c5a059]/40 flex items-center justify-center flex-shrink-0 text-[#f7e7ce]">
                <Plane className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl text-[#f7e7ce] font-bold">Nearest Airports</h3>
                <ul className="list-disc pl-4 text-sm text-[#e3d4c1] space-y-1">
                  <li>Napa County Airport (APC) — 15 mins by car</li>
                  <li>Oakland International Airport (OAK) — 1 hr 10 mins by car</li>
                  <li>San Francisco International Airport (SFO) — 1 hr 25 mins by car</li>
                </ul>
              </div>
            </div>

            {/* Hotels */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3a010c] border border-[#c5a059]/40 flex items-center justify-center flex-shrink-0 text-[#f7e7ce]">
                <Hotel className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl text-[#f7e7ce] font-bold">Hotel Recommendations</h3>
                <ul className="list-disc pl-4 text-sm text-[#e3d4c1] space-y-1">
                  <li><strong>The Meritage Resort & Spa</strong> — Special rates available via our wedding block</li>
                  <li><strong>Archer Hotel Napa</strong> — Boutique lodging in downtown Napa</li>
                  <li><strong>Coombs Inn & Suites</strong> — Cozy Victorian style B&B</li>
                </ul>
              </div>
            </div>

            {/* Transport */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3a010c] border border-[#c5a059]/40 flex items-center justify-center flex-shrink-0 text-[#f7e7ce]">
                <Car className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif-display text-xl text-[#f7e7ce] font-bold">Transportation</h3>
                <p className="text-sm text-[#e3d4c1] leading-relaxed">
                  Shuttle service will be provided between the Meritage Resort and the Willow Garden Estate before the ceremony and after the reception dinner. Complimentary parking is also available at the venue.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Overlapping Collage of Travel Location Photos */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[450px]">
            {/* Top Back Image */}
            <div className="absolute top-0 right-4 w-2/3 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/30">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80"
                alt="Hotel Stay"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Front Image */}
            <div className="absolute bottom-4 left-4 w-2/3 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#c5a059]/50">
              <img
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
                alt="Napa Valley landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelStaySection;
