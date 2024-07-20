import React from "react";
import SideBar from "@/components/DashboardSideBar";
import WorkshopAndProfile from "@/components/dashboardWorkshop/WorkshopAndProfile";
import WhiteLine from "@/assets/dashboardWorkshop/whiteLine.svg";
import WorkshopInformation from "@/components/dashboardWorkshop/WorkshopInformation";
import PersonalInformation from "@/components/dashboardWorkshop/PersonalInformation";
import RegistrationAndVerification from "@/components/dashboardWorkshop/RegistrationAndVerification";
import { useLocation } from "react-router-dom";

import {
  Workshop,
  Multimedia,
  Robotics,
  InternetOfThings,
} from "@/constant/dashboardWorkshop";

const DashboardHome: React.FC = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const workshopPath: { [key: string]: Workshop } = {
    "/dashboard/workshop/multimedia": Multimedia,
    "/dashboard/workshop/robotics": Robotics,
    "/dashboard/workshop/iot": InternetOfThings,
  };

  const x: Workshop = workshopPath[currentRoute];

  return (
    <main className="bg-black">
      {/* lg Display */}
      <div
        className="flex overflow-hidden min-w-screen min-h-screen max-h-screen
                        mobile:bg-blue-purple-orange-2 mobile:hidden 
                        ipad:bg-blue-purple-orange-1 ipad:hidden
                        dekstop:bg-blue-purple-orange-1 lg:flex"
      >
        <SideBar />
        <div
          className="relative py-6 px-6 grid grid-rows-18 grid-cols-10 gap-[1rem] w-full
                      mobile:hidden ipad:hidden lg:grid"
        >
          <div className="col-span-10 row-span-1">
            <WorkshopAndProfile currentWorkshop={x} />
          </div>
          <div className="col-span-10 row-span-1 my-auto">
            <img src={WhiteLine} className="w-full" alt="White Line" />
          </div>
          <div className="col-span-7 row-span-8 pl-[1rem] ">
            <PersonalInformation currentWorkshop={x} />
          </div>
          <div className="col-span-3 row-span-8 pr-[1rem] ">
            <WorkshopInformation currentWorkshop={x} />
          </div>
          <div className="col-span-10 row-span-8 px-[1rem]">
            <RegistrationAndVerification currentWorkshop={x} />
          </div>
        </div>
      </div>

      {/* Mobile and iPad Display */}
      <div
        className="relative min-w-screen min-h-screen max-w-screen overflow-hidden
                    mobile:bg-blue-purple-orange-2 mobile:block
                    ipad:bg-blue-purple-orange-2 ipad:block
                    dekstop:bg-blue-purple-orange-1 lg:hidden
        "
      >
        <div className="z-[20] fixed top-0 left-0 w-full h-[4.2rem]">
          <SideBar />
        </div>
        <div className="h-[4.2rem]"></div>
        <div className="z-[10]">
          <div className="w-full mobile:h-[30rem] ipad:h-[40rem] mt-6">
            <WorkshopInformation currentWorkshop={x} />
          </div>
          <div className="w-full mobile:h-[40rem] ipad:h-[56rem] mt-6">
            <PersonalInformation currentWorkshop={x} />
          </div>
          <div className="w-full mobile:h-[22rem] ipad:h-[30rem] mt-6 mb-[4rem]">
            <RegistrationAndVerification currentWorkshop={x} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
