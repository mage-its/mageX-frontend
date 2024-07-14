import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SideBar from '@/components/DashboardSideBar';
import WorkshopAndProfile from '@/components/dashboardWorkshop/WorkshopAndProfile';
import WhiteLine from "@/assets/dashboardWorkshop/whiteLine.svg";
import CategoryButton from '@/components/dashboardWorkshop/CategoryButton';
import WorkshopInformation from '@/components/dashboardWorkshop/WorkshopInformation'
import PersonalInformation from "@/components/dashboardWorkshop/PersonalInformation"
import RegistrationAndVerification from "@/components/dashboardWorkshop/RegistrationAndVerification"

const queryClient = new QueryClient();

const DashboardHome: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Multimedia' | 'Robotika' | 'Internet of Things'>('Multimedia');

  return (
    <main className="bg-black">
      <QueryClientProvider client={queryClient}>
        {/* Desktop Display */}
        <div className="flex overflow-hidden min-w-screen min-h-screen max-h-screen
                        mobile:bg-blue-purple-orange-2 mobile:hidden 
                        ipad:bg-blue-purple-orange-1 ipad:hidden
                        dekstop:bg-blue-purple-orange-1 desktop:flex">
          <SideBar />
          <div
            className="relative py-6 px-12 grid grid-rows-18 grid-cols-10 gap-[1vw] w-full
                      mobile:hidden ipad:hidden desktop:grid">
            <div className="col-span-10 row-span-1">
              <WorkshopAndProfile selectedCategory={selectedCategory} />
            </div>
            <div className="col-span-10 row-span-1 my-auto">
              <img src={WhiteLine} className="w-full" alt="White Line"/>
            </div>
            <div className="col-span-7 row-span-2 pl-[1rem] pb-[1rem] ">
              <CategoryButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="col-span-3 row-span-12 px-[1rem] ">
              <WorkshopInformation selectedCategory={selectedCategory} />
            </div>
            <div className="col-span-7 row-span-10 pl-[1rem] ">
              <PersonalInformation selectedCategory={selectedCategory} />
            </div>
            <div className="col-span-10 row-span-4 px-[1rem]">
              <RegistrationAndVerification selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>

        {/* Mobile and iPad Display */}
        <div
          className="relative min-w-screen min-h-screen max-w-screen overflow-hidden
                    mobile:bg-blue-purple-orange-2 mobile:block
                    ipad:bg-blue-purple-orange-2 ipad:block
                    dekstop:bg-blue-purple-orange-1 desktop:hidden
        ">
          <div className="z-[20] fixed top-0 left-0 w-full h-[4.2rem]">
            <SideBar />
          </div>
          <div className="h-[4.2rem]"></div>
          <div className='z-[10]'>
            <div className="w-full h-[3rem]">
              <CategoryButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </div>
            <div className="w-full mobile:h-[30rem] ipad:h-[40rem] mt-6">
              <WorkshopInformation selectedCategory={selectedCategory} />
            </div>
            <div className="w-full mobile:h-[30rem] ipad:h-[40rem] mt-6">
              <PersonalInformation selectedCategory={selectedCategory} />
            </div>
            <div className="w-full mobile:h-[15rem] ipad:h-[20rem] mt-6 mb-[4rem]">
              <RegistrationAndVerification selectedCategory={selectedCategory} />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </main>
  );
}

export default DashboardHome;
