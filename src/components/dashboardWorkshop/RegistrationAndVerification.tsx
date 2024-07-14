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
  link: string;
}

const HomeAndProfile: React.FC<HomeAndProfileProps> = ({ selectedCategory }) => {
  const workshopInformation: WorkshopInformationProps[] = [
    {
      title: 'Multimedia',
      link: "#"
    },
    {
      title: 'Robotika',
      link: 'https://www.youtube.com/watch?v=U5VJ2RMwRAY',
    },
    {
      title: 'Internet of Things',
      link: '#',
    },
  ];

  const renderContent = (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => {
    const info = workshopInformation.find(item => item.title === category);
    if (!info) return null;

    const scrollRef = useDragScroll();
    
    return (
      <div className="text-light flex flex-col font-fredoka bg-transparent_black rounded-[1rem] h-full overflow-hidden
                      mobile:mx-6 mobile:mt-6
                      ipad:mx-[8rem] ipad:mt-6
                      desktop:mx-[0] desktop:mt-0">
        <div className="bg-gray-5 px-8 py-2 flex rounded-t-[1rem] items-center
                        mobile:h-[3rem] ipad:h-[5rem] desktop:h-fit">
          <img src={PersonalLogo}></img>
          <div className="text-medium
                          mobile:text-[20px] mobile:ml-4
                          ipad:text-[30px] ipad:ml-8
                          desktop:text-[20px] desktop:ml-4">
            Registration and Verification
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button 
              className="hover:translate-y-[-8px] rounded-[2rem] bg-blue-purple-orange-1
                         mobile:h-[3rem] mobile:w-[10rem] mobile:text-[1rem]
                         ipad:h-[6rem] ipad:w-[15rem] ipad:text-[1.5rem]
                         desktop:h-[3rem] desktop:w-[10rem] desktop:text-[1rem]"
              onClick={() => window.location.href = info.link}>
              Daftar Di Sini!
          </button>
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
