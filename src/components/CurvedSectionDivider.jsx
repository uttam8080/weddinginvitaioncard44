import React from 'react';
import transparentFlower from '../assets/flowers.png';

/**
 * Pure Clean Curved Section Divider
 * Smooth, elegant SVG curve transition between sections.
 */
export const CurvedSectionDivider = ({
  variant = 'curve',
  fillColor = '#f7f3ea',
  bgColor = '#627254',
  flipX = false,
  flipY = false,
  className = '',
  withFloralAccent = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-visible leading-none pointer-events-none select-none -my-0.5 z-40 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Flower Garland - Filling the entire curved section divider */}
      
      {/* Far Left Flower */}
      <div className="absolute left-[-2rem] sm:left-[-1rem] lg:left-0 bottom-1/4 sm:bottom-1/3 lg:bottom-1/2 translate-y-1/2 z-50 pointer-events-none">
        <img 
          src={transparentFlower} 
          alt="Flower Accent Left" 
          className="w-56 sm:w-80 lg:w-[32rem] object-contain drop-shadow-2xl"
          style={{ transform: 'rotate(4deg)' }}
        />
      </div>

      {/* Center Left Flower */}
      <div className="absolute left-[20%] sm:left-[25%] lg:left-[30%] bottom-[10%] sm:bottom-[15%] lg:bottom-[20%] translate-y-1/2 z-40 pointer-events-none">
        <img 
          src={transparentFlower} 
          alt="Flower Accent Center Left" 
          className="w-56 sm:w-80 lg:w-[32rem] object-contain drop-shadow-2xl"
          style={{ transform: 'rotate(1deg)' }}
        />
      </div>

      {/* Center Right Flower */}
      <div className="absolute right-[20%] sm:right-[25%] lg:right-[30%] bottom-[10%] sm:bottom-[15%] lg:bottom-[20%] translate-y-1/2 z-40 pointer-events-none">
        <img 
          src={transparentFlower} 
          alt="Flower Accent Center Right" 
          className="w-56 sm:w-80 lg:w-[32rem] object-contain drop-shadow-2xl"
          style={{ transform: 'rotate(-1deg)' }}
        />
      </div>

      {/* Far Right Flower */}
      <div className="absolute right-[-2rem] sm:right-[-1rem] lg:right-0 bottom-1/4 sm:bottom-1/3 lg:bottom-1/2 translate-y-1/2 z-50 pointer-events-none">
        <img 
          src={transparentFlower} 
          alt="Flower Accent Right" 
          className="w-56 sm:w-80 lg:w-[32rem] object-contain drop-shadow-2xl"
          style={{ transform: 'rotate(-4deg)' }}
        />
      </div>

      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        shapeRendering="geometricPrecision"
        className={`w-full h-12 sm:h-16 lg:h-20 block ${flipX ? 'scale-x-[-1]' : ''} ${
          flipY ? 'rotate-180' : ''
        }`}
      >
        {variant === 'arch' ? (
          /* Single smooth upward dome arch curve */
          <path
            d="M 0,120 C 360,15 840,15 1200,120 L 1200,0 L 0,0 Z"
            fill={fillColor}
          />
        ) : (
          /* Single smooth downward curve */
          <path
            d="M 0,0 C 340,85 860,85 1200,0 L 1200,120 L 0,120 Z"
            fill={fillColor}
          />
        )}
      </svg>
    </div>
  );
};
