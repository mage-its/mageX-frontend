import React from 'react';
import { format } from 'date-fns';
import CalendarLogo from '@/assets/dashboardHome/alternateCalendarLogo.svg'

const DateWithSuperscript: React.FC<{ date: string }> = ({ date }) => {
    // Split the date string into parts before and after "21th"
    const [before, after] = date.split('th');

    return (
        <div className="">
            <span className="">
                {before}
                  <sup>th</sup>
                {after}
            </span>
        </div>
    );
};

const App = () => {
  const today = new Date();
  const dayName = format(today, 'EEEE');
  const mdy = format(today, 'MMMM do, yyyy');

  return (
  <div className="bg-transparent_black h-full  text-light font-fredoka flex p-[1rem]
                  mobile:mx-6 mobile:mt-6 mobile:rounded-[1rem]
                  ipad:mx-[8rem] ipad:mt-6 ipad:rounded-[2rem]">
    <div className="w-[50%]">
      <div className="text-[35px] h-[50%] font-medium flex items-bottom">
        {dayName}
      </div>
      <div className="text-[15px] h-[50%] flex items-center">
        <DateWithSuperscript date={mdy}></DateWithSuperscript>
      </div>
    </div>
    <div className="w-[50%] flex h-full items-center">
      <img src={CalendarLogo} className="w-[4rem] h-[4rem] ml-auto"></img>
    </div>
  </div>
);
};

export default App;