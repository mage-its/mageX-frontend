import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Announcements from '../components/dashboardHome/Announcements'
import HomeAndProfile from '../components/dashboardHome/HomeAndProfile'
import Calendar from '../components/dashboardHome/Calendar'
import Summary from '../components/dashboardHome/Summary'

const dashboardHome: React.FC = () => {
  return (
    <main className="bg-black">
      <div
      className="relative mx-[2rem] rounded-[2rem] min-w-screen min-h-screen overflow-hidden py-4 px-6
                 grid grid-rows-16 grid-cols-13 gap-3
                 mobile:bg-blue-purple-orange-2
                 ipad:bg-blue-purple-orange-1
                 dekstop:bg-blue-purple-orange-1
      ">
        <div className="bg-white row-span-full col-span-2">Navbar</div>
        <div className="bg-black col-span-11">
          <HomeAndProfile />
        </div>
        <div className="bg-white row-span-3 col-span-8">Countdown</div>
        <div className="bg-white row-span-9 col-span-3 overflow-hidden">
          <Announcements />
        </div>
        <div className="bg-white row-span-12 col-span-4">
          <Summary />
        </div>
        <div className="bg-white row-span-6 col-span-4">Competitions</div>
        <div className="bg-white row-span-6 col-span-4">Workshop</div>
        <div className="bg-black opacity-[80%] rounded-[3rem] row-span-6 col-span-3">
          <React.StrictMode>
            <StyledEngineProvider injectFirst>
              <Calendar />
            </StyledEngineProvider>
          </React.StrictMode>
        </div>
        {/* <HomeAndProfile />
        <Announcements />
        <div className="">
          <React.StrictMode>
            <StyledEngineProvider injectFirst>
              <Calendar />
            </StyledEngineProvider>
          </React.StrictMode>
        </div> */}
      </div>
    </main>
  );
}

export default dashboardHome;