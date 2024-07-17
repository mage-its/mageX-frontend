import React from 'react';
import PersonalLogo from '@/assets/dashboardWorkshop/personalLogo.svg';
import WhiteLine2 from '@/assets/dashboardWorkshop/whiteLine2.svg';
import useDragScroll from '@/components/dashboardHome/useDragScroll';
import { Workshop } from '@/constant/dashboardWorkshop';

interface PersonalInformationProps {
  currentWorkshop: Workshop;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ currentWorkshop }) => {
  const scrollRef = useDragScroll();

  return (
    <div className='w-full h-full select-none'>
      {/* Desktop Display */}
      <div className="text-light font-fredoka bg-transparent_black rounded-[1rem] w-full h-full overflow-hidden mobile:hidden ipad:hidden desktop:block">
        <div className="bg-gray-5 px-8 py-2 h-[3rem] flex rounded-t-[1rem] items-center">
          <img src={PersonalLogo} className="select-none h-[1.25rem]" alt="Personal Logo" />
          <h2 className="text-light font-fredoka mx-[1rem] select-none text-[20px]">
            Personal Information
          </h2>
          <h2 className="text-gray-5 font-medium bg-light rounded-[1rem] px-2 py-1 font-fredoka select-none text-[0.7rem]">
            Scroll to see more
          </h2>
        </div>
        <div className="flex h-[calc(100%-3rem)] max-h-full items-center py-8">
          <div className="flex flex-col w-[50%] h-full pl-16 pr-2 text-[13px] justify-center">
            <div
              className="border-light border-[2px] rounded-xl p-4 h-full overflow-auto no-scrollbar"  
              ref={scrollRef}
              style={{ cursor: 'grab' }}
            >
              <div className="flex-col font-roboto">
                {currentWorkshop.informasiDiri}
                <div className="mt-4">Tanggal: {currentWorkshop.tanggal}</div>
                <div>Jam: {currentWorkshop.jam}</div>
                <div>Tempat: {currentWorkshop.tempat}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[50%] h-full pl-4 my-8 text-[13px] justify-center">
            <div className="relative w-full h-fit flex flex-col items-center">
              <div className="bg-blue-purple-orange-1 rounded-[100%] w-[8rem] h-[8rem] flex items-center overflow-hidden justify-center">
                <img src={currentWorkshop.foto} className="w-full h-full" alt={currentWorkshop.pembicara} />
              </div>
              
              <div className="mt-[-1rem] px-2 bg-white rounded-md text-center shadow-md">
                <div className="w-full relative flex text-justify select-none">
                  <span
                    style={{
                      position: 'absolute',
                      color: 'transparent',
                      textShadow: `
                        0 0 0 #FFFFFF, 
                        1px 1px 0 #FFFFFF, 
                        -1px -1px 0 #FFFFFF, 
                        1px -1px 0 #FFFFFF, 
                        -1px 1px 0 #FFFFFF,
                        2px 2px 0 #FFFFFF,
                        -2px -2px 0 #FFFFFF,
                        2px -2px 0 #FFFFFF,
                        -2px 2px 0 #FFFFFF,
                        6px 6px 6px #cA4F14,
                        12px 12px 12px #cA4F14
                      `,
                      pointerEvents: 'none',
                      zIndex: -1
                    }}
                    className="font-airstrike font-italic font-bold inline-block text-[18px]"
                  >
                    {currentWorkshop.pembicara}
                  </span>
                  <span
                    style={{
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                    className="font-airstrike font-italic font-bold bg-blue-purple-orange-1 inline-block px-1 text-[18px]"
                  >
                    {currentWorkshop.pembicara}
                  </span>
                </div>
              </div>
              <div className="text-[8px] mt-3 h-[3rem] text-gray-5 text-center">
                <div className="flex-col font-medium align-left my-auto bg-light px-4 py-2 rounded-xl opacity-70">
                  {currentWorkshop.background} <br />
                  {currentWorkshop.spesialis}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and iPad Display */}
      <div className="text-light font-fredoka bg-transparent_black rounded-[1rem] h-full overflow-hidden 
                      mobile:mx-6 mobile:mt-6 mobile:block
                      ipad:mx-6 ipad:mt-6 ipad:block 
                      desktop:hidden">
        <div className="bg-gray-5  py-2 flex rounded-t-[1rem] items-center
                        mobile:h-[5rem] mobile:px-4
                        ipad:h-[5rem] ipad:px-8">
          {/* Mobile */}
          <div className="items-center mobile:flex ipad:hidden">
            <img src={PersonalLogo} className="select-none w-[1rem]" alt="Trophy Logo" />
            <div className="flex-col ml-[0.5rem] items-center">
              <h2 className="text-light font-fredoka mb-1 select-none text-[12px]">
                Personal Information
              </h2>
              <h2 className="text-gray-5 w-fit font-medium bg-light rounded-[1rem] px-2 py-1 font-fredoka select-none text-[9px]">
                Scroll to see more
              </h2>
            </div>
          </div>
          {/* iPad */}
          <div className="items-center mobile:hidden ipad:flex">
            <img src={PersonalLogo} className="select-none w-[2rem]" alt="Trophy Logo" />
            <h2 className="text-light font-fredoka mx-[1rem] mb-1 select-none text-[23px]">
              Personal Information
            </h2>
            <h2 className="text-gray-5 w-fit font-medium bg-light rounded-[1rem] px-2 py-1 font-fredoka select-none text-[18px]">
              Scroll to see more
            </h2>
          </div>
        </div>
        <div
          className="flex-col overflow-hidden
                     mobile:px-4 ipad:px-16"
        >
          <div className="flex flex-col mobile:h-[16.5rem] ipad:h-[25.5rem] text-[13px] justify-center">
            <div className="relative w-full h-fit flex flex-col items-center mobile:mt-4 ipad:mt-8">
              <div className="bg-blue-purple-orange-1 rounded-[100%] flex items-center overflow-hidden justify-center
                                mobile:w-[10rem] mobile:h-[10rem] ipad:w-[15rem] ipad:h-[15rem]">
                <img src={currentWorkshop.foto} className="w-full h-full" alt={currentWorkshop.pembicara} />
              </div>
              <div className="mt-[-1rem] px-2 bg-white rounded-md text-center shadow-md">
                <div className="w-full relative flex text-justify select-none">
                  <span
                    style={{
                      position: 'absolute',
                      color: 'transparent',
                      textShadow: `
                          0 0 0 #FFFFFF, 
                          1px 1px 0 #FFFFFF, 
                          -1px -1px 0 #FFFFFF, 
                          1px -1px 0 #FFFFFF, 
                          -1px 1px 0 #FFFFFF,
                          2px 2px 0 #FFFFFF,
                          -2px -2px 0 #FFFFFF,
                          2px -2px 0 #FFFFFF,
                          -2px 2px 0 #FFFFFF,
                          6px 6px 6px #cA4F14,
                          12px 12px 12px #cA4F14
                        `,
                      pointerEvents: 'none',
                      zIndex: -1
                    }}
                    className="font-airstrike font-italic font-bold inline-block
                                mobile:text-[1rem] ipad:text-[25px] desktop:text-[1rem]"
                  >
                    {currentWorkshop.pembicara}
                  </span>
                  <span
                    style={{
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                    }}
                    className="font-airstrike font-italic font-bold bg-blue-purple-orange-1 inline-block px-1
                                mobile:text-[1rem] ipad:text-[25px] desktop:text-[1rem]"
                  >
                    {currentWorkshop.pembicara}
                  </span>
                </div>
              </div>
              <div className="mt-3 h-[3rem] text-gray-5 text-center mobile:text-[12px] ipad:text-[1rem]">
                <div className="flex-col font-medium align-left my-auto bg-light px-4 py-2 rounded-xl opacity-70">
                  {currentWorkshop.background} <br />
                  {currentWorkshop.spesialis}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center
                          mobile:h-[16.5rem] mobile:mt-3 mobile:text-[13px]
                          ipad:mt-3 ipad:text-[20px] ipad:h-[23.5rem]">
            <div
              className="border-light border-[2px] rounded-xl p-4 h-full overflow-auto no-scrollbar"  
              ref={scrollRef}
              style={{ cursor: 'grab' }}
            >
              <div className="flex-col font-roboto">
                {currentWorkshop.informasiDiri}
                <div className="mt-4">Tanggal: {currentWorkshop.tanggal}</div>
                <div>Jam: {currentWorkshop.jam}</div>
                <div>Tempat: {currentWorkshop.tempat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
