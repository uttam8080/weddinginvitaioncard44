import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_DATA } from '../data/weddingData';
import { Heart, Maximize2, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { FlourishDivider, WhiteHydrangeaGarland } from './FloralDivider';

export const GallerySection = () => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [likes, setLikes] = useState({});

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const nextImage = () => {
    if (selectedImgIndex === null) return;
    setSelectedImgIndex((selectedImgIndex + 1) % GALLERY_DATA.images.length);
  };

  const prevImage = () => {
    if (selectedImgIndex === null) return;
    setSelectedImgIndex((selectedImgIndex - 1 + GALLERY_DATA.images.length) % GALLERY_DATA.images.length);
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-[#f7f3ea] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-serif-display text-xs tracking-[0.25em] uppercase text-[#8a6a27] mb-2 block font-semibold">
            {GALLERY_DATA.sectionTitle}
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#3d3226] font-medium mb-3">
            6. {GALLERY_DATA.heading}
          </h2>
          <p className="font-serif-body text-base sm:text-lg text-[#5c4f42] max-w-xl mx-auto italic">
            "{GALLERY_DATA.subtitle}"
          </p>
          <FlourishDivider light={false} />
        </div>

        {/* CINEMATIC PHOTO GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {GALLERY_DATA.images.map((item, idx) => {
            const isLiked = !!likes[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setSelectedImgIndex(idx)}
                className="group relative bg-[#fbf9f4] rounded-3xl overflow-hidden paper-shadow border border-[#e2d5c3] cursor-pointer shadow-xl hover:border-[#8a6a27] transition-all"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e2d5c3]">
                  <img
                    src={item.url}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Floating Action */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <button
                      onClick={(e) => toggleLike(item.id, e)}
                      className="p-2 rounded-full bg-white/80 backdrop-blur-md text-[#8a6a27] hover:bg-white transition-all shadow-xs"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#8a6a27] text-[#8a6a27]' : ''}`} />
                    </button>
                    <div className="p-2 rounded-full bg-white/80 backdrop-blur-md text-[#3d3226] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:-translate-y-1 transition-transform">
                    <span className="font-sans-body text-[10px] tracking-widest uppercase text-[#f3e5ab] mb-1 block">
                      Moment 0{idx + 1}
                    </span>
                    <p className="font-script text-2xl sm:text-3xl text-white font-medium leading-snug">
                      "{item.caption}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ending Thanks Message Card */}
        <div className="text-center bg-[#fbf9f4] rounded-3xl border border-[#e2d5c3] paper-shadow max-w-2xl mx-auto card-inner-border shadow-2xl relative overflow-hidden">
          <WhiteHydrangeaGarland position="top" />
          <div className="p-8 sm:p-12">
            <Sparkles className="w-6 h-6 text-[#8a6a27] mx-auto mb-3" />
            <h3 className="font-script text-4xl sm:text-5xl text-[#3d3226]">
              {GALLERY_DATA.endingMessage}
            </h3>
          </div>
          <WhiteHydrangeaGarland position="bottom" />
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImgIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setSelectedImgIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedImgIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[85vh] text-center"
            >
              <img
                src={GALLERY_DATA.images[selectedImgIndex].url}
                alt={GALLERY_DATA.images[selectedImgIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] max-w-full mx-auto object-contain rounded-xl shadow-2xl border-2 border-[#d4af37]/40"
              />
              <p className="font-script text-3xl sm:text-4xl text-[#f3e5ab] mt-6">
                "{GALLERY_DATA.images[selectedImgIndex].caption}"
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
