import React from 'react';

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
      className={`relative w-full overflow-hidden leading-none pointer-events-none select-none -my-0.5 z-20 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
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
