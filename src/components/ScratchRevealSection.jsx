import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { SCRATCH_REVEAL_DATA } from '../data/weddingData';
import { Sparkles, Calendar, CheckCircle2, RefreshCw, Download } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';

export const ScratchRevealSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  // Initialize Canvas Overlay with metallic gold & sage brush
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.offsetWidth || 500;
    const height = canvas.offsetHeight || 300;
    canvas.width = width;
    canvas.height = height;

    // Fill background with elegant metallic gold & sage foliage gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#c5a059');
    gradient.addColorStop(0.3, '#f3e5ab');
    gradient.addColorStop(0.6, '#a8b8a0');
    gradient.addColorStop(1, '#8a6a2d');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add subtle text pattern on canvas top layer
    ctx.fillStyle = 'rgba(61, 50, 38, 0.7)';
    ctx.font = 'bold 16px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('✨ SCRATCH HERE TO REVEAL ✨', width / 2, height / 2 - 10);
    ctx.font = 'italic 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Drag or touch across the card', width / 2, height / 2 + 15);

    // Add border ring on canvas
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    setIsRevealed(false);
    setScratchPercent(0);
  }, []);

  useEffect(() => {
    initCanvas();
    window.addEventListener('resize', initCanvas);
    return () => window.removeEventListener('resize', initCanvas);
  }, [initCanvas]);

  // Check cleared pixel percentage
  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    // Alpha channel is pixel index + 3
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const totalSamples = pixels.length / 16;
    const pct = Math.round((transparentCount / totalSamples) * 100);
    setScratchPercent(pct);

    if (pct > 35 && !isRevealed) {
      triggerReveal();
    }
  };

  const triggerReveal = () => {
    setIsRevealed(true);
    // Fire festive champagne confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#e3d4c1', '#8a9a86', '#d4af37']
    });
  };

  const scratch = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 32, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handleMouseDown = (e) => {
    setIsScratching(true);
    scratch(e);
  };

  const handleMouseMove = (e) => {
    if (isScratching) {
      scratch(e);
    }
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  const handleManualReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    triggerReveal();
  };

  const handleMarkCalendar = () => {
    confetti({
      particleCount: 50,
      spread: 50,
      colors: ['#8a9a86', '#c5a059']
    });

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Emma & James Wedding")}&dates=20260919T230000Z/20260920T050000Z&details=${encodeURIComponent("Join Emma & James to celebrate their wedding at The Willow Garden Estate, Napa Valley, California.")}&location=${encodeURIComponent("The Willow Garden Estate, Napa Valley, California")}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="scratch-reveal" className="py-20 px-4 bg-[#f7f3ea] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#627254]/10 text-[#627254] text-xs font-sans-body uppercase tracking-widest mb-3 border border-[#627254]/20 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8a6a27]" /> Save The Date
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl text-[#3d3226] font-medium">
            2. Wedding Scratch / Reveal Section
          </h2>
          <FlourishDivider light={false} />
        </div>

        {/* Scratch Card Container */}
        <div
          ref={containerRef}
          className="relative max-w-xl mx-auto bg-[#fbf9f4] rounded-3xl paper-shadow border border-[#e2d5c3] flex flex-col items-center justify-center overflow-hidden card-inner-border shadow-2xl"
        >
          <div className="p-8 sm:p-12 text-center my-auto space-y-4 w-full">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isRevealed ? 1 : 0.9, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="font-serif-display text-xs tracking-[0.3em] uppercase text-[#8a6a27] font-bold block">
                {SCRATCH_REVEAL_DATA.afterHeading}
              </span>

              <h3 className="font-script text-6xl sm:text-7xl text-[#3d3226] py-1">
                {SCRATCH_REVEAL_DATA.dateDisplay}
              </h3>

              <p className="font-serif-display text-base sm:text-lg text-[#5c4f42] max-w-md mx-auto italic">
                "{SCRATCH_REVEAL_DATA.afterDesc}"
              </p>

              <div className="pt-3">
                <button
                  onClick={handleMarkCalendar}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#627254] text-[#fbf9f4] font-sans-body text-xs tracking-widest uppercase hover:bg-[#4d5b41] shadow-md transition-all transform hover:scale-105"
                >
                  <Calendar className="w-4 h-4 text-[#f3e5ab]" />
                  {SCRATCH_REVEAL_DATA.buttonText}
                </button>
              </div>
            </motion.div>
          </div>

          {/* SCRATCH OVERLAY CANVAS */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
              className="absolute inset-0 w-full h-full cursor-pointer z-20 touch-none transition-opacity duration-500"
            />
          )}

          {/* Instruction helper badges when not revealed */}
          {!isRevealed && (
            <div className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none text-center px-4">
              <span className="inline-block bg-[#3d3226]/85 backdrop-blur-md text-[#f3e5ab] text-xs font-sans-body px-4 py-1.5 rounded-full shadow-lg border border-[#f3e5ab]/30">
                {scratchPercent > 0 ? `${scratchPercent}% scratched` : SCRATCH_REVEAL_DATA.beforeDesc}
              </span>
            </div>
          )}
        </div>

        {/* Before Reveal Text & Quick Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {!isRevealed ? (
            <>
              <p className="font-serif-display text-sm italic text-[#e8dfd1]">
                {SCRATCH_REVEAL_DATA.beforeTitle}
              </p>
              <button
                onClick={handleManualReveal}
                className="text-xs font-sans-body uppercase tracking-wider text-[#f3e5ab] hover:text-white underline underline-offset-4 flex items-center gap-1 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" /> Reveal Instantly
              </button>
            </>
          ) : (
            <button
              onClick={initCanvas}
              className="text-xs font-sans-body uppercase tracking-wider text-[#e8dfd1] hover:text-white flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Scratch Again
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
