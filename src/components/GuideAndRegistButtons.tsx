import React from 'react';

const GuideAndRegistButtons: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-5 select-none">
    <button className="relative inline-block overflow-hidden mobile:w-[5rem] mobile:h-[1.5rem] mobile:px-[2px] mobile:py-[2px] mobile:mx-[0.5rem] ipad:w-[10rem] ipad:h-[2.5rem] ipad:px-[2.5px] ipad:py-[3px] ipad:mx-[1rem] desktop:w-[12rem] desktop:h-[3rem] desktop:px-[3px] desktop:py-[3px] desktop:mx-[1rem]">
      <div className="absolute inset-0 p-1 bg-orange-grad mobile:rounded-md ipad:rounded-lg desktop:rounded-lg"></div>
      <div className="relative w-full h-full bg-orange-primary-5 flex items-center justify-center mobile:rounded-md ipad:rounded-lg desktop:rounded-lg">
        <p className="font-fredoka font-medium tracking-wide text-orange-primary-3 mobile:px-[0.8px] mobile:py-[0.8px] mobile:text-[8px] ipad:text-[13px] ipad:px-[1px] ipad:py-[1px] desktop:text-[16px] desktop:px-[1px] desktop:py-[1px]">
          Guide Book
        </p>
      </div>
    </button>
    <button className="relative inline-block overflow-hidden mobile:w-[5rem] mobile:h-[1.5rem] mobile:px-[2px] mobile:py-[2px] mobile:mx-[0.5rem] ipad:w-[10rem] ipad:h-[2.5rem] ipad:px-[2.5px] ipad:py-[3px] ipad:mx-[1rem] desktop:w-[12rem] desktop:h-[3rem] desktop:px-[3px] desktop:py-[3px] desktop:mx-[1rem]">
      <div className="absolute inset-0 p-1 bg-orange-primary-5 mobile:rounded-md ipad:rounded-lg desktop:rounded-lg"></div>
      <div className="relative w-full h-full bg-orange-grad flex items-center justify-center mobile:rounded-md ipad:rounded-lg desktop:rounded-lg">
        <p className="font-fredoka font-medium tracking-wide text-orange-primary-5 mobile:px-[0.8px] mobile:py-[0.8px] mobile:text-[8px] ipad:text-[13px] ipad:px-[1px] ipad:py-[1px] desktop:text-[16px] desktop:px-[1px] desktop:py-[1px]">
          Regist
        </p>
      </div>
    </button>
  </div>
  );
};

export default GuideAndRegistButtons;