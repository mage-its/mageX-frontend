import React from "react";
import { useUserData } from "@/services/users";
import Logo from "@/assets/dashboardHome/homeLogo.svg";
import ProfilePicture from "@/assets/dashboardHome/profilePicture.svg";

const HomeAndProfile: React.FC = () => {
  const { data, error, isLoading } = useUserData();

  if (isLoading)
    return <div className="font-fredoka text-light">Loading...</div>;
  if (error)
    return (
      <div className="font-fredoka text-light">Error loading user data</div>
    );

  return (
    <div className="w-full h-full justify-center items-center flex select-none">
      <div className="mr-auto my-auto items-center flex">
        <img src={Logo} className="mr-[8px]" alt="Logo" />
        <div className="font-fredoka text-light">Dashboard</div>
      </div>
      <div className="ml-auto my-auto flex items-center">
        <div className="font-fredoka text-light">{data?.nama}</div>
        <img
          src={ProfilePicture}
          className="ml-[8px] w-[2.5rem] rounded-[1rem] border-white border-[1.5px]"
          alt="User"
        />
      </div>
    </div>
  );
};

export default HomeAndProfile;
