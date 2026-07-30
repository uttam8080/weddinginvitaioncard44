/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ScratchRevealSection } from './components/ScratchRevealSection';
import { InvitationCardSection } from './components/InvitationCardSection';
import { CountdownSection } from './components/CountdownSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TravelStaySection } from './components/TravelStaySection';
import { FooterSection } from './components/FooterSection';
import { LocationModal } from './components/LocationModal';
import { CurvedSectionDivider } from './components/CurvedSectionDivider';
import { IntroVideoSplash } from './components/IntroVideoSplash';

export default function App() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#332f2b] font-sans-body relative selection:bg-[#ebd2c8] selection:text-[#3a322a]">
      {/* Intro Splash Screen */}
      <IntroVideoSplash />

      {/* Main Flow Sections with Curved Section Dividers */}
      <main className="w-full overflow-hidden">
        {/* Section 1: Hero Section */}
        <HeroSection />

        {/* CURVED DIVIDER 1: Hero (Image) -> ScratchReveal (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="transparent"
          className="-mt-12 sm:-mt-16 lg:-mt-20 relative z-20"
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

        {/* CURVED DIVIDER 3: InvitationCard (#627254) -> Countdown (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="#627254"
        />

        {/* Section 4: Countdown Section (Hanging Tag Cards style) */}
        <CountdownSection />

        {/* CURVED DIVIDER 4: Countdown (#f4efea) -> Secret Gallery (#f7f3ea) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#f7f3ea"
          bgColor="#f4efea"
        />

        {/* Section 6: Secret Gallery Archive */}
        <ScheduleSection />

        {/* CURVED DIVIDER 6: Secret Gallery (#f7f3ea) -> Travel & Stay (#4a0213) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#4a0213"
          bgColor="#f7f3ea"
        />

        {/* Section 7: Travel & Stay */}
        <TravelStaySection />

        {/* CURVED DIVIDER 7: Travel (#4a0213) -> Footer (#2c3527) */}
        <CurvedSectionDivider
          variant="curve"
          fillColor="#2c3527"
          bgColor="#4a0213"
        />

        {/* Section 11: Footer Section */}
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
