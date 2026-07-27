/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ScratchRevealSection } from './components/ScratchRevealSection';
import { InvitationCardSection } from './components/InvitationCardSection';
import { LoveStorySection } from './components/LoveStorySection';
import { WeddingEventsSection } from './components/WeddingEventsSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';
import { LocationModal } from './components/LocationModal';
import { CurvedSectionDivider } from './components/CurvedSectionDivider';

export default function App() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#332f2b] font-sans-body relative selection:bg-[#ebd2c8] selection:text-[#3a322a]">
      {/* Main Flow Sections with Curved Section Dividers */}
      <main className="w-full overflow-hidden">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* CURVED DIVIDER 1: Hero (#627254) -> ScratchReveal (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="#627254"
        />

        {/* Section 2: Wedding Scratch / Reveal Section */}
        <ScratchRevealSection />

        {/* CURVED DIVIDER 2: ScratchReveal (#f7f3ea) -> InvitationCard (#627254) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#627254"
          bgColor="#f7f3ea"
        />

        {/* Section 3: Invitation Card Section */}
        <InvitationCardSection />

        {/* CURVED DIVIDER 3: InvitationCard (#627254) -> LoveStory (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="#627254"
        />

        {/* Section 4: Our Love Story */}
        <LoveStorySection />

        {/* CURVED DIVIDER 4: LoveStory (#f7f3ea) -> WeddingEvents (#627254) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#627254"
          bgColor="#f7f3ea"
        />

        {/* Section 5: Wedding Events */}
        <WeddingEventsSection onOpenLocation={() => setIsLocationOpen(true)} />

        {/* CURVED DIVIDER 5: WeddingEvents (#627254) -> Gallery (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="#627254"
        />

        {/* Section 6: Bride & Groom Image Collection */}
        <GallerySection />

        {/* CURVED DIVIDER 6: Gallery (#f7f3ea) -> Footer (#2c3527) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#2c3527"
          bgColor="#f7f3ea"
        />

        {/* Section 7: Footer Section */}
        <FooterSection />
      </main>

      {/* Interactive Modals */}

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
      />
    </div>
  );
}


