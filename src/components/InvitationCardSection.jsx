import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INVITATION_DATA } from '../data/weddingData';
import { Mail, Sparkles, X, Printer, Calendar, Send, Heart } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';
import invitedCardImg from '../assets/invitedcard.png';

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
          You Are Cordially Invited
        </h2>
        <FlourishDivider light={true} className="mb-8" />

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
