import React from 'react';

// WHITE ROSE WATERCOLOR FLORAL DIVIDER & GARLANDS
// Matches the user's reference: white roses with soft cream/peach tones & lush green leaves

// Calligraphic swirl divider with white rose & gold crown accents
export const FlourishDivider = ({ light = false, withFloralAccent = false, className = '' }) => {
  const strokeColor = light ? '#f3e5ab' : '#627254';
  const fillColor = light ? '#f3e5ab' : '#8a6a2d';

  return (
    <div className={`flex flex-col items-center justify-center my-6 gap-2 opacity-95 ${className}`}>
      {/* Mini white rose garland accent in center */}
      {withFloralAccent && (
        <div className="relative w-48 h-10 overflow-hidden flex items-center justify-center pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80"
            alt="White Rose Watercolor Accent"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[1.05]"
            style={{
              clipPath: 'ellipse(48% 60% at 50% 50%)',
              maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 95%)'
            }}
          />
        </div>
      )}

      <svg width="280" height="24" viewBox="0 0 280 24" fill="none" className="max-w-full">
        <path
          d="M10 12 C 40 12, 50 4, 80 12 C 100 18, 115 12, 130 12"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M25 12 C 40 17, 60 17, 75 12"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
        {/* Center Royal Crown */}
        <path
          d="M135 8 L137 13 L140 7 L143 13 L145 8 L147 15 L133 15 Z"
          fill={fillColor}
        />
        <circle cx="140" cy="18" r="2" fill={strokeColor} />
        <circle cx="126" cy="12" r="1.5" fill={strokeColor} />
        <circle cx="154" cy="12" r="1.5" fill={strokeColor} />

        <path
          d="M270 12 C 240 12, 230 4, 200 12 C 180 18, 165 12, 150 12"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M255 12 C 240 17, 220 17, 205 12"
          stroke={strokeColor}
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
};

// CURVED COLLECTION OF WHITE ROSES SECTION DIVIDER
// As requested: "add this flower is in all section divider" (white roses + green foliage curved garland)
export const CurvedHydrangeaGarland = ({ variant = 'smile', className = '' }) => {
  // High quality watercolor white roses with dark green botanical foliage image
  const flowerImageUrl = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80";

  if (variant === 'hero-bottom') {
    return (
      <div className={`relative w-full overflow-hidden pointer-events-none select-none my-4 z-20 ${className}`}>
        <div className="relative w-full h-24 sm:h-32 flex justify-center items-center">
          <div className="w-full max-w-2xl h-24 sm:h-32 relative mx-auto flex justify-center overflow-hidden">
            <img
              src={flowerImageUrl}
              alt="Curved White Rose Garland"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[1.05]"
              style={{
                clipPath: 'ellipse(50% 75% at 50% 80%)',
                maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full flex justify-center items-center my-8 pointer-events-none select-none relative z-10 ${className}`}>
      <div className="relative w-full max-w-2xl px-4 flex items-center justify-center">
        {/* Curved White Rose & Foliage Floral Garland Graphic */}
        <div className="relative w-full h-20 sm:h-28 overflow-hidden flex items-center justify-center">
          <img
            src={flowerImageUrl}
            alt="Curved Collection of White Roses & Green Leaves"
            referrerPolicy="no-referrer"
            className={`w-full max-w-xl h-24 sm:h-32 object-cover object-center filter contrast-[1.08] brightness-[1.05] ${
              variant === 'arch' ? 'rotate-180' : ''
            }`}
            style={{
              clipPath: variant === 'arch'
                ? 'ellipse(55% 85% at 50% 15%)'
                : 'ellipse(55% 85% at 50% 85%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

// White Rose Botanical Garland for page edges & card tops/bottoms
export const WhiteHydrangeaGarland = ({
  position = 'top',
  className = ''
}) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none flex justify-center ${
        position === 'bottom' ? 'rotate-180 -mt-2' : '-mb-2'
      } ${className}`}
    >
      <img
        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80"
        alt="White Rose Botanical Frame"
        referrerPolicy="no-referrer"
        className="w-full max-w-2xl h-24 sm:h-32 object-cover object-center filter contrast-[1.05] brightness-[1.05] opacity-95 rounded-t-3xl"
        style={{
          maskImage: position === 'top' 
            ? 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' 
            : 'linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: position === 'top'
            ? 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
  );
};

// ORGANIC FULL-WIDTH FLORAL SECTION DIVIDER
// As requested: Natural arrangement of white hydrangea & rose flowers with soft green foliage
// extends full-width and seamlessly overlaps section boundaries asymmetrically.
export const OrganicFullWidthFloralDivider = ({ variant = 'sweeping-garland', className = '' }) => {
  const hydrangeaImage = "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1600&q=80";
  const whiteRoseImage = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className={`relative w-full z-30 pointer-events-none select-none my-[-3rem] sm:my-[-4.5rem] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-0 sm:px-4 relative h-28 sm:h-40 flex items-center justify-between">
        
        {/* ASYMMETRICAL FLORAL CLUSTER - LEFT SIDE */}
        <div className={`relative transition-all duration-500 ${
          variant === 'left-heavy' 
            ? 'w-3/5 sm:w-1/2 h-32 sm:h-44 -ml-4 sm:-ml-8 -rotate-3 scale-110' 
            : 'w-2/5 sm:w-1/3 h-24 sm:h-32 -ml-2 rotate-6'
        }`}>
          <img
            src={hydrangeaImage}
            alt="White Hydrangea Bloom Cluster Left"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-[1.06] brightness-[1.05] drop-shadow-xl"
            style={{
              clipPath: 'ellipse(60% 75% at 40% 50%)',
              maskImage: 'radial-gradient(ellipse at 40% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 40% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)'
            }}
          />
        </div>

        {/* SWEEPING VINE & FLOWER GARLAND - CENTER BRIDGE */}
        <div className="absolute inset-x-0 mx-auto w-11/12 sm:w-4/5 h-20 sm:h-28 z-10 flex items-center justify-center">
          <img
            src={whiteRoseImage}
            alt="Seamless Organic Floral Garland"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover filter contrast-[1.08] brightness-[1.04] opacity-90 ${
              variant === 'centered-arch' ? 'rotate-180 scale-105' : ''
            }`}
            style={{
              clipPath: variant === 'centered-arch'
                ? 'ellipse(55% 85% at 50% 15%)'
                : 'ellipse(60% 70% at 50% 50%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}
          />
        </div>

        {/* ASYMMETRICAL FLORAL CLUSTER - RIGHT SIDE */}
        <div className={`relative transition-all duration-500 ${
          variant === 'right-heavy' 
            ? 'w-3/5 sm:w-1/2 h-32 sm:h-44 -mr-4 sm:-mr-8 rotate-3 scale-110' 
            : 'w-2/5 sm:w-1/3 h-24 sm:h-32 -mr-2 -rotate-6'
        }`}>
          <img
            src={hydrangeaImage}
            alt="White Hydrangea Bloom Cluster Right"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter contrast-[1.06] brightness-[1.05] drop-shadow-xl"
            style={{
              clipPath: 'ellipse(60% 75% at 60% 50%)',
              maskImage: 'radial-gradient(ellipse at 60% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 60% 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)'
            }}
          />
        </div>

      </div>
    </div>
  );
};

