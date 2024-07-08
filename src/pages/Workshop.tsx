import React from 'react';
import Navbar from '../components/Navbar.tsx';
import WorkshopText from '@/components/WorkshopText.tsx';
import GuideAndRegistButtons from '@/components/GuideAndRegistButtons.tsx';
import PCBBg from '@/components/PCBBg.tsx';
import PuzzleBg1 from '@/components/PuzzleBg1.tsx';
import PuzzleBg2 from '@/components/PuzzleBg2.tsx';
import InformationText from '@/components/InformationText.tsx';
import WorkshopSlide from '@/components/WorkshopSlide.tsx';
import WorkshopFooter from '@/components/Footer.tsx';
import workshopLogo from '../assets/workshop/workshopLogo.svg'
import pz_top_l from '../assets/workshop/puzzle-top/top-left.svg' 
import pz_top_r from '../assets/workshop/puzzle-top/top-right.svg'

const Workshop: React.FC = () => {
  return (
    <main className="bg-purple-orange relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <img
          src={pz_top_l}
          className="absolute select-none inset-0 mobile:mt-[-6.5rem] mobile:left-[-12rem] mobile:scale-[0.5] ipad:mt-[-6.5rem] ipad:left-[-12rem] ipad:scale-[1] desktop:left-[-10rem] desktop:scale-[1.2] desktop:mt-[-8rem]"
        />
        <img
          src={pz_top_r}
          className="absolute select-none mobile:mt-[-6rem] mobile:right-[-8.5rem] mobile:scale-[0.5] ipad:mt-[-6rem] ipad:right-[-8.5rem] ipad:scale-[1] desktop:right-[-5rem] desktop:scale-[1.2] desktop:mt-[-7rem]"
        />
        <Navbar />
        <PCBBg />
        <WorkshopText />
        <img src={workshopLogo} className="mx-auto select-none mobile:mt-[-2rem] mobile:scale-[0.5] ipad:mt-[0rem] ipad:scale-[0.75] desktop:mt-[1rem] desktop:scale-[1]"/>
        <p className="text-center font-fredoka text-orange-primary-5 mx-auto select-none mobile:text-[0.6rem] mobile:w-[70%] mobile:mt-[-2.5rem] ipad:text-[0.8rem] ipad:w-[35%] ipad:mt-[0rem] desktop:text-[1rem] desktop:w-[40%] desktop:mt-[1rem]">
          MAGE mengadakan workshop di bidang multimedia, IoT, dan robotik. Kegiatan ini dipandu oleh ahli untuk melatih keterampilan serta untuk mempromosikan penjurusan Teknik Komputer ITS.
        </p>
        <GuideAndRegistButtons />
        <PuzzleBg1 />
        <div className="mobile:mt-[52.5%] ipad:mt-[52.5%] desktop:mt-[52.5%]">
          <PuzzleBg2 />
          <InformationText />
          <div className="mobile:mt-[1rem] mobile:w-[90%] mobile:mx-[5%] ipad:mt-[4rem] ipad:mx-[12.5%] ipad:w-[75%] desktop:mt-[4rem] desktop:mx-[12.5%] desktop:w-[75%]">
            <WorkshopSlide />
          </div>
        </div>

        <div className="mobile:mt-[2rem] ipad:mt-[6rem] desktop:mt-[6rem]">
          <WorkshopFooter />
        </div>
      </div>
    </main>
  );
}

export default Workshop;