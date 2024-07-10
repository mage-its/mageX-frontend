import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Announcements from '@/components/dashboardHome/Announcements'
import HomeAndProfile from '@/components/dashboardHome/HomeAndProfile'
import Calendar from '@/components/dashboardHome/Calendar'
import AlternateCalendar from '@/components/dashboardHome/AlternateCalendar'
import Summary from '@/components/dashboardHome/Summary'
import Countdown from '@/components/dashboardHome/Countdown'
import Competition from '@/components/dashboardHome/Competition'
import Workshop from '@/components/dashboardHome/Workshop';

/*
Catatan:
1. Logo IoT Workshop perlu diperbaiki
2. Kalender
3. Drag constraint untuk workshop dan competition
*/

const dashboardHome: React.FC = () => {
  return (
    <main className="bg-black">
      {/* Desktop Display */}
      <div
      className="relative mx-[10vw] rounded-[2rem] min-w-screen min-h-screen max-h-screen overflow-hidden py-4 px-6
                 grid grid-rows-12 grid-cols-14 gap-[1vw]
                 mobile:bg-blue-purple-orange-2 mobile:hidden
                 ipad:bg-blue-purple-orange-1 ipad:hidden
                 dekstop:bg-blue-purple-orange-1 desktop:grid
      ">
        <div className="bg-white row-span-full col-span-1 h-full">
          Navbar
        </div>
        
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

      {/* Mobile and iPad Display */}
      <div
      className="relative min-w-screen min-h-screen max-w-screen overflow-hidden
                 mobile:bg-blue-purple-orange-2 mobile:block
                 ipad:bg-blue-purple-orange-2 ipad:block
                 dekstop:bg-blue-purple-orange-1 desktop:hidden
      ">
        <div className="bg-light text-dark w-full h-[3rem]">
          Navbar
        </div>
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
    </main>
  );
}

export default dashboardHome;