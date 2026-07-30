import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INVITATION_DATA } from '../data/weddingData';
import { Mail, Sparkles, X, Printer, Calendar, Send, Heart } from 'lucide-react';

import invitedCardImg from '../assets/invitaioncard.png';

export const InvitationCardSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="invitation" className="py-24 pt-28 sm:pt-32 px-4 bg-[#627254] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-[60]">
        <h2 className="font-serif-display text-3xl sm:text-5xl text-[#fbf9f4] mb-14">
          You Are Cordially Invited
        </h2>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#d4af37]/20 text-[#f3e5ab] text-xs font-sans-body uppercase tracking-widest mb-8 border border-[#d4af37]/30 font-semibold">
          Official Wedding Announcement
        </span>


        {/* CUSTOM INVITATION CARD IMAGE */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="max-w-2xl mx-auto relative shadow-2xl rounded-lg overflow-hidden"
        >
          <img 
            src={invitedCardImg} 
            alt="Wedding Invitation" 
            className="w-full h-auto object-contain block"
          />
        </motion.div>
      </div>


    </section>
  );
};
