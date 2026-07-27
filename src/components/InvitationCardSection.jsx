import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INVITATION_DATA } from '../data/weddingData';
import { Mail, Sparkles, X, Printer, Calendar, Send, Heart } from 'lucide-react';
import { FlourishDivider, WhiteHydrangeaGarland } from './FloralDivider';

export const InvitationCardSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="invitation" className="py-24 px-4 bg-[#627254] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#f3e5ab] mb-2 block font-medium">
          Official Wedding Announcement
        </span>
        <h2 className="font-serif-display text-3xl sm:text-5xl text-[#fbf9f4] mb-4">
          3. Invitation Card Section
        </h2>
        <FlourishDivider light={true} className="mb-8" />

        {/* LUXURY PAPER INVITATION CARD */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="max-w-2xl mx-auto bg-[#fbf9f4] rounded-3xl paper-shadow border border-[#e2d5c3] relative overflow-hidden card-inner-border shadow-2xl"
        >
          <WhiteHydrangeaGarland position="top" />

          <div className="p-8 sm:p-14 text-center">
            {/* Top Wax Seal Graphic */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#8a6a27] text-[#f3e5ab] flex items-center justify-center shadow-lg border-2 border-[#f3e5ab]">
                <span className="font-script text-2xl font-bold">E&J</span>
              </div>
            </div>

            {/* Invitation Content */}
            <div className="space-y-5 text-[#3d3226]">
              <p className="font-serif-display text-sm sm:text-base tracking-widest uppercase text-[#8a7b6a] font-medium">
                {INVITATION_DATA.heading}
              </p>

              {/* Names */}
              <div className="py-2 space-y-1">
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3d3226] font-semibold tracking-wide">
                  {INVITATION_DATA.brideName}
                </h3>
                <p className="font-script text-4xl sm:text-5xl text-[#8a6a27] my-1">&</p>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#3d3226] font-semibold tracking-wide">
                  {INVITATION_DATA.groomName}
                </h3>
              </div>

              <FlourishDivider />

              <p className="font-serif-body text-sm sm:text-base italic text-[#5c4f42] leading-relaxed max-w-lg mx-auto">
                {INVITATION_DATA.invitationBody}
              </p>

              {/* Date Details */}
              <div className="py-4 border-y border-[#e2d5c3] max-w-md mx-auto space-y-1">
                <p className="font-serif-display text-lg sm:text-xl font-bold text-[#3d3226]">
                  {INVITATION_DATA.dateText}
                </p>
                <p className="font-serif-display text-sm tracking-wider uppercase text-[#8a7b6a] font-medium">
                  {INVITATION_DATA.yearText}
                </p>
                <p className="font-serif-display text-sm italic text-[#5c4f42]">
                  {INVITATION_DATA.timeText}
                </p>
              </div>

              {/* Location */}
              <div className="space-y-1 pt-2">
                <p className="font-serif-display text-lg font-bold text-[#3d3226]">
                  {INVITATION_DATA.venue}
                </p>
                <p className="font-sans-body text-xs tracking-widest uppercase text-[#8a7b6a]">
                  {INVITATION_DATA.location}
                </p>
              </div>

              <p className="font-script text-2xl sm:text-3xl text-[#627254] pt-3">
                "{INVITATION_DATA.note}"
              </p>
            </div>

            {/* CTA Button inside card */}
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#627254] text-[#fbf9f4] font-sans-body text-xs tracking-widest uppercase hover:bg-[#4d5b41] shadow-md transition-all transform hover:scale-105"
              >
                <Mail className="w-4 h-4 text-[#f3e5ab]" />
                {INVITATION_DATA.buttonText}
              </button>
            </div>
          </div>

          <WhiteHydrangeaGarland position="bottom" />
        </motion.div>
      </div>

      {/* FULL INVITATION MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#fffdfa] rounded-2xl paper-shadow border border-[#c5a059] p-8 sm:p-16 my-8 text-center card-inner-border"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f1eb] text-[#6b5d4d] hover:bg-[#e2d5c3] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="font-script text-4xl text-[#c5a059]">Wedding Invitation</span>

                <div className="space-y-3">
                  <p className="font-serif-display text-sm tracking-widest uppercase text-[#8c7b68]">
                    {INVITATION_DATA.heading}
                  </p>
                  <h2 className="font-serif-display text-4xl sm:text-5xl text-[#332a21]">
                    {INVITATION_DATA.brideName}
                  </h2>
                  <p className="font-script text-4xl text-[#c5a059]">&</p>
                  <h2 className="font-serif-display text-4xl sm:text-5xl text-[#332a21]">
                    {INVITATION_DATA.groomName}
                  </h2>
                </div>

                <p className="font-serif-body text-base italic text-[#5c4e40] max-w-lg mx-auto leading-relaxed">
                  {INVITATION_DATA.invitationBody}
                </p>

                <div className="p-6 bg-[#f8f5ef] rounded-xl max-w-md mx-auto space-y-2 border border-[#e8dfd1]">
                  <p className="font-serif-display text-xl font-medium text-[#332a21]">
                    {INVITATION_DATA.dateText}, {INVITATION_DATA.yearText}
                  </p>
                  <p className="font-serif-display text-base text-[#635547]">
                    {INVITATION_DATA.timeText}
                  </p>
                  <hr className="border-[#e2d5c3] my-2" />
                  <p className="font-serif-display text-lg font-semibold text-[#3a322a]">
                    {INVITATION_DATA.venue}
                  </p>
                  <p className="font-sans-body text-xs tracking-wider uppercase text-[#8c7b68]">
                    {INVITATION_DATA.location}
                  </p>
                </div>

                <p className="font-script text-3xl text-[#7a6a58]">
                  {INVITATION_DATA.note}
                </p>

                {/* Modal Action Buttons */}
                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#c5a059] text-[#7a6a58] hover:bg-[#f4f1eb] font-sans-body text-xs tracking-wider uppercase transition-all"
                  >
                    <Printer className="w-4 h-4 text-[#c5a059]" />
                    Print Invitation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
