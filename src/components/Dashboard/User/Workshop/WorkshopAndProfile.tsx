import React from 'react';
import { useUserData } from '@/services/users';
import Logo from "@/assets/dashboardWorkshop/workshopLogo.svg";
import RightSign from "@/assets/dashboardWorkshop/rightSign.svg";
import ProfilePicture from "@/assets/dashboardHome/profilePicture.svg";
import { Workshop } from "@/constant/dashboardWorkshop";

interface WorkshopAndProfileProps {
  currentWorkshop: Workshop;
}

const WorkshopAndProfile: React.FC<WorkshopAndProfileProps> = ({ currentWorkshop }) => {
  const { data, error, isLoading } = useUserData();

  if (isLoading) return <div className="font-fredoka text-light">Loading...</div>;
  if (error) return <div className="font-fredoka text-light">Error loading user data</div>;

  return (
    <div>
      <div className="w-full h-full justify-center items-center flex select-none">
        <div className="mr-auto my-auto items-center flex">
          <p className="flex font-fredoka text-light">
            <img src={Logo} className="" alt="Logo" />
            <span className='opacity-70 ml-[12px] mr-[8px]'>
              Workshop
            </span>
            <img src={RightSign} className="" alt="Right Sign" />
            <span className='ml-[8px]'>
              {currentWorkshop.title}
            </span>
          </p>
        </div>
        <div className="ml-auto my-auto flex items-center">
          <div className="font-fredoka text-light">{data?.nama}</div>
          <img src={ProfilePicture} className="ml-[8px] w-[2.5rem] rounded-[1rem] border-white border-[1.5px]" alt="User" />
        </div>
      </div>
    </div>
  );
};

export default WorkshopAndProfile;
