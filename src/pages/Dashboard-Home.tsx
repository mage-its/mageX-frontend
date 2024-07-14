import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import SideBar from "@/components/DashboardSideBar";
import Announcements from "@/components/dashboardHome/Announcements";
import HomeAndProfile from "@/components/dashboardHome/HomeAndProfile";
import Calendar from "@/components/dashboardHome/Calendar";
import AlternateCalendar from "@/components/dashboardHome/AlternateCalendar";
import Summary from "@/components/dashboardHome/Summary";
import Countdown from "@/components/dashboardHome/Countdown";
import Competition from "@/components/dashboardHome/Competition";
import Workshop from "@/components/dashboardHome/Workshop";
import { useUserData } from "@/services/users";

const DashboardHome: React.FC = () => {
  const { data: user } = useUserData();
  if (!user?.is_logged_in) {
    window.location.href = "https://api.mage-its.id/users/login";
  }
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
          className="relative py-4 px-6 grid grid-rows-12 grid-cols-13 gap-[1vw]
                    mobile:hidden ipad:hidden lg:grid"
        >
          <div className="col-span-13 row-span-1 justify-center my-auto">
            <HomeAndProfile />
          </div>
          <div className="row-span-3 col-span-10 overflow-hidden">
            <Countdown />
          </div>
          <div className="row-span-7 col-span-3 overflow-hidden">
            <Announcements />
          </div>
          <div className="row-span-8 col-span-5">
            <Summary />
          </div>
          <div className="bg-transparent_black row-span-4 col-span-5 rounded-[2rem] overflow-hidden text-light">
            <Competition />
          </div>
          <div className="bg-transparent_black row-span-4 col-span-5 rounded-[2rem] overflow-hidden text-light">
            <Workshop />
          </div>
          <div className="bg-transparent_black rounded-[2rem] row-span-4 col-span-3 select-none">
            <React.StrictMode>
              <StyledEngineProvider injectFirst>
                <Calendar />
              </StyledEngineProvider>
            </React.StrictMode>
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
          <div className="w-full h-[7rem]">
            <AlternateCalendar />
          </div>
          <div className="w-full h-[18rem]">
            <Countdown />
          </div>
          <div className="w-full mobile:h-[30rem] ipad:h-[40rem]">
            <Summary />
          </div>
          <div className="w-full mobile:h-[25rem] ipad:h-[25rem]">
            <Competition />
          </div>
          <div className="w-full mobile:h-[25rem] ipad:h-[25rem]">
            <Workshop />
          </div>
          <div className="w-full mobile:h-[30rem] ipad:h-[40rem] mb-[4rem]">
            <Announcements />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
