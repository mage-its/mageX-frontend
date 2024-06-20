import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Announcements from '../components/dashboardHome/Announcements'
import HomeAndProfile from '../components/dashboardHome/HomeAndProfile'
import Calendar from '../components/dashboardHome/Calendar'

const Workshop: React.FC = () => {
  return (
    <main className="bg-black">
      <div
      className="relative mx-[2rem] rounded-[4rem] min-w-screen min-h-screen overflow-hidden
                 mobile:bg-blue-purple-orange-2
                 ipad:bg-blue-purple-orange-1
                 dekstop:bg-blue-purple-orange-1
      ">
        <HomeAndProfile />
        <Announcements />
        <div className="absolute bottom-[7rem]">
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

export default Workshop;