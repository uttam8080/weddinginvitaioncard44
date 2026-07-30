import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Folder from './Folder';

import { Sparkles, Heart, Camera, X } from 'lucide-react';
import secretBgImg from '../assets/background2.png';

export const ScheduleSection = () => {
  const [activeDetailCard, setActiveDetailCard] = useState(null);

  // Secret Gallery Albums Data (Contains only image URLs for the folders)
  const galleryAlbums = {
    proposal: [
      {
        image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=80',
      }
    ],
    travels: [
      {
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
      }
    ],
    moments: [
      {
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80',
      },
      {
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80',
      }
    ]
  };

  // Helper to convert structured data to Folder paper preview elements containing ONLY the image
  const createFolderItems = (dataList) => {
    return dataList.map((item, idx) => (
      <div key={idx} className="w-full h-full flex flex-col bg-[#fffdf6] rounded-lg overflow-hidden select-none">
        <div className="w-full h-full overflow-hidden bg-[#e2d5c3]">
          <img
            src={item.image}
            alt="Secret Memory Preview"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>
    ));
  };

  return (
    <section 
      id="secret-gallery" 
      className="py-24 px-4 bg-[#f7f3ea] text-[#3d3226] relative overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${secretBgImg})` }}
    >
      {/* Delicate background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8a6a27_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">
        {/* Header */}
        <div>
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#8a6a27] mb-2 block font-semibold">
            Gallery Archive
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium">
            Our Secret Memories
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#5c4f42] max-w-xl mx-auto italic mt-2">
            Click each folder to unlock our hidden photo albums.
          </p>

        </div>

        {/* 3 Folders Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-10 py-16 min-h-[480px] max-w-5xl mx-auto">
          
          {/* Folder 1: Proposal */}
          <div className="flex flex-col items-center space-y-6">
            <span className="font-serif-display text-lg font-bold text-[#8a6a27] uppercase tracking-wider flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#8a6a27]" /> Secret Proposal
            </span>
            <div className="w-[200px] h-[160px] flex items-center justify-center relative">
              <Folder
                color="#c5a059"
                size={1.4}
                items={createFolderItems(galleryAlbums.proposal)}
                onPaperClick={(paperIndex) => setActiveDetailCard(galleryAlbums.proposal[paperIndex])}
                className="transition-transform duration-300"
              />
            </div>
          </div>

          {/* Folder 2: Travels */}
          <div className="flex flex-col items-center space-y-6">
            <span className="font-serif-display text-lg font-bold text-[#8a6a27] uppercase tracking-wider flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#8a6a27]" /> Travels Together
            </span>
            <div className="w-[200px] h-[160px] flex items-center justify-center relative">
              <Folder
                color="#627254"
                size={1.4}
                items={createFolderItems(galleryAlbums.travels)}
                onPaperClick={(paperIndex) => setActiveDetailCard(galleryAlbums.travels[paperIndex])}
                className="transition-transform duration-300"
              />
            </div>
          </div>

          {/* Folder 3: Moments */}
          <div className="flex flex-col items-center space-y-6">
            <span className="font-serif-display text-lg font-bold text-[#8a6a27] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#8a6a27]" /> Daily Moments
            </span>
            <div className="w-[200px] h-[160px] flex items-center justify-center relative">
              <Folder
                color="#8a6a27"
                size={1.4}
                items={createFolderItems(galleryAlbums.moments)}
                onPaperClick={(paperIndex) => setActiveDetailCard(galleryAlbums.moments[paperIndex])}
                className="transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox / Zoomed Card Overlay */}
      <AnimatePresence>
        {activeDetailCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
            {/* Click backdrop to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveDetailCard(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl max-h-[85vh] z-10 flex items-center justify-center"
            >
              {/* Close Button "X" */}
              <button
                onClick={() => setActiveDetailCard(null)}
                className="absolute top-[-45px] right-0 sm:top-[-45px] sm:right-[-45px] p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#fbf9f4] border border-white/20 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Main Photo with Elegant White Border */}
              <div className="p-3 bg-[#fffdf6] rounded-3xl paper-shadow border border-[#c5a059] shadow-2xl flex items-center justify-center max-w-full">
                <img
                  src={activeDetailCard.image}
                  alt="Secret Memory Detail"
                  className="max-h-[70vh] sm:max-h-[75vh] w-auto object-contain rounded-2xl select-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScheduleSection;
