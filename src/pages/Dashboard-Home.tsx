import React from 'react';
import Navbar from '../components/Navbar.tsx';
import WorkshopText from '@/components/WorkshopText.tsx';
import GuideAndRegistButtons from '@/components/GuideAndRegistButtons.tsx';
import PCBBg from '@/components/PCBBg.tsx';
import PuzzleBg1 from '@/components/PuzzleBg1.tsx';
import InformationText from '@/components/InformationText.tsx';
import WorkshopSlide from '@/components/WorkshopSlide.tsx';
import WorkshopFooter from '@/components/WorkshopFooter.tsx';
import x from '../assets/brand/logo.svg';
import Footer from '@/components/Footer.tsx';

const Workshop: React.FC = () => {
  return (
    <main className="bg-orange-purple relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <PCBBg />
        <WorkshopText />
        <img src={x} alt="X" className="mx-auto select-none size-40" />
        <p className="text-center select-none">Dashboard</p>
        <GuideAndRegistButtons />
        <PuzzleBg1 />
        <div className="mt-[1000px]"></div>
        <InformationText />
        <div className="w-[80%] mx-[10%]">
          <WorkshopSlide />
        </div>
        <WorkshopFooter />
      </div>
      <Footer />
    </main>
  );
}

export default Workshop;