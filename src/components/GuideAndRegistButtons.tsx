import React from 'react';

const GuideAndRegistButtons: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-5 select-none">
      <button className="desktop:w-[10%] mobile:w-[15%] relative inline-block overflow-hidden mobile:px-[1.5px] mobile:py-[1.5px] mobile:mx-[0.5rem] desktop:mx-[1rem] desktop:px-[2.5px] desktop:py-[2.5px]">
        <div className="absolute inset-0 p-1 bg-orange-grad mobile:rounded-md desktop:rounded-md"></div>
        <div className="relative w-full h-full bg-orange-primary-5 flex items-center justify-center mobile:rounded-md desktop:rounded-md">
          <p className="font-fredoka font-medium tracking-wide text-orange-primary-3 mobile:px-[0.8px] mobile:py-[0.8px] mobile:text-[8px] desktop:text-[16px] desktop:px-[1rem] desktop:py-[1px]">
            Guide Book
          </p>
        </div>
      </button>
      <button className="desktop:w-[10%] mobile:w-[15%] relative inline-block overflow-hidden mobile:px-[1.5px] mobile:py-[1.5px] mobile:mx-[0.5rem] desktop:mx-[1rem] desktop:px-[2.5px] desktop:py-[2.5px]">
        <div className="absolute inset-0 p-1 bg-orange-primary-5 mobile:rounded-md desktop:rounded-md"></div>
        <div className="relative bg-orange-grad flex items-center justify-center mobile:rounded-md desktop:rounded-md">
          <p className="font-fredoka font-medium tracking-wide text-orange-primary-5 mobile:px-[0.8px] mobile:py-[0.8px] mobile:text-[8px] desktop:text-[16px] desktop:px-[1rem] desktop:py-[1px]">
            Regist
          </p>
        </div>
      </button>
    </div>
  );
};

export default GuideAndRegistButtons;