import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Announcements from '../components/dashboardHome/Announcements'
import HomeAndProfile from '../components/dashboardHome/HomeAndProfile'
import Calendar from '../components/dashboardHome/Calendar'
import Summary from '../components/dashboardHome/Summary'
import Countdown from '../components/dashboardHome/Countdown'

const dashboardHome: React.FC = () => {
  return (
    <main className="bg-black">
      <div
      className="relative mx-[10vw] rounded-[2rem] min-w-screen min-h-screen max-h-screen overflow-hidden py-4 px-6
                 grid grid-rows-12 grid-cols-14 gap-[1vw]
                 mobile:bg-blue-purple-orange-2
                 ipad:bg-blue-purple-orange-1
                 dekstop:bg-blue-purple-orange-1
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
        <div className="bg-dark row-span-4 col-span-5 rounded-[2rem] text-light">
          Competition
        </div>
        <div className="bg-orange-primary-1 row-span-4 col-span-5 rounded-[2rem]">
          Workshop
        </div>
        <div className="bg-transparent_black rounded-[2rem] row-span-4 col-span-3">
          <React.StrictMode>
            <StyledEngineProvider injectFirst>
              <Calendar />
            </StyledEngineProvider>
          </React.StrictMode>
        </div>
      </div>
    </main>
  );
}

export default dashboardHome;