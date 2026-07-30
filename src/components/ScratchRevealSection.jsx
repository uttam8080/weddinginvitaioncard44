import React, { useRef, useEffect, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { SCRATCH_REVEAL_DATA } from '../data/weddingData';
import { Sparkles } from 'lucide-react';
import { FlourishDivider } from './FloralDivider';
import scratchBgImg from '../assets/scratchimg.png';
import transparentFlower from '../assets/flowers.png';

// Botanical Leafy Wreath SVG wrapping the gold scratch circle
const BotanicalWreath = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer vine rings */}
    <circle cx="160" cy="160" r="142" stroke="#627254" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.4" />
    <circle cx="160" cy="160" r="136" stroke="#8A6A27" strokeWidth="1" strokeOpacity="0.3" />

    {/* Left Leafy Arc */}
    <path d="M 160 24 C 80 24, 24 80, 24 160 C 24 240, 80 296, 160 296" stroke="#627254" strokeWidth="2.5" strokeLinecap="round" />
    {/* Right Leafy Arc */}
    <path d="M 160 24 C 240 24, 296 80, 296 160 C 296 240, 240 296, 160 296" stroke="#627254" strokeWidth="2.5" strokeLinecap="round" />

    {/* Sage Green & Olive Leaves arranged along the circle */}
    {[
      { rotate: 0, x: 160, y: 24 },
      { rotate: 30, x: 228, y: 42 },
      { rotate: 60, x: 278, y: 92 },
      { rotate: 90, x: 296, y: 160 },
      { rotate: 120, x: 278, y: 228 },
      { rotate: 150, x: 228, y: 278 },
      { rotate: 180, x: 160, y: 296 },
      { rotate: 210, x: 92, y: 278 },
      { rotate: 240, x: 42, y: 228 },
      { rotate: 270, x: 24, y: 160 },
      { rotate: 300, x: 42, y: 92 },
      { rotate: 330, x: 92, y: 42 },
    ].map((item, idx) => (
      <g key={idx} transform={`translate(${item.x}, ${item.y}) rotate(${item.rotate})`}>
        <path d="M0 0 Q -12 -8 -15 -18 Q -5 -15 0 0 Z" fill="#627254" />
        <path d="M0 0 Q 12 -8 15 -18 Q 5 -15 0 0 Z" fill="#8A9A86" />
        <circle cx="0" cy="-22" r="3" fill="#C5A059" />
      </g>
    ))}

    {/* Additional subtle gold berry accents */}
    {[45, 135, 225, 315].map((deg, idx) => {
      const rad = (deg * Math.PI) / 180;
      const x = 160 + 136 * Math.cos(rad);
      const y = 160 + 136 * Math.sin(rad);
      return <circle key={idx} cx={x} cy={y} r="4.5" fill="#8A6A27" fillOpacity="0.7" />;
    })}
  </svg>
);

const SCRATCH_ITEMS = SCRATCH_REVEAL_DATA.items || [];

const ScratchCardItem = ({ item }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  // Initialize Circular Gold Foil Canvas
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.offsetWidth || 146;
    const height = canvas.offsetHeight || 146;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2;

    const gradient = ctx.createRadialGradient(centerX - 25, centerY - 25, 10, centerX, centerY, radius);
    gradient.addColorStop(0, '#FFF2B2');
    gradient.addColorStop(0.35, '#D4AF37');
    gradient.addColorStop(0.75, '#C5A059');
    gradient.addColorStop(1, '#997A3D');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 3, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(61, 50, 38, 0.75)';
    ctx.font = 'bold 9.5px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.foilLabel || '✨ SCRATCH FOIL ✨', centerX, centerY);

    setIsRevealed(false);
  }, [item.foilLabel]);

  useEffect(() => {
    initCanvas();
    const handleResize = () => initCanvas();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initCanvas]);

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }

    const totalSamples = pixels.length / 16;
    const pct = Math.round((transparentCount / totalSamples) * 100);

    if (pct > 30 && !isRevealed) {
      setIsRevealed(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#C5A059', '#8A9A86', '#FFF2B2']
      });
    }
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
    ctx.arc(x, y, 16, 0, Math.PI * 2);
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

  return (
    <div
      ref={containerRef}
      className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex items-center justify-center my-2 select-none group"
    >
      {/* Wreath SVG border */}
      <BotanicalWreath />

      {/* Hidden Revealed Content inside the Circle */}
      <div className="w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] rounded-full overflow-hidden relative z-20 shadow-inner border border-[#e2d5c3] bg-[#fffdf9] flex flex-col items-center justify-center p-2 text-center select-none transition-transform duration-300 group-hover:scale-105">
        <span className="font-serif-display text-[9px] tracking-[0.15em] text-[#8a6a27] uppercase font-bold mb-0.5">
          {item.label}
        </span>
        <h4 className={item.mainClass}>
          {item.mainText}
        </h4>
        <p className="font-sans-body text-[9px] text-[#6b5d4d] tracking-widest uppercase mt-0.5 font-semibold">
          {item.subText}
        </p>
        <div className="mt-0.5 text-[#c5a059]">
          <Sparkles className="w-3 h-3 inline-block animate-spin-slow" />
        </div>
      </div>

      {/* GOLD FOIL SCRATCH OVERLAY CANVAS (Circular) */}
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
          className="absolute w-[132px] h-[132px] sm:w-[146px] sm:h-[146px] rounded-full cursor-pointer z-30 touch-none shadow-md transition-opacity duration-500"
        />
      )}
    </div>
  );
};

export const ScratchRevealSection = () => {
  return (
    <section 
      id="scratch-reveal" 
      className="py-24 px-4 bg-[#fbf9f4] relative overflow-hidden bg-[length:100%_100%] bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${scratchBgImg})` }}
    >
      <div className="absolute inset-0 bg-[#f7f3ea]/60 pointer-events-none" /> {/* Optional soft overlay to keep text legible */}
      <div className="max-w-5xl mx-auto text-center relative z-[60]">
        {/* Section Title */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#627254]/10 text-[#627254] text-xs font-sans-body uppercase tracking-widest mb-3 border border-[#627254]/20 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#8a6a27]" /> {SCRATCH_REVEAL_DATA.sectionTag || "Interactive Save The Date"}
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl text-[#3d3226] font-medium mb-4">
            {SCRATCH_REVEAL_DATA.heading || "Scratch To Reveal Our Details"}
          </h2>
          <div className="flex justify-center w-full mt-6 mb-8">
            <img src={transparentFlower} alt="Floral Accent" className="w-64 sm:w-80 lg:w-96 object-contain drop-shadow-md" />
          </div>
        </div>

        {/* 3 CIRCLE SCRATCH CARDS CONTAINER */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-10 my-10 max-w-5xl mx-auto">
          {SCRATCH_ITEMS.map((item) => (
            <ScratchCardItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
