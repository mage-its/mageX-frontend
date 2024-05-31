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
import pz_top from '../assets/workshop/puzzle-top/puzzle-top.svg' 

const Workshop: React.FC = () => {
  return (
    <main className="bg-purple-orange relative pb-14 min-h-screen overflow-hidden">
      <div className="relative z-10">
        <img src={pz_top} className="mx-auto mt-[-7rem] select-none scale-[1.2] absolute inset-0" />
        <Navbar />
        <PCBBg />
        <WorkshopText />
        <img src={ph} alt="X" className="mx-auto select-none mobile:scale-[0.5]" />
        <p className="text-justify select-none m-auto w-[40%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        <GuideAndRegistButtons />
        <PuzzleBg1 />
        <div className="mt-[780px]">
          <PuzzleBg2 />
          <InformationText />
          <div className="w-[75%] mx-[12.5%] mt-[4rem]">
            <WorkshopSlide />
          </div>
          <WorkshopFooter />
        </div>
      </div>
    </main>
  );
}

export default Workshop;