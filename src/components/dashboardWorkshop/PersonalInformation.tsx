import React from 'react';
import PersonalLogo from '@/assets/dashboardWorkshop/personalLogo.svg';
import useDragScroll from '@/components/dashboardHome/useDragScroll'; 
import WhiteLine2 from '@/assets/dashboardWorkshop/whiteLine2.svg'
import PemateriMultimedia from '@/assets/dashboardWorkshop/pemateriMultimedia.png'
import Furina from '@/assets/dashboardHome/Furina_3.jpg'
import Firefly from '@/assets/dashboardWorkshop/firefly.jpg'

interface HomeAndProfileProps {
  selectedCategory: 'Multimedia' | 'Robotika' | 'Internet of Things';
}

interface WorkshopInformationProps {
  title: string;
  content: string;
  background: string;
  spesialis: string;
  tanggal: string;
  jam: string;
  tempat: string;
  pembicara: string;
  foto: string;
}

const HomeAndProfile: React.FC<HomeAndProfileProps> = ({ selectedCategory }) => {
  const workshopInformation: WorkshopInformationProps[] = [
    {
      title: 'Multimedia',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      background: 'Coming Soon',
      spesialis: 'Coming Soon',
      tanggal: 'Coming Soon',
      jam: 'Coming Soon',
      tempat: 'Coming Soon',
      pembicara: 'Keanu Fortuna Taufan',
      foto: PemateriMultimedia,
    },
    {
      title: 'Robotika',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      background: 'Coming Soon',
      spesialis: 'Coming Soon',
      tanggal: 'Coming Soon',
      jam: 'Coming Soon',
      tempat: 'Coming Soon',
      pembicara: 'Furina de Fontaine',
      foto: Furina,
    },
    {
      title: 'Internet of Things',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      background: 'Coming Soon',
      spesialis: 'Coming Soon',
      tanggal: 'Coming Soon',
      jam: 'Coming Soon',
      tempat: 'Coming Soon',
      pembicara: 'Firefly',
      foto: Firefly,
    },
  ];

  const renderContent = (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => {
    const info = workshopInformation.find(item => item.title === category);
    if (!info) return null;

    const scrollRef = useDragScroll();
    
    return (
      <div className="text-light font-fredoka bg-transparent_black rounded-[1rem] w-full h-full overflow-hidden">
        <div className="bg-gray-5 px-8 py-2 h-fit flex rounded-t-[1rem] items-center">
            <img src={PersonalLogo}></img>
            <div className="text-medium text-[20px] ml-4">
                Personal Information
            </div>
        </div>
        <div
            ref={scrollRef}
            className="flex overflow-hidden no-scrollbar h-[80%] custom-scroll"
            style={{ cursor: 'grab' }}>
            
            <div className="flex-col w-[50%] h-full pl-16 pr-2 py-8 text-[13px]">
                {info.content}
                <div className="mt-4"> Tanggal : {info.tanggal} </div>
                <div> Jam : {info.jam} </div>
                <div> Tempat : {info.tempat} </div>
            </div>
            <div className="flex-col w-[50%] h-full pl-4 py-8 text-[13px]">
                <div className="flex-col justify-center items-center h-full">
                    <div className="relative w-full h-fit flex flex-col items-center">
                        <div className="bg-blue-purple-orange-1 rounded-[100%] w-[10rem] h-[10rem] flex items-center overflow-hidden justify-center">
                            <img src={info.foto} className='w-full h-full'></img>
                            <div className="text-[13px] font-light h-[3rem] text-white text-center absolute right-20 bottom-12">
                                <div className="flex h-full">
                                    <img src={WhiteLine2} className="h-full"></img>
                                    <div className="ml-[4px] flex-col my-auto">  
                                            {info.background} <br/>
                                            {info.spesialis}              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[-1rem] p-2 bg-white rounded-md text-center shadow-md">
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
                                            mobile:text-[1rem] ipad:text-[23px] desktop:text-[1rem]" 
                                >
                                    {info.pembicara}
                                </span>
                                <span
                                    style={{
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                    }}
                                    className="font-airstrike font-italic font-bold bg-blue-purple-orange-1 inline-block px-1
                                            mobile:text-[1rem] ipad:text-[23px] desktop:text-[1rem]"
                                >
                                    {info.pembicara}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="select-none h-full">
      {renderContent(selectedCategory)}
    </div>
  );
};

export default HomeAndProfile;
