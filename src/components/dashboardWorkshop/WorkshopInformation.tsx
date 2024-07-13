import React from 'react';
import GradientLine from '@/assets/dashboardWorkshop/gradientLine.svg';
import WhatsAppLogo from '@/assets/dashboardWorkshop/whatsappLogo.svg'
import useDragScroll from '@/components/dashboardHome/useDragScroll'; 

interface HomeAndProfileProps {
  selectedCategory: 'Multimedia' | 'Robotika' | 'Internet of Things';
}

interface WorkshopInformationProps {
  title: string;
  content: string;
  materi: string;
  tempat: string;
  tanggal: string;
  pembicara: string;
  price: string;
  contact: string;
}

const HomeAndProfile: React.FC<HomeAndProfileProps> = ({ selectedCategory }) => {
  const workshopInformation: WorkshopInformationProps[] = [
    {
      title: 'Multimedia',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      materi: 'Coming Soon',
      tempat: 'Coming Soon',
      tanggal: 'Coming Soon',
      pembicara: 'Keanu Fortuna Taufan',
      price: 'Coming Soon',
      contact: 'Coming Soon',
    },
    {
      title: 'Robotika',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      materi: 'Coming Soon',
      tempat: 'Coming Soon',
      tanggal: 'Coming Soon',
      pembicara: 'Coming Soon',
      price: 'Coming Soon',
      contact: 'Coming Soon',
    },
    {
      title: 'Internet of Things',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      materi: 'Coming Soon',
      tempat: 'Coming Soon',
      tanggal: 'Coming Soon',
      pembicara: 'Coming Soon',
      price: 'Coming Soon',
      contact: 'Coming Soon',
    },
  ];

  const renderContent = (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => {
    const info = workshopInformation.find(item => item.title === category);
    if (!info) return null;

    const scrollRef = useDragScroll();
    
    return (
      <div className="text-light w-full h-full">
        <div 
          ref={scrollRef}
          className="w-full bg-gray-5 h-[85%] overflow-hidden custom-scroll no-scrollbar rounded-[1rem] justify-center px-6 py-6 items-center" 
          style={{ cursor: 'grab' }}>
          <div className="text-justify font-airstrike text-[26px]">{info.title}</div>
          <img src={GradientLine} className="w-full" alt="Gradient Line" />
          <div className="text-[13px] text-justify">
            <div className="mt-2">{info.content}</div>
            <div className="mt-4">Materi: {info.materi}</div>
            <div>Tempat: {info.tempat}</div>
            <div>Tanggal: {info.tanggal}</div>
            <div>Pembicara: {info.pembicara}</div>
            <div>Price: {info.price}</div>
          </div>
        </div>
        <div className="h-[2%]"></div>
        <div className="w-full py-[8px] h-[13%] bg-gray-5 rounded-[0.5rem] font-fredoka justify-center items-center flex">
          <img src={WhatsAppLogo}></img>
          <div className="ml-4">{info.contact}</div>
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
