import React from 'react';

export const OrnateFrame = ({ src, alt, className = "", children }) => {
  return (
    <div className={`ornate-gold-frame flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)] ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || "Couple portrait"}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none"
        />
      ) : (
        children
      )}
    </div>
  );
};

export default OrnateFrame;
