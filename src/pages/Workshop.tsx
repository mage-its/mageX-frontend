import React from 'react';
import Navbar from '../components/Navbar.tsx';
import WorkshopText from '@/components/WorkshopText.tsx';
import GuideAndRegistButtons from '@/components/GuideAndRegistButtons.tsx';
import PCBBg from '@/components/PCBBg.tsx';
import PuzzleBg1 from '@/components/PuzzleBg1.tsx';
import PuzzleBg2 from '@/components/PuzzleBg2.tsx';
import InformationText from '@/components/InformationText.tsx';
import WorkshopSlide from '@/components/WorkshopSlide.tsx';
import WorkshopFooter from '@/components/WorkshopFooter.tsx';
import ph from '../assets/workshop/placeholder.svg'

const Workshop: React.FC = () => {
  return (
    <main className="bg-orange-purple relative pb-14 min-h-screen overflow-hidden">
      <div className="relative z-10">
        <Navbar />
        <PCBBg />
        <WorkshopText />
        <img src={ph} alt="X" className="mx-auto select-none" />
        <p className="text-center select-none">Lorem ipsum</p>
        <GuideAndRegistButtons />
        <PuzzleBg1 />
        <div className="mt-[1000px]"></div>
        <PuzzleBg2 />
        <InformationText />
        <div className="w-[80%] mx-[10%] mt-[2rem]">
          <WorkshopSlide />
        </div>
        <WorkshopFooter />
      </div>
    </main>
  );
}

export default Workshop;