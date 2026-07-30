import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const IntroVideoSplash = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasTapped, setHasTapped] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef(null);
  const fallbackTimerRef = useRef(null);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
    };
  }, [showSplash]);

  const handleLoadedMetadata = () => {
    // Force the video to show its first frame by seeking slightly forward
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
      setIsReady(true);
    }
  };

  const handleVideoEnd = () => {
    setShowSplash(false);
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
    }
  };

  const handleTap = () => {
    if (!hasTapped && videoRef.current) {
      setHasTapped(true);
      videoRef.current.play().catch(e => console.error("Playback failed:", e));

      // Fallback in case video fails to play or gets stuck
      fallbackTimerRef.current = setTimeout(() => {
        setShowSplash(false);
      }, 15000); // 15 seconds max after tapping
    }
  };

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer bg-black"
          onClick={handleTap}
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            muted
            playsInline
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleVideoEnd}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
            preload="auto"
          >
            {/* Added #t=0.1 as a secondary fallback for rendering the first frame */}
            <source src="https://res.cloudinary.com/n0c7bqpd/video/upload/q_auto/v1785439757/TensorPix_-_WhatsApp_Video_2026-07-30_at_22_online-video-cutter_nrvrcn.mp4#t=0.1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
